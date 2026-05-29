import DescriptionBox from "@/components/DescriptionBox";
import FAQ from "@/components/FAQs";
import FinalCTA from "@/components/FinalCTA";
import Reviews from "@/components/Reviews";
import Image from "next/image";
import Link from "next/link";

import React from "react";

export const metadata = {
  title:
    "Pondicherry Tour Packages from Bangalore 2026 — ₹4,599 Onwards | Swadeshi Traveller",
  description:
    "Book Pondicherry group tour packages from Bangalore from ₹4,599. 2-day bus tour: 11 sights, pickup at Majestic/Domlur/Marathahalli/Silk Board. 3-day train tour via Pichavaram Mangrove + Mahabalipuram Shore Temple. Arunachalam + Pondicherry spiritual tour. Thu & Fri departures from KSR.",
  keywords:
    "pondicherry packages from bangalore — 880/mo GKP Bangalore · 720/mo GKP India · pondicherry tour package from bangalore (880/mo) · pondicherry trip from bangalore (590/mo KD 0) · bangalore to pondicherry holiday packages (880/mo) · bangalore to pondicherry package (170/mo) · 3 days trip from bangalore to pondicherry (90/mo KD 0) · pondicherry 2 days tour package from bangalore (50/mo)",
};
const faqs = [
  {
    question:
      "What is the difference between the 2-day and 3-day Pondicherry packages from Bangalore?",
    answer:
      "The 2-day package (₹4,599) departs Friday night by bus from Majestic, Domlur, Marathahalli, and Silk Board — returning Sunday. It covers 11 sightseeing spots including the French Colony, Sri Aurobindo Ashram, Pondicherry Museum, and Auroville Matrimandir. The two 3-day packages (₹6,999 each) depart by train from KSR Bengaluru on Thursday or Friday. Pkg B covers Pichavaram Mangrove boating, Paradise Beach, and Mahabalipuram Shore Temple. Pkg C starts with the Girivalam spiritual walk at Arunachalam on Day 1 before heading to Pondicherry on Day 2.",
  },
  {
    question:
      "Should I book the 3-day Mangrove tour (Pkg B) or the Arunachalam + Pondicherry tour (Pkg C) — they are the same price?",
    answer:
      "Both are ₹6,999 and both include Auroville and the French Colony on Day 2. The difference is Day 1 and Day 3. Pkg B starts at Pondicherry (Day 1 beaches + Auroville) and adds Pichavaram Mangrove Forest boating + Paradise Beach on Day 2, then Mahabalipuram Shore Temple and Panch Rathas on Day 3. Pkg C starts at Arunachalam with the 14km Girivalam walk at the eight Lingam temples (Day 1), then moves to Pondicherry on Day 2, and ends at Mahabalipuram Temple on Day 3. Choose Pkg B for a nature and heritage trip. Choose Pkg C if Arunachalam and the Girivalam are meaningful to you — it is a spiritually distinct experience.",
  },
  {
    question: "What is the best time to visit Pondicherry from Bangalore?",
    answer:
      "October to March is the best time — the weather is cool and dry, the sea is calm for beach walks, and the French Colony is at its most photogenic. April to June is warmer but manageable. Avoid July to September — heavy monsoon rains and rough seas make beach activities difficult and Pichavaram Mangrove boating may be restricted. All 3 STC packages run weekly through the season from KSR and Bangalore bus pickup points.",
  },
  {
    question: "What is the Girivalam walk at Arunachalam?",
    answer:
      "Girivalam is a 14km circumambulation of the sacred Arunachala Hill in Tiruvannamalai, stopping at eight Lingam temples placed at the eight cardinal directions around the hill. It is typically done in the evening and takes 3–5 hours to complete. It is a deeply meditative walk that thousands of pilgrims and travellers do every full moon night. STC's Pkg C (Arunachalam + Pondicherry) includes the Girivalam walk on Day 1 evening as the anchor experience of the trip — before continuing to Pondicherry on Day 2.",
  },
  {
    question: "Can I do a 2-day Pondicherry trip from Bangalore on a budget?",
    answer:
      "Yes — the 2-day Pondicherry weekend (₹4,599) is designed specifically as a Friday-night-to-Sunday group trip. The bus departs Friday night from Majestic (9PM), Domlur (9:30PM), Marathahalli (10PM), and Silk Board (11PM), arriving in Pondicherry Saturday morning. You get a full Saturday covering 11 sights across the French Colony, beaches, and Pondicherry's heritage quarter, plus a Sunday morning at Auroville Matrimandir before heading back. It is the most affordable way to see Pondicherry from Bangalore without compromising on the key experiences.",
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
            src="/southindia/banners/pondicherry.png"
            alt="Pondicherry Cover"
            className="w-full h-full object-cover bg-bottom"
          />
        </div>

        {/* Title */}
        <h1 className="text-center text-3xl md:text-4xl font-semibold mt-10 mb-8 text-brand">
          Pondicherry Tour Packages from Bangalore
        </h1>
        <DescriptionBox
          title="3 Packages. French Colony. Mangrove Forests. Arunachalam Girivalam. Mahabalipuram Shore Temple. From ₹4,599."
          content="Every STC Pondicherry package from Bangalore puts you in a place that feels like no other city in India — wide white boulevards lined with bougainvillea, Tamil fishermen at sunrise, and the smell of filter coffee drifting from ashram kitchens. The choice is how far you want to go: a 2-day French Colony weekend by bus, a 3-day coastal and heritage circuit by train via Pichavaram Mangrove Forest and Mahabalipuram Shore Temple, or a 3-day spiritual and coastal journey starting with the Girivalam walk at Arunachalam"
        />
        <div className="w-[80%] mx-auto border border-gray-400 overflow-hidden my-10">
          {/* Top Packages Row */}
          <div className="grid grid-cols-1 md:grid-cols-3">
            {/* Package A */}
            <div className="bg-[#dfe7d7] text-center py-2 px-3 border-r border-gray-400">
              <h3 className="text-[#1f4d7f] font-bold text-[20px] leading-none">
                Pkg A <span className="mx-1">•</span> 2D/1N
              </h3>

              <p className="text-red-600 font-bold text-[18px] mt-1">
                ₹4,599 <span className="mx-1">•</span> Bus{" "}
                <span className="mx-1">•</span> 4 Pickup Points
              </p>

              <p className="text-gray-700 text-[15px] mt-1">
                Majestic • Domlur • Marathahlli • Silk Board
              </p>
            </div>

            {/* Package B */}
            <div className="bg-[#e4e8f1] text-center py-2 px-3 border-r border-gray-400">
              <h3 className="text-[#1f4d7f] font-bold text-[20px] leading-none">
                Pkg B <span className="mx-1">•</span> 3D/2N
              </h3>

              <p className="text-red-600 font-bold text-[18px] mt-1">
                ₹6,999 <span className="mx-1">•</span> Train{" "}
                <span className="mx-1">•</span> KSR
              </p>

              <p className="text-gray-700 text-[15px] mt-1">
                Mangrove + Mahabalipuram Route
              </p>
            </div>

            {/* Package C */}
            <div className="bg-[#eadff0] text-center py-2 px-3">
              <h3 className="text-[#1f4d7f] font-bold text-[20px] leading-none">
                Pkg C <span className="mx-1">•</span> 3D/2N
              </h3>

              <p className="text-red-600 font-bold text-[18px] mt-1">
                ₹6,999 <span className="mx-1">•</span> Train{" "}
                <span className="mx-1">•</span> KSR
              </p>

              <p className="text-gray-700 text-[15px] mt-1">
                Arunachalam Girivalam + Pondicherry
              </p>
            </div>
          </div>

          {/* Bottom Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-2 bg-white">
            <button className="bg-[#214c7a] text-white font-bold text-[18px] py-2 flex items-center justify-center gap-2 hover:opacity-90 transition">
              Compare All 3 Packages
              <span>➜</span>
            </button>

            <button className="bg-[#c90000] text-white font-bold text-[18px] py-2 flex items-center justify-center gap-2 hover:opacity-90 transition">
              <Link href="tel:+919705051052">Book Now +91 9705051052</Link>
            </button>
          </div>
        </div>
        <section className="w-full py-10 px-3 bg-[#f3f3f3]">
          <div className="w-[80%] mx-auto">
            {/* Heading */}
            <h2 className="text-[18px] md:text-[24px] font-bold text-[#214b78] mb-8">
              Which Pondicherry Package Is Right for You?
            </h2>

            {/* Packages Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 border border-neutral-400 overflow-hidden">
              {/* Package 1 */}
              <div className="bg-[#dfe7d7] border-r border-neutral-400 p-4 flex flex-col justify-between">
                <div>
                  {/* Header */}
                  <div className="text-center">
                    <h3 className="text-[18px] font-bold text-[#214b78] flex items-center justify-center gap-2">
                      <span>🛺</span>
                      French Colony Weekend
                    </h3>

                    <p className="text-red-600 font-bold text-[16px] mt-2">
                      ₹4,599
                      <span className="font-semibold ml-2">· 2D/1N · Bus</span>
                    </p>

                    <p className="text-[14px] text-neutral-700 mt-1">
                      Majestic · Domlur · Marathahlli · Silk Board
                    </p>
                  </div>

                  {/* Highlights */}
                  <ul className="mt-4 pl-5 list-disc text-[15px] text-black space-y-2">
                    <li>11 sightseeing spots on Day 1</li>
                    <li>Promenade Beach sunrise + French Colony walk</li>
                    <li>Sri Aurobindo Ashram + Museum</li>
                    <li>Auroville Matrimandir on Day 2</li>
                  </ul>
                </div>

                {/* Footer */}
                <div className="mt-5">
                  <p className="text-[13px] italic text-neutral-700 mb-4">
                    Best for: budget · bus pickup · quick weekend
                  </p>

                  <Link
                    href="/tour/pondicherry-weekend-gateaway-ex-banglore"
                    className="w-full px-5 py-3 bg-[#355f1d] text-white text-[15px] font-bold "
                  >
                    Book 2D Pondicherry ➜
                  </Link>
                </div>
              </div>

              {/* Package 2 */}
              <div className="bg-[#e4e8f1] border-r border-neutral-400 p-4 flex flex-col justify-between">
                <div>
                  {/* Header */}
                  <div className="text-center">
                    <h3 className="text-[18px] font-bold text-[#214b78] flex items-center justify-center gap-2">
                      <span>🚂</span>
                      Mangrove + Heritage
                    </h3>

                    <p className="text-red-600 font-bold text-[16px] mt-2">
                      ₹6,999
                      <span className="font-semibold ml-2">
                        · 3D/2N · Train
                      </span>
                    </p>

                    <p className="text-[14px] text-neutral-700 mt-1">
                      KSR Bengaluru Railway Station
                    </p>
                  </div>

                  {/* Highlights */}
                  <ul className="mt-4 pl-5 list-disc text-[15px] text-black space-y-2">
                    <li>Pichavaram Mangrove Forest boating</li>
                    <li>Paradise Beach + Chunnambar Boat House</li>
                    <li>Mahabalipuram Shore Temple + Panch Rathas</li>
                    <li>Sunrise on Pondicherry beach</li>
                  </ul>
                </div>

                {/* Footer */}
                <div className="mt-5">
                  <p className="text-[13px] italic text-neutral-700 mb-4">
                    Best for: nature + heritage · complete Pondicherry
                  </p>

                  <Link
                    href="/tour/pondicherry-ex-blr"
                    className="w-full px-5 py-3 bg-[#214b78] text-white text-[15px] font-bold "
                  >
                    Book 3D Mangrove Tour ➜
                  </Link>
                </div>
              </div>

              {/* Package 3 */}
              <div className="bg-[#eadff0] p-4 flex flex-col justify-between">
                <div>
                  {/* Header */}
                  <div className="text-center">
                    <h3 className="text-[18px] font-bold text-[#214b78] flex items-center justify-center gap-2">
                      <span>✨</span>
                      Spiritual + Coastal
                    </h3>

                    <p className="text-red-600 font-bold text-[16px] mt-2">
                      ₹6,999
                      <span className="font-semibold ml-2">
                        · 3D/2N · Train
                      </span>
                    </p>

                    <p className="text-[14px] text-neutral-700 mt-1">
                      KSR Bengaluru Railway Station
                    </p>
                  </div>

                  {/* Highlights */}
                  <ul className="mt-4 pl-5 list-disc text-[15px] text-black space-y-2">
                    <li>Girivalam 14km walk — 8 Lingam temples</li>
                    <li>Ramana Maharshi Ashram visit</li>
                    <li>Two cities in 3 days — Arunachalam + Pondi</li>
                    <li>Auroville + French Colony on Day 2</li>
                  </ul>
                </div>

                {/* Footer */}
                <div className="mt-5">
                  <p className="text-[13px] italic text-neutral-700 mb-4">
                    Best for: spiritual seekers · unique dual-city
                  </p>

                  <Link
                    href="/tour/arunachalam-pondicherry-ex-blr"
                    className="w-full px-5 py-3 bg-[#6b2fa0] text-white text-[15px] font-bold"
                  >
                    Book Arunachalam + Pondi ➜
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="w-[80%] mx-auto overflow-x-auto bg-white my-10">
          {/* Heading */}
          <h2 className="text-[22px] font-bold text-[#214b78] mb-6">
            Full Comparison — All 3 Pondicherry Packages from Bangalore
          </h2>

          <table className="w-full border-collapse border border-neutral-400 text-[15px]">
            <colgroup>
              <col className="w-[23%]" />
              <col className="w-[25.6%]" />
              <col className="w-[25.6%]" />
              <col className="w-[25.6%]" />
            </colgroup>

            <thead>
              <tr>
                <th className="bg-[#f2f2f2] border border-neutral-400 p-3"></th>

                <th className="bg-[#355f1d] text-white border border-neutral-400 p-3 text-left font-bold text-[15px]">
                  🛺 Pkg A ・ 2D Coastal Weekend
                </th>

                <th className="bg-[#214b78] text-white border border-neutral-400 p-3 text-left font-bold text-[15px]">
                  🚂 Pkg B ・ 3D Mangrove + Heritage
                </th>

                <th className="bg-[#6b2fa0] text-white border border-neutral-400 p-3 text-left font-bold text-[15px]">
                  ✨ Pkg C ・ 3D Arunachalam + Pondicherry
                </th>
              </tr>
            </thead>

            <tbody className="text-black">
              {/* Price */}
              <tr>
                <td className="bg-[#f2f2f2] border border-neutral-400 p-3 font-bold">
                  Price
                </td>

                <td className="bg-[#dfe7d7] border border-neutral-400 p-3 text-[#355f1d] font-bold text-center">
                  ₹4,599
                </td>

                <td className="bg-[#e4e8f1] border border-neutral-400 p-3 text-[#214b78] font-bold text-center">
                  ₹6,999
                </td>

                <td className="bg-[#eadff0] border border-neutral-400 p-3 text-[#6b2fa0] font-bold text-center">
                  ₹6,999
                </td>
              </tr>

              {/* Duration */}
              <tr>
                <td className="bg-[#f2f2f2] border border-neutral-400 p-3 font-bold">
                  Duration
                </td>

                <td className="border border-neutral-400 p-3 text-center">
                  2 Days / 1 Night
                </td>

                <td className="border border-neutral-400 p-3 text-center">
                  3 Days / 2 Nights
                </td>

                <td className="border border-neutral-400 p-3 text-center">
                  3 Days / 2 Nights
                </td>
              </tr>

              {/* Transport */}
              <tr>
                <td className="bg-[#f2f2f2] border border-neutral-400 p-3 font-bold">
                  Transport
                </td>

                <td className="bg-[#dfe7d7] border border-neutral-400 p-3 text-[#355f1d] font-semibold">
                  Bus — Tempo Traveller
                </td>

                <td className="bg-[#e4e8f1] border border-neutral-400 p-3 text-[#214b78] font-semibold">
                  Train — Sleeper Non-AC
                </td>

                <td className="bg-[#eadff0] border border-neutral-400 p-3 text-[#6b2fa0] font-semibold">
                  Train — Sleeper Non-AC
                </td>
              </tr>

              {/* Pickup */}
              <tr className="align-top">
                <td className="bg-[#f2f2f2] border border-neutral-400 p-3 font-bold">
                  Pickup
                </td>

                <td className="bg-[#dfe7d7] border border-neutral-400 p-3 leading-7">
                  Majestic 9PM · Domlur 9:30PM · Marathahalli 10PM · Silk Board
                  11PM
                </td>

                <td className="bg-[#e4e8f1] border border-neutral-400 p-3">
                  KSR Bengaluru Railway Station
                </td>

                <td className="bg-[#eadff0] border border-neutral-400 p-3">
                  KSR Bengaluru Railway Station
                </td>
              </tr>

              {/* Day 1 */}
              <tr className="align-top">
                <td className="bg-[#f2f2f2] border border-neutral-400 p-3 font-bold">
                  Day 1
                </td>

                <td className="border border-neutral-400 p-3 leading-7">
                  Rock Beach · Sri Aurobindo Ashram · Pondicherry Museum ·
                  French Colony · Church · Lighthouse · Marina Eco Beach
                </td>

                <td className="border border-neutral-400 p-3 leading-7">
                  Auroville + check in · French Colony lunch · Mahatma Gandhi
                  Statue · Evening beaches · Basilica of Sacred Heart
                </td>

                <td className="border border-neutral-400 p-3 leading-7">
                  Head to Arunachalam · Explore Chengalpattu (if time) ·
                  Girivalam 14km walk (evening) · 8 Lingam temples · Night
                  Arunachalam
                </td>
              </tr>

              {/* Day 2 */}
              <tr className="align-top">
                <td className="bg-[#f2f2f2] border border-neutral-400 p-3 font-bold">
                  Day 2
                </td>

                <td className="border border-neutral-400 p-3 leading-7">
                  Auroville Matrimandir · Eden Beach · Return to Bangalore
                </td>

                <td className="border border-neutral-400 p-3 leading-7">
                  Sunrise on beach · Pichavaram Mangrove boating · Paradise
                  Beach · Chunnambar Boat House
                </td>

                <td className="border border-neutral-400 p-3 leading-7">
                  Ramana Maharshi Ashram · Auroville by 11:30AM · French Colony
                  · Evening beaches · Sunset
                </td>
              </tr>

              {/* Day 3 */}
              <tr className="align-top">
                <td className="bg-[#f2f2f2] border border-neutral-400 p-3 font-bold">
                  Day 3
                </td>

                <td className="border border-neutral-400 p-3 text-center text-neutral-400">
                  —
                </td>

                <td className="border border-neutral-400 p-3 leading-7">
                  Mahabalipuram Shore Temple · Mahabalipuram Beach · Panch
                  Rathas · Return to Bangalore
                </td>

                <td className="border border-neutral-400 p-3 leading-7">
                  Basilica of Sacred Heart · French War Memorial · Mahabalipuram
                  Temple · Return to Bangalore
                </td>
              </tr>

              {/* Nights */}
              <tr>
                <td className="bg-[#f2f2f2] border border-neutral-400 p-3 font-bold">
                  Nights
                </td>

                <td className="border border-neutral-400 p-3">
                  1 night — Pondicherry
                </td>

                <td className="border border-neutral-400 p-3">
                  2 nights — Pondicherry
                </td>

                <td className="border border-neutral-400 p-3">
                  Night 1: Arunachalam · Night 2: Pondicherry
                </td>
              </tr>

              {/* Pichavaram */}
              <tr>
                <td className="bg-[#f2f2f2] border border-neutral-400 p-3 font-bold">
                  Pichavaram Mangrove
                </td>

                <td className="border border-neutral-400 p-3 text-red-600 font-semibold">
                  ❌ Not included
                </td>

                <td className="border border-neutral-400 p-3 text-[#214b78] font-semibold">
                  ✅ Day 2 — boating included
                </td>

                <td className="border border-neutral-400 p-3 text-red-600 font-semibold">
                  ❌ Not included
                </td>
              </tr>

              {/* Girivalam */}
              <tr>
                <td className="bg-[#f2f2f2] border border-neutral-400 p-3 font-bold">
                  Girivalam Walk
                </td>

                <td className="border border-neutral-400 p-3 text-red-600 font-semibold">
                  ❌ Not included
                </td>

                <td className="border border-neutral-400 p-3 text-red-600 font-semibold">
                  ❌ Not included
                </td>

                <td className="border border-neutral-400 p-3 text-[#6b2fa0] font-semibold">
                  ✅ Day 1 — 14km, 8 temples
                </td>
              </tr>

              {/* Mahabalipuram */}
              <tr>
                <td className="bg-[#f2f2f2] border border-neutral-400 p-3 font-bold">
                  Mahabalipuram
                </td>

                <td className="border border-neutral-400 p-3 text-red-600 font-semibold">
                  ❌ Not included
                </td>

                <td className="border border-neutral-400 p-3 text-[#214b78] font-semibold">
                  ✅ Day 3 — Shore Temple + Panch Rathas
                </td>

                <td className="border border-neutral-400 p-3 text-[#6b2fa0] font-semibold">
                  ✅ Day 3 — Mahabalipuram Temple
                </td>
              </tr>

              {/* Auroville */}
              <tr>
                <td className="bg-[#f2f2f2] border border-neutral-400 p-3 font-bold">
                  Auroville
                </td>

                <td className="border border-neutral-400 p-3 text-[#355f1d] font-semibold">
                  ✅ Day 2 — Matrimandir
                </td>

                <td className="border border-neutral-400 p-3 text-[#214b78] font-semibold">
                  ✅ Day 1
                </td>

                <td className="border border-neutral-400 p-3 text-[#6b2fa0] font-semibold">
                  ✅ Day 2
                </td>
              </tr>

              {/* French Colony */}
              <tr>
                <td className="bg-[#f2f2f2] border border-neutral-400 p-3 font-bold">
                  French Colony
                </td>

                <td className="border border-neutral-400 p-3 text-[#355f1d] font-semibold">
                  ✅ Day 1
                </td>

                <td className="border border-neutral-400 p-3 text-[#214b78] font-semibold">
                  ✅ Day 1
                </td>

                <td className="border border-neutral-400 p-3 text-[#6b2fa0] font-semibold">
                  ✅ Day 2
                </td>
              </tr>

              {/* Choose */}
              <tr className="align-top">
                <td className="bg-[#f2f2f2] border border-neutral-400 p-3 font-bold">
                  Choose if...
                </td>

                <td className="bg-[#dfe7d7] border border-neutral-400 p-3 leading-7">
                  Budget matters · bus pickup convenient · quick weekend · 11
                  sightseeing spots
                </td>

                <td className="bg-[#e4e8f1] border border-neutral-400 p-3 leading-7">
                  You want nature — mangrove boating + heritage + beaches. Full
                  Pondicherry experience.
                </td>

                <td className="bg-[#eadff0] border border-neutral-400 p-3 leading-7">
                  You want spiritual Day 1 at Arunachalam followed by coastal
                  Day 2 Pondicherry. Two worlds.
                </td>
              </tr>

              {/* Buttons */}
              <tr>
                <td className="bg-[#f2f2f2] border border-neutral-400 p-3"></td>

                <td className="bg-[#dfe7d7] border border-neutral-400 p-2">
                  <Link
                    href="/tour/pondicherry-weekend-gateaway-ex-banglore"
                    className="w-full bg-[#355f1d] hover:bg-[#2b4d17] text-white font-bold text-[14px] py-2 px-5  transition"
                  >
                    Book 2D Pondicherry ➜
                  </Link>
                </td>

                <td className="bg-[#e4e8f1] border border-neutral-400 p-2">
                  <Link
                    href="/tour/pondicherry-ex-blr"
                    className="w-full bg-[#214b78] hover:bg-[#193b64] text-white font-bold text-[14px] py-2 px-5  transition"
                  >
                    Book 3D Mangrove Tour ➜
                  </Link>
                </td>

                <td className="bg-[#eadff0] border border-neutral-400 p-2">
                  <Link
                    href="/tour/arunachalam-pondicherry-ex-blr"
                    className="w-full bg-[#6b2fa0] hover:bg-[#56257f] text-white font-bold text-[14px] py-2 px-5 transition"
                  >
                    Book Arunachalam + Pondi ➜
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* ================= PACKAGE A ================= */}
        <div className="w-[80%] mx-auto my-10">
          <h3 className="text-[#2b65a8] font-bold text-[22px] mb-4">
            Package A of 3
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_285px] border border-neutral-400 overflow-hidden">
            {/* LEFT */}
            <div className="bg-[#dfe7d7] border-r border-neutral-400 p-4">
              <h2 className="text-[#214b78] font-bold text-[18px] leading-snug">
                🛺 <span className="text-neutral-500 font-medium">Pkg A ·</span>{" "}
                Pondicherry — 2 Day Coastal Weekend
              </h2>

              <p className="italic text-[14px] text-neutral-700 mt-2">
                French Colony, Beaches, Ashram & Auroville. Bus pickup from 4
                Bangalore points.
              </p>

              <ul className="list-disc pl-5 mt-4 space-y-2 text-[15px] leading-6">
                <li>
                  Day 1: Rock Beach · Sri Aurobindo Ashram · Museum · French
                  Colony · Church · Lighthouse · Marina Eco Beach
                </li>

                <li>
                  Day 2: Auroville Matrimandir · Eden Beach · Return journey
                </li>

                <li>11 sightseeing spots covered in 2 days</li>

                <li>Budget-friendly — 35% cheaper than 3D packages</li>
              </ul>

              <p className="text-red-600 font-semibold text-[14px] mt-4">
                ✦ Unique to this package: 4 convenient Bangalore pickup points —
                no trip to KSR required.
              </p>

              <div className="mt-4 text-[13px] text-neutral-600 leading-6">
                📍 Bus Pickup · Majestic 9PM · Domlur 9:30PM · Marathahalli 10PM
                · Silk Board 11PM
                <br />
                🚌 / 🚂 Tempo Traveller / Mini Bus · 🗓 Friday nights — return
                Sunday late night
              </div>
            </div>

            {/* RIGHT */}
            <div className="bg-[#edf1f6] flex flex-col items-center justify-center text-center p-5">
              <div className="text-[48px] font-bold text-[#cc0000] leading-none">
                ₹4,599
              </div>

              <p className="text-[14px] text-neutral-500 mt-2">
                per person · 2D/1N
              </p>

              <Link
                href="/tour/pondicherry-weekend-gateaway-ex-banglore"
                className="w-full mt-6 bg-[#355f1d] hover:bg-[#294915] transition text-white font-bold text-[15px] py-3"
              >
                Book 2-Day Pondicherry ➜
              </Link>

              <div className="mt-5 text-[#2b65a8] text-[14px]">
                <Link href="tel:+919705051052">📞 +91 9705051052</Link>
              </div>
            </div>
          </div>
        </div>

        {/* ================= PACKAGE B ================= */}
        <div className="w-[80%] mx-auto my-14">
          <h3 className="text-[#2b65a8] font-bold text-[22px] mb-4">
            Package B of 3
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_285px] border border-neutral-400 overflow-hidden">
            {/* LEFT */}
            <div className="bg-[#e4e8f1] border-r border-neutral-400 p-4">
              <h2 className="text-[#214b78] font-bold text-[18px] leading-snug">
                🚂 <span className="text-neutral-500 font-medium">Pkg B ·</span>{" "}
                Pondicherry — 3 Day Mangrove + Heritage
              </h2>

              <p className="italic text-[14px] text-neutral-700 mt-2">
                Pichavaram Mangrove boating, Paradise Beach, Shore Temple &
                Panch Rathas.
              </p>

              <ul className="list-disc pl-5 mt-4 space-y-2 text-[15px] leading-6">
                <li>
                  Day 1: Auroville + check-in · French Colony · Basilica of
                  Sacred Heart · Evening beaches + sunset
                </li>

                <li>
                  Day 2: Sunrise on beach · Pichavaram Mangrove Forest boating ·
                  Paradise Beach · Chunnambar Boat House
                </li>

                <li>
                  Day 3: Mahabalipuram Shore Temple · Mahabalipuram Beach ·
                  Panch Rathas · Return KSR
                </li>

                <li>
                  2 nights Pondicherry area · Train tickets both ways included
                </li>
              </ul>

              <p className="text-red-600 font-semibold text-[14px] mt-4">
                ✦ Unique to this package: Pichavaram Mangrove boating + Paradise
                Beach on Day 2 — exclusive to this package.
              </p>

              <div className="mt-4 text-[13px] text-neutral-600 leading-6">
                📍 KSR Bengaluru Railway Station · Sleeper Non-AC train · Thu &
                Fri departures
                <br />
                🚂 / 🚆 Train (Sleeper Non-AC) · 🗓 Thursday & Friday weekly
              </div>
            </div>

            {/* RIGHT */}
            <div className="bg-[#edf1f6] flex flex-col items-center justify-center text-center p-5">
              <div className="text-[48px] font-bold text-[#cc0000] leading-none">
                ₹6,999
              </div>

              <p className="text-[14px] text-neutral-500 mt-2">
                per person · 3D/2N
              </p>

              <Link
                href="/tour/pondicherry-ex-blr"
                className="w-full mt-6 bg-[#214b78] hover:bg-[#193a5e] transition text-white font-bold text-[15px] py-3"
              >
                Book 3D Mangrove + Heritage Tour ➜
              </Link>

              <div className="mt-5 text-[#2b65a8] text-[14px]">
                <Link href="tel:+919705051052">📞 +91 9705051052</Link>
              </div>
            </div>
          </div>
        </div>

        {/* ================= PACKAGE C ================= */}
        <div className="w-[80%] mx-auto my-14">
          <h3 className="text-[#2b65a8] font-bold text-[22px] mb-4">
            Package C of 3
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_285px] border border-neutral-400 overflow-hidden">
            {/* LEFT */}
            <div className="bg-[#eadff0] border-r border-neutral-400 p-4">
              <h2 className="text-[#214b78] font-bold text-[18px] leading-snug">
                ✨ <span className="text-neutral-500 font-medium">Pkg C ·</span>{" "}
                Arunachalam + Pondicherry — 3 Day Spiritual & Coastal
              </h2>

              <p className="italic text-[14px] text-neutral-700 mt-2">
                Girivalam 14km walk at Arunachalam, Ramana Maharshi Ashram,
                Auroville & French Colony.
              </p>

              <ul className="list-disc pl-5 mt-4 space-y-2 text-[15px] leading-6">
                <li>
                  Day 1: Chengalpattu stop (if time) · Arunachalam · Girivalam
                  14km evening walk · 8 Lingam temples
                </li>

                <li>
                  Day 2: Ramana Maharshi Ashram (early morning) · Auroville by
                  11:30AM · French Colony · Evening beaches
                </li>

                <li>
                  Day 3: Basilica of Sacred Heart · French War Memorial ·
                  Mahabalipuram Temple · Return KSR
                </li>

                <li>
                  Night 1: Arunachalam · Night 2: Pondicherry — two completely
                  different cities
                </li>
              </ul>

              <p className="text-red-600 font-semibold text-[14px] mt-4">
                ✦ Unique to this package: Only Pondicherry package that includes
                Girivalam at Arunachalam spiritual + coastal in one trip.
              </p>

              <div className="mt-4 text-[13px] text-neutral-600 leading-6">
                📍 KSR Bengaluru Railway Station · Sleeper Non-AC train · Thu &
                Fri departures
                <br />
                🚂 / 🚆 Train (Sleeper Non-AC) · 🗓 Thursday & Friday weekly
              </div>
            </div>

            {/* RIGHT */}
            <div className="bg-[#edf1f6] flex flex-col items-center justify-center text-center p-5">
              <div className="text-[48px] font-bold text-[#cc0000] leading-none">
                ₹6,999
              </div>

              <p className="text-[14px] text-neutral-500 mt-2">
                per person · 3D/2N
              </p>

              <Link
                href="/tour/arunachalam-pondicherry-ex-blr"
                className="w-full mt-6 bg-[#6b2fa0] hover:bg-[#55237f] transition text-white font-bold text-[15px] py-3"
              >
                Book Arunachalam + Pondicherry ➜
              </Link>

              <div className="mt-5 text-[#2b65a8] text-[14px]">
                <Link href="tel:+919705051052">📞 +91 9705051052</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[80%] mx-auto my-10 border border-neutral-400 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Included */}
            <div className="bg-[#dfe7d7] p-5 border-r border-neutral-400">
              <div className="flex items-center gap-3 text-[#214b78] font-bold text-[18px] mb-6">
                <span className="text-green-600 text-[22px]">✅</span>
                <h3>Always Included</h3>
              </div>

              <ul className="list-disc pl-7 space-y-3 text-[15px] leading-7 text-black">
                <li>
                  Transport — Bus Tempo Traveller (Pkg A) or Train Sleeper
                  Non-AC (Pkgs B & C)
                </li>

                <li>
                  Train tickets both ways (Pkgs B & C) — [CONFIRM train tickets
                  also included in Pkg B]
                </li>

                <li>
                  Accommodation — 1 night (Pkg A) or 2 nights (Pkgs B & C)
                </li>

                <li>Trip captain / trip host throughout</li>

                <li>Pre-hired AC Tempo for all sightseeing</li>

                <li>Driver charges, toll taxes</li>

                <li>First aid</li>

                <li>Freshen-up hotel room charges (Pkg B)</li>
              </ul>
            </div>

            {/* Not Included */}
            <div className="bg-[#f3f3f3] p-5">
              <div className="flex items-center gap-3 text-neutral-600 font-bold text-[18px] mb-6">
                <span className="text-red-500 text-[22px]">❌</span>
                <h3>Not Included</h3>
              </div>

              <ul className="list-disc pl-7 space-y-3 text-[15px] leading-7 text-neutral-500">
                <li>Food and meals</li>

                <li>Entry tickets to all attractions</li>

                <li>GST @ 5%</li>

                <li>Personal expenses and shopping</li>

                <li>Special charges</li>

                <li>Anything not mentioned in inclusions</li>
              </ul>
            </div>
          </div>
        </div>
        <section className="w-full bg-white py-10">
          <div className="max-w-6xl mx-auto overflow-hidden">
            {/* Heading */}
            <div className="px-4 md:px-6 pt-5">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1f4f82]">
                Where Do You Depart From in Bangalore?
              </h2>

              <p className="text-neutral-700 mt-2 text-sm md:text-base">
                The 3 Pondicherry packages use two completely different
                departure systems. Confirm your pickup point at booking.
              </p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 mt-5">
              {/* LEFT */}
              <div className="border-t md:border-r border-neutral-300 bg-[#dfe8d6]">
                {/* Header */}
                <div className="bg-[#31551f] text-white font-semibold px-4 py-3 text-lg">
                  🚌 &nbsp;Pkg A — Bus Pickup (Friday nights only)
                </div>

                {/* Content */}
                <div className="p-5 text-[17px] leading-9 font-semibold text-black">
                  <p>
                    Stop 1: Majestic — Metro Station East Entrance &nbsp;·&nbsp;
                    9:00 PM
                  </p>

                  <p>Stop 2: Domlur &nbsp;·&nbsp; 9:30 PM</p>

                  <p>
                    Stop 3: Marathahalli — Tansi Honda &nbsp;·&nbsp; 10:00 PM
                  </p>

                  <p>
                    Stop 4: Silk Board — Nahdi Mandi Restaurant &nbsp;·&nbsp;
                    11:00 PM
                  </p>

                  <p className="text-red-600 italic text-sm font-normal mt-6">
                    ⚠ Confirm exact pickup order with operations before
                    publishing
                  </p>
                </div>
              </div>

              {/* RIGHT */}
              <div className="border-t border-neutral-300 bg-[#e7ebf2]">
                {/* Header */}
                <div className="bg-[#234f82] text-white font-semibold px-4 py-3 text-lg">
                  🚂 &nbsp;Pkgs B & C — KSR Railway Station (Thu & Fri)
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-[#234f82] font-bold text-2xl">
                    KSR Bengaluru Railway Station
                  </h3>

                  <p className="text-neutral-500 mt-1 text-base">
                    (Krantivira Sangolli Rayanna / Bengaluru City Station)
                  </p>

                  <div className="mt-8 space-y-2 text-[17px] text-black">
                    <p>
                      Departs Thursday and Friday &nbsp;·&nbsp; [Confirm
                      departure time]
                    </p>

                    <p className="italic text-neutral-600 text-base leading-7">
                      Arrive at KSR at least 30 minutes before departure. Your
                      STC trip captain will meet you at the station.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Reviews />
        <FAQ faqs={faqs} />
        <FinalCTA
          title="Choose Your Pondicherry Weekend. Buses and Trains Leave Every Week."
          description="The French Colony at 7am belongs to you. The mangrove boat is waiting at Pichavaram. The Arunachela Girivalam starts at dusk. Three completely different ways to experience Pondicherry from Bangalore — all under ₹7,000, all departing every Thursday and Friday"
          primaryLink="/destinations/north-india"
          primaryLabel="2D Pondicherry  ₹4,599 →"
          secondaryLink="/destinations/south-india"
          secondaryLabel="3D Mangrove+Heritage  ₹6,999 →"
          thirdLink="/destinations/south-india"
          thirdLabel="Arunachalam+Pondi  ₹6,999 →"
        />
      </div>
    </>
  );
}
