import ContactForm from "@/components/ContactForm";
import DescriptionBox from "@/components/DescriptionBox";
import FAQ from "@/components/FAQs";
import FinalCTA from "@/components/FinalCTA";
import Reviews from "@/components/Reviews";
import WhyChooseUs from "@/components/WhyChooseUs";
import { BadgeCheck, Compass, Phone, Star, TreePalm } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import React from "react";

export const metadata = {
  title:
    "Coorg Tour Package from Bangalore 2026 — ₹3,999 Onwards | Abbey Falls, Mandalpatti & Mysore | STC",
  description:
    "Book Coorg group tour packages from Bangalore from ₹3,999. 2-day bus tour — pickup at Marathahalli, Silk Board & Majestic. Mandalpatti Peak, Abbey Falls, Zipline, Glass Bridge, Raja Seat, Nisargadhama. 3-day train tour: Coorg + Chikmagalur — Mullayanagiri Peak, Belur Temple, Thu & Fri from KSR.",
  keywords:
    "coorg tour package from bangalore — 1,600/mo GKP Bangalore + 2,900/mo GKP India. coorg packages from bangalore (1,600/mo) · coorg trip from bangalore (880/mo GKP BLR) · bangalore mysore coorg tour package (90/mo GKP BLR + 480/mo GKP India) · coorg trip from bangalore for 2 days (110/mo) · coorg tour packages from bangalore for 3 days (50/mo)",
};
const packages = [
  {
    title: "2-Day Coorg Weekend",
    price: "₹3,999",
    meta: "2D/1N · Bus",
    bg: "bg-green-50",
    border: "border-green-200",
    button: "bg-green-900 hover:bg-green-800",
    pickup: "Marathahalli · Silk Board · Majestic · Friday nights",
    highlights: [
      "Day 1: Mandalpatti Peak · Abbey Waterfalls · Zipline · Glass Bridge · Raja Seat",
      "Day 2: Elephant Camp · Namdroling Golden Temple · Nisargadhama · Hanging Bridge",
      "Zipline + Glass Bridge — exclusive to this package",
      "Raja Seat — the royal sunset viewpoint of Madikeri",
      "₹3,999 — most affordable Coorg group tour from Bangalore",
    ],
    footer: "Best for: quick weekend · bus pickup · adventure + nature",
    buttonText: "View 2-Day Coorg Weekend →",
    slug: "coorg-the-scotland-of-india-z64n",
  },
  {
    title: "3-Day Coorg + Chikmagalur",
    price: "₹5,999",
    meta: "3D/2N · Train from KSR",
    bg: "bg-blue-50",
    border: "border-blue-200",
    button: "bg-blue-900 hover:bg-blue-800",
    pickup: "KSR Bengaluru Railway Station · Thursday & Friday",
    highlights: [
      "Day 1: Golden Temple · Harangi Dam · Harangi Elephant Camp (Coorg)",
      "Day 2: Mandalpatti Peak · Abbey Waterfalls · Mullayanagiri Peak (Chikmagalur)",
      "Day 3: Belur Hoysala Temple · Mysore sightseeing · Return Bangalore by 6:30 PM",
      "TWO destinations in 3 days — Coorg + Chikmagalur",
      "Mullayanagiri — highest point in Karnataka at 1,930 metres",
    ],
    footer: "Best for: two destinations · train travel · heritage + peaks",
    buttonText: "View 3-Day Coorg + Chikmagalur →",
    slug: "ooty-coonoor-ex-blr",
  },
];
const faqs = [
  {
    question:
      "What is the difference between the 2-day and 3-day Coorg packages from Bangalore?",
    answer:
      "The 2-day Coorg package (₹3,999) departs Friday night by bus from Marathahalli (9PM), Silk Board (10PM), and Majestic (11PM). It covers Mandalpatti Peak, Abbey Waterfalls, Zipline, Glass Bridge, and Raja Seat on Day 1, and the Elephant Camp, Namdroling Golden Temple, Nisargadhama, and Hanging Bridge on Day 2. The 3-day Coorg & Chikmagalur package (₹5,999) departs by train from KSR Bengaluru on Thursday or Friday. Day 1 is Coorg — Namdroling Golden Temple, Harangi Dam, and Harangi Elephant Camp. Day 2 is Mandalpatti + Abbey Falls + Mullayanagiri Peak in Chikmagalur. Day 3 covers Belur Temple and Mysore sightseeing before returning to Bangalore by 6:30 PM.",
  },
  {
    question: "What is Raja Seat in Coorg?",
    answer:
      "Raja Seat is the royal garden and viewpoint of Madikeri, the district headquarters of Coorg (Kodagu). Built by the Coorg kings, it sits on a ridge above the town and offers a panoramic view of the Western Ghats valleys below. It is best known for its sunset — the view across the valley at dusk, with the mist rising from the coffee estates. Raja Seat is exclusive to STC's 2-day Coorg bus package — it is not included in the 3-day train tour",
  },
  {
    question:
      "What is Abbey Falls and why does it get 110,000 searches a month?",
    answer:
      "Abbey Falls (locally called Abbi Falls) is a 70-foot waterfall on the Kaveri River in Madikeri, surrounded by coffee and spice estate forest. The falls are most dramatic during and just after the monsoon (June–October) when the volume is at its peak. Abbey Falls is consistently one of the most searched natural landmarks in Karnataka because it is visually striking, accessible by a short forest walk, and the surrounding coffee estate scenery is distinctive. Both STC Coorg packages include Abbey Falls — on Day 1 of the 2-day bus tour and Day 2 of the 3-day train tour.",
  },
  {
    question: "What is the best time to visit Coorg from Bangalore?",
    answer:
      "October to March is the best time — the weather is cool and clear, the coffee estates are fragrant, and Abbey Falls is still flowing from the monsoon. April to May is warmer but pleasant at altitude. Monsoon (June–September) turns Coorg intensely green and Abbey Falls is spectacular, but some roads and activities including Mandalpatti can be restricted. STC Coorg packages run weekly year-round.",
  },
  {
    question:
      "Is the bus pickup convenient from different parts of Bangalore for the 2-day package?",
    answer:
      "The 2-day Coorg bus (Package 1) has 3 pickup points covering east, south, and central Bangalore: Marathahalli — Tansi Honda at 9:00 PM, Silk Board — Nahdi Mandi Restaurant at 10:00 PM, and Majestic — Metro Station East Entrance at 11:00 PM. Friday nights only. The 3-day Coorg + Chikmagalur train package departs from KSR Bengaluru Railway Station (Krantivira Sangolli Rayanna) on Thursday and Friday evenings.",
  },
];
const features = [
  {
    title: "4.8 Google Rating",
    description:
      "200+ five-star reviews. Our 4.8 rating is earned trip by trip.",
    icon: <Star className="w-6 h-6" />,
  },
  {
    title: "MSME + ATOAI Certified",
    description:
      "Recognised by MSME, StartupIndia, and ATOAI — India’s top travel bodies.",
    icon: <BadgeCheck className="w-6 h-6" />,
  },
  {
    title: "Expert Trip Captains",
    description:
      "Every STC trip has a dedicated captain — from pickup to drop, fully guided.",
    icon: <Compass className="w-8 h-8 text-gray-700" />,
  },
  {
    title: "Coorg + Chikmagalur in One Trip",
    description:
      "STC's 3-day tour is the only group package from Bangalore that covers both Coorg AND Chikmagalur in a single departure — Harangi Dam, Mullayanagiri Peak (Karnataka's highest), and the 12th-century Belur Temple all in one circuit.",
    icon: <TreePalm className="w-8 h-8 text-gray-700" />,
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
            src="/southindia/banners/coorg.png"
            alt="Coorg Cover"
            className="w-full h-full object-cover bg-bottom"
          />
        </div>

        {/* Title */}
        <h1 className="text-center text-3xl md:text-4xl font-semibold mt-10 mb-8 text-brand">
          Coorg from Bangalore Tour Packages
        </h1>
        <DescriptionBox
          title="Abbey Falls. Mandalpatti Peak. Raja Seat Sunset. Zipline. Glass Bridge. And Two Days of Pure Peace. From ₹3,999."
          content="There is a moment on the drive into Coorg when the Western Ghats close around the road and the coffee estates appear — green and dense and wet, even in the driest month. This is Kodagu. The district that produces 30% of India's coffee, that has more rainfall per square kilometre than almost anywhere in the subcontinent, and that contains Abbey Falls — one of the most searched natural landmarks in Karnataka at 110,000 searches a month. STC runs two Coorg group tour packages from Bangalore: a 2-day bus weekend from ₹3,999 with Mandalpatti Peak, Abbey Falls, Zipline, Glass Bridge, and Raja Seat's famous sunset viewpoint — and a 3-day train tour from ₹5,999 that adds all of Chikmagalur to the circuit: Mullayanagiri Peak (Karnataka's highest at 1,930 metres), Jhari Falls, and the 12th-century Hoysala temple at Belur."
        />
        <div className="w-[90%] lg:w-[30%] mx-auto mt-5">
          <Link
            href="tel:+918886051052"
            className="flex items-center gap-2 hover:underline bg-brand px-5 py-3 w-full text-white text-center justify-center rounded-2xl"
          >
            <Phone size={16} />
            Not sure which package? Call us at +91 8886051052
          </Link>
        </div>
        <section className="w-full py-12 px-4 bg-white">
          <h2 className="text-2xl md:text-3xl font-semibold text-center text-slate-800 mb-10">
            Choose Your Coorg Weekend
          </h2>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
            {packages.map((pkg, idx) => (
              <div
                key={idx}
                className={`rounded-2xl border ${pkg.border} ${pkg.bg} p-6 flex flex-col justify-between shadow-sm`}
              >
                {/* Header */}
                <div>
                  <h3 className="text-xl font-semibold text-slate-800">
                    {pkg.title}
                  </h3>

                  <p className="text-red-600 font-semibold mt-1">
                    {pkg.price} · {pkg.meta}
                  </p>

                  <p className="text-sm text-slate-600 mt-2">{pkg.pickup}</p>

                  {/* Highlights */}
                  <ul className="mt-4 space-y-2 text-slate-700 text-sm">
                    {pkg.highlights.map((item, i) => (
                      <li key={i} className="leading-relaxed">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer */}
                <div className="mt-6">
                  <p className="text-xs text-slate-500 italic mb-4">
                    {pkg.footer}
                  </p>

                  <Link
                    href={`/tour/${pkg.slug}`}
                    className={`w-full py-3 rounded-xl text-white font-medium transition ${pkg.button} px-5`}
                  >
                    {pkg.buttonText}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* 2-Day Coorg Weekend */}
        <div className="w-full max-w-4xl border border-[#bdbdbd] bg-[#e9f2e3] mx-auto grid grid-cols-1 md:grid-cols-[1fr_390px] overflow-hidden">
          {/* LEFT SIDE */}
          <div className="border-b md:border-b-0 md:border-r border-[#bdbdbd] p-4 sm:p-5 md:p-5 bg-[#dfeeda]">
            <h2 className="text-[#1f4d2e] text-[18px] md:text-[16px] font-bold mb-2 leading-snug">
              🚌 2-Day Coorg Weekend Bus Tour
            </h2>

            <p className="text-[#555] italic leading-[1.6] mb-5 text-[14px] md:text-[15px]">
              Mandalpatti Peak, Abbey Waterfalls, Zipline, Glass Bridge, Raja
              Seat Sunset. Bus from Bangalore.
            </p>

            <div className="space-y-2 text-[14px] leading-[1.6] text-[#222]">
              <p>
                Day 1: Mandalpatti Peak — Coorg's highest and most dramatic
                viewpoint
              </p>

              <p>
                Day 1: Abbey Waterfalls — the 70-foot cascade in the coffee
                estate forest
              </p>

              <p>
                Day 1: Zipline + Glass Bridge — adventure above the Western
                Ghats valley
              </p>

              <p>
                Day 1: Raja Seat — royal garden and Coorg's most famous sunset
                viewpoint
              </p>

              <p>
                Day 2: Elephant Camp — Dubare or Coorg elephant reserve
                experience
              </p>

              <p>
                Day 2: Namdroling Monastery (Golden Temple) — Tibetan Buddhist
                monastery
              </p>

              <p>
                Day 2: Nisargadhama + Hanging Bridge — bamboo island in the
                Kaveri River
              </p>
            </div>

            <div className="mt-5 font-bold text-[#b00000] leading-[1.6] text-[14px]">
              ♦ Unique: Zipline + Glass Bridge + Raja Seat + Nisargadhama — none
              in the 3-day package.
            </div>

            <div className="mt-6 text-[13px] md:text-[14px] text-[#666] leading-[1.6]">
              🚌 Marathahalli (9PM) · Silk Board (10PM) · Majestic (11PM) ·
              Friday nights only
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="p-5 sm:p-6 text-center flex flex-col items-center justify-center bg-[#f6fbff]">
            <div className="text-[#d00000] text-[36px] sm:text-[40px] md:text-[44px] font-bold leading-none">
              ₹3,999
            </div>

            <div className="text-[#777] text-[13px] md:text-[14px] mt-2">
              per person · 1N/2D
            </div>

            <div className="mt-6 text-[18px] md:text-[20px] text-[#111] font-medium">
              Friday nights
            </div>

            <Link
              href="/tour/coorg-the-scotland-of-india-z64n"
              className="
        w-full
        mt-8 md:mt-10
        bg-[#2f4f1f]
        hover:bg-[#243b17]
        transition-colors
        duration-300
        text-white
        font-bold
        text-[15px] md:text-[16px]
        py-3.5 md:py-4
        rounded-md
      "
            >
              Book 2-Day Coorg →
            </Link>

            <div className="mt-6 text-[#2870c7] text-[15px] md:text-[16px] font-medium">
              <Link href="tel:+918886051052">📞 +91 8886051052</Link>
            </div>
          </div>
        </div>

        {/* 3-Day Coorg + Chikmagalur */}
        <div className="w-full max-w-4xl border border-[#bdbdbd] bg-[#e9edf2] mx-auto grid grid-cols-1 md:grid-cols-[1fr_390px] overflow-hidden mt-10 md:mt-20">
          {/* LEFT SIDE */}
          <div className="border-b md:border-b-0 md:border-r border-[#bdbdbd] p-4 sm:p-5 md:p-5 bg-[#e6edf5]">
            <h2 className="text-[#234f7d] text-[18px] md:text-[16px] font-bold mb-2 leading-snug">
              🚂 3-Day Coorg & Chikmagalur Train Tour
            </h2>

            <p className="text-[#555] italic leading-[1.6] mb-5 text-[14px] md:text-[15px]">
              Golden Temple, Harangi Dam, Elephant Camp (Coorg), Mullayanagiri
              Peak, Jhari Falls (Chikmagalur), Belur Temple. Train from KSR.
            </p>

            <div className="space-y-2 text-[14px] leading-[1.6] text-[#222]">
              <p>
                Day 1: Namdroling Golden Temple · Harangi Dam · Harangi Elephant
                Camp · Night Coorg
              </p>

              <p>
                Day 2: Mandalpatti Peak (jeep) · Abbey Waterfalls · Drive to
                Chikmagalur
              </p>

              <p>Day 2: Mullayanagiri Peak · Jhari Falls · Night Chikmagalur</p>

              <p>
                Day 3: Belur Hoysala Temple · Mysore sightseeing · Return train
              </p>

              <p>
                TWO destinations, TWO nights in different regions, return by
                6:30 PM
              </p>

              <p>
                Train tickets both ways included · Thu & Fri departures from KSR
              </p>
            </div>

            <div className="mt-5 font-bold text-[#c40000] leading-[1.6] text-[14px]">
              ♦ Unique: Harangi Dam + Harangi Elephant Camp + Mullayanagiri Peak
              + Belur Temple — exclusive to this package.
            </div>

            <div className="mt-6 text-[13px] md:text-[14px] text-[#666] leading-[1.6]">
              🚉 KSR Bengaluru Railway Station · Thursday & Friday
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="p-5 sm:p-6 text-center flex flex-col items-center justify-center bg-[#f3f6fa]">
            <div className="text-[#d00000] text-[36px] sm:text-[40px] md:text-[44px] font-bold leading-none">
              ₹5,999
            </div>

            <div className="text-[#777] text-[13px] md:text-[14px] mt-2">
              per person · 2N/3D
            </div>

            <div className="mt-6 text-[18px] md:text-[20px] text-[#111] font-medium">
              Thu & Fri weekly
            </div>

            <Link
              href="/tour/ooty-coonoor-ex-blr"
              className="
    w-full
    mt-8 md:mt-10
    bg-[#234f7d]
    hover:bg-[#1b3d62]
    transition-colors
    duration-300
    text-white
    font-bold
    text-[15px] md:text-[16px]
    py-3.5 md:py-4
    rounded-md
    text-center
    block
  "
            >
              Book 3-Day Coorg + Chikmagalur →
            </Link>

            <div className="mt-6 text-[#2870c7] text-[15px] md:text-[16px] font-medium">
              <Link href="tel:+918886051052">📞 +91 8886051052</Link>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="w-[80%] mx-auto overflow-x-auto bg-white my-10">
          <p className="text-2xl text-[#234f7d] font-semibold mb-4">
            Compare Both Coorg Packages from Bangalore
          </p>

          <table className="w-full text-sm text-left border-collapse border border-neutral-300">
            <colgroup>
              <col className="w-[22%]" />
              <col className="w-[39%]" />
              <col className="w-[39%]" />
            </colgroup>

            <thead>
              <tr className="border-b border-neutral-300">
                <th className="p-4 bg-white"></th>

                <th className="p-4 text-white font-semibold bg-[#355d1d]">
                  🚌 Pkg 1 : 2-Day Coorg Weekend
                </th>

                <th className="p-4 text-white font-semibold bg-[#234f7d]">
                  🚂 Pkg 2 : 3-Day Coorg + Chikmagalur
                </th>
              </tr>
            </thead>

            <tbody className="text-neutral-800">
              {/* Price */}
              <tr className="border-b border-neutral-300">
                <td className="p-4 font-medium">Price</td>
                <td className="p-4 font-semibold text-[#355d1d] bg-[#e8f0df]">
                  ₹3,999
                </td>
                <td className="p-4 font-semibold text-[#234f7d] bg-[#e8eef6]">
                  ₹5,999
                </td>
              </tr>

              {/* Duration */}
              <tr className="border-b border-neutral-300">
                <td className="p-4 font-medium">Duration</td>
                <td className="p-4">2 Days / 1 Night</td>
                <td className="p-4">3 Days / 2 Nights</td>
              </tr>

              {/* Transport */}
              <tr className="border-b border-neutral-300">
                <td className="p-4 font-medium">Transport</td>
                <td className="p-4 font-semibold text-[#355d1d]">
                  Bus — Tempo Traveller
                </td>
                <td className="p-4 font-semibold text-[#234f7d]">
                  Train — Sleeper Non-AC (tickets included)
                </td>
              </tr>

              {/* Pickup */}
              <tr className="border-b border-neutral-300">
                <td className="p-4 font-medium">Pickup</td>
                <td className="p-4">
                  Marathahalli (9PM) · Silk Board (10PM) · Majestic (11PM)
                  <br />
                  Friday nights
                </td>
                <td className="p-4">
                  KSR Bengaluru Railway Station · Thursday & Friday
                </td>
              </tr>

              {/* Day 1 */}
              <tr className="border-b border-neutral-300">
                <td className="p-4 font-medium">Day 1</td>
                <td className="p-4">
                  Mandalpatti Peak · Abbey Waterfalls · Zipline · Glass Bridge ·
                  Raja Seat
                </td>
                <td className="p-4">
                  Namdroling Golden Temple · Harangi Dam · Harangi Elephant Camp
                  · Night Coorg
                </td>
              </tr>

              {/* Day 2 */}
              <tr className="border-b border-neutral-300">
                <td className="p-4 font-medium">Day 2</td>
                <td className="p-4">
                  Elephant Camp · Namdroling Golden Temple · Shopping ·
                  Nisargadhama · Hanging Bridge
                </td>
                <td className="p-4">
                  Mandalpatti Peak (jeep) · Abbey Waterfalls · Mullayanagiri
                  Peak · Jhari Falls · Night Chikmagalur
                </td>
              </tr>

              {/* Day 3 */}
              <tr className="border-b border-neutral-300">
                <td className="p-4 font-medium">Day 3</td>
                <td className="p-4 text-neutral-400 text-center">—</td>
                <td className="p-4">
                  Belur Hoysala Temple · Mysore sightseeing · Return to
                  Bangalore by 6:30 PM
                </td>
              </tr>

              {/* Zipline + Glass Bridge */}
              <tr className="border-b border-neutral-300">
                <td className="p-4 font-medium">Zipline + Glass Bridge</td>
                <td className="p-4 text-[#355d1d] font-semibold bg-[#eef5e6]">
                  ✅ Day 1 — EXCLUSIVE
                </td>
                <td className="p-4 text-red-600 font-semibold">
                  ❌ Not included
                </td>
              </tr>

              {/* Raja Seat */}
              <tr className="border-b border-neutral-300">
                <td className="p-4 font-medium">Raja Seat</td>
                <td className="p-4 text-[#355d1d] font-semibold bg-[#eef5e6]">
                  ✅ Day 1 — royal sunset viewpoint
                </td>
                <td className="p-4 text-red-600 font-semibold">
                  ❌ Not included
                </td>
              </tr>

              {/* Nisargadhama */}
              <tr className="border-b border-neutral-300">
                <td className="p-4 font-medium">Nisargadhama</td>
                <td className="p-4 text-[#355d1d] font-semibold bg-[#eef5e6]">
                  ✅ Day 2 — EXCLUSIVE
                </td>
                <td className="p-4 text-red-600 font-semibold">
                  ❌ Not included
                </td>
              </tr>

              {/* Mullayanagiri Peak */}
              <tr className="border-b border-neutral-300">
                <td className="p-4 font-medium">Mullayanagiri Peak</td>
                <td className="p-4 text-red-600 font-semibold">
                  ❌ Not included
                </td>
                <td className="p-4 text-[#234f7d] font-semibold bg-[#edf3fb]">
                  ✅ Day 2 — Karnataka's highest peak
                </td>
              </tr>

              {/* Chikmagalur */}
              <tr className="border-b border-neutral-300">
                <td className="p-4 font-medium">Chikmagalur</td>
                <td className="p-4 text-red-600 font-semibold">
                  ❌ Not included
                </td>
                <td className="p-4 text-[#234f7d] font-semibold bg-[#edf3fb]">
                  ✅ Day 2 — Night 2
                </td>
              </tr>

              {/* Belur Temple */}
              <tr className="border-b border-neutral-300">
                <td className="p-4 font-medium">Belur Temple</td>
                <td className="p-4 text-red-600 font-semibold">
                  ❌ Not included
                </td>
                <td className="p-4 text-[#234f7d] font-semibold bg-[#edf3fb]">
                  ✅ Day 3 — 12th century Hoysala
                </td>
              </tr>

              {/* Harangi Dam + Elephant Camp */}
              <tr className="border-b border-neutral-300">
                <td className="p-4 font-medium">Harangi Dam + Elephant Camp</td>
                <td className="p-4 text-red-600 font-semibold">
                  ❌ Not included
                </td>
                <td className="p-4 text-[#234f7d] font-semibold bg-[#edf3fb]">
                  ✅ Day 1 — EXCLUSIVE
                </td>
              </tr>

              {/* Choose */}
              <tr>
                <td className="p-4 font-medium">Choose if...</td>

                <td className="p-4 bg-[#eef5e6]">
                  ₹3,999 budget. Bus pickup convenient.
                  <br />
                  Zipline + Glass Bridge + Raja Seat sunset are priorities.
                </td>

                <td className="p-4 bg-[#edf3fb]">
                  You want two destinations in 3 days.
                  <br />
                  Mullayanagiri Peak + Belur Temple + train from KSR.
                </td>
              </tr>

              {/* Buttons Row */}
              <tr>
                <td></td>

                <td className="p-2">
                  <Link
                    href="/tour/ooty-coonoor-weekend-getaway"
                    className="block w-full bg-[#355d1d] text-white font-semibold py-2 text-center"
                  >
                    Book 2-Day Coorg →
                  </Link>
                </td>

                <td className="p-2">
                  <Link
                    href="/tour/ooty-coonoor-ex-blr"
                    className="block w-full bg-[#234f7d] text-white font-semibold py-2 text-center"
                  >
                    Book 3-Day Coorg + Chikmagalur →
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="w-[80%] mx-auto my-10 overflow-x-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 border border-neutral-300 overflow-hidden">
            {/* Included */}
            <div className="bg-[#edf5e8] p-6 border-r border-neutral-300">
              <div className="flex items-center gap-2 text-[#234f7d] font-semibold text-lg mb-4">
                <span>✅</span> What’s Included
              </div>

              <ul className="list-disc pl-6 space-y-2 text-[15px] text-[#111] leading-[1.6]">
                <li>
                  Bus tickets both ways (Pkg 1 — Tempo Traveller/Mini Bus)
                </li>

                <li>
                  Train tickets both ways — Sleeper Non-AC (Pkg 2 — confirmed in
                  inclusions)
                </li>

                <li>
                  Accommodation — 1 night (Pkg 1)
                  <br />· 2 nights Pkg 2 (Night 1 Coorg, Night 2 Chikmagalur)
                </li>

                <li>Trip captain / guide throughout</li>

                <li>Driver charges, toll taxes, basic first aid</li>
              </ul>
            </div>

            {/* Not Included */}
            <div className="bg-[#f7f7f7] p-6">
              <div className="flex items-center gap-2 text-[#777] font-semibold text-lg mb-4">
                <span>❌</span> What’s Not Included
              </div>

              <ul className="list-disc pl-6 space-y-2 text-[15px] text-[#777] leading-[1.6]">
                <li>Food and all meals</li>

                <li>Entry tickets to all attractions</li>

                <li>GST @ 5%</li>

                <li>
                  Mandalpatti Jeep Ride — Pkg 2
                  <br />
                  (confirm with operations)
                </li>

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
          title="Abbey Falls. Mandalpatti. Raja Seat. Mullayanagiri. Belur Temple. Two Ways into the Western Ghats."
          description="The bus leaves Friday night from Marathahalli at 9PM for the 2-day Coorg weekend. The train leaves from KSR Thursday or Friday for the 3-day Coorg + Chikmagalur circuit. Both go into the same coffee-scented Western Ghats. One stays in Coorg and covers the zipline and the glass bridge and Raja Seat at sunset. The other stays two nights in two different districts and comes back via Belur Temple's 12th-century stonework. From ₹3,999"
          primaryLink="/tour/coorg-the-scotland-of-india-z64n"
          primaryLabel="2-Day Coorg  ₹3,999 →"
          secondaryLink="/tour/ooty-coonoor-ex-blr"
          secondaryLabel="3-Day Coorg + Chikmagalur ₹5,999 →"
        />
      </div>
    </>
  );
}
