"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface UcapanFeedbackDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  success: boolean;
  message: string;
}

export default function UcapanFeedbackDialog({
  open,
  onOpenChange,
  success,
  message,
}: UcapanFeedbackDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="text-center sm:text-left">
        <DialogHeader>
          <DialogTitle className="text-primary">
            {success ? "Ucapanmu Telah Diterima" : "Belum Bisa Diproses"}
          </DialogTitle>
          <DialogDescription className="pt-2 text-foreground/80">
            {message}
          </DialogDescription>
        </DialogHeader>
        <p className="text-xs italic text-muted-foreground pt-2 border-t border-border mt-2">
          &ldquo;Semangat Juang 45, Tetap Berbudaya&rdquo; — Muli Mekhanai
          Rajabasa
        </p>
      </DialogContent>
    </Dialog>
  );
}
