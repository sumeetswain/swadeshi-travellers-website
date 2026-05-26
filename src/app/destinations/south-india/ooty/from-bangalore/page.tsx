import ContactForm from "@/components/ContactForm";
import DescriptionBox from "@/components/DescriptionBox";
import FAQ from "@/components/FAQs";
import Reviews from "@/components/Reviews";
import WhyChooseUs from "@/components/WhyChooseUs";
import { BadgeCheck, Compass, Phone, Star, Train } from "lucide-react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import React from "react";

export const metadata = {
  title:
    "Ooty Tour Package from Bangalore 2026 — ₹5,399 Onwards | UNESCO Toy Train | Mysore Palace | Swadeshi Traveller",
  description:
    "Book Ooty group tour packages from Bangalore from ₹5,399. 2-day bus tour — pickup at Marathahalli, Silk Board & Majestic. 3-day train tour: UNESCO toy train confirmed, Bundipuri Forest & Mysore Palace from KSR. Isha Foundation + Ooty also available. Thu & Fri departures.",
  keywords:
    "ooty tour package from bangalore — 4,400/mo GKP Bangalore, tour packages from bangalore to ooty (4,400/mo) · ooty package from bangalore (1,200/mo KD 1) · ooty trip from bangalore (1,300/mo) · bangalore to ooty package (1,600/mo) · bangalore mysore ooty tour package (1,900/mo) · isha foundation ooty from bangalore (build demand)",
};
const faqs = [
  {
    question:
      "What is the difference between the 2-day and 3-day Ooty tour packages from Bangalore?",
    answer:
      "The 2-day Ooty package (₹5,399) departs Friday night by bus from Marathahalli (9PM), Silk Board (10PM), and Majestic (11PM). It covers Dolphin's Nose, Coonoor, the Nilgiri toy train, Ooty Lake, tea factory, chocolate factory, Pykara Waterfalls, and Needle Rock across 2 days. The two 3-day packages (₹6,999 each) depart by train from KSR Bengaluru on Thursday or Friday. Package 2 starts with Bundipuri Forest and Pykara Waterfalls on Day 1, has the confirmed UNESCO toy train on Day 2, and includes Mysore Palace on the return Day 3. Package 3 starts with the Isha Foundation and Adiyogi Shiva statue on Day 1, has the confirmed toy train on Day 2, and returns via Bandipur National Park on Day 3.",
  },
  {
    question:
      "Should I book the 3-day Ooty tour (Package 2) or the Isha Foundation + Ooty tour (Package 3) — both are ₹6,999?",
    answer:
      "Both cost ₹6,999, depart by train from KSR, include the confirmed UNESCO toy train on Day 2, and return to Bangalore on Day 3. The difference is Day 1 and where you sleep Night 1. Package 2 starts in the Nilgiris — Bundipuri Forest, Pykara Waterfalls, and Needle Rock (nature first, Mysore Palace on return). Package 3 starts at Isha Foundation in Coimbatore — the Adiyogi Shiva statue (world's largest bust at 34 metres) and the Evening Aarti (Night 1 in Coimbatore, Night 2 in Ooty, returning via Bandipur National Park). Choose Package 2 for a complete Nilgiri nature circuit. Choose Package 3 if Isha Foundation is meaningful to you — it is a spiritually distinct Day 1 that no other Ooty package offers.",
  },
  {
    question: "Is the UNESCO Nilgiri Mountain Railway toy train guaranteed?",
    answer:
      "Yes. The STC 3-day Gokarna + Dandeli package (₹5,999) includes kayaking, zorbing, boating, and river swimming — all four water activities — in the stated package price. This is confirmed in the inclusions list. There are no separate charges for these activities on Day 1. River rafting and zipline are not confirmed as included in the Bangalore package — please call +91 8886051052 to confirm their status before booking if these are priorities.",
  },
  {
    question: "What is the best time to visit Ooty from Bangalore?",
    answer:
      "October to February is the best time — cool, clear weather, the best visibility from Dolphin's Nose, and the Western Ghats at their most vivid. April to June is Ooty's summer peak — the Rose Garden blooms, warmer days but still pleasant at altitude. Monsoon (July–September) turns the hills intensely green, but some roads and the toy train can be affected by landslips. All three STC packages run weekly year-round from Bangalore.",
  },
  {
    question: "Where are the bus pickup points for the 2-day Ooty package?",
    answer:
      "The 2-day Ooty bus package (Package 1) has 3 pickup points: Marathahalli — Tansi Honda at 9:00 PM, Silk Board — Nahdi Mandi Restaurant at 10:00 PM, and Majestic — Metro Station East Entrance at 11:00 PM. Departures are Friday nights only. The 3-day packages (2 and 3) depart by train from KSR Bengaluru Railway Station (Krantivira Sangolli Rayanna) on Thursday and Friday evenings.",
  },
];
const features = [
  {
    title: "4.8 Google Rating",
    description:
      "200+ five-star reviews. Our 4.8 rating is earned trip by trip, not bought.",
    icon: <Star className="w-6 h-6" />,
  },
  {
    title: "MSME + ATOAI Certified",
    description:
      "Recognised by MSME, StartupIndia, and ATOAI — India's top travel bodies. Your trust is our credential.",
    icon: <BadgeCheck className="w-6 h-6" />,
  },
  {
    title: "Expert Trip Captains",
    description:
      "Every STC trip has a dedicated captain. From KSR to the Nilgiris — fully guided, zero coordination needed from you.",
    icon: <Compass className="w-8 h-8 text-gray-700" />,
  },
  {
    title: "Confirmed Toy Train",
    description:
      "The UNESCO Nilgiri Mountain Railway toy train is confirmed in both 3-day packages — not subject to availability. 16 tunnels, 31 bridges, the full Coonoor-to-Ooty mountain rail journey.",
    icon: <Train className="w-8 h-8 text-gray-700" />,
  },
];
export default function DestinationPage() {
  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Top Full Width Image */}
        <div className="w-full h-[45vh] md:h-[55vh]">
          <Image
            width={2000}
            height={560}
            src="/banner/blr.png"
            alt="Gokarna Cover"
            className="w-full h-full object-cover bg-bottom"
          />
        </div>

        {/* Title */}
        <h1 className="text-center text-3xl md:text-4xl font-semibold mt-10 mb-8 text-brand">
          Ooty from Bangalore Tour Packages
        </h1>

        <DescriptionBox
          title="3 Packages. UNESCO Nilgiri Toy Train. Tea Gardens, Misty Hills & Isha Foundation. From ₹5,399."
          content="There is no hill station in South India that does to a Bangalore weekend what Ooty does. The mist arrives before the bus does. The tea gardens still hold the morning light when the town is waking up. The Nilgiri Mountain Railway toy train — 16 tunnels, 31 bridges, 46 kilometres of Western Ghats mountain rail — is one of the great short train journeys on the subcontinent. STC runs three group tour packages from Bangalore every Thursday and Friday: a 2-day bus weekend from ₹5,399 with pickup at Marathahalli, Silk Board, and Majestic; a 3-day nature and heritage train tour via Bundipuri Forest, the confirmed toy train, and Mysore Palace; and a 3-day spiritual circuit starting with the Adiyogi Shiva statue and Evening Aarti at Isha Foundation."
        />
        <div className="w-[90%] lg:w-[30%] mx-auto my-5">
          <Link
            href="tel:+918886051052"
            className="flex items-center gap-2 hover:underline bg-brand px-5 py-3 w-full text-white text-center justify-center rounded-2xl"
          >
            <Phone size={16} />
            Not sure which package? Call us at +91 8886051052
          </Link>
        </div>
        {/* Package 1 */}
        <div className="w-full max-w-6xl border border-[#5e6b5f] bg-[#dfe8d7] mx-auto grid grid-cols-1 md:grid-cols-[1fr_390px] overflow-hidden my-10 md:my-20">
          {/* LEFT SIDE */}
          <div className="border-b md:border-b-0 md:border-r border-[#5e6b5f] p-4 sm:p-5 md:p-7 bg-[#dce8d1]">
            <h2 className="text-[#234f82] text-[20px] md:text-[18px] font-bold mb-2 leading-snug">
              🚌 2-Day Ooty Coonoor Weekend Bus Tour
            </h2>

            <p className="text-[#5d5d5d] italic leading-[1.6] mb-5 text-[14px] md:text-[15px]">
              Dolphin&apos;s Nose, Toy Train, Ooty Lake, Tea Factory, Chocolate
              Factory, Pykara Waterfalls. Bus from Bangalore.
            </p>

            <ul className="space-y-2 text-[14px] md:text-[15px] leading-[1.7] text-[#1d1d1d] list-disc pl-5 md:pl-6">
              <li>
                Dolphin&apos;s Nose Viewpoint — Coonoor&apos;s dramatic valley
                panorama
              </li>

              <li>Catherine Falls — outer view en route</li>

              <li>Tea Plantation Walk — rolling green estates</li>

              <li>Ooty Toy Train ride — subject to availability</li>

              <li>Ooty Lake boating · Tea Factory · Chocolate Factory</li>

              <li>
                Day 2: Pine Forest · Pykara Waterfalls · 9th Mile Shooting Spot
                · Needle Rock
              </li>
            </ul>

            <div className="mt-5 md:mt-6 font-semibold text-[#d44a4a] leading-[1.6] text-[14px] md:text-[15px]">
              ✦ Unique: 3 bus pickup points across Bangalore. Toy train +
              Chocolate Factory. No KSR needed.
            </div>

            <div className="mt-5 text-[13px] md:text-[14px] text-[#555] leading-[1.6]">
              🚌 Marathahalli (9PM) · Silk Board (10PM) · Majestic (11PM) ·
              Friday nights
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="bg-[#dce8d1] p-5 sm:p-6 md:p-8 text-center flex flex-col items-center justify-center">
            <div className="text-[#d44a4a] text-[38px] sm:text-[46px] md:text-[52px] font-bold leading-none">
              ₹5,399
            </div>

            <div className="text-[#8f98a3] text-[14px] md:text-[16px] mt-3">
              per person · 1N/2D
            </div>

            <div className="text-[#8f98a3] text-[14px] md:text-[16px] mt-1">
              Friday nights
            </div>

            <button
              className="
        w-full
        mt-8 md:mt-10
        bg-[#a9c493]
        hover:bg-[#98b481]
        transition-colors
        duration-300
        text-black
        font-bold
        text-[16px] md:text-[20px]
        py-3.5 md:py-4
        rounded-md
      "
            >
              Book 2-Day Ooty →
            </button>

            <div className="mt-6 md:mt-8 text-[#4aa3ff] text-[16px] md:text-[20px] font-medium">
              📞 +91 8886051052
            </div>
          </div>
        </div>

        {/* Package 2 */}
        <div className="w-full max-w-6xl border border-[#5e6b5f] bg-[#dfe8d7] mx-auto grid grid-cols-1 md:grid-cols-[1fr_390px] overflow-hidden my-10 md:my-20">
          {/* LEFT SIDE */}
          <div className="border-b md:border-b-0 md:border-r border-[#5e6b5f] p-4 sm:p-5 md:p-7 bg-[#dfe3ea]">
            <h2 className="text-[#234f82] text-[20px] md:text-[18px] font-bold mb-2 leading-snug">
              🚂 3-Day Ooty & Coonoor — Full Nilgiri Experience
            </h2>

            <p className="text-[#5d5d5d] italic leading-[1.6] mb-5 text-[14px] md:text-[15px]">
              Bundipuri Forest, Pykara Waterfalls, UNESCO Toy Train, Ooty Lake,
              Mysore Palace. Train from KSR.
            </p>

            <ul className="space-y-2 text-[14px] md:text-[15px] leading-[1.7] text-[#1d1d1d] list-disc pl-5 md:pl-6">
              <li>
                Day 1: Bundipuri Forest · Needle Rock · Pykara Waterfalls ·
                Shooting Point
              </li>

              <li>
                Day 2: Dolphin&apos;s Nose · Tea Garden · Tea Factory · UNESCO
                Toy Train Coonoor→Ooty · Ooty Lake
              </li>

              <li>
                Day 3: Pine Forest · Mysore Palace · Return train to Bangalore
              </li>

              <li>
                UNESCO Toy Train — CONFIRMED included (not subject to
                availability)
              </li>

              <li>
                2 nights Ooty · Train tickets both ways · Tamil Nadu border tax
                included
              </li>
            </ul>

            <div className="mt-5 md:mt-6 font-semibold text-[#d44a4a] leading-[1.6] text-[14px] md:text-[15px]">
              ✦ Unique: Bundipuri Forest Day 1 + Mysore Palace Day 3. The
              complete nature and heritage Ooty circuit.
            </div>

            <div className="mt-5 text-[13px] md:text-[14px] text-[#555] leading-[1.6]">
              🚂 KSR Bengaluru Railway Station · Thursday & Friday
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="bg-[#dfe3ea] p-5 sm:p-6 md:p-8 text-center flex flex-col items-center justify-center">
            <div className="text-[#d44a4a] text-[38px] sm:text-[46px] md:text-[52px] font-bold leading-none">
              ₹6,999
            </div>

            <div className="text-[#8f98a3] text-[14px] md:text-[16px] mt-3">
              per person · 2N/3D
            </div>

            <div className="text-[#8f98a3] text-[14px] md:text-[16px] mt-1">
              Thu & Fri weekly
            </div>

            <button
              className="
        w-full
        mt-8 md:mt-10
        bg-[#8fb4d9]
        hover:bg-[#7ca5cf]
        transition-colors
        duration-300
        text-black
        font-bold
        text-[16px] md:text-[20px]
        py-3.5 md:py-4
        rounded-md
      "
            >
              Book 3-Day Ooty + Nature →
            </button>

            <div className="mt-6 md:mt-8 text-[#4aa3ff] text-[16px] md:text-[20px] font-medium">
              📞 +91 8886051052
            </div>
          </div>
        </div>

        {/* Package 3 */}
        <div className="w-full max-w-6xl border border-[#5e6b5f] bg-[#eadcf2] mx-auto grid grid-cols-1 md:grid-cols-[1fr_390px] overflow-hidden my-10 md:my-20">
          {/* LEFT SIDE */}
          <div className="border-b md:border-b-0 md:border-r border-[#5e6b5f] p-5 md:p-7 bg-[#eadcf2]">
            <h2 className="text-[#234f82] text-[18px] font-bold mb-2">
              ✨ Isha Foundation + Ooty Coonoor — Spiritual & Scenic
            </h2>

            <p className="text-[#5d5d5d] italic leading-[1.6] mb-5 text-[15px]">
              Adiyogi Shiva statue, Evening Aarti at Isha Ashram, UNESCO Toy
              Train, Tea Garden, Bandipur Forest. Train from KSR.
            </p>

            <ul className="space-y-2 text-[15px] leading-[1.6] text-[#1d1d1d] list-disc pl-6">
              <li>
                Day 1: Isha Foundation Coimbatore · Adiyogi Shiva Statue ·
                Evening Aarti · Night Coimbatore
              </li>

              <li>
                Day 2: Dolphin&apos;s Nose Coonoor · UNESCO Toy Train→Ooty · Tea
                Garden & Factory · Chocolate Museum
              </li>

              <li>
                Day 3: Needle Rock · Bandipur National Park · Return train from
                Mysore
              </li>

              <li>UNESCO Toy Train — CONFIRMED included</li>

              <li>
                Night 1 Coimbatore · Night 2 Ooty · Reach Bangalore by 6:30 PM
              </li>
            </ul>

            <div className="mt-6 font-semibold text-[#d44a4a] leading-[1.6] text-[15px]">
              ✦ Unique: Adiyogi Shiva statue (world&apos;s largest bust) + Isha
              Evening Aarti. The only Ooty package starting at Isha Foundation.
            </div>

            <div className="mt-5 text-[14px] text-[#555] leading-[1.5]">
              🚂 KSR Bengaluru Railway Station · Thursday & Friday
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="bg-[#eadcf2] p-6 md:p-8 text-center flex flex-col items-center justify-center">
            <div className="text-[#d44a4a] text-[52px] font-bold leading-none">
              ₹6,999
            </div>

            <div className="text-[#8f98a3] text-[16px] mt-3">
              per person · 2N/3D
            </div>

            <div className="text-[#8f98a3] text-[16px] mt-1">
              Thu & Fri weekly
            </div>

            <button
              className="
        w-full
        mt-10
        bg-[#c997df]
        hover:bg-[#bb82d4]
        transition-colors
        duration-300
        text-black
        font-bold
        text-[20px]
        py-4
      "
            >
              Book Isha Foundation + Ooty →
            </button>

            <div className="mt-8 text-[#4aa3ff] text-[20px]">
              📞 +91 8886051052
            </div>
          </div>
        </div>
        <div className="w-[80%] mx-auto overflow-x-auto bg-white my-10">
          <table className="w-full text-sm text-left border-collapse border border-neutral-300">
            <colgroup>
              <col className="w-[22%]" />
              <col className="w-[26%]" />
              <col className="w-[26%]" />
              <col className="w-[26%]" />
            </colgroup>

            <thead>
              <tr className="border-b border-neutral-300">
                <th className="p-4 bg-neutral-100"></th>

                <th className="p-4 font-semibold text-white bg-[#3d5f1e]">
                  🚌 Pkg 1 - 2D Weekend
                </th>

                <th className="p-4 font-semibold text-white bg-[#214d82]">
                  🚆 Pkg 2 - 3D Nature + Heritage
                </th>

                <th className="p-4 font-semibold text-white bg-[#7a34b2]">
                  ✨ Pkg 3 - Isha Foundation + Ooty
                </th>
              </tr>
            </thead>

            <tbody className="text-neutral-800">
              {/* Price */}
              <tr className="border-b border-neutral-300">
                <td className="p-4 font-semibold bg-neutral-100">Price</td>

                <td className="p-4 font-semibold text-[#3d5f1e] bg-[#e4eddc]">
                  ₹5,399
                </td>

                <td className="p-4 font-semibold text-[#214d82] bg-[#dbe7f4]">
                  ₹6,999
                </td>

                <td className="p-4 font-semibold text-[#7a34b2] bg-[#eadcf6]">
                  ₹6,999
                </td>
              </tr>

              {/* Duration */}
              <tr className="border-b border-neutral-300">
                <td className="p-4 font-semibold bg-neutral-100">Duration</td>

                <td className="p-4">2 Days / 1 Night</td>

                <td className="p-4">3 Days / 2 Nights</td>

                <td className="p-4">3 Days / 2 Nights</td>
              </tr>

              {/* Transport */}
              <tr className="border-b border-neutral-300">
                <td className="p-4 font-semibold bg-neutral-100">Transport</td>

                <td className="p-4 font-semibold text-[#3d5f1e]">
                  Bus — Tempo Traveller
                </td>

                <td className="p-4 font-semibold text-[#214d82]">
                  Train — Sleeper Non-AC
                </td>

                <td className="p-4 font-semibold text-[#7a34b2]">
                  Train — Sleeper Non-AC
                </td>
              </tr>

              {/* Pickup */}
              <tr className="border-b border-neutral-300 align-top">
                <td className="p-4 font-semibold bg-neutral-100">Pickup</td>

                <td className="p-4 bg-[#e4eddc]">
                  Marathahalli (9PM) · Silk Board (10PM) · Majestic (11PM) · Fri
                  nights
                </td>

                <td className="p-4 bg-[#dbe7f4]">
                  KSR Bengaluru Railway Station
                </td>

                <td className="p-4 bg-[#eadcf6]">
                  KSR Bengaluru Railway Station
                </td>
              </tr>

              {/* Day 1 */}
              <tr className="border-b border-neutral-300 align-top">
                <td className="p-4 font-semibold bg-neutral-100">Day 1</td>

                <td className="p-4 bg-[#e4eddc]">
                  Dolphin's Nose · Catherine Falls · Tea Plantation Walk · Toy
                  Train · Ooty Lake · Tea Factory · Chocolate Factory
                </td>

                <td className="p-4 bg-[#dbe7f4]">
                  Bundipuri Forest · Needle Rock · Pykara Waterfalls · Shooting
                  Point
                </td>

                <td className="p-4 bg-[#eadcf6]">
                  Isha Foundation Coimbatore · Adiyogi Shiva Statue · Evening
                  Aarti · Night Coimbatore
                </td>
              </tr>

              {/* Day 2 */}
              <tr className="border-b border-neutral-300 align-top">
                <td className="p-4 font-semibold bg-neutral-100">Day 2</td>

                <td className="p-4">
                  Pine Forest · Pykara Waterfalls · 9th Mile Shooting Spot ·
                  Needle Rock · Return
                </td>

                <td className="p-4">
                  Dolphin's Nose · Tea Garden · Tea Factory · UNESCO Toy Train
                  Coonoor→Ooty · Ooty Lake
                </td>

                <td className="p-4">
                  Coonoor: Dolphin's Nose · UNESCO Toy Train→Ooty · Tea Garden &
                  Factory · Chocolate Museum
                </td>
              </tr>

              {/* Day 3 */}
              <tr className="border-b border-neutral-300 align-top">
                <td className="p-4 font-semibold bg-neutral-100">Day 3</td>

                <td className="p-4 text-neutral-400 text-center">—</td>

                <td className="p-4">
                  Pine Forest · Mysore Palace · Return train to Bangalore
                </td>

                <td className="p-4">
                  Needle Rock · Bandipur National Park · Return train from
                  Mysore
                </td>
              </tr>

              {/* Nights */}
              <tr className="border-b border-neutral-300">
                <td className="p-4 font-semibold bg-neutral-100">Nights</td>

                <td className="p-4">1 night — Ooty</td>

                <td className="p-4">2 nights — Ooty</td>

                <td className="p-4">Night 1: Coimbatore · Night 2: Ooty</td>
              </tr>

              {/* UNESCO Toy Train */}
              <tr className="border-b border-neutral-300">
                <td className="p-4 font-semibold bg-neutral-100">
                  UNESCO Toy Train
                </td>

                <td className="p-4 text-neutral-500 font-medium">
                  ✅ Subject to availability
                </td>

                <td className="p-4 text-[#214d82] font-semibold">
                  ✅ CONFIRMED — included
                </td>

                <td className="p-4 text-[#7a34b2] font-semibold">
                  ✅ CONFIRMED — included
                </td>
              </tr>

              {/* Isha Foundation */}
              <tr className="border-b border-neutral-300">
                <td className="p-4 font-semibold bg-neutral-100">
                  Isha Foundation
                </td>

                <td className="p-4 text-red-600 font-semibold">
                  ❌ Not included
                </td>

                <td className="p-4 text-red-600 font-semibold">
                  ❌ Not included
                </td>

                <td className="p-4 text-[#7a34b2] font-semibold">
                  ✅ Day 1 — Adiyogi + Aarti
                </td>
              </tr>

              {/* Mysore Palace */}
              <tr className="border-b border-neutral-300">
                <td className="p-4 font-semibold bg-neutral-100">
                  Mysore Palace
                </td>

                <td className="p-4 text-red-600 font-semibold">
                  ❌ Not included
                </td>

                <td className="p-4 text-[#214d82] font-semibold">
                  ✅ Day 3 — return stop
                </td>

                <td className="p-4 text-red-600 font-semibold">
                  ❌ Not included
                </td>
              </tr>

              {/* Bundipuri Forest */}
              <tr className="border-b border-neutral-300">
                <td className="p-4 font-semibold bg-neutral-100">
                  Bundipuri Forest
                </td>

                <td className="p-4 text-red-600 font-semibold">
                  ❌ Not included
                </td>

                <td className="p-4 text-[#214d82] font-semibold">
                  ✅ Day 1 — nature anchor
                </td>

                <td className="p-4 text-red-600 font-semibold">
                  ❌ Not included
                </td>
              </tr>

              {/* Bandipur Forest */}
              <tr className="border-b border-neutral-300">
                <td className="p-4 font-semibold bg-neutral-100">
                  Bandipur Forest
                </td>

                <td className="p-4 text-red-600 font-semibold">
                  ❌ Not included
                </td>

                <td className="p-4 text-red-600 font-semibold">
                  ❌ Not included
                </td>

                <td className="p-4 text-[#7a34b2] font-semibold">
                  ✅ Day 3 — National Park
                </td>
              </tr>

              {/* Chocolate Factory */}
              <tr className="border-b border-neutral-300">
                <td className="p-4 font-semibold bg-neutral-100">
                  Chocolate Factory
                </td>

                <td className="p-4 text-[#3d5f1e] font-semibold">✅ Day 1</td>

                <td className="p-4 text-red-600 font-semibold">
                  ❌ Not included
                </td>

                <td className="p-4 text-[#7a34b2] font-semibold">
                  ✅ Day 2 — Chocolate Museum
                </td>
              </tr>

              {/* Choose */}
              <tr>
                <td className="p-4 font-semibold bg-neutral-100">
                  Choose if...
                </td>

                <td className="p-4 bg-[#e4eddc]">
                  Budget matters. Bus pickup is convenient. Quick Ooty weekend
                  is enough.
                </td>

                <td className="p-4 bg-[#dbe7f4]">
                  You want the full Nilgiri experience — forests, waterfalls,
                  toy train, Mysore Palace.
                </td>

                <td className="p-4 bg-[#eadcf6]">
                  Isha Foundation and the Adiyogi are meaningful to you.
                  Spiritual Day 1 + Ooty Day 2.
                </td>
              </tr>

              {/* Buttons */}
              <tr>
                <td className="p-4 bg-neutral-100"></td>

                <td className="p-2">
                  <button className="w-full bg-[#3d5f1e] hover:bg-[#314d18] text-white font-semibold py-2 transition">
                    Book 2-Day Ooty →
                  </button>
                </td>

                <td className="p-2">
                  <button className="w-full bg-[#214d82] hover:bg-[#193b64] text-white font-semibold py-2 transition">
                    Book 3-Day Ooty Nature →
                  </button>
                </td>

                <td className="p-2">
                  <button className="w-full bg-[#7a34b2] hover:bg-[#642993] text-white font-semibold py-2 transition">
                    Book Isha + Ooty →
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="w-[80%] mx-auto my-10 border border-neutral-300 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Included */}
            <div className="bg-[#dde8d5] p-6 border-r border-neutral-300">
              <div className="flex items-center gap-3 text-[#1f4d7f] font-bold text-[20px] mb-6">
                <span className="text-green-600 text-2xl">✅</span>
                <h3>Always Included</h3>
              </div>

              <ul className="list-disc pl-8 space-y-3 text-[18px] leading-[1.35] text-black">
                <li>
                  Bus tickets both ways (Pkg 1) OR Train tickets both ways —
                  Sleeper Non-AC (Pkgs 2 & 3)
                </li>

                <li>
                  UNESCO Toy Train tickets — subject to availability (Pkg 1) ·
                  CONFIRMED (Pkgs 2 & 3)
                </li>

                <li>AC pre-hired tempo for all sightseeing</li>

                <li>1 night accommodation (Pkg 1) · 2 nights (Pkgs 2 & 3)</li>

                <li>Trip captain / guide throughout</li>

                <li>Driver charges, toll taxes, Tamil Nadu border tax</li>
              </ul>
            </div>

            {/* Not Included */}
            <div className="bg-[#f3f3f3] p-6">
              <div className="flex items-center gap-3 text-neutral-600 font-bold text-[20px] mb-6">
                <span className="text-red-500 text-2xl">❌</span>
                <h3>Not Included</h3>
              </div>

              <ul className="list-disc pl-8 space-y-3 text-[18px] leading-[1.35] text-neutral-500">
                <li>Food and meals</li>

                <li>Entry tickets to all attractions</li>

                <li>GST @ 5%</li>

                <li>Personal expenses and shopping</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Packages Section */}
        <FAQ faqs={faqs} />
        <Reviews />
        <ContactForm />
        <WhyChooseUs features={features} />
      </div>
    </>
  );
}
