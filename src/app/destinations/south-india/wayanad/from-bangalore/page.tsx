import ContactForm from "@/components/ContactForm";
import DescriptionBox from "@/components/DescriptionBox";
import FAQ from "@/components/FAQs";
import FinalCTA from "@/components/FinalCTA";
import Reviews from "@/components/Reviews";
import WhyChooseUs from "@/components/WhyChooseUs";
import {
  BadgeCheck,
  Compass,
  Phone,
  Star,
  Train,
  Utensils,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import React from "react";

export const metadata = {
  title:
    "Wayanad Tour Package from Bangalore 2026 — ₹5,999 Onwards | Meals Included | Chembra Trek & Mysore Palace | STC",
  description:
    "Book Wayanad group tour packages from Bangalore from ₹5,999. 2-day bus tour with meals included — pickup at Marathahalli, Silk Board & Majestic. Banasura Sagar Dam, zipline, Chembra Peak trek, 900 Kandi Glass Bridge, Pookode Lake. 3-day train tour with Mysore Palace from KSR. Thu & Fri departures.",
  keywords:
    "wayanad trip from bangalore — 590/mo GKP Bangalore + 720/mo GKP India + 350/mo Ahrefs KD 0 · wayanad tour package from bangalore (210/mo GKP BLR + 320/mo GKP India) · wayanad packages from bangalore (260/mo GKP BLR) · bangalore to wayanad package (100/mo Ahrefs KD 0) · wayanad weekend trip from bangalore (30/mo) · wayanad 2 days trip package from bangalore (30/mo)",
};
const packages = [
  {
    icon: "🚌",
    title: "2-Day Wayanad Weekend",
    price: "₹5,999",
    meta: "2D/1N · Bus · Meals Included",
    bg: "bg-[#dde8d5]",
    border: "border-[#b9c6b1]",
    button: "bg-[#35591f] hover:bg-[#2d4a1a]",
    pickup: "Marathahalli · Silk Board · Majestic · Friday nights",
    highlights: [
      "Day 1: Banasura Sagar Dam · Zipline · Lakidi View · Tea Plantation",
      "Day 2: Chembra Peak Trek OR Soochipara Falls",
      "Day 2: 900 Kandi Glass Bridge · Pookode Lake",
      "Meals Included: 2 Breakfasts + 1 Dinner",
      "Homestay accommodation in Wayanad",
    ],
    footer: "Best for: weekend + meals included + bus pickup convenience",
    buttonText: "View 2-Day Wayanad Weekend →",
  },
  {
    icon: "🚂",
    title: "3-Day Wayanad Deep Dive",
    price: "₹7,499",
    meta: "3D/2N · Train · Mysore Palace",
    bg: "bg-[#dfe5ee]",
    border: "border-[#bfc7d3]",
    button: "bg-[#214b78] hover:bg-[#18395c]",
    pickup: "KSR Bengaluru Railway Station · Thursday & Friday",
    highlights: [
      "Day 1: Banasura Sagar Dam · Zipline · Lakidi View",
      "Day 2: Chembra Peak Trek OR Soochipara Falls",
      "Day 2: 900 Kandi Glass Bridge · Pookode Lake + Shopping",
      "Day 3: Mysore Palace on return journey to Bangalore",
      "2 nights Wayanad homestay · More time in the hills",
    ],
    footer: "Best for: more days · train travel · Mysore Palace stop",
    buttonText: "View 3-Day Wayanad Train Tour →",
  },
];
const faqs = [
  {
    question:
      "What is the difference between the 2-day and 3-day Wayanad tour packages from Bangalore?",
    answer:
      "The 2-day Wayanad package (₹5,999) departs Friday night by bus from Marathahalli (9PM), Silk Board (10PM), and Majestic (11PM). It includes meals — 2 breakfasts and 1 dinner — making it the only STC Bangalore package that covers food. Day 1 covers Banasura Sagar Dam, Lakidi View, zipline, and a tea plantation. Day 2 includes Chembra Peak Trek or Soochipara Falls, the 900 Kandi Glass Bridge, and Pookode Lake. The 3-day package (₹7,499) departs by train from KSR Bengaluru on Thursday or Friday. It gives you 2 full days in Wayanad — Day 1 at Banasura Dam and Day 2 at Chembra Peak or Soochipara Falls — plus Mysore Palace on the return Day 3. Meals are not included in the 3-day package.",
  },
  {
    question: "Are meals included in the Wayanad package from Bangalore?",
    answer:
      "Yes. The UNESCO World Heritage Nilgiri Mountain Railway toy train from Coonoor to Ooty is included in both packages. The toy train runs through 16 tunnels, 31 bridges, and continuous tea plantation scenery across a 1.5-hour journey. It is one of the highlights of both trips.",
  },
  {
    question: "What is Chembra Peak Trek and how difficult is it?",
    answer:
      "Chembra Peak is the highest point in Wayanad at 2,100 metres. The trek to the heart-shaped lake at the midpoint — the most popular and most photographed point on the route — is a 6km round trip through grassland and shola forest, taking approximately 4 hours at a comfortable pace. The difficulty is moderate — some steep sections approaching the lake, but no technical climbing required. Trek permits must be booked in advance through the Forest Department. The STC Day 2 itinerary gives you the choice between Chembra Peak Trek and Soochipara Falls — confirm your preference at booking.",
  },
  {
    question: "What is the best time to visit Wayanad from Bangalore?",
    answer:
      "October to February is the best time — cool, clear weather, the waterfalls are strong from the monsoon runoff, and the forest canopy is at its deepest green. March to May is warmer but manageable at altitude. June to September is monsoon — Soochipara Falls and Banasura Dam are spectacular in volume, but Chembra Peak Trek may be closed due to slippery trails and landslide risk. The itinerary notes that activities can be altered based on weather and safety — if Chembra Trek is unavailable, Soochipara Falls is the default Day 2 option.",
  },
  {
    question:
      "Where exactly does the bus depart from in Bangalore for the 2-day Wayanad package?",
    answer:
      "The 2-day Wayanad bus (Package 1) departs from 3 points: Marathahalli — Tansi Honda at 9:00 PM, Silk Board — Nahdi Mandi Restaurant at 10:00 PM, and Majestic — Metro Station East Entrance at 11:00 PM. Friday nights only. Return is Sunday late night or early Monday morning to the same pickup points. The 3-day Wayanad train package departs from KSR Bengaluru Railway Station (Krantivira Sangolli Rayanna) on Thursday and Friday evenings.",
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
      "Every STC trip has a dedicated captain. From Marathahalli to the Nilgiri foothills of Kerala — fully guided, zero stress.",
    icon: <Compass className="w-8 h-8 text-gray-700" />,
  },
  {
    title: "Meals Included — Pkg 1",
    description:
      "The 2-day Wayanad bus package is the only STC Bangalore group tour that includes meals — 2 breakfasts and 1 dinner. No other STC Bangalore package feeds you. A Wayanad homestay breakfast before trekking Chembra Peak is not a small thing.",
    icon: <Utensils className="w-8 h-8 text-gray-700" />,
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
            src="/southindia/banners/wayanad.png"
            alt="Wayanad Cover"
            className="w-full h-full object-cover bg-bottom"
          />
        </div>

        {/* Title */}
        <h1 className="text-center text-3xl md:text-4xl font-semibold mt-10 mb-8 text-brand">
          Wayanad Trip from Bangalore
        </h1>
        <DescriptionBox
          title="Mist-wrapped tea hills, thundering waterfalls, and the 900 Kandi Glass Bridge. Two weekends. Two ways in. From ₹5,999."
          content="Wayanad doesn't ease you in. The Western Ghats announce themselves the moment the road leaves the Deccan plains and starts climbing — the air changes, the vegetation changes, and before the bus has finished the ascent you're already inside something that feels genuinely wild. Banasura Sagar Dam — one of India's largest earthen dams — sits in the morning mist with the Brahmagiri Hills behind it. The zipline runs across the dam's water spread. The 900 Kandi Glass Bridge hangs over a valley canopy with nothing but the Nilgiri hills below your feet. Chembra Peak, at 2,100 metres, is Wayanad's highest point — the trek to the heart-shaped lake halfway up is one of South India's best day hikes. STC runs two group tour packages from Bangalore every week: a 2-day bus weekend from ₹5,999 with meals included — the only STC Bangalore package that feeds you — and a 3-day train tour from ₹7,499 with two nights in Wayanad homestay and Mysore Palace on the return journey."
        />
        <div className="w-[30%] mx-auto mt-5">
          <Link
            href="tel:+918886051052"
            className="flex items-center gap-2 hover:underline bg-brand px-5 py-3 w-full text-white text-center justify-center rounded-2xl"
          >
            <Phone size={16} />
            Not sure which package? Call us at +91 8886051052
          </Link>
        </div>
        <section className="w-full py-10 px-3 bg-white">
          <div className="max-w-7xl mx-auto ">
            <h2 className="text-[20px] md:text-[28px] font-bold text-[#1f4d7f] px-6 pt-6 pb-4">
              Choose Your Wayanad Weekend
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2">
              {packages.map((pkg, idx) => (
                <div
                  key={idx}
                  className={`${pkg.bg} border-t md:border-t-0 ${
                    idx === 0 ? "md:border-r" : ""
                  } ${pkg.border} p-5 flex flex-col justify-between`}
                >
                  {/* Header */}
                  <div>
                    <div className="flex items-center justify-center gap-3">
                      <span className="text-2xl">{pkg.icon}</span>

                      <h3 className="text-[22px] font-bold text-[#214b78]">
                        {pkg.title}
                      </h3>
                    </div>

                    <p className="text-center text-[18px] font-bold text-red-600 mt-2">
                      {pkg.price}
                      <span className="text-red-600 font-semibold ml-2">
                        · {pkg.meta}
                      </span>
                    </p>

                    <p className="text-center text-[15px] text-neutral-600 mt-1">
                      {pkg.pickup}
                    </p>

                    {/* Highlights */}
                    <ul className="mt-5 space-y-3 text-[17px] text-black pl-6 list-disc">
                      {pkg.highlights.map((item, i) => (
                        <li key={i} className="leading-snug">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Footer */}
                  <div className="mt-5">
                    <p className="text-[14px] italic text-neutral-600 mb-4">
                      {pkg.footer}
                    </p>

                    <button
                      className={`w-full py-2 text-white text-[16px] font-bold transition ${pkg.button}`}
                    >
                      {pkg.buttonText}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* PACKAGE 1 */}
        <div className="my-14 w-[80%] mx-auto">
          <h2 className="text-[#2b69b1] text-[20px] md:text-[24px] font-bold mb-8">
            Package 1 of 2
          </h2>

          <div className="w-full border border-[#b7b7b7] bg-[#dde8d5] grid grid-cols-1 md:grid-cols-[1fr_465px] overflow-hidden">
            {/* LEFT */}
            <div className="border-b md:border-b-0 md:border-r border-[#b7b7b7] p-6 bg-[#dde8d5]">
              <h3 className="text-[#214b78] text-[22px] font-bold mb-2">
                🚌 2-Day Wayanad Weekend Bus Tour
              </h3>

              <p className="text-[#555] italic text-[17px] leading-[1.45] mb-4">
                Banasura Dam, Zipline, Chembra Peak Trek or Soochipara Falls,
                900 Kandi Glass Bridge. Meals Included. Bus from Bangalore.
              </p>

              <ul className="space-y-2 text-[18px] leading-[1.5] text-[#111] list-disc pl-7">
                <li>
                  Day 1: Banasura Sagar Dam — one of India's largest earthen
                  dams
                </li>

                <li>
                  Day 1: Lakidi View — panoramic Western Ghats valley viewpoint
                </li>

                <li>
                  Day 1: Zipline at Banasura Sagar Dam — across the water spread
                </li>

                <li>
                  Day 1: Tea Plantation Visit — rolling Wayanad tea estate
                </li>

                <li>
                  Day 2: Chembra Peak Trek OR Soochipara Falls (your choice)
                </li>

                <li>
                  Day 2: 900 Kandi Glass Bridge — hanging glass walkway over
                  valley canopy
                </li>

                <li>
                  Day 2: Pookode Lake — the freshwater lake in the Nilgiri
                  foothills
                </li>
              </ul>

              <div className="mt-5 text-[16px] leading-[1.5] text-[#d40000]">
                <span className="font-bold">✦ Unique:</span> 2 Breakfasts + 1
                Dinner included. Only STC Bangalore package with meals. 3 bus
                pickups — no KSR trip needed.
              </div>

              <div className="mt-4 text-[14px] text-[#777] leading-[1.5]">
                🚌 Marathahalli (9PM) · Silk Board (10PM) · Majestic (11PM) ·
                Friday nights only
              </div>
            </div>

            {/* RIGHT */}
            <div className="bg-[#e9edf2] p-8 flex flex-col items-center text-center">
              <div className="text-[#c40000] text-[58px] font-bold leading-none">
                ₹5,999
              </div>

              <div className="text-[#7a7a7a] text-[16px] mt-3">
                per person · 1N/2D
              </div>

              <div className="mt-2 text-[#6d6d6d] text-[18px]">
                🍽 Meals Included
              </div>

              <div className="text-[#8a8a8a] text-[16px] mt-1">
                Friday nights
              </div>

              <button
                className="
          w-full
          mt-8
          bg-[#35591f]
          hover:bg-[#2a4518]
          transition
          text-white
          font-bold
          text-[18px]
          py-4
        "
              >
                Book 2-Day Wayanad →
              </button>

              <div className="mt-8 text-[#2a6fc5] text-[18px]">
                📞 +91 8886051052
              </div>
            </div>
          </div>
        </div>

        {/* PACKAGE 2 */}
        <div className="my-14 w-[80%] mx-auto">
          <h2 className="text-[#2b69b1] text-[20px] md:text-[24px] font-bold mb-8">
            Package 2 of 2
          </h2>

          <div className="w-full border border-[#b7b7b7] bg-[#e5ebf3] grid grid-cols-1 md:grid-cols-[1fr_465px] overflow-hidden">
            {/* LEFT */}
            <div className="border-b md:border-b-0 md:border-r border-[#b7b7b7] p-6 bg-[#e5ebf3]">
              <h3 className="text-[#214b78] text-[22px] font-bold mb-2">
                🚂 3-Day Wayanad Train Tour + Mysore Palace
              </h3>

              <p className="text-[#555] italic text-[17px] leading-[1.45] mb-4">
                2 days in Wayanad + Mysore Palace on return. Train from KSR. 2
                nights homestay.
              </p>

              <ul className="space-y-2 text-[18px] leading-[1.5] text-[#111] list-disc pl-7">
                <li>
                  Day 1: Banasura Sagar Dam · Lakidi View · Zipline · Night
                  homestay Wayanad
                </li>

                <li>
                  Day 2: Chembra Peak Trek OR Soochipara Falls (your choice)
                </li>

                <li>
                  Day 2: 900 Kandi Glass Bridge · Pookode Lake + Shopping ·
                  Night homestay Wayanad
                </li>

                <li>
                  Day 3: Mysore Palace — Amba Vilas · Return train to Bangalore
                </li>

                <li>
                  2 nights Wayanad homestay · More time to explore the hills
                </li>

                <li>Train from KSR Bengaluru — Thursday & Friday departures</li>
              </ul>

              <div className="mt-5 text-[16px] leading-[1.5] text-[#d40000]">
                <span className="font-bold">✦ Unique:</span> Mysore Palace on
                Day 3 return. 2 full days in Wayanad. Train travel from KSR.
              </div>

              <div className="mt-4 text-[14px] text-[#777] leading-[1.5]">
                🚉 KSR Bengaluru Railway Station · Thursday & Friday
              </div>
            </div>

            {/* RIGHT */}
            <div className="bg-[#edf1f6] p-8 flex flex-col items-center text-center">
              <div className="text-[#c40000] text-[58px] font-bold leading-none">
                ₹7,499
              </div>

              <div className="text-[#7a7a7a] text-[16px] mt-3">
                per person · 2N/3D
              </div>

              <div className="text-[#8a8a8a] text-[18px] mt-2">
                Thu & Fri weekly
              </div>

              <button
                className="
          w-full
          mt-8
          bg-[#214b78]
          hover:bg-[#173552]
          transition
          text-white
          font-bold
          text-[18px]
          py-4
        "
              >
                Book 3-Day Wayanad →
              </button>

              <div className="mt-8 text-[#2a6fc5] text-[18px]">
                📞 +91 8886051052
              </div>
            </div>
          </div>
        </div>
        <div className="my-14 w-[80%] mx-auto overflow-x-auto bg-white ">
          <p className="text-[26px] font-bold text-[#234f7d] mb-6">
            Compare Both Wayanad Packages from Bangalore
          </p>

          <table className="w-full border-collapse border border-[#b5b5b5] text-left">
            <colgroup>
              <col className="w-[24%]" />
              <col className="w-[38%]" />
              <col className="w-[38%]" />
            </colgroup>

            <thead>
              <tr>
                <th className="border border-[#b5b5b5] bg-white p-4"></th>

                <th className="border border-[#b5b5b5] bg-[#35591f] text-white p-4 text-[18px] font-bold">
                  🚌 Pkg 1 · 2-Day Weekend · Meals Included
                </th>

                <th className="border border-[#b5b5b5] bg-[#214b78] text-white p-4 text-[18px] font-bold">
                  🚂 Pkg 2 · 3-Day Train Tour · Mysore Palace
                </th>
              </tr>
            </thead>

            <tbody className="text-[#111]">
              {/* PRICE */}
              <tr>
                <td className="border border-[#b5b5b5] p-4 font-bold text-[16px]">
                  Price
                </td>

                <td className="border border-[#b5b5b5] p-4 bg-[#dde8d5] text-center text-[#35591f] font-bold text-[20px]">
                  ₹5,999
                </td>

                <td className="border border-[#b5b5b5] p-4 bg-[#dfe5ee] text-center text-[#214b78] font-bold text-[20px]">
                  ₹7,499
                </td>
              </tr>

              {/* DURATION */}
              <tr>
                <td className="border border-[#b5b5b5] p-4 font-bold text-[16px]">
                  Duration
                </td>

                <td className="border border-[#b5b5b5] p-4 text-center text-[16px]">
                  2 Days / 1 Night
                </td>

                <td className="border border-[#b5b5b5] p-4 text-center text-[16px]">
                  3 Days / 2 Nights
                </td>
              </tr>

              {/* TRANSPORT */}
              <tr>
                <td className="border border-[#b5b5b5] p-4 font-bold text-[16px]">
                  Transport
                </td>

                <td className="border border-[#b5b5b5] p-4 text-[#35591f] font-bold text-[16px]">
                  Bus — Tempo Traveller / Mini Bus
                </td>

                <td className="border border-[#b5b5b5] p-4 text-[#214b78] font-bold text-[16px]">
                  Train — Sleeper Non-AC from KSR
                </td>
              </tr>

              {/* PICKUP */}
              <tr>
                <td className="border border-[#b5b5b5] p-4 font-bold text-[16px]">
                  Pickup
                </td>

                <td className="border border-[#b5b5b5] p-4 bg-[#dde8d5] text-[15px] leading-[1.45]">
                  Marathahalli (9PM) · Silk Board (10PM) · Majestic (11PM) ·
                  Friday nights
                </td>

                <td className="border border-[#b5b5b5] p-4 bg-[#dfe5ee] text-[15px] leading-[1.45]">
                  KSR Bengaluru Railway Station · Thursday & Friday
                </td>
              </tr>

              {/* MEALS */}
              <tr>
                <td className="border border-[#b5b5b5] p-4 font-bold text-[16px]">
                  Meals
                </td>

                <td className="border border-[#b5b5b5] p-4 bg-[#dde8d5] text-[#35591f] font-bold text-[16px]">
                  ✅ 2 Breakfasts + 1 Dinner INCLUDED
                </td>

                <td className="border border-[#b5b5b5] p-4 text-[#d00000] font-bold text-[16px]">
                  ❌ Food not included
                </td>
              </tr>

              {/* DAY 1 */}
              <tr>
                <td className="border border-[#b5b5b5] p-4 font-bold text-[16px]">
                  Day 1
                </td>

                <td className="border border-[#b5b5b5] p-4 text-[15px] leading-[1.45]">
                  Banasura Sagar Dam · Lakidi View · Zipline · Tea Plantation
                </td>

                <td className="border border-[#b5b5b5] p-4 text-[15px] leading-[1.45]">
                  Reach Mysore · Drive to Wayanad · Banasura Sagar Dam · Lakidi
                  View · Zipline
                </td>
              </tr>

              {/* DAY 2 */}
              <tr>
                <td className="border border-[#b5b5b5] p-4 font-bold text-[16px]">
                  Day 2
                </td>

                <td className="border border-[#b5b5b5] p-4 text-[15px] leading-[1.45]">
                  Chembra Peak Trek OR Soochipara Falls · 900 Kandi Glass Bridge
                  · Pookode Lake
                </td>

                <td className="border border-[#b5b5b5] p-4 text-[15px] leading-[1.45]">
                  Chembra Peak Trek OR Soochipara Falls · 900 Kandi Glass Bridge
                  · Pookode Lake + Shopping
                </td>
              </tr>

              {/* DAY 3 */}
              <tr>
                <td className="border border-[#b5b5b5] p-4 font-bold text-[16px]">
                  Day 3
                </td>

                <td className="border border-[#b5b5b5] p-4 text-center text-[#777] text-[18px]">
                  —
                </td>

                <td className="border border-[#b5b5b5] p-4 text-[15px] leading-[1.45]">
                  Mysore Palace (Amba Vilas) · Return train to Bangalore
                </td>
              </tr>

              {/* NIGHTS */}
              <tr>
                <td className="border border-[#b5b5b5] p-4 font-bold text-[16px]">
                  Nights
                </td>

                <td className="border border-[#b5b5b5] p-4 text-[15px]">
                  1 night — Wayanad homestay
                </td>

                <td className="border border-[#b5b5b5] p-4 text-[15px]">
                  2 nights — Wayanad homestay (both nights)
                </td>
              </tr>

              {/* MYSORE PALACE */}
              <tr>
                <td className="border border-[#b5b5b5] p-4 font-bold text-[16px]">
                  Mysore Palace
                </td>

                <td className="border border-[#b5b5b5] p-4 text-[#d00000] font-bold text-[16px]">
                  ❌ Not included
                </td>

                <td className="border border-[#b5b5b5] p-4 bg-[#dfe5ee] text-[#214b78] font-bold text-[16px]">
                  ✅ Day 3 — return stop
                </td>
              </tr>

              {/* ACCOMMODATION */}
              <tr>
                <td className="border border-[#b5b5b5] p-4 font-bold text-[16px]">
                  Accommodation
                </td>

                <td className="border border-[#b5b5b5] p-4 text-[15px]">
                  Homestay — triple/quad sharing
                </td>

                <td className="border border-[#b5b5b5] p-4 text-[15px]">
                  Homestay — triple/quad sharing
                </td>
              </tr>

              {/* CHOOSE IF */}
              <tr>
                <td className="border border-[#b5b5b5] p-4 font-bold text-[16px]">
                  Choose if...
                </td>

                <td className="border border-[#b5b5b5] p-4 bg-[#eef5e6] text-[15px] leading-[1.4]">
                  Meals convenience matters. Bus pickup is easier. One weekend
                  is enough. Budget is ₹5,999.
                </td>

                <td className="border border-[#b5b5b5] p-4 bg-[#edf3fb] text-[15px] leading-[1.4]">
                  You want 2 full days in Wayanad, train travel from KSR, and
                  Mysore Palace on the way home.
                </td>
              </tr>

              {/* BUTTONS */}
              <tr>
                <td className="border border-[#b5b5b5]"></td>

                <td className="border border-[#b5b5b5] p-2">
                  <button className="w-full bg-[#35591f] hover:bg-[#294518] transition text-white font-bold text-[18px] py-3">
                    Book 2-Day Wayanad →
                  </button>
                </td>

                <td className="border border-[#b5b5b5] p-2">
                  <button className="w-full bg-[#214b78] hover:bg-[#183553] transition text-white font-bold text-[18px] py-3">
                    Book 3-Day Wayanad →
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="my-14 w-[80%] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 border border-[#b7b7b7] overflow-hidden mt-5">
            {/* INCLUDED */}
            <div className="bg-[#dde8d5] p-6 border-b md:border-b-0 md:border-r border-[#b7b7b7]">
              <div className="flex items-center gap-3 text-[#214b78] font-bold text-[20px] mb-6">
                <span className="text-[22px]">✅</span>
                <span>Always Included</span>
              </div>

              <ul className="list-disc pl-7 space-y-3 text-[16px] leading-[1.5] text-[#111]">
                <li>
                  Bus tickets both ways (Pkg 1 — Tempo Traveller/Mini Bus)
                </li>

                <li>
                  Train transportation as per itinerary (Pkg 2 — confirm train
                  tickets with operations)
                </li>

                <li>
                  🍽 2 Breakfasts + 1 Dinner — Pkg 1 ONLY (unique in STC
                  Bangalore portfolio)
                </li>

                <li>
                  Homestay accommodation — 1 night (Pkg 1) · 2 nights (Pkg 2)
                </li>

                <li>Trip captain throughout</li>

                <li>Toll charges</li>
              </ul>
            </div>

            {/* NOT INCLUDED */}
            <div className="bg-[#f3f3f3] p-6">
              <div className="flex items-center gap-3 text-[#777] font-bold text-[20px] mb-6">
                <span className="text-[22px]">❌</span>
                <span>Not Included</span>
              </div>

              <ul className="list-disc pl-7 space-y-3 text-[16px] leading-[1.5] text-[#7a7a7a]">
                <li>Entry tickets to all attractions</li>

                <li>Food (Pkg 2 — meals not included)</li>

                <li>GST @ 5%</li>

                <li>Personal expenses and shopping</li>
              </ul>
            </div>
          </div>
        </div>
        <Reviews />
        <FAQ faqs={faqs} />
        <ContactForm />
        <WhyChooseUs features={features} />
        <FinalCTA
          title="Banasura Sagar Dam. Chembra Peak. The 900 Kandi Glass Bridge. Two Ways In from Bangalore."
          description="The bus leaves Friday night at 9PM from Marathahalli — with breakfast waiting at a Wayanad homestay in the morning. The train leaves from KSR on Thursday or Friday — and comes back via Mysore Palace. Both arrive in the same misty hills, at the same dam, on the same glass bridge over the same valley canopy. Choose the package that fits your weekend. Every week, without fail"
          primaryLink="/destinations/north-india"
          primaryLabel="2D Wayanad  ₹5,999  ·  Meals Included →"
          secondaryLink="/destinations/south-india"
          secondaryLabel="3D Wayanad  ₹7,499  ·  Mysore Palace →"
        />
      </div>
    </>
  );
}
