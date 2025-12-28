"use client";

import React, { useState } from "react";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import BookingForm from "@/components/BookingForm";

interface BookingButtonProps {
  variant?: "primary" | "outline" | "secondary" | "accent" | "ghost" | "link" | "destructive";
  size?: "sm" | "default" | "lg" | "xl" | "icon";
  className?: string;
  children?: React.ReactNode;
}

export default function BookingButton({
  variant = "primary",
  size = "default",
  className = "",
  children,
}: BookingButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        variant={variant}
        size={size}
        className={className}
        onClick={() => setIsOpen(true)}
      >
        <Calendar className="w-4 h-4 mr-2" />
        {children || "Book Appointment"}
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gray-900">
              Book Your Appointment
            </DialogTitle>
          </DialogHeader>
          <BookingForm onClose={() => setIsOpen(false)} />
        </DialogContent>
      </Dialog>
    </>
  );
}
