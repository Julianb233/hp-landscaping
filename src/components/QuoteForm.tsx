"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Building2,
  MapPin,
  Settings,
  Phone,
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
  Mail,
  User,
  Calendar,
  DollarSign,
} from "lucide-react";
import { services } from "@/content/services";

interface FormData {
  // Step 1: Company Info
  companyName: string;
  contactName: string;
  email: string;
  phone: string;

  // Step 2: Property Details
  propertyAddress: string;
  propertyType: "commercial" | "residential" | "industrial" | "municipal" | "";
  propertySize: string;

  // Step 3: Services Needed
  selectedServices: string[];
  projectType: "one-time" | "recurring" | "both" | "";
  timeline: string;
  budget: string;

  // Step 4: Additional Details
  projectDescription: string;
  preferredContactMethod: "email" | "phone" | "either" | "";
  preferredContactTime: string;
}

interface FormErrors {
  [key: string]: string;
}

const steps = [
  {
    id: 1,
    title: "Company Information",
    icon: Building2,
    description: "Tell us about your business",
  },
  {
    id: 2,
    title: "Property Details",
    icon: MapPin,
    description: "Where is the work needed?",
  },
  {
    id: 3,
    title: "Services Needed",
    icon: Settings,
    description: "What services do you need?",
  },
  {
    id: 4,
    title: "Contact & Timeline",
    icon: Phone,
    description: "How can we reach you?",
  },
];

