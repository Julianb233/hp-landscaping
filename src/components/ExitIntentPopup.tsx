"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import QuoteForm from "./QuoteForm";

export default function ExitIntentPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Check if user has already seen the popup in this session
    const hasSeenPopup = sessionStorage.getItem("exitIntentShown");
    if (hasSeenPopup) {
      setHasShown(true);
      return;
    }

    const handleMouseLeave = (e: MouseEvent) => {
      // Trigger when mouse leaves the top of the viewport
      if (e.clientY <= 0 && !hasShown) {
        setIsOpen(true);
        setHasShown(true);
        sessionStorage.setItem("exitIntentShown", "true");
      }
    };

    // Add delay before activating exit intent
    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave);
    }, 5000); // Wait 5 seconds before activating

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [hasShown]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-6 h-6 text-yellow-500" />
            <DialogTitle className="text-2xl">Wait! Before You Go...</DialogTitle>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
            <p className="text-yellow-800 font-semibold">
              Get a FREE Quote + 10% Off Your First Service!
            </p>
            <p className="text-yellow-700 text-sm mt-1">
              Limited time offer for new commercial clients. Fill out our quick form below.
            </p>
          </div>
        </DialogHeader>
        <QuoteForm onClose={() => setIsOpen(false)} />
      </DialogContent>
    </Dialog>
  );
}
