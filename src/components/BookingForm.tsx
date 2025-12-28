"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Building2,
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
  Calendar,
  Briefcase,
} from "lucide-react";
import BookingCalendar from "@/components/BookingCalendar";
import { SERVICES } from "@/lib/constants";

interface BookingFormData {
  // Step 1: Service Selection
  selectedService: string;
  serviceType: "consultation" | "estimate" | "service" | "";

  // Step 2: Date & Time
  preferredDate: Date | null;
  preferredTime: string;
  alternateDate: Date | null;
  alternateTime: string;

  // Step 3: Contact Information
  contactName: string;
  email: string;
  phone: string;
  propertyAddress: string;
  propertyType: "residential" | "commercial" | "hoa" | "";

  // Step 4: Additional Details
  additionalNotes: string;
  hearAboutUs: string;
}

interface FormErrors {
  [key: string]: string;
}

const steps = [
  {
    id: 1,
    title: "Service",
    icon: Briefcase,
    description: "What do you need?",
  },
  {
    id: 2,
    title: "Schedule",
    icon: Calendar,
    description: "When works for you?",
  },
  {
    id: 3,
    title: "Contact",
    icon: User,
    description: "Your information",
  },
  {
    id: 4,
    title: "Confirm",
    icon: CheckCircle2,
    description: "Review & submit",
  },
];

