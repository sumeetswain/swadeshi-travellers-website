"use client";

import { API_ENDPOINT, API_KEY } from "@/api/api";
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
  fullname: z.string().min(1, "Full name is required"),
  phone: z.string().regex(/^\d{10}$/, "Enter a valid phone number"),
  date: z.date({
    required_error: "Please select a preferred date",
  }),
  people: z.string(),
  departing_from: z.string().min(1, "Select departure city"),
  preferred_destination: z.string().min(1, "Select destination"),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const CallbackPopup = ({ onClose }: { onClose?: () => void }) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      phone: "",
      date: undefined,
      people: "1",
      departing_from: "",
      preferred_destination: "",
      message: "",
    },
  });

  const handleSubmit = async (values: FormValues) => {
    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("fullname", values.fullname);
      formData.append("mobile", values.phone);
      formData.append("departing_from", values.departing_from);
      formData.append("preferred_destination", values.preferred_destination);
      formData.append("no_of_guests", values.people);
      formData.append("preferred_start_date", values.date?.toISOString() || "");
      formData.append("message", values.message || "");
      formData.append("api_key", API_KEY);
      formData.append("is_expecting_call_back", "yes");
      formData.append("from_url", window.location.href);

      await axios.post(`${API_ENDPOINT}/website/save-event-enquiry/`, formData);

      setSuccess(true);
      form.reset();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // lock scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // ESC close
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
      className="fixed inset-0 z-[9999] bg-black/50 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
    >
      {/* Modal */}
      <motion.div
        initial={{ scale: 0.96, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.96, opacity: 0 }}
        transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
        className="relative bg-white w-full max-w-lg rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-2xl font-bold text-gray-500 hover:text-black"
        >
          &times;
        </button>

        <h1 className="text-2xl font-bold text-[#22aa22] text-center">
          Request a Callback
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Leave your details and our travel specialist will call you back.
        </p>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-5"
          >
            {/* Row 1 */}
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="fullname"
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
                name="phone"
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

            {/* Row 2 */}
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={labelBase}>Preferred Date</FormLabel>
                    <FormControl>
                      <DatePicker
                        selected={field.value}
                        onChange={(d) => field.onChange(d)}
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
                name="people"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={labelBase}>Travellers</FormLabel>
                    <FormControl>
                      <select {...field} className={inputBase}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5+</option>
                      </select>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            {/* Departing From + Destination */}
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="departing_from"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-gray-700">
                      Departing From
                    </FormLabel>
                    <FormControl>
                      <select {...field} className={inputBase}>
                        <option value="">Select city</option>
                        <option>Pune</option>
                        <option>Chennai</option>
                        <option>Hyderabad</option>
                        <option>Bangalore</option>
                      </select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="preferred_destination"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-gray-700">
                      Preferred Destination
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
                      </select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            {/* Message */}
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={labelBase}>Message</FormLabel>
                  <FormControl>
                    <textarea
                      {...field}
                      rows={4}
                      className="w-full px-4 py-3 bg-green-50 border border-brand/60 rounded-lg outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Button */}
            <button
              disabled={loading}
              className="w-full bg-gradient-to-r from-brand to-[#33cc33] text-black py-3 rounded-lg font-semibold hover:opacity-90 transition disabled:opacity-60"
            >
              {loading ? "Submitting..." : "Request Callback"}
            </button>

            {success && (
              <p className="text-green-600 font-semibold text-center">
                ✅ Submitted successfully!
              </p>
            )}
          </form>
        </Form>
      </motion.div>
    </motion.div>
  );
};

export default CallbackPopup;
