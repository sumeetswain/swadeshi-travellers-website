"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useParams } from "next/navigation";
import axios from "axios";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { API_ENDPOINT, API_KEY } from "@/api/api";
import Reviews from "@/components/Reviews";
import WhyChooseUs from "@/components/WhyChooseUs";
import FAQs from "@/components/FAQs";

export default function TrekPage() {
  const [open, setOpen] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState("inclusions");

  const items = [
    {
      id: 1,
      title: "Day 1: Arrival & Trek Briefing",
      content: "Begin your journey with...",
    },
    {
      id: 2,
      title: "Day 2: Trek & Exploration",
      content: "Begin the trek early...",
    },
  ];
  const { slug } = useParams();
  //   console.log("Slug:", slug);
  const [data, setData] = React.useState([]);
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`${API_ENDPOINT}/event-details?slug=${slug}&api_key=${API_KEY}`)
        .then((res) => {
          setData(Object.values(res.data));
        });
    };
    fetchData();
  }, [slug]);

  // ================= UI =================
  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="w-full h-[45vh] relative overflow-hidden">
        <img
          src={data[0]?.cover_pic}
          alt="Trek Hero"
          className="w-full h-full object-cover"
        />
        {/* <img
          src={`url('${data[0]?.cover_pic}')`}
          alt="Trek Hero"
          className="w-full h-full object-cover"
        /> */}
        <div className="absolute inset-0 bg-opacity-30 flex items-end justify-start p-6 md:p-10">
          <h1 className="text-white text-4xl md:text-6xl font-bold">
            {data[0]?.name}
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-8xl mx-auto px-4 md:px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        {/* Left Content (70%) */}
        <div className="md:col-span-2 space-y-6">
          {/* Quick Info */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-5 bg-white rounded-2xl shadow">
            <div>
              <p className="text-gray-500 text-sm">Duration</p>
              <p className="font-semibold">
                {data[0]?.number_of_nights}N / {data[0]?.number_of_days}D
              </p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Difficulty</p>
              <p className="font-semibold">Moderate</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Pickup & Drop</p>
              <p className="font-semibold">{data[0]?.event_location}</p>
            </div>
          </div>

          {/* Itinerary + Inclusions Section */}
          <div className="flex flex-col lg:flex-row gap-12 pt-10">
            {/* Itinerary Section */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Itinerary</h2>

              <div className="w-full">
                <Accordion
                  type="single"
                  collapsible
                  className="w-full space-y-3"
                >
                  {data[0]?.addday?.map((day, index) => (
                    <AccordionItem
                      key={index}
                      value={day?.id.toString()}
                      className="border border-gray-200 rounded-lg px-4"
                    >
                      <AccordionTrigger
                        className="
                              font-inter
            flex items-start gap-3 text-left
            hover:no-underline
            py-4
            [&[data-state=open]]:border-none
          "
                      >
                        <div className="flex items-start w-full gap-3">
                          {/* Day pill */}
                          <span className="shrink-0 bg-black text-white text-sm font-semibold px-3 py-1 rounded-full">
                            Day {day?.daysnumber}
                          </span>

                          {/* Title */}
                          <div className="flex-1 text-left text-base font-medium text-gray-900 break-words">
                            {day?.name}
                          </div>
                        </div>
                      </AccordionTrigger>

                      <AccordionContent className="pt-2 pb-4 text-sm text-gray-700 leading-relaxed">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: day?.details,
                          }}
                        />
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>

            {/* Inclusion / Exclusion Section */}
            <div className="w-full lg:w-1/2">
              <Tabs
                defaultValue="inclusions"
                onValueChange={(v) => setActiveTab(v)}
                className="w-full"
              >
                <TabsList className="!bg-transparent p-0 gap-3 grid grid-cols-2 mb-6">
                  <TabsTrigger
                    value="inclusions"
                    className="data-[state=active]:bg-white data-[state=active]:shadow font-semibold py-3 rounded-lg"
                  >
                    Inclusions
                  </TabsTrigger>

                  <TabsTrigger
                    value="exclusions"
                    className="data-[state=active]:bg-white data-[state=active]:shadow font-semibold py-3 rounded-lg"
                  >
                    Exclusions
                  </TabsTrigger>
                </TabsList>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="space-y-3 text-base p-4 bg-white border rounded-xl"
                  >
                    {activeTab === "inclusions" && (
                      <TabsContent value="inclusions">
                        <div
                          className="text-sm sm:text-base"
                          dangerouslySetInnerHTML={{
                            __html: data[0]?.inclusions,
                          }}
                        />
                      </TabsContent>
                    )}

                    {activeTab === "exclusions" && (
                      <>
                        <TabsContent value="exclusions">
                          <div
                            className="text-sm sm:text-base"
                            dangerouslySetInnerHTML={{
                              __html: data[0]?.exclusions,
                            }}
                          />
                        </TabsContent>
                      </>
                    )}
                  </motion.div>
                </AnimatePresence>
              </Tabs>
            </div>
          </div>
        </div>

        {/* Right Side Sticky Section (30%) */}
        <div className="md:col-span-1">
          <div className="sticky top-4 space-y-5">
            {/* Price Box */}
            <div className="bg-white p-6 rounded-2xl shadow text-center">
              <p className="text-gray-500 line-through">
                ₹ {data[0]?.price_striked}
              </p>
              <p className="text-3xl font-bold text-green-600">
                ₹ {data[0]?.price}
              </p>
              <p className="text-gray-500 text-sm">per person (Excl. taxes)</p>
              <button className="w-full mt-4 bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition">
                Book Now
              </button>
            </div>

            {/* Callback Form */}
            <div className="bg-white p-6 rounded-2xl shadow space-y-4">
              <h3 className="font-bold text-xl">Request a Callback</h3>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border rounded-xl"
              />
              <input
                type="text"
                placeholder="10-digit Mobile Number"
                className="w-full p-3 border rounded-xl"
              />
              <input
                type="number"
                placeholder="Number of People"
                className="w-full p-3 border rounded-xl"
              />
              <textarea
                placeholder="Your Message (Optional)"
                className="w-full p-3 border rounded-xl"
                rows={3}
              ></textarea>
              <button className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition">
                Submit Inquiry
              </button>
            </div>
          </div>
        </div>
      </div>
      <Reviews />
      <WhyChooseUs />
      <FAQs />
    </div>
  );
}
