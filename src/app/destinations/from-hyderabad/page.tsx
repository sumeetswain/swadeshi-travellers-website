import DescriptionBox from "@/components/DescriptionBox";
import FAQ from "@/components/FAQs";
import FinalCTA from "@/components/FinalCTA";
import { PackageLoader } from "@/components/PackageLoader/PackageLoader";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata = {
  title:
    "Tour Packages from Hyderabad 2026 — 13 Weekend Trips | Thu & Fri Departures | From ₹4,999 | Swadeshi Traveller",
  description:
    "13 group tour packages departing from Hyderabad every Thursday and Friday. Gokarna · Ooty · Hampi · Coorg · Wayanad · Pondicherry · Araku · Lonavala and more. Train and bus from Kacheguda and Nampally. From ₹4,999 per person. Return by Sunday night. MSME · ATOAI certified",
  keywords:
    "tour packages from hyderabad | weekend trips from hyderabad | short trips from hyderabad | group tours from hyderabad | travel packages from hyderabad | weekend getaways from hyderabad | 2 day trips from hyderabad | 3 day trips from hyderabad | train trips from hyderabad",
};
const packages = [
  {
    region: "🌴 South India — Karnataka · Tamil Nadu · Andhra Pradesh · Kerala",
    color: "bg-[#3d78b6]",
    rows: [
      {
        package: "Gokarna + Jog Falls",
        price: "₹5,399",
        nights: "1N",
        station: "Nampally",
        time: "3:30 PM · Bus",
        days: "Thu & Fri",
        highlight: true,
      },
      {
        package: "Gokarna + Dandeli",
        price: "₹4,999",
        nights: "1N",
        station: "Nampally",
        time: "3:30 PM · Bus",
        days: "Thu & Fri",
        highlight: true,
      },
      {
        package: "Gokarna + Udupi",
        price: "₹5,499",
        nights: "1N",
        station: "Kacheguda",
        time: "7:00 PM · Train",
        days: "Thu & Fri",
      },
      {
        package: "Gokarna + Hampi",
        price: "₹5,499",
        nights: "1N",
        station: "Kacheguda",
        time: "7:00 PM · Train",
        days: "Thu & Fri",
      },
      {
        package: "Pondicherry + Mahabalipuram",
        price: "₹7,199",
        nights: "2N",
        station: "[CONFIRM STATION]",
        time: "5:00 PM · Train",
        days: "Thu & Fri",
        highlight: true,
      },
      {
        package: "Arunachalam + Pondicherry",
        price: "₹7,199",
        nights: "2N",
        station: "[CONFIRM STATION]",
        time: "5:00 PM · Train",
        days: "Thu & Fri",
        highlight: true,
      },
      {
        package: "Ooty & Coonoor",
        price: "₹7,199",
        nights: "2N",
        station: "Kacheguda",
        time: "7:00 PM · Train",
        days: "Thu & Fri",
      },
      {
        package: "Isha Foundation + Ooty",
        price: "₹7,499",
        nights: "2N",
        station: "Kacheguda",
        time: "7:00 PM · Train",
        days: "Thu & Fri",
      },
      {
        package: "Hampi Standalone",
        price: "₹5,499",
        nights: "1N",
        station: "Kacheguda",
        time: "7:00 PM · Bus",
        days: "FRI ONLY",
        highlightDays: true,
      },
      {
        package: "Coorg & Chikmagalur",
        price: "₹6,499",
        nights: "2N",
        station: "Kacheguda",
        time: "7:00 PM · Train",
        days: "Thu & Fri",
      },
      {
        package: "Araku 4-in-1",
        price: "₹6,999",
        nights: "2N",
        station: "[CONFIRM STATION]",
        time: "5:30 PM · Train",
        days: "Thu & Fri",
        highlight: true,
      },
      {
        package: "Wayanad",
        price: "₹7,999",
        nights: "2N",
        station: "Kacheguda",
        time: "7:05 PM · Train",
        days: "Thu & Fri",
      },
    ],
  },
  {
    region: "⛰️ West India — Maharashtra",
    color: "bg-[#345a1d]",
    rows: [
      {
        package: "Lonavala",
        price: "₹7,499",
        nights: "2N",
        station: "Nampally",
        time: "7:00 PM · Train",
        days: "Thu & Fri",
      },
    ],
  },
];
const south = [
  {
    id: 1,
    emoji: "💧",
    title: "Gokarna + Jog Falls",
    description:
      "India's second-highest waterfall + Gokarna's sacred Arabian Sea coast",
    points: [
      "Jog Falls — 253m across 4 streams (Raja, Rani, Rover, Roarer)",
      "Om Beach + Half Moon Beach — Gokarna's finest",
      "Mahabaleshwara Temple + Murudeshwar",
      "Kudle Beach sunset",
    ],
    price: "₹5,399",
    duration: "1N/2D",
    station: "Nampally Railway Station",
    timing: "3:30 PM · Non-AC Sleeper Bus",
    days: "Thu & Fri weekly",
    button: "View Full Package →",
    link: "/tour/gokarna-jogfalls",
    leftBg: "bg-[#dce8d1]",
    border: "border-[#b7c5ad]",
    buttonBg: "bg-[#234f82] hover:bg-[#1b3f69]",
  },

  {
    id: 2,
    emoji: "🌊",
    title: "Gokarna + Dandeli",
    description:
      "White-water rafting in a tiger reserve + Gokarna's coast — lowest price in portfolio",
    points: [
      "Kali River rafting — Grade 2–3 rapids through tiger reserve forest",
      "Dandeli Wildlife Sanctuary jeep safari",
      "Kayaking on the Kali River",
      "Om Beach + Half Moon Beach + Mahabaleshwara Temple",
    ],
    price: "₹4,999",
    duration: "1N/2D",
    station: "Nampally Railway Station",
    timing: "3:30 PM · Non-AC Sleeper Bus",
    days: "Thu & Fri weekly",
    button: "View Full Package →",
    link: "/tour/gokarna-dandeli-murudeshwar-honnavar",
    leftBg: "bg-[#ecd9bb]",
    border: "border-[#c8b18d]",
    buttonBg: "bg-[#cf0000] hover:bg-[#aa0000]",
  },

  {
    id: 3,
    emoji: "⛪",
    title: "Gokarna + Udupi",
    description:
      "800-year Krishna Math + volcanic island geology + Gokarna's coast",
    points: [
      "Krishna Math (Udupi Sri Krishna Temple) — 800-year Vaishnava monastery",
      "St Mary's Islands — rare hexagonal basalt columns accessible by ferry",
      "Vibhuthi Falls · Malpe Beach",
      "Om Beach + Half Moon Beach + Mahabaleshwara Temple",
    ],
    price: "₹5,499",
    duration: "1N/2D",
    station: "Kacheguda Railway Station",
    timing: "7:00 PM · Sleeper Class Train",
    days: "Thu & Fri weekly",
    button: "View Full Package →",
    link: "/tour/gokarna-udupi-weekend-gateaway",
    leftBg: "bg-[#dde5f1]",
    border: "border-[#bcc7d7]",
    buttonBg: "bg-[#2f6db3] hover:bg-[#245a94]",
  },

  {
    id: 4,
    emoji: "🏛️",
    title: "Gokarna + Hampi",
    description:
      "UNESCO Hampi ruins + world's 2nd-tallest Shiva statue + Gokarna's coast",
    points: [
      "Virupaksha Temple + Vittala Temple Stone Chariot — UNESCO World Heritage",
      "Murudeshwar — world's 2nd-tallest Shiva statue",
      "Om Beach + Half Moon Beach + Mahabaleshwara Temple",
    ],
    price: "₹5,499",
    duration: "1N/2D",
    station: "Kacheguda Railway Station",
    timing: "7:00 PM · Sleeper Class Train",
    days: "Thu & Fri weekly",
    button: "View Full Package →",
    link: "/tour/gokarna-hampi-gateaway",
    leftBg: "bg-[#e4dfec]",
    border: "border-[#c9bfd8]",
    buttonBg: "bg-[#345a1d] hover:bg-[#294716]",
  },
  {
    id: 5,
    emoji: "🏖️",
    title: "Pondicherry + Mahabalipuram",
    description:
      "French Quarter + Auroville + Bay of Bengal beaches + UNESCO Shore Temple",
    points: [
      "Pondicherry French Quarter — White Town, Promenade, Auroville",
      "Serenity Beach + Paradise Beach + Pichavaram Mangroves",
      "Mahabalipuram Shore Temple + Five Rathas — UNESCO World Heritage",
    ],
    price: "₹7,199",
    duration: "2N/3D",
    station: "[CONFIRM STATION]",
    timing: "5:00 PM · Sleeper Class Train",
    days: "Thu & Fri weekly",
    button: "View Full Package →",
    link: "/tour/pondicherry-getaway",
    leftBg: "bg-[#efefef]",
    border: "border-[#d3d3d3]",
    buttonBg: "bg-[#234f82] hover:bg-[#1c3f67]",
  },

  {
    id: 6,
    emoji: "🛕",
    title: "Arunachalam + Pondicherry",
    description:
      "Girivalam pilgrimage circuit + Arunachaleswar Temple + French Quarter heritage",
    points: [
      "Arunachaleswar Temple — one of India's Pancha Bhuta Stalas",
      "Girivalam 14km pradakshina circuit around Arunachala Hill",
      "Ramana Ashram · Sri Aurobindo Ashram · Pondicherry French Quarter",
    ],
    price: "₹7,199",
    duration: "2N/3D",
    station: "[CONFIRM STATION]",
    timing: "5:00 PM · Sleeper Class Train",
    days: "Thu & Fri weekly",
    button: "View Full Package →",
    link: "/tour/arunachalam-pondicherry-ozem",
    leftBg: "bg-[#eadff1]",
    border: "border-[#cfbfdc]",
    buttonBg: "bg-[#6d35a8] hover:bg-[#592a89]",
  },

  {
    id: 7,
    emoji: "🚂",
    title: "Ooty & Coonoor",
    description:
      "UNESCO Nilgiri toy train + Mudumalai Tiger Reserve + Pykara Waterfalls",
    points: [
      "Mudumalai Tiger Reserve + Bandipur Forest — elephant herds at dawn",
      "Pykara Waterfalls — hidden Nilgiri cascade",
      "UNESCO Nilgiri Mountain Railway toy train — Coonoor to Ooty through 16 tunnels",
      "Tea Factory + Ooty Boat House + Mysore Palace on return",
    ],
    price: "₹7,199",
    duration: "2N/3D",
    station: "Kacheguda Railway Station",
    timing: "7:00 PM · Sleeper Class Train",
    days: "Thu & Fri weekly",
    button: "View Full Package →",
    link: "/tour/ooty-coonoor-mysore-mpes",
    leftBg: "bg-[#dfe9d8]",
    border: "border-[#c3d0b7]",
    buttonBg: "bg-[#234f82] hover:bg-[#1c3f67]",
  },

  {
    id: 8,
    emoji: "✨",
    title: "Isha Foundation + Ooty",
    description: "Adiyogi Laser Show + UNESCO toy train + Chocolate Factory",
    points: [
      "Isha Foundation — Adiyogi Shiva statue (world's largest face), Evening Aarti",
      "Adiyogi Laser Show — night spectacular at the ashram",
      "UNESCO Nilgiri Mountain Railway toy train — Coonoor to Ooty",
      "Tea + Chocolate Factory + Ooty Boat House + Mysore Palace on return",
    ],
    price: "₹7,499",
    duration: "2N/3D",
    station: "Kacheguda Railway Station",
    timing: "7:00 PM · Sleeper Class Train",
    days: "Thu & Fri weekly",
    button: "View Full Package →",
    link: "/tour/isha-ooty-coonoor-mysore-c8ua",
    leftBg: "bg-[#dfe6f2]",
    border: "border-[#c4cfde]",
    buttonBg: "bg-[#cf0000] hover:bg-[#aa0000]",
  },

  {
    id: 9,
    emoji: "🏕️",
    title: "Hampi Standalone",
    description:
      "Full dedicated day at UNESCO Hampi — anjanadri sunrise, coracle, sunset. No second destination.",
    points: [
      "5:30 AM Anjanadri Hill sunrise — Hanuman's birthplace, 575 steps, panoramic boulderscape",
      "Vittala Temple Stone Chariot + Musical Pillars + Virupaksha Temple",
      "Lotus Mahal + Elephant Stables + Hazara Rama + Underground Shiva Temple",
      "Tungabhadra River coracle ride + Hemakuta Hill sunset",
    ],
    price: "₹5,499",
    duration: "1N/2D",
    station: "Kacheguda Railway Station",
    timing: "7:00 PM · Non-AC Sleeper Bus",
    days: "FRIDAY ONLY",
    button: "View Full Package →",
    link: "/tour/hampi-weekend-gateaway",
    leftBg: "bg-[#efe5c9]",
    border: "border-[#d8c79b]",
    buttonBg: "bg-[#345a1d] hover:bg-[#294716]",
  },
  {
    id: 10,
    emoji: "🌿",
    title: "Coorg & Chikmagalur",
    description:
      "4AM Mandalpatti cloud-sea jeep + Elephant Camp + Mullayanagiri peak",
    points: [
      "Golden Temple (Namdroling Monastery) + Harangi Elephant Camp",
      "4:00 AM offroad jeep to Mandalpatti Peak — cloud-sea sunrise at 1,400m",
      "Abbey Falls + Jhari Falls (Chikmagalur) + Mullayanagiri — Karnataka's highest peak at 1,930m",
      "Belur Chennakeshava Temple (12th-century Hoysala) + Mysore Palace on return",
    ],
    price: "₹6,499",
    duration: "2N/3D",
    station: "Kacheguda Railway Station",
    timing: "7:00 PM · Sleeper Class Train",
    days: "Thu & Fri weekly",
    button: "View Full Package →",
    link: "/tour/coorg-chikmagalur-le2e",
    leftBg: "bg-[#dfe8d7]",
    border: "border-[#c2cfb8]",
    buttonBg: "bg-[#234f82] hover:bg-[#1c3f67]",
  },

  {
    id: 11,
    emoji: "🏞️",
    title: "Araku 4-in-1",
    description:
      "Eastern Ghats tribal forests + sea-of-clouds + Kashmir of AP + Bay of Bengal coast",
    points: [
      "Borra Caves + Katiki Waterfalls + Araku Coffee Plantation + Tribal Museum",
      "Vanjangi View Point — cloud-sea sunrise above the Eastern Ghats valleys",
      "Lambasingi tented camp + campfire — near-zero temperatures, Kashmir of Andhra Pradesh",
      "Kailasagiri ropeway + RK Beach + INS Kursura Submarine Museum, Vizag",
    ],
    price: "₹6,999",
    duration: "2N/3D",
    station: "[CONFIRM STATION]",
    timing: "5:30 PM · Sleeper Non-AC Train",
    days: "Thu & Fri weekly",
    button: "View Full Package →",
    link: "/tour/araku-vizag",
    leftBg: "bg-[#dfe6f2]",
    border: "border-[#c5d0de]",
    buttonBg: "bg-[#2f6db3] hover:bg-[#245a94]",
  },

  {
    id: 12,
    emoji: "🌱",
    title: "Wayanad",
    description:
      "Kerala's most biodiverse district — Chembra Peak trek or Soochipara Falls + Edakkal Caves",
    points: [
      "Chembra Peak (2,100m) — Kerala's highest trekking peak OR Soochipara Waterfalls",
      "Edakkal Caves — 6,000-year-old prehistoric rock engravings",
      "Banasura Sagar Dam + Pookode Lake + Phantom Rock",
      "Muthanga Wildlife Sanctuary jeep safari",
    ],
    price: "₹7,999",
    duration: "2N/3D",
    station: "Kacheguda Railway Station",
    timing: "7:05 PM · Sleeper Class Train",
    days: "Thu & Fri weekly",
    button: "View Full Package →",
    link: "/tour/wayanad-getaway",
    leftBg: "bg-[#f2dfc5]",
    border: "border-[#dec4a1]",
    buttonBg: "bg-[#cf0000] hover:bg-[#aa0000]",
  },
  {
    id: 13,
    emoji: "⛰️",
    title: "Lonavala",
    description:
      "Western Ghats monsoon waterfalls + Sahyadri viewpoints + ancient rock-cut caves",
    points: [
      "Tiger's Leap + Lion's Point + Rajmachi Point — Sahyadri panoramas",
      "Bhushi Dam + Kune Falls — monsoon waterfall circuit",
      "Karla Caves + Bhaja Caves — 2nd-century BCE Buddhist rock-cut architecture",
      "Pawna Lake sunset viewpoint + Lohagad Fort",
    ],
    price: "₹7,499",
    duration: "2N/3D",
    station: "Nampally Railway Station",
    timing: "7:00 PM · Sleeper Class Train",
    days: "Thu & Fri weekly",
    button: "View Full Package →",
    link: "/tour/lonavala-weekend-getaway",
    leftBg: "bg-[#e7e1ef]",
    border: "border-[#cec5da]",
    buttonBg: "bg-[#345a1d] hover:bg-[#294716]",
  },
];
const faqs = [
  {
    question: "Do all packages depart from Kacheguda Railway Station?",
    answer:
      "No. STC packages depart from two stations in Hyderabad at different times. Packages 1 and 2 (Gokarna + Jog Falls, Gokarna + Dandeli) depart from Nampally at 3:30 PM. Package 13 (Lonavala) departs from Nampally at 7:00 PM. All other packages depart from Kacheguda — most at 7:00 PM, with Araku 4-in-1 (Pkg 11) at 5:30 PM and Pondicherry packages (Pkgs 5 & 6) at 5:00 PM. Always confirm your station at the time of booking.",
  },
  {
    question: "Can I book as a solo traveller?",
    answer:
      "BoYes. All STC packages are available for solo travellers, couples, and groups. You join a shared group departure from Hyderabad with other travellers on the same package. Your trip captain is present throughout. Solo travellers regularly cite STC trips as their most comfortable group travel experience.",
  },
  {
    question: "How far in advance should I book?",
    answer:
      "7–10 days minimum to secure train tickets at standard rates. 2–3 weeks ahead is ideal for peak months (October–February) and long weekends. Last-minute bookings within 3–5 days are sometimes possible but may incur Tatkal surcharges. Call +91 9705051052 to check availability for your preferred date.",
  },
  {
    question: "What is the difference between 1N/2D and 2N/3D packages?",
    answer:
      "1N/2D packages (Gokarna cluster, Hampi Standalone — ₹4,999 to ₹5,499) depart Thursday or Friday evening and return by Sunday morning. 2N/3D packages (Ooty, Coorg, Wayanad, Pondicherry, Araku, Lonavala — ₹6,499 to ₹7,999) depart Thursday or Friday evening and return Sunday night.",
  },
  {
    question: "Why does the Hampi Standalone tour run on Fridays only?",
    answer:
      "The Hampi Standalone tour (Pkg 9) is designed around a full Saturday at Hampi — from the 5:30 AM Anjanadri Hill sunrise to the Tungabhadra coracle ride and Hemakuta sunset. A Thursday departure would mean arriving with only a partial day, which is insufficient for the full itinerary. The Friday-only schedule is intentional.",
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
            src="/destination/hyderabad.png"
            alt="Hyderabad Cover"
            className="w-full h-full object-cover bg-bottom"
          />
        </div>

        {/* Title */}
        <h1 className="text-center text-3xl md:text-4xl font-semibold mt-10 mb-8 text-brand">
          Tour Packages from Hyderabad
        </h1>
        <DescriptionBox
          title="13 Packages. Departing Every Thursday &amp; Friday. From ₹4,999."
          content="Every package on this page departs from Hyderabad by train or bus on Thursday or Friday evening — and returns you to Hyderabad by Sunday night. Tickets, vehicle, accommodation, and a trip captain are all included in the price. You choose the destination. We handle everything else."
        />
      </div>
      <PackageLoader
        title="Weekend Trips from Hyderabad"
        category="weekend-trips-hyderabad"
      />
      <PackageLoader
        title="Backpacking Trips from Hyderabad"
        category="backpacking-trips-hyderabad"
      />
      <section className="w-full bg-[#efefef] p-3 md:p-6">
        <h2 className="text-2xl md:text-3xl font-bold text-[#2d6bb0] mb-5">
          All 13 Packages from Hyderabad — Quick View
        </h2>
        {/* Mobile Scroll Wrapper */}
        <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-[#1f4d7d] scrollbar-track-[#d9d9d9] rounded-lg">
          <div className="min-w-262">
            <table className="w-full border-collapse border border-[#bfbfbf] bg-white">
              <thead>
                <tr className="bg-[#1f4d7d] text-white">
                  <th className="border border-[#bfbfbf] px-3 md:px-4 py-3 text-left text-[15px] md:text-[18px] font-bold whitespace-nowrap">
                    Package
                  </th>

                  <th className="border border-[#bfbfbf] px-3 md:px-4 py-3 text-left text-[15px] md:text-[18px] font-bold whitespace-nowrap">
                    Price
                  </th>

                  <th className="border border-[#bfbfbf] px-3 md:px-4 py-3 text-left text-[15px] md:text-[18px] font-bold whitespace-nowrap">
                    Nights
                  </th>

                  <th className="border border-[#bfbfbf] px-3 md:px-4 py-3 text-left text-[15px] md:text-[18px] font-bold whitespace-nowrap">
                    Departure Station
                  </th>

                  <th className="border border-[#bfbfbf] px-3 md:px-4 py-3 text-left text-[15px] md:text-[18px] font-bold whitespace-nowrap">
                    Time · Mode
                  </th>

                  <th className="border border-[#bfbfbf] px-3 md:px-4 py-3 text-left text-[15px] md:text-[18px] font-bold whitespace-nowrap">
                    Days Available
                  </th>
                </tr>
              </thead>

              <tbody>
                {packages.map((section, index) => (
                  <React.Fragment key={index}>
                    <tr>
                      <td
                        colSpan={6}
                        className={`${section.color} text-white font-semibold px-4 py-2 text-base md:text-lg border border-[#bfbfbf]`}
                      >
                        {section.region}
                      </td>
                    </tr>

                    {section.rows.map((item, idx) => (
                      <tr
                        key={idx}
                        className="bg-[#f5f5f5] hover:bg-[#eeeeee] transition-colors"
                      >
                        <td className="border border-[#bfbfbf] px-3 md:px-4 py-3 text-[14px] md:text-[17px] font-medium whitespace-nowrap">
                          {item.package}
                        </td>

                        <td className="border border-[#bfbfbf] px-3 md:px-4 py-3 text-[14px] md:text-[17px] font-bold text-red-600 whitespace-nowrap">
                          {item.price}
                        </td>

                        <td className="border border-[#bfbfbf] px-3 md:px-4 py-3 text-[14px] md:text-[17px] whitespace-nowrap">
                          {item.nights}
                        </td>

                        <td
                          className={`border border-[#bfbfbf] px-3 md:px-4 py-3 text-[14px] md:text-[17px] whitespace-nowrap ${
                            item.highlight
                              ? "bg-red-100 text-red-700 font-semibold"
                              : ""
                          }`}
                        >
                          {item.station}
                        </td>

                        <td
                          className={`border border-[#bfbfbf] px-3 md:px-4 py-3 text-[14px] md:text-[17px] whitespace-nowrap ${
                            item.highlight ? "bg-red-100 text-red-700" : ""
                          }`}
                        >
                          {item.time}
                        </td>

                        <td
                          className={`border border-[#bfbfbf] px-3 md:px-4 py-3 text-[14px] md:text-[17px] whitespace-nowrap ${
                            item.highlightDays
                              ? "bg-red-100 text-red-700 font-bold"
                              : ""
                          }`}
                        >
                          {item.days}
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section className="w-full bg-[#efefef] py-10 px-4">
        <div className="max-w-6xl mx-auto space-y-8">
          {south.map((pkg) => (
            <div
              key={pkg.id}
              className={`w-full border ${pkg.border} mx-auto grid grid-cols-1 md:grid-cols-[1fr_300px] overflow-hidden`}
            >
              {/* LEFT SIDE */}
              <div
                className={`border-b md:border-b-0 md:border-r ${pkg.border} p-5 md:p-6 ${pkg.leftBg}`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[18px]">{pkg.emoji}</span>

                  <span className="text-[#7b7b7b] text-[15px]">
                    Pkg {pkg.id}
                  </span>

                  <h2 className="text-[#234f82] text-[18px] md:text-[20px] font-bold">
                    {pkg.title}
                  </h2>
                </div>

                <p className="text-[#555] italic leading-[1.5] mb-4 text-[15px]">
                  {pkg.description}
                </p>

                <ul className="space-y-1 text-[15px] leading-[1.55] text-[#1d1d1d] list-disc pl-5">
                  {pkg.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>

              {/* RIGHT SIDE */}
              <div className="bg-[#f5f6f8] p-5 md:p-6 flex flex-col justify-center">
                <div className="text-center">
                  <div className="text-[#d40000] text-[48px] font-bold leading-none">
                    {pkg.price}
                  </div>

                  <div className="text-[#8a8a8a] text-[16px] mt-2">
                    per person · {pkg.duration}
                  </div>
                </div>

                <div className="mt-7 text-[15px] text-[#222] leading-[1.45]">
                  <div className="font-bold">🚉 {pkg.station}</div>

                  <div className="text-[#555]">⏰ {pkg.timing}</div>

                  <div className="text-[#555]">🗓️ {pkg.days}</div>
                </div>

                <Link href={pkg.link}>
                  <button
                    className={`
      mt-7
      w-full
      ${pkg.buttonBg}
      text-white
      font-bold
      text-[18px]
      py-3
      transition-colors
      duration-300
    `}
                  >
                    {pkg.button}
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="w-[92%] md:w-[85%] mx-auto my-10 md:my-12">
        {/* Heading */}
        <div className="mb-8 md:mb-12">
          <h2 className="text-[28px] md:text-[34px] font-bold text-[#2d67a3] leading-tight">
            Which Station Do You Depart From?
          </h2>

          <p className="text-[17px] md:text-[22px] text-black mt-3 leading-relaxed max-w-300">
            STC packages from Hyderabad depart from two different stations, at
            three different times. Always confirm your exact station and time
            when you book.
          </p>
        </div>

        {/* Responsive Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3  overflow-hidden rounded-xl">
          {/* Column 1 */}
          <div className="border-b md:border-b-0 md:border-r border-neutral-300 flex flex-col">
            {/* Header */}
            <div className="bg-[#c70000] text-white px-4 md:px-5 py-4 font-bold text-[18px] md:text-[22px] leading-snug">
              Nampally Railway Station · 3:30 PM
            </div>

            {/* Body */}
            <div className="bg-[#f4d6d6] p-4 md:p-5 text-[16px] md:text-[22px] leading-[1.6]">
              <p>Pkg 1 — Gokarna + Jog Falls (Bus)</p>
              <p>Pkg 2 — Gokarna + Dandeli (Bus)</p>

              <div className="mt-5 md:mt-8">
                <p className="font-semibold">Also:</p>
                <p>Pkg 13 — Lonavala (Train) · 7:00 PM</p>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="border-b md:border-b-0 md:border-r border-neutral-300 flex flex-col">
            {/* Header */}
            <div className="bg-[#1f4f7e] text-white px-4 md:px-5 py-4 font-bold text-[18px] md:text-[22px] leading-snug">
              Kacheguda Railway Station · 7:00 PM / 7:05 PM
            </div>

            {/* Body */}
            <div className="bg-[#e6ebf1] p-4 md:p-5 text-[16px] md:text-[22px] leading-[1.6]">
              <p>Pkg 3 — Gokarna + Udupi (Train) 7PM</p>
              <p>Pkg 4 — Gokarna + Hampi (Train) 7PM</p>
              <p>Pkg 7 — Ooty & Coonoor (Train) 7PM</p>
              <p>Pkg 8 — Isha + Ooty (Train) 7PM</p>

              <p className="text-[#c70000] font-bold mt-2">
                Pkg 9 — Hampi Standalone (Bus) 7PM · FRI ONLY
              </p>

              <p>Pkg 10 — Coorg & Chikmagalur (Train) 7PM</p>
              <p>Pkg 12 — Wayanad (Train) 7:05PM</p>
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col">
            {/* Header */}
            <div className="bg-[#8c8c8c] text-white px-4 md:px-5 py-4 font-bold text-[18px] md:text-[22px] leading-snug">
              TBC Station · 5:00 PM / 5:30 PM
            </div>

            {/* Body */}
            <div className="bg-[#f3f3f3] p-4 md:p-5 text-[16px] md:text-[22px] leading-[1.6]">
              <p className="text-[#d40000]">
                Pkg 5 — Pondicherry + Mahabalipuram (Train) 5PM [CONFIRM]
              </p>

              <p className="text-[#d40000] mt-2">
                Pkg 6 — Arunachalam + Pondicherry (Train) 5PM [CONFIRM]
              </p>

              <p className="text-[#d40000] mt-2">
                Pkg 11 — Araku 4-in-1 (Train) 5:30PM [CONFIRM]
              </p>

              <p className="text-[#8c8c8c] italic mt-6 md:mt-10 leading-relaxed">
                These 3 stations pending confirmation. Our team will confirm at
                booking.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[92%] md:w-[80%] mx-auto my-10">
        {/* Heading */}
        <h2 className="text-[#2d67a3] text-[28px] md:text-[42px] font-bold mb-8 md:mb-10 leading-tight">
          What Is Included in Every Package from Hyderabad
        </h2>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 border border-neutral-300 overflow-hidden rounded-xl">
          {/* Included */}
          <div className="bg-[#dde8d5] p-5 md:p-8 border-b md:border-b-0 md:border-r border-neutral-300">
            <div className="flex items-center gap-3 md:gap-4 text-[#1f4d7f] font-bold text-[18px] md:text-[22px] mb-6 md:mb-8">
              <span className="text-[24px] md:text-[30px]">✅</span>
              <h3>Always Included</h3>
            </div>

            <ul className="list-disc pl-5 md:pl-10 space-y-3 text-[16px] md:text-[22px] leading-[1.5] text-black">
              <li>
                Train or bus tickets — Hyderabad to destination and return
              </li>

              <li>AC pre-hired vehicle for all sightseeing</li>

              <li>Hotel or camp accommodation (1 or 2 nights per package)</li>

              <li>Dedicated trip captain from departure to return</li>

              <li>First aid kit on all trips</li>

              <li>Driver charges, tolls, parking, and state taxes</li>
            </ul>
          </div>

          {/* Not Included */}
          <div className="bg-[#f3f3f3] p-5 md:p-8">
            <div className="flex items-center gap-3 md:gap-4 text-neutral-500 font-bold text-[18px] md:text-[22px] mb-6 md:mb-8">
              <span className="text-[24px] md:text-[30px]">❌</span>
              <h3>Not Included</h3>
            </div>

            <ul className="list-disc pl-5 md:pl-10 space-y-3 text-[16px] md:text-[22px] leading-[1.5] text-neutral-500">
              <li>Food and meals</li>

              <li>Entry tickets to monuments and attractions</li>

              <li>GST @ 5%</li>

              <li>Tatkal charges if applicable</li>

              <li>Special one-way charges (₹400–₹500 if applicable)</li>

              <li>Personal expenses and shopping</li>
            </ul>
          </div>
        </div>
      </div>
      <FAQ faqs={faqs} />
      <FinalCTA
        title="Your Next Weekend Leaves This Thursday or Friday."
        description="Gokarna's beaches. Hampi's ruins. The Nilgiri toy train. Lambasingi's sub-zero camp. Pondicherry's French Quarter. Wayanad's forests. 13 departures every week. All returning you to Hyderabad by Sunday night. All from ₹4,999"
        primaryLink="/destinations/north-india"
        primaryLabel="View All 13 Packages from Hyderabad →"
      />
    </>
  );
}
