import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQs";
import FinalCTA from "@/components/FinalCTA";
import PackageCarousel from "@/components/PackageCarousel";
import Reviews from "@/components/Reviews";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

import React from "react";

export const metadata = {
  title:
    "Ooty Trip from Hyderabad 2026 — 2 Packages | Toy Train, Wildlife & Isha Foundation | ₹7,199 Onwards | Swadeshi Traveller",
  description:
    "2 Ooty group tour packages from Hyderabad. Pkg 1 (₹7,199): Mudumalai Tiger Reserve, Pykara Waterfalls, Nilgiri toy train, tea factory, boat ride. Pkg 2 (₹7,499): Isha Foundation, Adiyogi Laser Show, toy train, chocolate factory. Both depart Kacheguda 7PM Thu/Fri.",
  keywords:
    "ooty trip from hyderabad ooty tour package from hyderabad | ooty coonoor tour from hyderabad | isha foundation ooty tour from hyderabad | ooty toy train booking | ooty trip from hyderabad price | ooty package from hyderabad",
};
const faqs = [
  {
    question: "Where do both Ooty packages depart from in Hyderabad?",
    answer:
      "Both the Ooty & Coonoor and Isha Foundation + Ooty packages depart from Kacheguda Railway Station, Hyderabad at 7:00 PM every Thursday and Friday. Please arrive at least 30 minutes before departure. Your STC trip captain will be at the station to meet you.",
  },
  {
    question: "Is the Nilgiri toy train included in both packages?",
    answer:
      "Yes. The UNESCO World Heritage Nilgiri Mountain Railway toy train from Coonoor to Ooty is included in both packages. The toy train runs through 16 tunnels, 31 bridges, and continuous tea plantation scenery across a 1.5-hour journey. It is one of the highlights of both trips.",
  },
  {
    question: "Can I switch packages after booking?",
    answer:
      "Please contact us at +91 9705051052 before booking if you are unsure. We are happy to walk you through both packages and help you choose. Post-booking changes are subject to our rescheduling policy — our team will advise you on the best options for your situation.",
  },
  {
    question: "What is the best time to visit Ooty from Hyderabad?",
    answer:
      "Ooty is pleasant year-round from Hyderabad. April to June offers cool summer weather with the Nilgiri Rose Garden in bloom. October to February brings crisp clear skies — best visibility for the toy train journey and viewpoints. Monsoon (JulySeptember) is atmospheric but some ghat roads can be slow. Both packages run every Thursday and Friday throughout the year.",
  },
  {
    question:
      " I am interested in the Isha Foundation but not sure about the spiritual angle — is it suitable for everyone?",
    answer:
      "Yes, the Isha Foundation + Ooty package is suitable for all travellers regardless of religious background. The Adiyogi statue and ashram are architecturally and culturally compelling even for those with no prior connection to the Isha Foundation. The Laser Show in particular is a visual spectacle that many non-religious travellers describe as a highlight. The package does not require participation in any rituals — you explore at your own comfort level.",
  },
];
const ooty = [
  {
    title: "Ooty & Coonoor",
    price: "₹7,199 per person  |  2N/3D",
    subtitle:
      "Mudumalai Tiger Reserve · Pykara Waterfalls · Toy Train · Tea Factory · Boat Ride",
    image: "/hyd/3.png",
    href: "/destinations/south-india/ooty/from-hyderabad",
    badge: "Group Trip",
  },
  {
    title: "✨  Isha Foundation + Ooty",
    price: "₹7,499 per person  |  2N/3D",
    subtitle:
      "Adiyogi Laser Show · Evening Aarti · Toy Train · Chocolate Factory · Boat Ride ",

    image: "/hyd/5.png",
    href: "/destinations/south-india/ooty/from-hyderabad",
    badge: "Group Trip",
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
            src="/banner/hyd.png"
            alt="Hyderabad Cover"
            className="w-full h-full object-cover bg-bottom"
          />
        </div>

        {/* Title */}
        <h1 className="text-center text-3xl md:text-4xl font-semibold mt-10 mb-8 text-brand">
          Ooty Trip from Hyderabad
        </h1>
        <PackageCarousel
          items={ooty}
          title="Two Departures. Every Thursday & Friday. Choose Your Ooty Weekend"
          description="Both packages depart from Kacheguda Railway Station at 7:00 PM every Thursday and Friday. Both include the UNESCO Nilgiri Mountain Railway toy train from Coonoor to Ooty. The difference is what happens on Day 1 — and it changes the entire character of the trip"
        />

        {/* Package Cards */}
        <div className="w-full max-w-6xl mx-auto border border-[#b7b7b7] grid grid-cols-1 md:grid-cols-[1fr_360px] overflow-hidden bg-[#eef0f2] my-10 md:my-16">
          {/* LEFT SIDE */}
          <div className="bg-[#dfe8d7] p-4 sm:p-5 md:p-6 border-b md:border-b-0 md:border-r border-[#b7b7b7]">
            <h2 className="text-[#234f82] text-[22px] md:text-[20px] font-bold leading-tight mb-2">
              □ Ooty & Coonoor Tour
            </h2>

            <p className="italic text-[#555] text-[14px] md:text-[15px] leading-[1.6] mb-4">
              Wildlife + Tea Gardens + UNESCO Toy Train
            </p>

            <ul className="list-disc pl-5 text-[14px] md:text-[15px] leading-[1.7] text-[#111] space-y-2">
              <li>
                Bandipur Forest & Mudumalai Tiger Reserve — elephant herds at
                dawn
              </li>

              <li>Pykara Waterfalls — hidden Nilgiri cascade</li>

              <li>Dolphin Nose Viewpoint — 300m valley panorama in Coonoor</li>

              <li>
                UNESCO Nilgiri Toy Train — Coonoor to Ooty through 16 tunnels
              </li>

              <li>Tea Factory visit + Ooty Boat House + Pine Park</li>
            </ul>

            <div className="mt-5 text-[#8a8a8a] text-[13px] md:text-[14px] leading-[1.6]">
              • Mysore Palace on return &nbsp;|&nbsp; Kacheguda 7PM, Thu & Fri
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="bg-[#dfe8d7] flex flex-col items-center justify-center text-center px-5 md:px-6 py-5 md:py-6">
            <div className="text-[#c40000] text-[40px] sm:text-[48px] md:text-[54px] font-bold leading-none">
              ₹7,199
            </div>

            <div className="text-[#7b7b7b] text-[14px] md:text-[16px] mt-2">
              per person
            </div>

            <div className="mt-2 text-black font-bold text-[16px] md:text-[18px] leading-tight">
              2 Nights / 3 Days
            </div>

            <div className="text-[#666] text-[14px] md:text-[15px] mt-1">
              Thu & Fri weekly
            </div>

            <div className="text-[#222] text-[14px] md:text-[15px] leading-[1.5] mt-3">
              Train · Sleeper Class
              <br />
              Kacheguda · 7:00 PM
            </div>

            <button
              className="
        mt-7 md:mt-8
        w-full
        bg-[#1f4f84]
        hover:bg-[#18426e]
        transition-colors
        duration-300
        text-white
        font-bold
        text-[16px] md:text-[20px]
        leading-tight
        py-3.5 md:py-4
        rounded-md
      "
            >
              Book This
              <br />
              Package →
            </button>

            <div className="mt-5 md:mt-6 text-[#2b73b8] text-[14px] md:text-[15px] font-medium">
              □ +91 9705051052
            </div>
          </div>
        </div>

        {/* Package 2 */}
        <div className="w-full max-w-6xl mx-auto border border-[#c9c9c9] grid grid-cols-1 md:grid-cols-[1fr_360px] overflow-hidden bg-[#f1f3f7] my-10 md:my-16">
          {/* LEFT SIDE */}
          <div className="bg-[#f1f3f7] p-4 sm:p-5 md:p-6 border-b md:border-b-0 md:border-r border-[#c9c9c9]">
            <h2 className="text-[#234f82] text-[22px] md:text-[20px] font-bold leading-tight mb-2">
              ✦ Isha Foundation + Ooty Tour
            </h2>

            <p className="italic text-[#5f5f5f] text-[14px] md:text-[15px] leading-[1.6] mb-4">
              Spiritual Experience + Tea Gardens + UNESCO Toy Train
            </p>

            <ul className="list-disc pl-5 text-[14px] md:text-[15px] leading-[1.7] text-[#111] space-y-2">
              <li>
                Isha Foundation, Coimbatore — Adiyogi Shiva statue (world&apos;s
                largest bust)
              </li>

              <li>
                Evening Aarti + Adiyogi Laser Light Show — Day 1 exclusive
              </li>

              <li>Dolphin Nose Viewpoint — 300m valley panorama in Coonoor</li>

              <li>
                UNESCO Nilgiri Toy Train — Coonoor to Ooty through 16 tunnels
              </li>

              <li>Tea + Chocolate Factory + Ooty Boat House + Needle Rock</li>
            </ul>

            <div className="mt-5 text-[#8a8a8a] text-[13px] md:text-[14px] leading-[1.6]">
              • Bandipur Forest on return &nbsp;|&nbsp; Kacheguda 7PM, Thu & Fri
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="bg-[#eef1f8] flex flex-col items-center justify-center text-center px-5 md:px-6 py-5 md:py-6">
            <div className="text-[#cc0000] text-[40px] sm:text-[48px] md:text-[54px] font-bold leading-none">
              ₹7,499
            </div>

            <div className="text-[#8b8b8b] text-[14px] md:text-[16px] mt-2">
              per person
            </div>

            <div className="mt-2 text-black font-bold text-[16px] md:text-[18px] leading-tight">
              2 Nights / 3 Days
            </div>

            <div className="text-[#777] text-[14px] md:text-[15px] mt-1">
              Thu & Fri weekly
            </div>

            <div className="text-[#222] text-[14px] md:text-[15px] leading-[1.5] mt-3">
              Train · Sleeper Class
              <br />
              Kacheguda · 7:00 PM
            </div>

            <button
              className="
        mt-7 md:mt-8
        w-full
        bg-[#d10000]
        hover:bg-[#b60000]
        transition-colors
        duration-300
        text-white
        font-bold
        text-[16px] md:text-[20px]
        leading-tight
        py-3.5 md:py-4
        rounded-md
      "
            >
              Book This
              <br />
              Package →
            </button>

            <div className="mt-5 md:mt-6 text-[#2b73b8] text-[14px] md:text-[15px] font-medium">
              □ +91 9705051052
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="w-full max-w-6xl mx-auto my-10 overflow-x-auto">
          {/* Heading */}
          <div className="mb-5">
            <h2 className="text-[#2d69ad] text-[22px] md:text-[24px] font-bold leading-tight">
              Which Ooty Package Should You Book?
            </h2>

            <p className="mt-2 text-[16px] text-[#1d1d1d] leading-[1.45] max-w-5xl">
              Both packages depart from Kacheguda at 7PM. Both include the toy
              train. Both cost under ₹7,500. The difference is Day 1 — and it is
              a significant one.
            </p>
          </div>

          {/* Table */}
          <table className="w-full border-collapse border border-[#c9c9c9] text-left">
            <colgroup>
              <col className="w-[25%]" />
              <col className="w-[37.5%]" />
              <col className="w-[37.5%]" />
            </colgroup>

            <thead>
              <tr>
                <th className="border border-[#c9c9c9] bg-[#f5f5f5] p-3"></th>

                <th className="border border-[#c9c9c9] bg-[#1f4f84] text-white p-3 text-[16px] font-bold">
                  □ Ooty &amp; Coonoor &nbsp;·&nbsp; ₹7,199
                </th>

                <th className="border border-[#c9c9c9] bg-[#d10000] text-white p-3 text-[16px] font-bold">
                  ✦ Isha Foundation + Ooty &nbsp;·&nbsp; ₹7,499
                </th>
              </tr>
            </thead>

            <tbody className="text-[15px] text-[#1a1a1a] leading-[1.2]">
              {/* Day 1 Experience */}
              <tr>
                <td className="border border-[#c9c9c9] bg-[#f7f7f7] p-3 font-bold align-top">
                  Day 1 Experience
                </td>

                <td className="border border-[#c9c9c9] bg-[#f7f9f4] p-3 align-top">
                  Wildlife corridor — Bandipur Forest + Mudumalai Tiger Reserve
                  at dawn. Elephant sightings, forest drive, Pykara Waterfalls.
                </td>

                <td className="border border-[#c9c9c9] bg-[#f8f8f8] p-3 align-top">
                  Spiritual — Isha Foundation ashram, Adiyogi Shiva statue,
                  Evening Aarti, Adiyogi Laser Show at night.
                </td>
              </tr>

              {/* Mood */}
              <tr>
                <td className="border border-[#c9c9c9] bg-[#f7f7f7] p-3 font-bold">
                  Day 1 Mood
                </td>

                <td className="border border-[#c9c9c9] bg-[#dfe8d7] p-3 text-[#204f84]">
                  Nature, wildlife, waterfalls, open forests
                </td>

                <td className="border border-[#c9c9c9] bg-[#e6ebf5] p-3 text-[#204f84]">
                  Spiritual, reflective, immersive light show
                </td>
              </tr>

              {/* Day 2 Shared */}
              <tr>
                <td className="border border-[#c9c9c9] bg-[#f7f7f7] p-3 font-bold align-top">
                  Day 2 Shared
                </td>

                <td className="border border-[#c9c9c9] p-3 align-top">
                  Dolphin Nose Viewpoint → Toy Train Coonoor→Ooty → Tea Factory
                  → Boat Ride
                </td>

                <td className="border border-[#c9c9c9] p-3 align-top">
                  Dolphin Nose Viewpoint → Toy Train Coonoor→Ooty → Tea +
                  Chocolate Factory → Boat Ride
                </td>
              </tr>

              {/* Difference */}
              <tr>
                <td className="border border-[#c9c9c9] bg-[#f7f7f7] p-3 font-bold align-top">
                  Day 2 Difference
                </td>

                <td className="border border-[#c9c9c9] p-3 align-top">
                  Tea Factory only
                </td>

                <td className="border border-[#c9c9c9] p-3 align-top">
                  Tea AND Chocolate Factory — Ooty&apos;s famous homemade
                  chocolate added
                </td>
              </tr>

              {/* Day 3 */}
              <tr>
                <td className="border border-[#c9c9c9] bg-[#f7f7f7] p-3 font-bold align-top">
                  Day 3
                </td>

                <td className="border border-[#c9c9c9] p-3 align-top">
                  Pine Park → Needle Rock → Shooting Point → Mysore Palace →
                  return train
                </td>

                <td className="border border-[#c9c9c9] p-3 align-top">
                  Needle Rock → Bandipur National Forest → Mysore Palace →
                  return train
                </td>
              </tr>

              {/* Price */}
              <tr>
                <td className="border border-[#c9c9c9] bg-[#f7f7f7] p-3 font-bold">
                  Price Difference
                </td>

                <td className="border border-[#c9c9c9] bg-[#dfe8d7] p-3 font-bold text-[#1f4f84]">
                  ₹7,199
                </td>

                <td className="border border-[#c9c9c9] bg-[#eef1f8] p-3 font-bold text-[#d10000]">
                  ₹7,499 &nbsp;(+₹300 for Isha + Chocolate Factory)
                </td>
              </tr>

              {/* Choose */}
              <tr>
                <td className="border border-[#c9c9c9] bg-[#f7f7f7] p-3 font-bold align-top">
                  Choose This If...
                </td>

                <td className="border border-[#c9c9c9] bg-[#dfe8d7] p-3 align-top">
                  You want wildlife, waterfalls, and nature as your opening
                  experience. Best for adventure-first, nature-first travellers.
                </td>

                <td className="border border-[#c9c9c9] bg-[#eef1f8] p-3 align-top">
                  You want a spiritual or reflective Day 1 followed by scenic
                  Day 2. Best for those drawn to Isha Foundation or who want a
                  more contemplative weekend.
                </td>
              </tr>

              {/* Buttons */}
              <tr>
                <td className="border border-[#c9c9c9] bg-[#f7f7f7] p-3"></td>

                <td className="border border-[#c9c9c9] bg-[#dfe8d7] p-3 text-center">
                  <button
                    className="
              bg-[#1f4f84]
              hover:bg-[#183d66]
              transition-colors
              duration-300
              text-white
              font-bold
              text-[20px]
              leading-tight
              px-10
              py-4
              min-w-55
            "
                  >
                    Book Ooty &amp;
                    <br />
                    Coonoor →
                  </button>
                </td>

                <td className="border border-[#c9c9c9] bg-[#eef1f8] p-3 text-center">
                  <button
                    className="
              bg-[#d10000]
              hover:bg-[#b30000]
              transition-colors
              duration-300
              text-white
              font-bold
              text-[20px]
              leading-tight
              px-10
              py-4
              min-w-55
            "
                  >
                    Book Isha +
                    <br />
                    Ooty →
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Included / Excluded */}
        <div className="w-full max-w-237 mx-auto my-8 border border-[#cfcfcf] overflow-hidden">
          {/* Heading */}
          <div className="px-4 py-3">
            <h2 className="text-[20px] md:text-[22px] font-bold text-[#2c6bb0] leading-snug">
              Everything Both Ooty Packages Include
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Included Section */}
            <div className="bg-[#dde7d4] px-4 md:px-5 py-4 border-b md:border-b-0 md:border-r border-[#cfcfcf]">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[#1f4d7f] text-[20px]">☑</span>

                <h3 className="text-[#1f4d7f] font-bold text-[18px]">
                  Included in Both Packages
                </h3>
              </div>

              <ul className="list-disc pl-5 text-[14px] md:text-[16px] leading-[1.7] text-black space-y-2">
                <li>Sleeper class train — Kacheguda to Mysore & return</li>

                <li>UNESCO Nilgiri Toy Train — Coonoor to Ooty</li>

                <li>AC pre-hired vehicle for all sightseeing</li>

                <li>2 nights hotel accommodation in Ooty area</li>

                <li>Dedicated trip captain throughout</li>

                <li>First aid kit & driver charges, tolls, taxes</li>

                <li>Mysore Palace stop on return (Day 3)</li>

                <li>Dolphin Nose Viewpoint, Coonoor (Day 2)</li>
              </ul>
            </div>

            {/* Not Included Section */}
            <div className="bg-[#efefef] px-4 md:px-5 py-4">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-neutral-500 text-[20px]">✖</span>

                <h3 className="text-neutral-600 font-bold text-[18px]">
                  Not Included in Either Package
                </h3>
              </div>

              <ul className="list-disc pl-5 text-[14px] md:text-[16px] leading-[1.7] text-[#555] space-y-2">
                <li>Food & meals</li>

                <li>Entry tickets to attractions</li>

                <li>GST @ 5%</li>

                <li>Tatkal train charges (if applicable)</li>

                <li>Special one-way charges (₹400–₹500 if applicable)</li>

                <li>Personal expenses & shopping</li>
              </ul>
            </div>
          </div>
        </div>
        <FAQ faqs={faqs} />
        <Reviews />
        <ContactForm />
        <WhyChooseUs />
        <FinalCTA
          title="Pick Your Ooty Weekend. Seats Leave Every Thursday and Friday."
          description="Both packages depart from Kacheguda at 7PM. Both include the UNESCO toy train. The difference is Day 1 — wildlife and waterfalls, or the Adiyogi Laser Show and the Isha Foundation. Either way, the Nilgiri hills are waiting"
          primaryLink="/destinations/north-india"
          primaryLabel="Book Ooty & Coonoor  ₹7,199 →"
          secondaryLink="/destinations/south-india"
          secondaryLabel="Book Isha + Ooty  ₹7,499 → "
        />
        {/* Packages Section */}
      </div>
    </>
  );
}