export default function QuoteForm({ onClose }: { onClose?: () => void }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    propertyAddress: "",
    propertyType: "",
    propertySize: "",
    selectedServices: [],
    projectType: "",
    timeline: "",
    budget: "",
    projectDescription: "",
    preferredContactMethod: "",
    preferredContactTime: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const validateStep = (step: number): boolean => {
    const newErrors: FormErrors = {};

    switch (step) {
      case 1:
        if (!formData.companyName.trim()) {
          newErrors.companyName = "Company name is required";
        }
        if (!formData.contactName.trim()) {
          newErrors.contactName = "Contact name is required";
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
        break;

      case 2:
        if (!formData.propertyAddress.trim()) {
          newErrors.propertyAddress = "Property address is required";
        }
        if (!formData.propertyType) {
          newErrors.propertyType = "Property type is required";
        }
        if (!formData.propertySize.trim()) {
          newErrors.propertySize = "Property size is required";
        }
        break;

      case 3:
        if (formData.selectedServices.length === 0) {
          newErrors.selectedServices = "Please select at least one service";
        }
        if (!formData.projectType) {
          newErrors.projectType = "Project type is required";
        }
        break;

      case 4:
        if (!formData.projectDescription.trim()) {
          newErrors.projectDescription = "Project description is required";
        }
        if (!formData.preferredContactMethod) {
          newErrors.preferredContactMethod = "Preferred contact method is required";
        }
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

  const handleServiceToggle = (serviceId: string) => {
    setFormData((prev) => ({
      ...prev,
      selectedServices: prev.selectedServices.includes(serviceId)
        ? prev.selectedServices.filter((id) => id !== serviceId)
        : [...prev.selectedServices, serviceId],
    }));
  };

  const handleSubmit = async () => {
    if (!validateStep(4)) return;

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // In production, send to your backend API
      console.log("Form submitted:", formData);

      setIsSuccess(true);
    } catch (error) {
      console.error("Submission error:", error);
      setErrors({ submit: "Failed to submit. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-8"
      >
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-10 h-10 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Quote Request Submitted!
        </h3>
        <p className="text-gray-600 mb-6">
          Thank you for your interest in HP Landscaping. We will review your request and contact you within 24 hours.
        </p>
        <Button onClick={onClose}>Close</Button>
      </motion.div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Progress Steps */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = currentStep === step.id;
            const isCompleted = currentStep > step.id;

            return (
              <div key={step.id} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-1">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isCompleted
                        ? "bg-green-600 text-white"
                        : isActive
                        ? "bg-green-600 text-white scale-110 shadow-lg"
                        : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    {isCompleted ? (
                      <CheckCircle2 className="w-6 h-6" />
                    ) : (
                      <Icon className="w-6 h-6" />
                    )}
                  </div>
                  <div className="mt-2 text-center hidden sm:block">
                    <p
                      className={`text-xs font-semibold ${
                        isActive ? "text-green-700" : "text-gray-500"
                      }`}
                    >
                      {step.title}
                    </p>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`h-1 flex-1 mx-2 transition-all duration-300 ${
                      isCompleted ? "bg-green-600" : "bg-gray-200"
                    }`}
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
          className="min-h-[400px]"
        >
          {/* Step 1: Company Info */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div>
                <Label htmlFor="companyName" className="text-gray-700">
                  Company Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="companyName"
                  value={formData.companyName}
                  onChange={(e) =>
                    setFormData({ ...formData, companyName: e.target.value })
                  }
                  placeholder="ABC Corporation"
                  className="mt-1"
                />
                {errors.companyName && (
                  <p className="text-red-500 text-sm mt-1">{errors.companyName}</p>
                )}
              </div>

              <div>
                <Label htmlFor="contactName" className="text-gray-700">
                  Contact Person <span className="text-red-500">*</span>
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
                  <p className="text-red-500 text-sm mt-1">{errors.contactName}</p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email" className="text-gray-700">
                    Email Address <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="john@company.com"
                    className="mt-1"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="phone" className="text-gray-700">
                    Phone Number <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="(619) 555-0123"
                    className="mt-1"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Property Details */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div>
                <Label htmlFor="propertyAddress" className="text-gray-700">
                  Property Address <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="propertyAddress"
                  value={formData.propertyAddress}
                  onChange={(e) =>
                    setFormData({ ...formData, propertyAddress: e.target.value })
                  }
                  placeholder="123 Main Street, San Diego, CA 92101"
                  className="mt-1"
                />
                {errors.propertyAddress && (
                  <p className="text-red-500 text-sm mt-1">{errors.propertyAddress}</p>
                )}
              </div>

              <div>
                <Label className="text-gray-700">
                  Property Type <span className="text-red-500">*</span>
                </Label>
                <div className="grid grid-cols-2 gap-3 mt-2">
                  {[
                    { value: "commercial", label: "Commercial" },
                    { value: "residential", label: "Residential" },
                    { value: "industrial", label: "Industrial" },
                    { value: "municipal", label: "Municipal" },
                  ].map((type) => (
                    <button
                      key={type.value}
                      type="button"
                      onClick={() =>
                        setFormData({
                          ...formData,
                          propertyType: type.value as FormData["propertyType"],
                        })
                      }
                      className={`p-4 border-2 rounded-lg transition-all duration-200 ${
                        formData.propertyType === type.value
                          ? "border-green-600 bg-green-50 text-green-700"
                          : "border-gray-200 hover:border-green-300"
                      }`}
                    >
                      {type.label}
                    </button>
                  ))}
                </div>
                {errors.propertyType && (
                  <p className="text-red-500 text-sm mt-1">{errors.propertyType}</p>
                )}
              </div>

              <div>
                <Label htmlFor="propertySize" className="text-gray-700">
                  Property Size (approx.) <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="propertySize"
                  value={formData.propertySize}
                  onChange={(e) =>
                    setFormData({ ...formData, propertySize: e.target.value })
                  }
                  placeholder="e.g., 5,000 sq ft or 1 acre"
                  className="mt-1"
                />
                {errors.propertySize && (
                  <p className="text-red-500 text-sm mt-1">{errors.propertySize}</p>
                )}
              </div>
            </div>
          )}

          {/* Step 3: Services Needed */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div>
                <Label className="text-gray-700">
                  Select Services <span className="text-red-500">*</span>
                </Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                  {services.map((service) => (
                    <button
                      key={service.id}
                      type="button"
                      onClick={() => handleServiceToggle(service.id)}
                      className={`p-4 border-2 rounded-lg text-left transition-all duration-200 ${
                        formData.selectedServices.includes(service.id)
                          ? "border-green-600 bg-green-50 text-green-700"
                          : "border-gray-200 hover:border-green-300"
                      }`}
                    >
                      <h4 className="font-semibold">{service.shortTitle}</h4>
                      <p className="text-sm text-gray-600 mt-1">{service.description.slice(0, 80)}...</p>
                    </button>
                  ))}
                </div>
                {errors.selectedServices && (
                  <p className="text-red-500 text-sm mt-1">{errors.selectedServices}</p>
                )}
              </div>

              <div>
                <Label className="text-gray-700">
                  Project Type <span className="text-red-500">*</span>
                </Label>
                <div className="grid grid-cols-3 gap-3 mt-2">
                  {[
                    { value: "one-time", label: "One-time Project" },
                    { value: "recurring", label: "Recurring Service" },
                    { value: "both", label: "Both" },
                  ].map((type) => (
                    <button
                      key={type.value}
                      type="button"
                      onClick={() =>
                        setFormData({
                          ...formData,
                          projectType: type.value as FormData["projectType"],
                        })
                      }
                      className={`p-3 border-2 rounded-lg transition-all duration-200 ${
                        formData.projectType === type.value
                          ? "border-green-600 bg-green-50 text-green-700"
                          : "border-gray-200 hover:border-green-300"
                      }`}
                    >
                      {type.label}
                    </button>
                  ))}
                </div>
                {errors.projectType && (
                  <p className="text-red-500 text-sm mt-1">{errors.projectType}</p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="timeline" className="text-gray-700">
                    Desired Timeline
                  </Label>
                  <Input
                    id="timeline"
                    value={formData.timeline}
                    onChange={(e) =>
                      setFormData({ ...formData, timeline: e.target.value })
                    }
                    placeholder="e.g., ASAP, Next 2 months"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="budget" className="text-gray-700">
                    Estimated Budget
                  </Label>
                  <Input
                    id="budget"
                    value={formData.budget}
                    onChange={(e) =>
                      setFormData({ ...formData, budget: e.target.value })
                    }
                    placeholder="e.g., $5,000 - $10,000"
                    className="mt-1"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Contact & Timeline */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <div>
                <Label htmlFor="projectDescription" className="text-gray-700">
                  Project Description <span className="text-red-500">*</span>
                </Label>
                <Textarea
                  id="projectDescription"
                  value={formData.projectDescription}
                  onChange={(e) =>
                    setFormData({ ...formData, projectDescription: e.target.value })
                  }
                  placeholder="Tell us about your project needs, goals, and any specific requirements..."
                  rows={5}
                  className="mt-1"
                />
                {errors.projectDescription && (
                  <p className="text-red-500 text-sm mt-1">{errors.projectDescription}</p>
                )}
              </div>

              <div>
                <Label className="text-gray-700">
                  Preferred Contact Method <span className="text-red-500">*</span>
                </Label>
                <div className="grid grid-cols-3 gap-3 mt-2">
                  {[
                    { value: "email", label: "Email", icon: Mail },
                    { value: "phone", label: "Phone", icon: Phone },
                    { value: "either", label: "Either", icon: User },
                  ].map((method) => {
                    const Icon = method.icon;
                    return (
                      <button
                        key={method.value}
                        type="button"
                        onClick={() =>
                          setFormData({
                            ...formData,
                            preferredContactMethod: method.value as FormData["preferredContactMethod"],
                          })
                        }
                        className={`p-3 border-2 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 ${
                          formData.preferredContactMethod === method.value
                            ? "border-green-600 bg-green-50 text-green-700"
                            : "border-gray-200 hover:border-green-300"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        {method.label}
                      </button>
                    );
                  })}
                </div>
                {errors.preferredContactMethod && (
                  <p className="text-red-500 text-sm mt-1">{errors.preferredContactMethod}</p>
                )}
              </div>

              <div>
                <Label htmlFor="preferredContactTime" className="text-gray-700">
                  Preferred Contact Time
                </Label>
                <Input
                  id="preferredContactTime"
                  value={formData.preferredContactTime}
                  onChange={(e) =>
                    setFormData({ ...formData, preferredContactTime: e.target.value })
                  }
                  placeholder="e.g., Weekday mornings, After 5pm"
                  className="mt-1"
                />
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
            {isSubmitting ? "Submitting..." : "Submit Request"}
          </Button>
        )}
      </div>

      {errors.submit && (
        <p className="text-red-500 text-sm mt-4 text-center">{errors.submit}</p>
      )}
    </div>
  );
}
