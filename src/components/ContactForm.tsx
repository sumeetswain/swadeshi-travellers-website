"use client";

import { API_ENDPOINT, API_KEY } from "@/api/api";
import axios from "axios";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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
    message: "Please select a preferred date",
  }),
  people: z.string(),
  departing_from: z.string().min(1, "Select departure city"),
  preferred_destination: z.string().min(1, "Select destination"),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const ContactForm = () => {
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

  const onSubmit = async (values: FormValues) => {
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
    } catch (error) {
      console.error("Form submit error:", error);
    } finally {
      setLoading(false);
    }
  };

  const inputBase =
    "w-full px-4 py-3 bg-green-50 border border-brand/60 rounded-lg outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition";

  return (
    <div className="w-full max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] my-12">
      <h1 className="text-2xl font-bold text-[#22aa22] mb-2 text-center">
        Contact Us
      </h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          {/* Name + Phone */}
          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="fullname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700">
                    Full Name
                  </FormLabel>
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
                  <FormLabel className="text-sm font-medium text-gray-700">
                    Phone
                  </FormLabel>
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

          {/* Date + Travellers */}
          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="text-sm font-medium text-gray-700">
                    Preferred Date
                  </FormLabel>
                  <FormControl>
                    <DatePicker
                      selected={field.value}
                      onChange={(d: Date | null) => field.onChange(d)}
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
                  <FormLabel className="text-sm font-medium text-gray-700">
                    Travellers
                  </FormLabel>
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
                <FormLabel className="text-sm font-medium text-gray-700">
                  Message
                </FormLabel>
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

          {/* Submit */}
          <button
            disabled={loading}
            className="w-full bg-gradient-to-r from-brand to-[#33cc33] text-black py-3 rounded-lg font-semibold hover:opacity-90 transition disabled:opacity-60"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>

          {success && (
            <p className="text-green-600 font-semibold text-center">
              ✅ Submitted successfully!
            </p>
          )}
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
