// lib/analytics.ts
import { sendGAEvent } from "@next/third-parties/google";

export const trackEvent = (
  eventName: string,
  eventParams: Record<string, unknown>,
) => {
  // sendGAEvent sudah menangani pengecekan sisi klien secara internal
  // Hanya kirim ke Google Analytics jika aplikasi sudah di-deploy ke Production
  if (process.env.NODE_ENV === "production") {
    sendGAEvent("event", eventName, eventParams);
  } else {
    // Di mode dev, kita cukup melihat log-nya di console browser untuk memastikan kodenya bekerja
    console.log(`[GA4 Dev Log] Event: ${eventName}`, eventParams);
  }
};

// // lib/analytics.ts

// // 1. Definisikan tipe global untuk window.gtag tanpa menggunakan 'any'
// interface CustomWindow extends Window {
//   gtag?: (
//     command: 'event',
//     eventName: string,
//     eventParams?: Record<string, unknown>
//   ) => void;
// }

// export const trackEvent = (
//   eventName: string,
//   eventParams?: Record<string, unknown>
// ) => {
//   // 2. Cast window ke CustomWindow yang sudah aman secara tipe data
//   const customWindow = typeof window !== "undefined" ? (window as CustomWindow) : null;

//   if (customWindow && customWindow.gtag) {
//     customWindow.gtag("event", eventName, eventParams);
//   } else if (process.env.NODE_ENV === "development") {
//     console.log(`[GA4 Mock Event] ${eventName}`, eventParams);
//   }
// };
