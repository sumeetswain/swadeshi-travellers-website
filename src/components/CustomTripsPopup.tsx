"use client";

import axios from "axios";
import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  name: z.string().min(1, "Name is required").max(191),
  phone_number: z.string().regex(/^\d{10}$/, "Enter a valid phone number"),
  email: z
    .string()
    .email("Enter a valid email")
    .max(191)
    .optional()
    .or(z.literal("")),
  start_date: z.date().optional(),
  no_of_days: z.string().optional(),
  no_of_adults: z.string().optional(),
  no_of_children: z.string().optional(),
  destination: z.string().max(50).optional(),
  comments: z.string().max(500).optional(),
});

type FormValues = z.infer<typeof formSchema>;

const formatDate = (date: Date) => date.toISOString().split("T")[0];

const parseOptionalNumber = (value?: string) => {
  if (!value?.trim()) return null;
  const num = Number(value);
  return Number.isNaN(num) ? null : num;
};

const CustomTripsPopup = ({ onClose }: { onClose?: () => void }) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone_number: "",
      email: "",
      start_date: undefined,
      no_of_days: "",
      no_of_adults: "",
      no_of_children: "0",
      destination: "",
      comments: "",
    },
  });

  const handleSubmit = async (values: FormValues) => {
    try {
      setLoading(true);
      setError(null);

      const payload = {
        name: values.name.trim(),
        phone_number: values.phone_number,
        email: values.email?.trim() || null,
        start_date: values.start_date ? formatDate(values.start_date) : null,
        no_of_days: parseOptionalNumber(values.no_of_days),
        no_of_adults: parseOptionalNumber(values.no_of_adults),
        no_of_children: parseOptionalNumber(values.no_of_children) ?? 0,
        destination: values.destination?.trim() || null,
        comments: values.comments?.trim() || null,
        reference_id: crypto.randomUUID(),
      };

      await axios.post("/api/trip-plan-request", payload);

      setSuccess(true);
      form.reset();
      setError(null);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(
          err.response?.data?.message ??
            "Something went wrong. Please try again.",
        );
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose?.();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  const inputBase =
    "w-full px-4 py-3 bg-green-50 border border-brand/60 rounded-lg outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition";

  const labelBase = "text-sm font-medium text-gray-700";

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-black/50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.96, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.96, opacity: 0 }}
        transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
        className="relative bg-white w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-2xl font-bold text-gray-500 hover:text-black"
        >
          &times;
        </button>

        <h1 className="text-2xl font-bold text-[#22aa22] text-center">
          Plan a Custom Trip
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Tell us about your dream trip and we&apos;ll craft a personalised
          itinerary for you.
        </p>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-5"
          >
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={labelBase}>Full Name</FormLabel>
                    <FormControl>
                      <input {...field} className={inputBase} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone_number"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={labelBase}>Phone</FormLabel>
                    <FormControl>
                      <div className="flex items-center bg-green-50 border border-brand/60 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-brand/20">
                        <span className="px-3 text-sm text-brand border-r border-brand/40">
                          +91
                        </span>
                        <input
                          value={field.value}
                          onChange={(e) => {
                            const value = e.target.value.replace(/\D/g, "");
                            if (value.length <= 10) field.onChange(value);
                          }}
                          className="w-full px-3 py-3 bg-transparent outline-none"
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={labelBase}>
                    Email{" "}
                    <span className="text-gray-400 font-normal">(optional)</span>
                  </FormLabel>
                  <FormControl>
                    <input {...field} type="email" className={inputBase} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="start_date"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={labelBase}>
                      Start Date{" "}
                      <span className="text-gray-400 font-normal">(optional)</span>
                    </FormLabel>
                    <FormControl>
                      <DatePicker
                        selected={field.value}
                        onChange={(d: Date | null) => field.onChange(d ?? undefined)}
                        minDate={new Date()}
                        placeholderText="Select date"
                        className={inputBase}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="no_of_days"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={labelBase}>
                      No. of Days{" "}
                      <span className="text-gray-400 font-normal">(optional)</span>
                    </FormLabel>
                    <FormControl>
                      <input
                        {...field}
                        type="number"
                        min={1}
                        className={inputBase}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="no_of_adults"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={labelBase}>
                      Adults{" "}
                      <span className="text-gray-400 font-normal">(optional)</span>
                    </FormLabel>
                    <FormControl>
                      <input
                        {...field}
                        type="number"
                        min={1}
                        className={inputBase}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="no_of_children"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={labelBase}>
                      Children{" "}
                      <span className="text-gray-400 font-normal">(optional)</span>
                    </FormLabel>
                    <FormControl>
                      <input
                        {...field}
                        type="number"
                        min={0}
                        className={inputBase}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="destination"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={labelBase}>
                    Destination{" "}
                    <span className="text-gray-400 font-normal">(optional)</span>
                  </FormLabel>
                  <FormControl>
                    <select {...field} className={inputBase}>
                      <option value="">Select destination</option>
                      <option>Ooty</option>
                      <option>Coorg</option>
                      <option>Wayanad</option>
                      <option>Kerala</option>
                      <option>Gokarna</option>
                      <option>Pondicherry</option>
                      <option>Hampi</option>
                      <option>Araku</option>
                      <option>Lonavala</option>
                      <option>Other</option>
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="comments"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={labelBase}>
                    Comments{" "}
                    <span className="text-gray-400 font-normal">(optional)</span>
                  </FormLabel>
                  <FormControl>
                    <textarea
                      {...field}
                      rows={4}
                      maxLength={500}
                      placeholder="Tell us about your preferences, budget, or special requests..."
                      className="w-full px-4 py-3 bg-green-50 border border-brand/60 rounded-lg outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-brand to-[#33cc33] text-black py-3 rounded-lg font-semibold hover:opacity-90 transition disabled:opacity-60"
            >
              {loading ? "Submitting..." : "Submit Request"}
            </button>

            {success && (
              <p className="text-green-600 font-semibold text-center">
                Submitted successfully! We&apos;ll get back to you soon.
              </p>
            )}

            {error && (
              <p className="text-red-600 font-semibold text-center">{error}</p>
            )}
          </form>
        </Form>
      </motion.div>
    </motion.div>
  );
};

export default CustomTripsPopup;
