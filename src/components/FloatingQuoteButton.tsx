"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import QuoteForm from "./QuoteForm";

export default function FloatingQuoteButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial scroll position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <Button
              size="lg"
              onClick={() => setIsDialogOpen(true)}
              className="shadow-2xl hover:shadow-3xl transition-shadow duration-300 group"
            >
              <FileText className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
              Get Free Quote
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">Request a Free Quote</DialogTitle>
            <DialogDescription>
              Fill out this quick form and we'll get back to you within 24 hours with a detailed quote.
            </DialogDescription>
          </DialogHeader>
          <QuoteForm onClose={() => setIsDialogOpen(false)} />
        </DialogContent>
      </Dialog>
    </>
  );
}
