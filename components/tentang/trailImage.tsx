"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

/**
 * TrailImage
 * -----------------------------------------------------------------------
 * Komponen decorative "image cursor trail". Ditaruh sebagai background di
 * dalam sebuah container ber-posisi relative yang berisi teks besar di atasnya.
 *
 * Cara pakai:
 *
 * <div className="relative overflow-hidden">
 *   <TrailImage images={["/trail/1.webp", "/trail/2.webp", ...]} />
 *   <h2 className="relative z-10 text-6xl font-bold">Judul Besar</h2>
 * </div>
 *
 * Catatan penting:
 * - Gambar sebaiknya sudah di-resize manual (mis. max 400x400px, format WebP)
 *   sebelum dimasukkan ke /public. Komponen ini memakai next/image dengan
 *   prop `unoptimized`, sehingga tetap dapat API width/height & priority dari
 *   Next.js TANPA memanggil Image Optimization API Vercel (0 kuota
 *   "transformation"). Gambar diserve langsung sebagai static asset.
 * - Komponen ini otomatis nonaktif di perangkat yang tidak punya "fine pointer"
 *   (mis. HP/tablet), karena efek ini murni cursor-dependent.
 */

type TrailImageProps = {
  /** Daftar path gambar (urutan round-robin sesuai array ini) */
  images: string[];
  /** Jarak minimum (px) pergerakan kursor sebelum gambar baru muncul */
  threshold?: number;
  /** Jumlah maksimum gambar yang boleh hidup bersamaan di DOM */
  maxVisible?: number;
  /** Lama (ms) satu gambar bertahan sebelum fade-out otomatis */
  duration?: number;
  /** Lama (ms) animasi masuk (scale+fade in) */
  enterDuration?: number;
  /** Lama (ms) animasi keluar (scale+fade out) */
  exitDuration?: number;
  /** Lebar tampil maksimum tiap gambar (px), tinggi menyesuaikan aspect ratio */
  maxDisplaySize?: number;
  className?: string;
};

type TrailItem = {
  id: number;
  src: string;
  x: number;
  y: number;
  width: number;
  height: number;
  exiting: boolean;
};

type ImageMeta = { width: number; height: number };

let uidCounter = 0;
const nextId = () => ++uidCounter;

export default function TrailImage({
  images,
  threshold = 60,
  maxVisible = 6,
  duration = 2000,
  enterDuration = 250,
  exitDuration = 300,
  maxDisplaySize = 180,
  className = "",
}: TrailImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const lastPosRef = useRef<{ x: number; y: number } | null>(null);
  const roundRobinRef = useRef(0);
  const metaCacheRef = useRef<Map<string, ImageMeta>>(new Map());
  const removeTimersRef = useRef<Map<number, ReturnType<typeof setTimeout>>>(
    new Map(),
  );
  const enabledRef = useRef(true);

  const [items, setItems] = useState<TrailItem[]>([]);

  // Preload semua gambar di awal: hangatkan cache browser + ambil aspect ratio asli.
  useEffect(() => {
    let cancelled = false;
    images.forEach((src) => {
      const img = new window.Image();
      img.src = src;
      img.onload = () => {
        if (cancelled) return;
        metaCacheRef.current.set(src, {
          width: img.naturalWidth || 1,
          height: img.naturalHeight || 1,
        });
      };
    });
    return () => {
      cancelled = true;
    };
  }, [images]);

  // Nonaktifkan efek di perangkat tanpa "fine pointer" (mis. touch-only).
  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia("(pointer: fine)");
    enabledRef.current = mq.matches;
    const handler = (e: MediaQueryListEvent) => {
      enabledRef.current = e.matches;
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Bersihkan semua timer saat unmount, mencegah setState setelah unmount.
  useEffect(() => {
    const timers = removeTimersRef.current;
    return () => {
      timers.forEach((t) => clearTimeout(t));
      timers.clear();
    };
  }, []);

  const scheduleRemoval = useCallback(
    (id: number, delay: number) => {
      const existing = removeTimersRef.current.get(id);
      if (existing) clearTimeout(existing);

      const timer = setTimeout(() => {
        // Tahap 1: tandai exiting -> memicu animasi keluar (CSS).
        setItems((prev) =>
          prev.map((it) => (it.id === id ? { ...it, exiting: true } : it)),
        );
        // Tahap 2: setelah animasi keluar selesai, unmount sepenuhnya dari DOM.
        const cleanupTimer = setTimeout(() => {
          setItems((prev) => prev.filter((it) => it.id !== id));
          removeTimersRef.current.delete(id);
        }, exitDuration);
        removeTimersRef.current.set(id, cleanupTimer);
      }, delay);

      removeTimersRef.current.set(id, timer);
    },
    [exitDuration],
  );

  const spawnAt = useCallback(
    (x: number, y: number) => {
      if (images.length === 0) return;

      const src = images[roundRobinRef.current % images.length];
      roundRobinRef.current += 1;

      const meta = metaCacheRef.current.get(src) ?? { width: 1, height: 1 };
      const ratio = meta.width / meta.height;
      let width = maxDisplaySize;
      let height = maxDisplaySize;
      if (ratio >= 1) {
        width = maxDisplaySize;
        height = maxDisplaySize / ratio;
      } else {
        height = maxDisplaySize;
        width = maxDisplaySize * ratio;
      }

      const id = nextId();
      const newItem: TrailItem = {
        id,
        src,
        x,
        y,
        width,
        height,
        exiting: false,
      };

      setItems((prev) => {
        const next = [...prev, newItem];
        // Safeguard: kalau melebihi maxVisible, paksa yang tertua fade-out lebih cepat.
        const overflow = next.length - maxVisible;
        if (overflow > 0) {
          const oldest = next.slice(0, overflow);
          oldest.forEach((it) => scheduleRemoval(it.id, 0));
        }
        return next;
      });

      scheduleRemoval(id, duration);
    },
    [images, maxDisplaySize, maxVisible, duration, scheduleRemoval],
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (!enabledRef.current || e.pointerType !== "mouse") return;

      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const last = lastPosRef.current;
      if (last) {
        const dx = x - last.x;
        const dy = y - last.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < threshold) return;
      }

      lastPosRef.current = { x, y };
      spawnAt(x, y);
    },
    [threshold, spawnAt],
  );

  const handlePointerLeave = useCallback(() => {
    lastPosRef.current = null;
  }, []);

  return (
    <div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={`absolute inset-0 z-0 overflow-hidden ${className}`}
    >
      {items.map((item) => (
        <Image
          key={item.id}
          src={item.src}
          alt=""
          aria-hidden="true"
          draggable={false}
          unoptimized
          loading="eager"
          width={Math.round(item.width)}
          height={Math.round(item.height)}
          className="pointer-events-none absolute select-none object-contain"
          style={{
            left: item.x,
            top: item.y,
            width: item.width,
            height: item.height,
            transform: "translate(-50%, -50%)",
            animation: item.exiting
              ? `trail-out ${exitDuration}ms ease-in forwards`
              : `trail-in ${enterDuration}ms ease-out forwards`,
          }}
        />
      ))}

      <style jsx>{`
        @keyframes trail-in {
          from {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.3);
          }
          to {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
        }
        @keyframes trail-out {
          from {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
          to {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.3);
          }
        }
      `}</style>
    </div>
  );
}
