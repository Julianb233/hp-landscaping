"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import QuoteForm from "./QuoteForm";
import { FileText } from "lucide-react";

export default function QuoteFormModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button size="lg" onClick={() => setIsOpen(true)} className="group">
        <FileText className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
        Request Free Quote
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">Request a Free Quote</DialogTitle>
            <DialogDescription>
              Fill out this quick form and we'll get back to you within 24 hours with a detailed quote.
            </DialogDescription>
          </DialogHeader>
          <QuoteForm onClose={() => setIsOpen(false)} />
        </DialogContent>
      </Dialog>
    </>
  );
}
