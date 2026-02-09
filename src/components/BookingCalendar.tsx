"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface BookingCalendarProps {
  selectedDate: Date | null;
  selectedTime: string;
  onDateSelect: (date: Date) => void;
  onTimeSelect: (time: string) => void;
}

const AVAILABLE_TIMES = [
  "08:00 AM",
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "01:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
];

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function BookingCalendar({
  selectedDate,
  selectedTime,
  onDateSelect,
  onTimeSelect,
}: BookingCalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    return { daysInMonth, startingDayOfWeek };
  };

  const isDateAvailable = (date: Date): boolean => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Not available if in the past
    if (date < today) return false;

    // Not available on Sundays
    if (date.getDay() === 0) return false;

    return true;
  };

  const isSameDay = (date1: Date | null, date2: Date): boolean => {
    if (!date1) return false;
    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    );
  };

  const handlePreviousMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1)
    );
  };

  const { daysInMonth, startingDayOfWeek } = getDaysInMonth(currentMonth);
  const monthName = currentMonth.toLocaleString("default", { month: "long" });
  const year = currentMonth.getFullYear();

  // Generate calendar days
  const calendarDays: (Date | null)[] = [];

  // Add empty cells for days before the first day of the month
  for (let i = 0; i < startingDayOfWeek; i++) {
    calendarDays.push(null);
  }

  // Add days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day)
    );
  }

  return (
    <div className="space-y-6">
      {/* Calendar Section */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <CalendarIcon className="w-5 h-5 text-green-600" />
          <h3 className="text-lg font-semibold text-gray-900">Select Date</h3>
        </div>

        {/* Month Navigation */}
        <div className="flex items-center justify-between mb-4">
          <Button
            variant="outline"
            size="sm"
            onClick={handlePreviousMonth}
            className="h-8 w-8 p-0"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <h4 className="text-base font-semibold text-gray-900">
            {monthName} {year}
          </h4>
          <Button
            variant="outline"
            size="sm"
            onClick={handleNextMonth}
            className="h-8 w-8 p-0"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Calendar Grid */}
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          {/* Day Headers */}
          <div className="grid grid-cols-7 gap-2 mb-2">
            {DAYS.map((day) => (
              <div
                key={day}
                className="text-center text-xs font-semibold text-gray-600"
              >
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Days */}
          <div className="grid grid-cols-7 gap-2">
            {calendarDays.map((date, index) => {
              if (!date) {
                return <div key={`empty-${index}`} className="aspect-square" />;
              }

              const available = isDateAvailable(date);
              const selected = isSameDay(selectedDate, date);

              return (
                <motion.button
                  key={date.toISOString()}
                  type="button"
                  onClick={() => available && onDateSelect(date)}
                  disabled={!available}
                  whileHover={available ? { scale: 1.05 } : {}}
                  whileTap={available ? { scale: 0.95 } : {}}
                  className={cn(
                    "aspect-square rounded-lg text-sm font-medium transition-all",
                    "flex items-center justify-center",
                    available
                      ? selected
                        ? "bg-green-600 text-white shadow-md"
                        : "bg-white border border-gray-200 text-gray-900 hover:border-green-600 hover:bg-green-50"
                      : "bg-gray-50 text-gray-300 cursor-not-allowed"
                  )}
                >
                  {date.getDate()}
                </motion.button>
              );
            })}
          </div>
        </div>

        <p className="text-xs text-gray-500 mt-2">
          * Available Monday - Saturday. Closed Sundays.
        </p>
      </div>

      {/* Time Selection */}
      {selectedDate && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <Clock className="w-5 h-5 text-green-600" />
            <h3 className="text-lg font-semibold text-gray-900">
              Select Time
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
            {AVAILABLE_TIMES.map((time) => (
              <motion.button
                key={time}
                type="button"
                onClick={() => onTimeSelect(time)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={cn(
                  "px-4 py-3 rounded-lg text-sm font-medium transition-all",
                  "border-2",
                  selectedTime === time
                    ? "border-green-600 bg-green-50 text-green-700"
                    : "border-gray-200 bg-white text-gray-900 hover:border-green-600 hover:bg-green-50"
                )}
              >
                {time}
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}