export default function BookingForm({ onClose }: { onClose?: () => void }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState<BookingFormData>({
    selectedService: "",
    serviceType: "",
    preferredDate: null,
    preferredTime: "",
    alternateDate: null,
    alternateTime: "",
    contactName: "",
    email: "",
    phone: "",
    propertyAddress: "",
    propertyType: "",
    additionalNotes: "",
    hearAboutUs: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const validateStep = (step: number): boolean => {
    const newErrors: FormErrors = {};

    switch (step) {
      case 1:
        if (!formData.selectedService) {
          newErrors.selectedService = "Please select a service";
        }
        if (!formData.serviceType) {
          newErrors.serviceType = "Please select appointment type";
        }
        break;

      case 2:
        if (!formData.preferredDate) {
          newErrors.preferredDate = "Please select a preferred date";
        }
        if (!formData.preferredTime) {
          newErrors.preferredTime = "Please select a preferred time";
        }
        break;

      case 3:
        if (!formData.contactName.trim()) {
          newErrors.contactName = "Name is required";
        }
        if (!formData.email.trim()) {
          newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          newErrors.email = "Email is invalid";
        }
        if (!formData.phone.trim()) {
          newErrors.phone = "Phone number is required";
        } else if (!/^[\d\s\-\+\(\)]{10,}$/.test(formData.phone)) {
          newErrors.phone = "Phone number is invalid";
        }
        if (!formData.propertyAddress.trim()) {
          newErrors.propertyAddress = "Property address is required";
        }
        if (!formData.propertyType) {
          newErrors.propertyType = "Property type is required";
        }
        break;

      case 4:
        // Final validation before submission
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 4));
    }
  };

  const handlePrevious = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = async () => {
    if (!validateStep(4)) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit booking");
      }

      setIsSuccess(true);
    } catch (error) {
      console.error("Submission error:", error);
      setErrors({ submit: "Failed to submit booking. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-12 h-12 text-green-600" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-3">
          Appointment Requested!
        </h2>
        <p className="text-lg text-gray-600 mb-2">
          Thank you for scheduling with HP Landscaping.
        </p>
        <p className="text-gray-500 mb-8">
          We will confirm your appointment within 24 hours via email or phone.
        </p>
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 max-w-md mx-auto mb-6">
          <h3 className="font-semibold text-green-900 mb-2">
            Your Appointment Details
          </h3>
          <div className="text-sm text-green-800 space-y-1">
            <p>
              <strong>Date:</strong>{" "}
              {formData.preferredDate?.toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <p>
              <strong>Time:</strong> {formData.preferredTime}
            </p>
            <p>
              <strong>Service:</strong>{" "}
              {SERVICES.find((s) => s.id === formData.selectedService)?.name}
            </p>
          </div>
        </div>
        <Button onClick={onClose} size="lg">
          Close
        </Button>
      </motion.div>
    );
  }

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Progress Steps */}
      <div className="mb-8">
        <div className="flex justify-between items-center">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = currentStep === step.id;
            const isCompleted = currentStep > step.id;

            return (
              <div key={step.id} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-1">
                  <div
                    className={cn(
                      "w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300",
                      isCompleted
                        ? "bg-green-600 text-white"
                        : isActive
                        ? "bg-green-600 text-white scale-110 shadow-lg"
                        : "bg-gray-200 text-gray-500"
                    )}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="mt-2 text-center hidden sm:block">
                    <p
                      className={cn(
                        "text-xs font-semibold",
                        isActive ? "text-green-700" : "text-gray-500"
                      )}
                    >
                      {step.title}
                    </p>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={cn(
                      "h-1 flex-1 mx-2 transition-all duration-300",
                      isCompleted ? "bg-green-600" : "bg-gray-200"
                    )}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Form Steps */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="min-h-[500px]"
        >
          {/* Step 1: Service Selection */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div>
                <Label className="text-gray-700 text-base mb-3 block">
                  Select Service <span className="text-red-500">*</span>
                </Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {SERVICES.map((service) => (
                    <button
                      key={service.id}
                      type="button"
                      onClick={() =>
                        setFormData({ ...formData, selectedService: service.id })
                      }
                      className={cn(
                        "p-4 border-2 rounded-lg text-left transition-all duration-200",
                        formData.selectedService === service.id
                          ? "border-green-600 bg-green-50"
                          : "border-gray-200 hover:border-green-300"
                      )}
                    >
                      <h4 className="font-semibold text-gray-900">
                        {service.name}
                      </h4>
                      <p className="text-sm text-gray-600 mt-1">
                        {service.shortDescription}
                      </p>
                    </button>
                  ))}
                </div>
                {errors.selectedService && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.selectedService}
                  </p>
                )}
              </div>

              <div>
                <Label className="text-gray-700 text-base mb-3 block">
                  Appointment Type <span className="text-red-500">*</span>
                </Label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {[
                    {
                      value: "consultation",
                      label: "Free Consultation",
                      description: "Discuss your needs",
                    },
                    {
                      value: "estimate",
                      label: "Free Estimate",
                      description: "Get pricing details",
                    },
                    {
                      value: "service",
                      label: "Schedule Service",
                      description: "Book maintenance",
                    },
                  ].map((type) => (
                    <button
                      key={type.value}
                      type="button"
                      onClick={() =>
                        setFormData({
                          ...formData,
                          serviceType: type.value as BookingFormData["serviceType"],
                        })
                      }
                      className={cn(
                        "p-4 border-2 rounded-lg transition-all duration-200",
                        formData.serviceType === type.value
                          ? "border-green-600 bg-green-50"
                          : "border-gray-200 hover:border-green-300"
                      )}
                    >
                      <h4 className="font-semibold text-gray-900">
                        {type.label}
                      </h4>
                      <p className="text-sm text-gray-600 mt-1">
                        {type.description}
                      </p>
                    </button>
                  ))}
                </div>
                {errors.serviceType && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.serviceType}
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Step 2: Date & Time */}
          {currentStep === 2 && (
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Preferred Appointment Time
                </h3>
                <BookingCalendar
                  selectedDate={formData.preferredDate}
                  selectedTime={formData.preferredTime}
                  onDateSelect={(date) =>
                    setFormData({ ...formData, preferredDate: date })
                  }
                  onTimeSelect={(time) =>
                    setFormData({ ...formData, preferredTime: time })
                  }
                />
                {(errors.preferredDate || errors.preferredTime) && (
                  <p className="text-red-500 text-sm mt-2">
                    Please select both date and time
                  </p>
                )}
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Alternate Time (Optional)
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Select an alternate time in case your preferred slot is not
                  available
                </p>
                <BookingCalendar
                  selectedDate={formData.alternateDate}
                  selectedTime={formData.alternateTime}
                  onDateSelect={(date) =>
                    setFormData({ ...formData, alternateDate: date })
                  }
                  onTimeSelect={(time) =>
                    setFormData({ ...formData, alternateTime: time })
                  }
                />
              </div>
            </div>
          )}

          {/* Step 3: Contact Information */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div>
                <Label htmlFor="contactName" className="text-gray-700">
                  Full Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="contactName"
                  value={formData.contactName}
                  onChange={(e) =>
                    setFormData({ ...formData, contactName: e.target.value })
                  }
                  placeholder="John Smith"
                  className="mt-1"
                />
                {errors.contactName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.contactName}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email" className="text-gray-700">
                    Email Address <span className="text-red-500">*</span>
                  </Label>
                  <div className="relative mt-1">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="john@example.com"
                      className="pl-10"
                    />
                  </div>
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="phone" className="text-gray-700">
                    Phone Number <span className="text-red-500">*</span>
                  </Label>
                  <div className="relative mt-1">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="(619) 555-0123"
                      className="pl-10"
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>
              </div>

              <div>
                <Label htmlFor="propertyAddress" className="text-gray-700">
                  Property Address <span className="text-red-500">*</span>
                </Label>
                <div className="relative mt-1">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    id="propertyAddress"
                    value={formData.propertyAddress}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        propertyAddress: e.target.value,
                      })
                    }
                    placeholder="123 Main Street, San Diego, CA 92101"
                    className="pl-10"
                  />
                </div>
                {errors.propertyAddress && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.propertyAddress}
                  </p>
                )}
              </div>

              <div>
                <Label className="text-gray-700">
                  Property Type <span className="text-red-500">*</span>
                </Label>
                <div className="grid grid-cols-3 gap-3 mt-2">
                  {[
                    { value: "residential", label: "Residential", icon: Building2 },
                    { value: "commercial", label: "Commercial", icon: Briefcase },
                    { value: "hoa", label: "HOA/Multi-Family", icon: Building2 },
                  ].map((type) => {
                    const Icon = type.icon;
                    return (
                      <button
                        key={type.value}
                        type="button"
                        onClick={() =>
                          setFormData({
                            ...formData,
                            propertyType: type.value as BookingFormData["propertyType"],
                          })
                        }
                        className={cn(
                          "p-3 border-2 rounded-lg transition-all duration-200",
                          "flex flex-col items-center gap-2",
                          formData.propertyType === type.value
                            ? "border-green-600 bg-green-50 text-green-700"
                            : "border-gray-200 hover:border-green-300"
                        )}
                      >
                        <Icon className="w-5 h-5" />
                        <span className="text-sm font-medium">{type.label}</span>
                      </button>
                    );
                  })}
                </div>
                {errors.propertyType && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.propertyType}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="additionalNotes" className="text-gray-700">
                  Additional Notes (Optional)
                </Label>
                <Textarea
                  id="additionalNotes"
                  value={formData.additionalNotes}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      additionalNotes: e.target.value,
                    })
                  }
                  placeholder="Any specific requirements or details we should know..."
                  rows={4}
                  className="mt-1"
                />
              </div>
            </div>
          )}

          {/* Step 4: Review & Confirm */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Review Your Appointment
                </h3>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-1">
                      Service
                    </h4>
                    <p className="text-gray-900">
                      {
                        SERVICES.find((s) => s.id === formData.selectedService)
                          ?.name
                      }
                    </p>
                    <p className="text-sm text-gray-600">
                      {formData.serviceType === "consultation" &&
                        "Free Consultation"}
                      {formData.serviceType === "estimate" && "Free Estimate"}
                      {formData.serviceType === "service" && "Schedule Service"}
                    </p>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-1">
                      Preferred Date & Time
                    </h4>
                    <p className="text-gray-900">
                      {formData.preferredDate?.toLocaleDateString("en-US", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                    <p className="text-gray-600">{formData.preferredTime}</p>
                    {formData.alternateDate && formData.alternateTime && (
                      <div className="mt-2">
                        <p className="text-sm text-gray-600">
                          Alternate: {formData.alternateDate.toLocaleDateString()}{" "}
                          at {formData.alternateTime}
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-1">
                      Contact Information
                    </h4>
                    <p className="text-gray-900">{formData.contactName}</p>
                    <p className="text-gray-600">{formData.email}</p>
                    <p className="text-gray-600">{formData.phone}</p>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-1">
                      Property
                    </h4>
                    <p className="text-gray-900">{formData.propertyAddress}</p>
                    <p className="text-sm text-gray-600 capitalize">
                      {formData.propertyType}
                    </p>
                  </div>

                  {formData.additionalNotes && (
                    <div className="border-t border-gray-200 pt-4">
                      <h4 className="text-sm font-semibold text-gray-700 mb-1">
                        Additional Notes
                      </h4>
                      <p className="text-gray-600">{formData.additionalNotes}</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-sm text-green-800">
                  <strong>Note:</strong> This appointment request is subject to
                  confirmation. We will contact you within 24 hours to confirm your
                  appointment or suggest alternative times if needed.
                </p>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
        <Button
          variant="outline"
          onClick={handlePrevious}
          disabled={currentStep === 1}
        >
          <ChevronLeft className="w-4 h-4 mr-2" />
          Previous
        </Button>

        <div className="text-sm text-gray-500">
          Step {currentStep} of {steps.length}
        </div>

        {currentStep < 4 ? (
          <Button onClick={handleNext}>
            Next
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        ) : (
          <Button onClick={handleSubmit} disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Confirm Appointment"}
          </Button>
        )}
      </div>

      {errors.submit && (
        <p className="text-red-500 text-sm mt-4 text-center">{errors.submit}</p>
      )}
    </div>
  );
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}
