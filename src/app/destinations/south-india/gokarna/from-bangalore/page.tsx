import ContactForm from "@/components/ContactForm";
import DescriptionBox from "@/components/DescriptionBox";
import FAQ from "@/components/FAQs";
import FinalCTA from "@/components/FinalCTA";
import PackageCarousel from "@/components/PackageCarousel";
import { PackageLoader } from "@/components/PackageLoader/PackageLoader";
import Reviews from "@/components/Reviews";
import WhyChooseUs from "@/components/WhyChooseUs";
import { BadgeCheck, Compass, Phone, Star, TreePalm } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import React from "react";

export const metadata = {
  title: "Gokarna Tour Packages",
};
const gokarna = [
  {
    title: "🚌  2-Day Gokarna Weekend",
    price: "₹5,199  ·  2D/1N  ·  Bus",
    subtitle: "Marathahalli · Silk Board · Majestic · Friday nights",
    features: [
      "Day 1: Mirjan Fort · Om Beach (cafes + shopping) · Kudle Beach · Jatayu Teertha",
      "Day 2: Vibhooti Waterfalls · Honnavar Mangrove Forest · Sharavathi Backwaters Boating · Murudeshwar Temple · Gopuram Climbing · Murudeshwar Beach",
      "Jatayu Teertha — exclusive to this package",
      "Gopuram Climbing at Murudeshwar — exclusive to this package",
      "2 Breakfasts included",
      "₹5,199 — best-value Gokarna group tour from Bangalore",
      "Best for: beach + temples + culture · bus pickup · Friday night departure",
    ],
    image: "/packages/gokarna.png",
    href: "/destinations/south-india/gokarna/from-bangalore",
    badge: "Group Trip",
  },
  {
    title: "🚂  3-Day Gokarna + Dandeli",
    price: "₹5,999 · 3D/2N · Train from KSR",
    subtitle: "KSR Bengaluru Railway Station · Thursday & Friday",
    features: [
      "Day 1: Dandeli water sports — kayaking + zorbing + boating + river swimming (ALL INCLUDED) + campfire + meals",
      "Day 2: Vibhooti Waterfalls · Honnavar Mangrove Forest · Murudeshwar Temple · Nirvana Beach camping",
      "Day 3: Mirjan Fort · Mahabaleshwar Temple · Om Beach · Kudle Beach · Return train",
      "ALL Dandeli water sports included in price — exclusive to this package",
      "Nirvana Beach night camping — exclusive to this package",
      "All Dandeli Day 1 meals included (Breakfast + Lunch + Dinner)",
      "Train tickets both ways included",
    ],
    image: "/packages/gokarna.png",
    href: "/destinations/south-india/gokarna/from-hyderabad",
    badge: "Group Trip",
  },
];
const faqs = [
  {
    question:
      "What is the difference between the 2-day and 3-day Gokarna packages from Bangalore?",
    answer:
      "The 2-day Gokarna package (₹5,199) departs Friday night by bus from Marathahalli (9PM), Silk Board (10PM), and Majestic (11PM). Day 1 covers Mirjan Fort, Om Beach, Kudle Beach, and Jatayu Teertha. Day 2 covers Vibhooti Waterfalls, Honnavar Mangrove Forest, Sharavathi Backwaters Boating, Murudeshwar Temple, and Gopuram Climbing. 2 Breakfasts are included. The 3-day Gokarna + Dandeli package (₹5,999) departs by train from KSR Bengaluru on Thursday or Friday. Day 1 is entirely in Dandeli with all water sports included in the price — kayaking, zorbing, boating, and river swimming, plus campfire and all Day 1 meals. Day 2 is Vibhooti Waterfalls, Honnavar Mangrove, and Murudeshwar Temple, with night camping at Nirvana Beach. Day 3 covers Mirjan Fort, Mahabaleshwar Temple, Om Beach, and Kudle Beach before the return train.",
  },
  {
    question: "What is Om Beach Gokarna?",
    answer:
      "Om Beach is the most visited of Gokarna’s five main beaches, named for its shoreline that forms the shape of the Hindu symbol ‘Om’ (ओं) when viewed from the hills above. The beach is backed by rocky headlands and flanked by shack cafes serving local seafood and fresh coconut water. It is approximately 5km south of Gokarna town and accessible by road or by the beach trek from Kudle Beach. Both STC Gokarna packages include Om Beach — on Day 1 of the 2-day bus tour and Day 3 of the 3-day train tour. The beach is famous for its sunsets and for the Mahabaleshwar Temple visible on the headland above its northern end.",
  },
  {
    question:
      "Are all the Dandeli water sports really included in the ₹5,999 price?",
    answer:
      "Yes. The STC 3-day Gokarna + Dandeli package (₹5,999) includes kayaking, zorbing, boating, and river swimming — all four water activities — in the stated package price. This is confirmed in the inclusions list. There are no separate charges for these activities on Day 1. River rafting and zipline are not confirmed as included in the Bangalore package — please call +91 8886051052 to confirm their status before booking if these are priorities.",
  },
  {
    question: "What is the best time to visit Gokarna from Bangalore?",
    answer:
      "October to March is the peak season — the weather is dry, the sea is calm, and the beaches are at their most accessible. November to February has the best sea conditions for beach exploration and Murudeshwar Temple visits. Monsoon (June to September) is dramatic on the Karnataka coast — Vibhooti Waterfalls are at full flow, the Aghanashini estuary at Mirjan Fort is flooded beautifully, and the coast is very green — but sea conditions can be rough and some activities may be unavailable. STC Gokarna packages run weekly year-round.",
  },
  {
    question:
      "Is the bus pickup convenient from different parts of Bangalore for the 2-day package?",
    answer:
      "The 2-day Gokarna bus (Package A) has 3 pickup points covering east, south, and central Bangalore: Marathahalli — Tansi Honda at 9:00 PM, Silk Board — Nahdi Mandi Restaurant at 10:00 PM, and Majestic — Metro Station East Entrance at 11:00 PM. Friday nights only. The 3-day Gokarna + Dandeli train package departs from KSR Bengaluru Railway Station (Krantivira Sangolli Rayanna) on Thursday and Friday evenings. Exact KSR departure time: confirm with operations at +91 8886051052.",
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
    title: "All Water Sports Included",
    description:
      "STC’s 3-day package is the only group tour from Bangalore where all 4 Dandeli water activities — kayaking, zorbing, boating, and river swimming — are included in the stated price. No hidden activity charges on Day 1.",
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
            src="/banner/blr.png"
            alt="Gokarna Cover"
            className="w-full h-full object-cover bg-bottom"
          />
        </div>
        {/* Title */}

        <h1 className="text-center text-3xl md:text-4xl font-semibold mt-10 mb-8 text-brand">
          Gokarna Trip from Bangalore
        </h1>
        <DescriptionBox
          title="Sacred Shores and Wild Rivers. Mirjan Fort. Om Beach. Murudeshwar at Sunset. And Three Days of Dandeli’s Water Sports. From ₹5,199."
          content="There is a place on the Karnataka coast where the Western Ghats reach the Arabian Sea and the land stops belonging entirely to either. Gokarna sits in this meeting — a small temple town with a 4th-century Mahabaleshwar temple on one end and a sequence of five beaches on the other, the most famous being Om Beach, whose shoreline is shaped like the Hindu symbol ‘Om’ when seen from the hills above. STC runs two Gokarna group tours from Bangalore: a 2-day bus weekend from ₹5,199 with Mirjan Fort on Day 1, then Om Beach, Kudle Beach, and Jatayu Teertha, and on Day 2, Vibhooti Waterfalls, Honnavar Mangrove Forest, the boat ride through Sharavathi Backwaters, and Murudeshwar Temple with its 20-storey Gopuram at sunset — and a 3-day train tour from ₹5,999 that opens with a full day of Dandeli’s water sports before arriving at Gokarna’s coast."
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
        <PackageCarousel items={gokarna} title="Choose Your Gokarna Journey" />
        <div className="w-full max-w-4xl border border-[#bdbdbd] bg-[#dfe3ea] mx-auto grid grid-cols-1 md:grid-cols-[1fr_390px] overflow-hidden">
          {/* LEFT SIDE */}
          <div className="border-b md:border-b-0 md:border-r border-[#bdbdbd] p-4 md:p-5">
            <h2 className="text-[#234f82] text-[16px] font-bold mb-1">
              🚌 2-Day Gokarna Weekend Bus Tour
            </h2>

            <p className="text-[#666] italic leading-[1.5] mb-6">
              Mirjan Fort, Om Beach, Kudle Beach, Jatayu Teertha, Vibhooti
              Waterfalls, Murudeshwar Temple. Bus from Bangalore.
            </p>

            <div className="space-y-1 text-[14px] leading-[1.5] text-[#222]">
              <p>
                Day 1: Mirjan Fort — 14th-century coastal fort on the
                Aghanashini river estuary
              </p>

              <p>
                Day 1: Om Beach — explore cafes and local shopping along the
                Om-shaped shoreline
              </p>

              <p>
                Day 1: Kudle Beach — the quietest of Gokarna’s main beaches,
                backed by hills
              </p>

              <p>
                Day 1: Jatayu Teertha — sacred site on the Gokarna shoreline
              </p>

              <p>
                Day 2: Vibhooti Waterfalls — the seasonal waterfall near
                Honnavar
              </p>

              <p>
                Day 2: Honnavar Mangrove Forest — boat through the mangroves of
                the Sharavathi estuary
              </p>

              <p>
                Day 2: Sharavathi Backwaters Boating — the wide backwater system
                at Honnavar
              </p>

              <p>
                Day 2: Murudeshwar Temple — the 20-storey Gopuram at sunset on
                the Arabian Sea
              </p>

              <p>
                Day 2: Gopuram Climbing — climb the Murudeshwar tower for
                panoramic coastal views
              </p>
            </div>

            <div className="mt-6 font-bold text-[#234f82] leading-[1.5] text-[15px]">
              ♦ Unique: Jatayu Teertha + Gopuram Climbing + 2 Breakfasts
              included — none in the 3-day package.
            </div>

            <div className="mt-7 text-[14px] text-[#666] leading-[1.5]">
              🚌 Marathahalli (9PM) · Silk Board (10PM) · Majestic (11PM) ·
              Friday nights only
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="p-6 text-center flex flex-col items-center">
            <div className="text-[#d00000] text-[42px] font-bold leading-none">
              ₹5,199
            </div>

            <div className="text-[#777] text-[14px] mt-2">
              per person · 2D/1N
            </div>

            <div className="mt-8 text-[24px] text-[#111]">Friday nights</div>

            <button
              className="
            w-full
            mt-10
            bg-[#d40000]
            hover:bg-[#b60000]
            transition-colors
            duration-300
            text-white
            font-bold
            text-[18px]
            py-4
          "
            >
              Book 2-Day Gokarna →
            </button>

            <div className="mt-7 text-[#2870c7] text-[18px]">
              📞 +91 8886051052
            </div>
          </div>
        </div>
        <div className="w-full max-w-4xl border border-[#bdbdbd] bg-[#dfe3ea] mx-auto grid grid-cols-1 md:grid-cols-[1fr_390px] overflow-hidden">
          {/* LEFT SIDE */}
          <div className="border-b md:border-b-0 md:border-r border-[#bdbdbd] p-4 md:p-5">
            <h2 className="text-[#234f82] text-[16px] font-bold mb-1">
              🚂 3-Day Gokarna & Dandeli Train Tour
            </h2>

            <p className="text-[#666] italic leading-[1.5] mb-6">
              Dandeli water sports, Vibhooti Falls, Murudeshwar Temple, Nirvana
              Beach, Mirjan Fort, Om Beach. Train from KSR
            </p>

            <div className="space-y-1 text-[14px] leading-[1.5] text-[#222]">
              <p>
                Day 1: Dandeli — kayaking · zorbing · boating · river swimming
                (ALL INCLUDED) · campfire · indoor games · Breakfast + Lunch +
                Dinner included
              </p>

              <p>
                Day 2: Vibhooti Waterfalls · Honnavar Mangrove Forest ·
                Murudeshwar Temple · Night camping at Nirvana Beach
              </p>

              <p>
                Day 3: Mirjan Fort · Mahabaleshwar Temple · Om Beach · Kudle
                Beach · Return train to Bangalore
              </p>

              <p>
                TWO ZONES in 3 days — Dandeli’s forest rivers + Gokarna’s sacred
                coast Train tickets both ways included · Thursday & Friday from
                KSR
              </p>

              <p>
                ♦ Unique: ALL Dandeli water sports (kayaking + zorbing + boating
                + river swimming) — all included in price, exclusive to this
                package.
              </p>

              <p>
                ♦ Unique: Nirvana Beach night camping — exclusive to this
                package.
              </p>

              <p>🚂 KSR Bengaluru Railway Station · Thursday & Friday</p>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="p-6 text-center flex flex-col items-center">
            <div className="text-[#d00000] text-[42px] font-bold leading-none">
              ₹5,999
            </div>

            <div className="text-[#777] text-[14px] mt-2">
              per person · 3D/2N
            </div>

            <div className="mt-8 text-[24px] text-[#111]">Thu & Fri weekly</div>

            <button
              className="
            w-full
            mt-10
            bg-[#d40000]
            hover:bg-[#b60000]
            transition-colors
            duration-300
            text-white
            font-bold
            text-[18px]
            py-4
          "
            >
              Book 3-Day Gokarna + Dandeli →
            </button>

            <div className="mt-7 text-[#2870c7] text-[18px]">
              📞 +91 8886051052
            </div>
          </div>
        </div>
        <div className="w-[80%] mx-auto overflow-x-auto bg-white my-10">
          <p className="text-2xl text-brand font-semibold mb-4">
            Compare Both Gokarna Packages from Bangalore
          </p>

          <table className="w-full text-sm text-left border-collapse rounded-2xl border border-neutral-200">
            <colgroup>
              <col className="w-[22%]" />
              <col className="w-[39%]" />
              <col className="w-[39%]" />
            </colgroup>

            <thead>
              <tr className="border-b">
                <th className="p-4 bg-white"></th>

                <th className="p-4 text-brand font-semibold bg-brand/10">
                  🚌 Pkg A - 2-Day Gokarna Weekend
                </th>

                <th className="p-4 text-brand font-semibold bg-brand/20">
                  🚆 Pkg B - 3-Day Gokarna + Dandeli
                </th>
              </tr>
            </thead>

            <tbody className="text-neutral-700">
              {/* Price */}
              <tr className="border-b">
                <td className="p-4 font-medium">Price</td>
                <td className="p-4 font-semibold text-brand bg-brand/5">
                  ₹5,199 per person
                </td>
                <td className="p-4 font-semibold text-brand bg-brand/10">
                  ₹5,999 per person
                </td>
              </tr>

              {/* Duration */}
              <tr className="border-b">
                <td className="p-4 font-medium">Duration</td>
                <td className="p-4">2 Days / 1 Night</td>
                <td className="p-4">3 Days / 2 Nights</td>
              </tr>

              {/* Transport */}
              <tr className="border-b">
                <td className="p-4 font-medium">Transport</td>
                <td className="p-4">Bus — Tempo Traveller</td>
                <td className="p-4">
                  Train — Sleeper Non-AC (tickets included)
                </td>
              </tr>

              {/* Pickup */}
              <tr className="border-b">
                <td className="p-4 font-medium">Pickup</td>
                <td className="p-4">
                  Marathahalli (9PM) · Silk Board (10PM) · Majestic (11PM){" "}
                  <br />
                  <span className="text-xs text-neutral-500">
                    Friday nights
                  </span>
                </td>
                <td className="p-4">
                  KSR Bengaluru Railway Station <br />
                  <span className="text-xs text-neutral-500">
                    Thursday & Friday
                  </span>
                </td>
              </tr>

              {/* Day 1 */}
              <tr className="border-b">
                <td className="p-4 font-medium">Day 1</td>
                <td className="p-4">
                  Mirjan Fort · Om Beach · Kudle Beach · Jatayu Teertha
                </td>
                <td className="p-4">
                  Dandeli: kayaking + zorbing + boating + river swimming (ALL
                  INCLUDED) + campfire + all meals
                </td>
              </tr>

              {/* Day 2 */}
              <tr className="border-b">
                <td className="p-4 font-medium">Day 2</td>
                <td className="p-4">
                  Vibhooti Waterfalls · Honnavar Mangrove · Sharavathi Boating ·
                  Murudeshwar Temple + Gopuram · Murudeshwar Beach
                </td>
                <td className="p-4">
                  Vibhooti Waterfalls · Murudeshwar Temple · Nirvana Beach
                  camping
                </td>
              </tr>

              {/* Day 3 */}
              <tr className="border-b">
                <td className="p-4 font-medium">Day 3</td>
                <td className="p-4 text-neutral-400">—</td>
                <td className="p-4">
                  Mirjan Fort · Mahabaleshwar Temple · Om Beach · Kudle Beach ·
                  Return train
                </td>
              </tr>

              {/* Water Sports */}
              <tr className="border-b">
                <td className="p-4 font-medium">Water Sports</td>
                <td className="p-4 text-red-500 font-medium">
                  ❌ Not included
                </td>
                <td className="p-4 text-green-600 font-medium">
                  ✅ Day 1 — All 4 included in price
                </td>
              </tr>

              {/* Nirvana Beach */}
              <tr className="border-b">
                <td className="p-4 font-medium">Nirvana Beach Camping</td>
                <td className="p-4 text-red-500 font-medium">
                  ❌ Not included
                </td>
                <td className="p-4 text-green-600 font-medium">
                  ✅ Day 2 — Exclusive
                </td>
              </tr>

              {/* Jatayu Teertha */}
              <tr className="border-b">
                <td className="p-4 font-medium">Jatayu Teertha</td>
                <td className="p-4 text-green-600 font-medium">
                  ✅ Day 1 — Exclusive
                </td>
                <td className="p-4 text-red-500 font-medium">
                  ❌ Not included
                </td>
              </tr>

              {/* Gopuram */}
              <tr className="border-b">
                <td className="p-4 font-medium">Gopuram</td>
                <td className="p-4 text-green-600 font-medium">
                  ✅ Day 2 — Exclusive
                </td>
                <td className="p-4 text-red-500 font-medium">
                  ❌ Not included
                </td>
              </tr>

              {/* Meals */}
              <tr className="border-b">
                <td className="p-4 font-medium">Meals</td>
                <td className="p-4">2 Breakfasts included</td>
                <td className="p-4">All Dandeli Day 1 meals (B + L + D)</td>
              </tr>

              {/* Train */}
              <tr className="border-b">
                <td className="p-4 font-medium">Train Tickets</td>
                <td className="p-4 text-red-500 font-medium">
                  ❌ Not applicable (bus)
                </td>
                <td className="p-4 text-green-600 font-medium">
                  ✅ Included both ways
                </td>
              </tr>

              {/* Choose */}
              <tr>
                <td className="p-4 font-medium">Choose if...</td>

                <td className="p-4 bg-brand/5 rounded-bl-2xl">
                  Beach + temples + culture.
                  <br />
                  Bus pickup convenience.
                  <br />
                  Jatayu + Gokarna climbing + sunset priority.
                </td>

                <td className="p-4 bg-brand/10 rounded-br-2xl">
                  Adventure first.
                  <br />
                  River sports + forest + sacred coast in 3 days.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="w-[70%] mx-auto my-10 overflow-x-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 border border-neutral-200 rounded-b-xl overflow-hidden">
            {/* Included */}
            <div className="bg-green-50 p-6 border-r border-neutral-200">
              <div className="flex items-center gap-2 text-green-700 font-semibold text-lg mb-4">
                <span>✅</span> What’s Included
              </div>

              <ul className="list-disc pl-5 space-y-2 text-sm text-neutral-800">
                <li>
                  Bus tickets — Bangalore to Gokarna & return (Pkg A — Tempo
                  Traveller/Mini Bus)
                </li>
                <li>
                  Train tickets both ways — Sleeper Non-AC (Pkg B — confirmed in
                  inclusions)
                </li>
                <li>
                  Accommodation — 1 night (Pkg A) • 2 nights camping (Pkg B)
                </li>
                <li>2 Breakfasts included (Pkg A — confirmed)</li>
                <li>
                  All Dandeli Day 1 meals — Breakfast + Lunch + Dinner (Pkg B —
                  confirmed)
                </li>
                <li>
                  All Dandeli water sports — kayaking + zorbing + boating +
                  river swimming (Pkg B — confirmed)
                </li>
                <li>Trip captain / guide throughout</li>
                <li>Driver charges, toll taxes, first aid</li>
              </ul>
            </div>

            {/* Not Included */}
            <div className="bg-red-50 p-6">
              <div className="flex items-center gap-2 text-red-700 font-semibold text-lg mb-4">
                <span>❌</span> What’s Not Included
              </div>

              <ul className="list-disc pl-5 space-y-2 text-sm text-neutral-800">
                <li>
                  Food (except Dandeli Day 1 meals in Pkg B, and 2 Breakfasts in
                  Pkg A)
                </li>
                <li>
                  Entry tickets to all attractions (Mirjan Fort, Om Beach,
                  Murudeshwar, Vibhooti Falls, etc.)
                </li>
                <li>
                  Sharavathi Backwaters Boating — Pkg A (confirm inclusion
                  status with operations)
                </li>
                <li>GST @ 5%</li>
                <li>Personal expenses and shopping</li>
              </ul>
            </div>
          </div>
        </div>

        <Reviews />
        <FAQ faqs={faqs} />
        <WhyChooseUs layout={[3, 1]} features={features} />
        <ContactForm />
        <FinalCTA
          title="Mirjan Fort. Om Beach. Murudeshwar at Sunset. Or Dandeli’s River Sports First. Two Ways into Karnataka’s Coast."
          description="The bus leaves Friday night from Marathahalli at 9PM for the 2-day Gokarna weekend — Mirjan Fort and Om Beach on Day 1, Vibhooti Falls and Murudeshwar Temple on Day 2. The train leaves from KSR Thursday or Friday for the 3-day Gokarna + Dandeli circuit — all four water sports on a Dandeli river on Day 1 with meals included, Murudeshwar at sunset on Day 2, then the coast from Day 3. From ₹5,199"
          primaryLink="/destinations/north-india"
          primaryLabel="2-Day Gokarna ₹5,199 →"
          secondaryLink="/destinations/south-india"
          secondaryLabel="3-Day Gokarna + Dandeli ₹5,999 →"
        />
        {/* Packages Section */}
      </div>
    </>
  );
}
