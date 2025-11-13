import Image from "next/image";
import axios from "axios";
import { API_KEY, API_ENDPOINT } from "@/api/api";

import { z } from "zod";
import { toast } from "@/components/ui/use-toast";

const formSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  number: z.string().regex(/^\d{10}$/, "Number must be exactly 10 digits"),
  no_of_guests: z
    .string()
    .refine((val) => !isNaN(Number(val)) && val.trim() !== "", {
      message: "Please enter a valid number of no_of_guests.",
    }),
  preferred_start_date: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "Invalid date format",
  }),
  message: z.string(),
});
import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useContactWithoutEvent } from "@/hooks/use-contact-without-event";
import DatePicker from "react-datepicker";
import { useRouter } from "next/router";
import { Assistant, Roboto, Inter_Tight } from "next/font/google";

const assistant = Assistant({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-assistant",
});
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-roboto",
});
const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["200", "300", "700"], // Extra Light
  variable: "--font-inter-tight",
});
export default function ConnectForm({ handleClose }: any) {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      number: "",
      no_of_guests: "",
      preferred_start_date: "",
      message: "",
    },
  });
  // const [isFirstTime, setIsFirstTime] = useState(false);
  // useEffect(() => {
  //   // Check if the modal has been shown before
  //   const hasSeenModal = localStorage.getItem("hasSeenEnquiryModal");
  //   if (!hasSeenModal) {
  //     setIsFirstTime(true); // Show the modal for first-time users
  //   }
  // }, []);

  const contactUsWithoutEventMutation = useContactWithoutEvent();
  const handleSubmit = (data: {
    name: string;
    number: string;
    email: string;
    no_of_guests: string;
    preferred_start_date: string;
    message: string;
  }) => {
    const formData = new FormData();

    formData.append("fullname", data.name);
    formData.append("mobile", data.number);
    formData.append("email", data.email);
    formData.append("no_of_guests", data.no_of_guests);
    formData.append("preferred_start_date", data.preferred_start_date);
    formData.append("message", data.message);
    formData.append("api_key", API_KEY);
    formData.append("is_expecting_call_back", "yes");
    formData.append("from_url", window.location.href);
    contactUsWithoutEventMutation.mutate(formData, {
      onSuccess: () => {
        if (typeof window !== "undefined") {
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({ event: "form_submit" });
        }
        if (handleClose) handleClose();
        localStorage.setItem("hasSeenEnquiryDialog", "true");
        form.reset();
        toast({
          title: "We have received your response.",
          description: (
            <div>
              <p>
                Our trip advisor will reach out to you shortly to assist you.
              </p>
              <p>Thank you</p>
            </div>
          ),
        });
        router.push("/thank-you");
      },

      onError: (error) => {
        console.error("Form submission failed", error);
      },
    });
    return axios.post(`${API_ENDPOINT}/website/save-event-enquiry/`, formData);
  };
  return (
    <div
      className={`${interTight.variable} ${roboto.variable} font-sans  flex lg:flex-row flex-col `}
    >
      <div className="lg:w-1/2 lg:h-[30rem] gap-4 flex flex-col items-center justify-center ">
        <Image
          alt=""
          height={100}
          width={100}
          className="hidden lg:block md:w-[80rem] w-[20rem]"
          src="/modal.svg"
        />
        <div className=" lg:text-2xl text-brand font-bold">
          Where do you want to go next?
        </div>
        <div className=" lg:text-lg font-semibold text-gray-500 ">
          Make your move, fill out your details now!
        </div>
      </div>
      <div className=" lg:w-1/2 lg:mr-2 p-3 rounded-xl text-start  bg-purple-100">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-4 lg:space-y-6"
          >
            {/* Name */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Name</FormLabel>
                  <FormControl>
                    <Input
                      className="bg-white border-brand"
                      placeholder="Enter Your Name"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Email */}

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Email</FormLabel>
                  <FormControl>
                    <Input
                      className="bg-white border-brand"
                      placeholder="Enter Your Email Id"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Number */}
            <FormField
              control={form.control}
              name="number"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input
                      className="bg-white border-brand"
                      placeholder="Enter Your 10 digit number"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* No. of Travellers */}
            <div className="flex ">
              <FormField
                control={form.control}
                name="no_of_guests"
                render={({ field }) => (
                  <FormItem className="mr-2 w-1/2">
                    <FormLabel>No. of Travellers</FormLabel>
                    <FormControl>
                      <Input
                        className="bg-white border-brand"
                        placeholder="Enter the number of Travellers"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription></FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Date */}

              <FormField
                control={form.control}
                name="preferred_start_date"
                render={({ field }) => (
                  <FormItem className="mt-1">
                    <FormLabel className="block">Date</FormLabel>
                    <FormControl className="w-full">
                      <DatePicker
                        selected={field.value ? new Date(field.value) : null}
                        onChange={(date: Date | null) =>
                          field.onChange(date ? date.toISOString() : "")
                        }
                        minDate={new Date()} // Prevents past dates
                        dateFormat="dd/MM/yyyy"
                        className="bg-white border text-sm mt-1 border-brand p-2 w-full rounded-md"
                        placeholderText="Select a date"
                      />
                    </FormControl>
                    <FormDescription></FormDescription>
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
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Input
                      className="bg-white border-brand"
                      placeholder="Write your message"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full bg-brand text-success font-semibold hover:bg-purple-300 text-white"
            >
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
