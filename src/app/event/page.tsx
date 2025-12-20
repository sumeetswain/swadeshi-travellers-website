"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="w-full h-[45vh] relative overflow-hidden">
        <img
          src="/kerala/kerala.png"
          alt="Trek Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-opacity-30 flex items-end justify-start p-6 md:p-10">
          <h1 className="text-white text-4xl md:text-6xl font-bold">
            Vasota Fort Trek
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
              <p className="font-semibold">1N / 1D</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Difficulty</p>
              <p className="font-semibold">Moderate</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Pickup & Drop</p>
              <p className="font-semibold">Location A</p>
            </div>
          </div>

          {/* Itinerary + Inclusions Section */}
          <div className="flex flex-col lg:flex-row gap-12 pt-10">
            {/* Itinerary Section */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Itinerary</h2>

              <div className="space-y-4">
                {items.map((item) => {
                  const isOpen = open === item.id;

                  return (
                    <div
                      key={item.id}
                      className={`rounded-2xl border bg-white overflow-hidden transition-colors ${
                        isOpen ? "border-green-500" : "border-gray-200"
                      }`}
                    >
                      <button
                        onClick={() => setOpen(isOpen ? null : item.id)}
                        className="flex w-full items-center justify-between p-5 text-left"
                      >
                        {/* Title stays COMPLETELY static */}
                        <span className="font-medium">{item.title}</span>

                        {/* Only icon rotates */}
                        <motion.span
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="flex-shrink-0"
                        >
                          <ChevronDown />
                        </motion.span>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            key="content"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                            className="px-5 overflow-hidden"
                          >
                            <div className="pb-5 text-gray-600">
                              {item.content}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
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
                      <>
                        <p>✔ Breakfast & Lunch</p>
                        <p>✔ Guided Trek</p>
                        <p>✔ First Aid Support</p>
                        <p>✔ Transportation from Pickup Point</p>
                      </>
                    )}

                    {activeTab === "exclusions" && (
                      <>
                        <p>✘ Dinner</p>
                        <p>✘ Personal Expenses</p>
                        <p>✘ Anything not mentioned in inclusions</p>
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
              <p className="text-gray-500 line-through">₹ 2199</p>
              <p className="text-3xl font-bold text-green-600">₹ 1849</p>
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
    </div>
  );
}
