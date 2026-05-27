import DescriptionBox from "@/components/DescriptionBox";
import FinalCTA from "@/components/FinalCTA";
import Reviews from "@/components/Reviews";
import WhyChooseUs from "@/components/WhyChooseUs";
import NotifyButton from "@/components/NotifyButton";
import {
  Award,
  MapPinned,
  ShieldCheck,
  Train,
  UtensilsCrossed,
  Waves,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata = {
  title:
    "Tour Packages from Bangalore 2026 — Ooty, Coorg, Wayanad, Kerala, Gokarna & More | STC | From ₹3,999",
  description:
    "Book group tour packages from Bangalore from ₹3,999. Weekly Thu & Fri departures. Ooty, Coorg, Wayanad, Kerala, Gokarna, Pondicherry, Chikmagalur. Bus from Marathahalli/Silk Board/Majestic. Train from KSR. MSME & ATOAI Certified. 4.8 Google Rating",
  keywords:
    " tour packages from bangalore — city-level hub KW, covers entire BLR portfolio · weekend trips from bangalore · group tour packages bangalore · south india tour packages from bangalore · ooty tour package from bangalore (4,400/mo) · coorg tour package from bangalore (1,600/mo) · kerala packages from bangalore (1,900/mo) · wayanad packages from bangalore (590/mo) · pondicherry packages from bangalore (880/mo",
};
const south = [
  {
    emoji: "🚂",
    title: "Ooty & Coonoor",

    description:
      "Where the Nilgiri Mountain Railway climbs through tea estates to the highest station in India.",

    price: "₹ 5,399",
    duration: "2D/1N or 3D/2N",
    transport: "Bus or Train",
    pickup: "Marathahalli / Silk Board / Majestic or KSR",
    departure: "Fri nights or Thu/Fri",

    points: [
      "UNESCO Nilgiri Mountain Railway — toy train confirmed in inclusions",

      "3 packages: 2-Day Bus ₹5,399 · 3-Day Train Toy Train+Mysore ₹6,999 · 3-Day Isha+Ooty ₹6,999",

      "Bandipur Forest Day 1 (train package) · Mysore Palace on return",

      "Highest search volume in BLR portfolio — 4,400/mo",
    ],

    button: "Book Ooty →",
    link: "/tour/ooty-coonoor-weekend-getaway",

    // CUSTOM COLORS
    bg: "bg-[#dde8d5]",
    border: "border-[#c7d3be]",
    buttonBg: "bg-[#1f4d7f] hover:bg-[#173a5e]",
  },

  {
    emoji: "☕",
    title: "Coorg (Kodagu)",

    description:
      "Coffee estates at 1,600 metres. Abbey Falls. Mandalpatti above the clouds. Raja Seat at sunset.",

    price: "₹ 3,999",
    duration: "2D/1N or 3D/2N",
    transport: "Bus or Train",
    pickup: "Marathahalli / Silk Board / Majestic or KSR",
    departure: "Fri nights or Thu/Fri",

    points: [
      "Abbey Falls (110,000 searches/month) · Mandalpatti Peak above cloud line",

      "2 packages: 2-Day Bus ₹3,999 (Zipline + Glass Bridge + Raja Seat) · 3-Day Train Coorg+Chikmagalur ₹5,999",

      "Most affordable STC package — ₹3,999 per person",

      "1,600/mo primary KW — 2nd highest in BLR portfolio",
    ],

    button: "Book Coorg →",
    link: "/tour/coorg-the-scotland-of-india-z64n",

    bg: "bg-[#dde8d5]",
    border: "border-[#c7d3be]",
    buttonBg: "bg-[#1f4d7f] hover:bg-[#173a5e]",
  },

  {
    emoji: "⛰️",
    title: "Chikmagalur",

    description:
      "Karnataka’s highest peak at 1,930 metres. Hebbe Waterfalls. Z Point ridge trek. Belur Temple.",

    price: "₹ 3,999",
    duration: "2D/1N or 3D/2N",
    transport: "Bus or Train",
    pickup: "Marathahalli / Silk Board / Majestic or KSR",
    departure: "Fri nights or Thu/Fri",

    points: [
      "Mullayanagiri Peak — Karnataka’s highest at 1,930 metres",

      "Hebbe Waterfalls jeep ride · Kemmanagundi Park · Z Point 3km trek",

      "2 packages: 2-Day Bus ₹3,999 · 3-Day Coorg+Chikmagalur Train ₹5,999",

      "12th-century Belur Hoysala Temple on return",
    ],

    button: "Book Chikmagalur →",
    link: "/tour/coorg-chikmagalur-ex-blr",

    bg: "bg-[#dde8d5]",
    border: "border-[#c7d3be]",
    buttonBg: "bg-[#1f4d7f] hover:bg-[#173a5e]",
  },
  {
    emoji: "🌊",
    title: "Gokarna",

    description:
      "Where sacred temples meet Arabian Sea beaches. Om Beach. Kudle Beach. Murudeshwar at sunset.",

    price: "₹ 5,199",
    duration: "2D/1N or 3D/2N",
    transport: "Bus or Train",
    pickup: "Marathahalli / Silk Board / Majestic or KSR",
    departure: "Fri nights or Thu/Fri",

    points: [
      "2 packages: 2-Day Gokarna Bus ₹5,199 · 3-Day Gokarna+Dandeli Train ₹5,999 ",

      "2 Breakfasts included in both packages",

      "Dandeli water sports ALL INCLUDED (3-Day): kayaking + zorbing + boating + river swimming",

      "Om Beach · Kudle Beach · Mirjan Fort · Murudeshwar Temple · Vibhooti Falls",
    ],

    button: "Book Gokarna →",
    link: "/tour/gokarna-weekend-gateaway",

    bg: "bg-[#dde8d5]",
    border: "border-[#c7d3be]",
    buttonBg: "bg-[#1f4d7f] hover:bg-[#173a5e]",
  },
  {
    emoji: "🏖️",
    title: "Pondicherry + Mahabalipuram",

    description:
      "French colonial lanes. Rock Beach. Auroville. The Shore Temple at sunrise.",

    points: [
      "3 packages: 2-Day Bus ₹4,599 · 3-Day Train Pondi+Mahabalipuram+Pichavaram ₹6,999 · 3-Day Train Arunachalam+Pondicherry ₹6,999",

      "Pichavaram Mangrove boating (2nd largest mangrove in India) · Shore Temple · Pancha Rathas",

      "Arunachalam: 14km Girivalam sacred trek around the holy mountain",

      "2-Day package has 4 pickup points — widest Bangalore coverage",
    ],

    price: "₹4,599",
    duration: "2D/1N or 3D/2N",
    transport: "Bus or Train",
    pickup: "Majestic / Domlur / Marathahalli / Silk Board or KSR",
    departure: "Fri nights or Thu/Fri",

    button: "Book Pondicherry →",
    link: "/tour/pondicherry-mahabalipuram",

    bg: "bg-[#dfe5f1]",
    border: "border-[#c3cad8]",
    buttonBg: "bg-[#234f82] hover:bg-[#1b3f69]",
  },

  {
    emoji: "🌿",
    title: "Wayanad",

    description:
      "Banasura Sagar Dam. Chembra Peak’s heart-shaped lake. 900 Kandi Glass Bridge. 2 Breakfasts + 1 Dinner included.",

    points: [
      "2 packages: 2-Day Bus ₹5,999 (Meals included: 2 breakfasts + 1 dinner) · 3-Day Train +Mysore Palace ₹7,499",

      "Banasura Sagar Dam (110,000 searches/month) · Chembra Peak heart-shaped lake",

      "900 Kandi Glass Bridge · Edakkal Caves · Soochipara Waterfalls",

      "Only BLR package with meals included alongside Gokarna",
    ],

    price: "₹5,999",
    duration: "2D/1N or 3D/2N",
    transport: "Bus or Train",
    pickup: "Marathahalli / Silk Board / Majestic or KSR",
    departure: "Fri nights or Thu/Fri",

    button: "Book Wayanad →",
    link: "/tour/wayanad-weekend-gateway",

    bg: "bg-[#f1dddd]",
    border: "border-[#dbc1c1]",
    buttonBg: "bg-[#234f82] hover:bg-[#1b3f69]",
  },
  {
    emoji: "🌊",
    title: "Kochi + Alleppey",

    description:
      "A journey from Kochi’s colours to Alleppey’s calm. Jew Town. Fort Kochi. Vembanad backwaters.",

    points: [
      "Day 1: Jew Town · Fort Kochi · Café Hopping · Marine Drive",
      "Day 2: Marari Beach · Toddy Tasting · Alleppey Shikara Ride (at site)",
      "4 Bangalore pickup points — widest coverage in the portfolio",
      "Shikara Ride available at site — NOT included in package price",
    ],

    price: "₹  6,399",
    duration: "2D/1N",
    transport: "Bus",
    pickup: "Majestic / Domlur / Marathahalli / Silk Board",
    departure: "Friday nights",

    button: "Book Kochi + Alleppey →",
    link: "/tour/kochi-alleppey",

    bg: "bg-[#f1dddd]",
    border: "border-[#dbc1c1]",
    buttonBg: "bg-[#234f82] hover:bg-[#1b3f69]",
  },
  {
    emoji: "🌿",
    title: "Kerala Full Circuit",

    description:
      "Munnar’s tea estates at 1,600m. Alleppey backwaters. Varkala cliff beach. 4 Breakfasts included.",

    points: [
      "Day 1: Munnar tea gardens · Mattupetty Dam · Echo Point · Kalaripayattu live show",
      "Day 2: Alleppey backwaters through spice plantations · Lakeside sunset",
      "Day 3+4: Varkala Cliff Beach · Papanasam Beach · Black Sand Beach",
      "4 Breakfasts included · AC vehicle · 3 destinations · Only BLR premium package",
    ],

    price: "₹ 17,499",
    duration: "4D/3N",
    transport: "AC Bus",
    pickup: "Marathahalli KLM / HSR Layout Udupi Grand",
    departure: "Wednesday evenings",

    button: "Book Kerala Full Circuit →",
    link: "/tour/kerala-3days4nights",

    bg: "bg-[#f1dddd]",
    border: "border-[#dbc1c1]",
    buttonBg: "bg-[#234f82] hover:bg-[#1b3f69]",
  },
];
const westIndia = [
  {
    title: "Goa — Coming Soon",

    description:
      "India’s most searched beach destination from Bangalore — Calangute, Anjuna, Old Goa churches, Dudhsagar Falls.",

    planned:
      "Calangute Beach, Baga Beach, Old Goa, Dudhsagar Falls, Fort Aguada",

    button: "Notify Me When Available →",
  },

  {
    title: "Maharashtra — Coming Soon",

    description:
      "Lonavala, Mahabaleshwar, and Pune day circuits from Bangalore by overnight train.",

    planned: "Lonavala, Mahabaleshwar, Pune, Ajanta-Ellora, Aurangabad",

    button: "Notify Me When Available →",
  },
];
const eastIndia = [
  {
    title: "Andaman & Nicobar Islands — Coming Soon",

    description:
      "Havelock Island, Radhanagar Beach, Neil Island, Ross Island — India’s most iconic island circuit.",

    planned: "Port Blair, Havelock Island, Neil Island, Baratang",

    button: "Notify Me When Available →",
  },

  {
    title: "Odisha — Coming Soon",

    description:
      "Puri, Konark Sun Temple, Chilika Lake, Bhitarkanika wildlife sanctuary.",

    planned: "Puri, Konark, Bhubaneswar, Chilika Lake",

    button: "Notify Me When Available →",
  },
];

const northIndia = [
  {
    title: "Himalayas — Coming Soon",

    description:
      "Rishikesh adventure circuits, Manali snow packages, Spiti Valley cold desert, Kedarnath pilgrimage.",

    planned: "Rishikesh, Manali, Spiti Valley, Kedarnath, Leh Ladakh",

    button: "Notify Me When Available →",
  },

  {
    title: "Rajasthan — Coming Soon",

    description:
      "Jaipur, Jodhpur, Udaipur, and Jaisalmer desert circuits from Bangalore by overnight train.",

    planned: "Jaipur, Jodhpur, Udaipur, Jaisalmer, Pushkar",

    button: "Notify Me When Available →",
  },

  {
    title: "Kashmir — Coming Soon",

    description:
      "Dal Lake houseboats, Pahalgam, Gulmarg skiing, Sonamarg glacier.",

    planned: "Srinagar, Pahalgam, Gulmarg, Sonamarg",

    button: "Notify Me When Available →",
  },
];
const northEastIndia = [
  {
    title: "Meghalaya — Confirmed, Launching Soon",

    description:
      "The Abode of Clouds. Living root bridges. Dawki crystal-clear river. Cherrapunji waterfalls. The wettest place on earth.",

    points: [
      "Living root bridges (Cherrapunji)",
      "Dawki River — the most photographed transparent river in India",
      "Nohkalikai Falls — India’s tallest plunge waterfall",
      "Shillong city — the Scotland of the East",
    ],

    button: "Notify Me When Meghalaya Launches! →",

    // optional custom colors
    bg: "bg-[#e9eef7]",
    border: "border-[#bcc7d8]",
    buttonBg: "bg-[#c70000] hover:bg-[#a80000]",
  },

  {
    title: "More North East — Coming Soon",

    description:
      "Assam tea gardens + Kaziranga rhinos, Sikkim mountain circuits, Arunachal Pradesh tribal circuits.",

    planned: "Assam, Sikkim, Arunachal Pradesh, Tripura",

    button: "Notify Me When Available →",

    bg: "bg-[#f5f5f5]",
    border: "border-[#d5d5d5]",
    buttonBg: "bg-[#b8b8b8] hover:bg-[#9f9f9f]",
  },
];
const features = [
  {
    title: "Train Tickets Included",
    description:
      "All KSR-based train packages include sleeper class non-AC tickets both ways in the package price. You do not book separately",
    icon: <Train className="w-6 h-6" />,
  },
  {
    title: "3–4 Bangalore Pickup Points",
    description:
      "Bus packages: Marathahalli (Tansi Honda), Silk Board (Nahdi Mandi), Majestic (Metro Station East). Kerala and Pondicherry packages also include Domlur (4 points.",
    icon: <MapPinned className="w-6 h-6" />,
  },
  {
    title: "Meals in Select Packages",
    description:
      "Wayanad 2D Bus: 2 Breakfasts + 1 Dinner included. Kerala 4D Circuit: 4 Breakfasts included. Gokarna+Dandeli 3D: All Dandeli Day 1 meals (B+L+D). Confirmed in inclusions.",
    icon: <UtensilsCrossed className="w-8 h-8 text-gray-700" />,
  },
  {
    title: "Water Sports Included",
    description:
      "Gokarna + Dandeli 3D Train package (₹5,999): kayaking, zorbing, boating, and river swimming ALL included in Dandeli Day 1. No hidden activity charges.",
    icon: <Waves className="w-8 h-8 text-gray-700" />,
  },
  {
    title: "Dedicated Trip Captain",
    description:
      "Every STC departure has a dedicated trip captain from pickup to drop. Not a call centre. A person who is physically there with you from Marathahalli to the destination and back.",
    icon: <ShieldCheck className="w-8 h-8 text-gray-700" />,
  },
  {
    title: "MSME + ATOAI + StartupIndia",
    description:
      "Certified by MSME, ATOAI (Adventure Tour Operators Association of India), and StartupIndia. 4.8 Google rating from 200+ verified reviews.",
    icon: <Award className="w-8 h-8 text-gray-700" />,
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
            src="/destination/bangalore.png"
            alt="Chennai Cover"
            className="w-full h-full object-cover bg-bottom"
          />
        </div>

        {/* Title */}
        <h1 className="text-center text-3xl md:text-4xl font-semibold mt-10 mb-8 text-brand">
          Tour Packages from Bangalore
        </h1>
        <DescriptionBox
          title="13+ Group Tour Packages. Weekly Thursday & Friday Departures. Bangalore's Most Trusted Travel Community"
          content="South India, Kerala, Karnataka, Tamil Nadu, Pondicherry, Gokarna — STC runs fixed weekly departures from Bangalore to 13+ destinations, every Thursday and Friday. Bus pickups from Marathahalli, Silk Board, and Majestic. Train departures from KSR Bengaluru Railway Station. Certified trip captains. From ₹3,999. Everything organised. You just show up."
        />
        <div className="w-[90%] md:w-[85%] mx-auto my-12">
          {/* Heading */}
          <h2 className="text-[#2d67a3] text-[38px] font-bold mb-8 leading-tight">
            How STC Weekend Trips Work
          </h2>

          {/* Steps */}
          <div className="grid grid-cols-1 lg:grid-cols-3 border border-neutral-300 overflow-hidden">
            {/* Step 1 */}
            <div className="bg-[#dfe8d6] px-6 py-5 border-r border-neutral-300 text-center">
              <div className="flex items-center justify-center gap-3 mb-3">
                <span className="text-[#1f4d7f] font-bold text-[30px]">1️⃣</span>

                <h3 className="text-[#1f4d7f] font-bold text-[20px] md:text-[18px] sm:text-[20px] md:text-[22px]">
                  Choose Your Destination
                </h3>
              </div>

              <p className="text-black text-[18px] leading-[1.2]">
                Pick from 13+ packages across South India. Each departs weekly —
                bus on Friday nights or train Thu/Fri.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-[#dfe5f1] px-6 py-5 border-r border-neutral-300 text-center">
              <div className="flex items-center justify-center gap-3 mb-3">
                <span className="text-[#1f4d7f] font-bold text-[30px]">2️⃣</span>

                <h3 className="text-[#1f4d7f] font-bold text-[20px] md:text-[18px] sm:text-[20px] md:text-[22px]">
                  Book Your Seat
                </h3>
              </div>

              <p className="text-black text-[18px] leading-[1.2]">
                Fill the booking form. Pay to confirm your seat. Our team
                contacts you within 2 hours.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-[#dfe8d6] px-6 py-5 text-center">
              <div className="flex items-center justify-center gap-3 mb-3">
                <span className="text-[#1f4d7f] font-bold text-[30px]">3️⃣</span>

                <h3 className="text-[#1f4d7f] font-bold text-[20px] md:text-[18px] sm:text-[20px] md:text-[22px]">
                  Show Up & Go
                </h3>
              </div>

              <p className="text-black text-[18px] leading-[1.2]">
                Board your bus or train at the stated pickup point. Your trip
                captain handles everything from there.
              </p>
            </div>
          </div>
        </div>
        {/* South India Packages */}
        <section id="south" className="w-full bg-[#efefef] py-10 px-2 md:px-4">
          <div className="max-w-350 mx-auto">
            {/* Heading */}
            <div className="mb-10">
              <h2 className="text-[#2d67a3] text-[30px] sm:text-[36px] md:text-[42px] font-bold leading-tight">
                South India Tour Packages from Bangalore
              </h2>

              <p className="text-[18px] sm:text-[20px] md:text-[22px] text-black leading-[1.2] mt-3 max-w-[1350px]">
                13+ weekly departures covering Karnataka, Tamil Nadu, Kerala,
                and Goa. Bus packages from Marathahalli / Silk Board / Majestic
                every Friday night. Train packages from KSR Bengaluru every
                Thursday and Friday.
              </p>
            </div>

            {/* Section Heading */}
            <div className="border-t-2 border-[#48663a] pt-4 mb-8">
              <div className="flex items-center gap-3">
                <span className="text-[24px]">🌿</span>

                <h3 className="text-[#355724] text-[34px] font-bold">
                  Karnataka
                </h3>
              </div>
            </div>

            {/* Packages */}
            <div className="space-y-8">
              {south.map((pkg, idx) => (
                <div key={idx} className={`border ${pkg.border} ${pkg.bg}`}>
                  <div className="p-6 md:p-8">
                    {/* Top */}
                    <div className="flex items-start gap-3 mb-2">
                      <span className="text-[24px]">{pkg.emoji}</span>

                      <div>
                        <h3 className="text-[#1f4d7f] text-[18px] sm:text-[20px] md:text-[22px] md:text-[26px] font-bold leading-tight">
                          {pkg.title}
                        </h3>

                        <p className="italic text-[#666] text-[18px] leading-[1.2] mt-1">
                          {pkg.description}
                        </p>
                      </div>
                    </div>

                    {/* Stats */}
                    <div
                      className={`grid grid-cols-2 md:grid-cols-5 gap-y-5 mt-6 border-b ${pkg.border} pb-6`}
                    >
                      <div>
                        <div className="text-[#d40000] font-bold text-[18px] sm:text-[20px] md:text-[22px]">
                          {pkg.price}
                        </div>

                        <div className="text-[#7b7b7b] text-[15px]">
                          per person
                        </div>
                      </div>

                      <div>
                        <div className="text-[#1f4d7f] font-bold text-[20px]">
                          {pkg.duration}
                        </div>

                        <div className="text-[#7b7b7b] text-[15px]">
                          duration
                        </div>
                      </div>

                      <div>
                        <div className="text-[#1f4d7f] font-bold text-[20px]">
                          {pkg.transport}
                        </div>

                        <div className="text-[#7b7b7b] text-[15px]">
                          transport
                        </div>
                      </div>

                      <div>
                        <div className="text-[#1f4d7f] font-bold text-[18px] leading-[1.15]">
                          {pkg.pickup}
                        </div>

                        <div className="text-[#7b7b7b] text-[15px]">pickup</div>
                      </div>

                      <div>
                        <div className="text-[#1f4d7f] font-bold text-[20px]">
                          {pkg.departure}
                        </div>

                        <div className="text-[#7b7b7b] text-[15px]">
                          departure
                        </div>
                      </div>
                    </div>

                    {/* Points */}
                    <ul className="mt-6 space-y-1 text-[16px] md:text-[18px] leading-[1.35] text-black">
                      {pkg.points.map((point, pointIdx) => (
                        <li key={pointIdx}>▢ {point}</li>
                      ))}
                    </ul>

                    {/* Button */}
                    <div className="mt-8">
                      <Link
                        href={pkg.link}
                        className={`inline-flex items-center justify-center ${pkg.buttonBg} transition-colors text-white font-bold text-[18px] sm:text-[20px] md:text-[22px] px-16 py-3 sm:w-auto sm:min-w-65 md:min-w-90`}
                      >
                        {pkg.button}
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* West India Packages */}

        <section className="w-full bg-[#efefef] py-10 px-2 md:px-4">
          <div className="max-w-350 mx-auto">
            {/* Heading */}
            <div className="mb-10">
              <h2 className="text-[#2d67a3] text-[30px] sm:text-[36px] md:text-[42px] font-bold leading-tight">
                West India — Coming Soon from Bangalore
              </h2>

              <p className="text-[18px] sm:text-[20px] md:text-[22px] text-black leading-[1.2] mt-3 max-w-[1350px]">
                Maharashtra, Goa, and Rajasthan packages from Bangalore are in
                development. Weekly train departures planned.
              </p>

              <p className="text-[18px] sm:text-[20px] md:text-[22px] text-black leading-[1.2]">
                Leave your details to be notified when West India packages go
                live.
              </p>
            </div>

            {/* Cards */}
            <div className="space-y-6">
              {westIndia.map((pkg, idx) => (
                <div key={idx} className="border border-[#d5d5d5] bg-[#f5f5f5]">
                  <div className="p-6 md:p-8">
                    {/* Title */}
                    <div className="flex items-start gap-3">
                      <span className="text-[18px] mt-1">▢</span>

                      <div>
                        <h3 className="text-[#6b6b6b] text-[24px] font-bold">
                          {pkg.title}
                        </h3>

                        <p className="text-[#6b6b6b] text-[20px] leading-tight mt-2">
                          {pkg.description}
                        </p>

                        <p className="italic text-[#8a8a8a] text-[18px] mt-2">
                          Planned destinations: {pkg.planned}
                        </p>
                      </div>
                    </div>

                    {/* Button */}
                    <div className="mt-8">
                      <NotifyButton
                        label={pkg.button}
                        className="bg-[#b8b8b8] hover:bg-[#9f9f9f] transition-colors text-white font-bold text-[18px] sm:text-[20px] md:text-[22px] px-16 py-3 sm:w-auto sm:min-w-65 md:min-w-90"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* East India Packages */}
        <section className="w-full bg-[#efefef] py-10 px-2 md:px-4">
          <div className="max-w-350 mx-auto">
            {/* Heading */}
            <div className="mb-10">
              <h2 className="text-[#2d67a3] text-[30px] sm:text-[36px] md:text-[42px] font-bold leading-tight">
                East India — Coming Soon from Bangalore
              </h2>

              <p className="text-[18px] sm:text-[20px] md:text-[22px] text-black leading-[1.2] mt-3 max-w-337.5">
                Andaman Islands, Odisha, and West Bengal circuits from Bangalore
                are planned. Andaman in particular has very high search volume
                from Bangalore
              </p>
            </div>

            {/* Cards */}
            <div className="space-y-6">
              {eastIndia.map((pkg, idx) => (
                <div key={idx} className="border border-[#d5d5d5] bg-[#f5f5f5]">
                  <div className="p-6 md:p-8">
                    {/* Title */}
                    <div className="flex items-start gap-3">
                      <span className="text-[18px] mt-1">▢</span>

                      <div>
                        <h3 className="text-[#6b6b6b] text-[24px] font-bold">
                          {pkg.title}
                        </h3>

                        <p className="text-[#6b6b6b] text-[20px] leading-tight mt-2">
                          {pkg.description}
                        </p>

                        <p className="italic text-[#8a8a8a] text-[18px] mt-2">
                          Planned destinations: {pkg.planned}
                        </p>
                      </div>
                    </div>

                    {/* Button */}
                    <div className="mt-8">
                      <NotifyButton
                        label={pkg.button}
                        className="bg-[#b8b8b8] hover:bg-[#9f9f9f] transition-colors text-white font-bold text-[18px] sm:text-[20px] md:text-[22px] px-16 py-3 sm:w-auto sm:min-w-65 md:min-w-90"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* North India Packages */}
        <section className="w-full bg-[#efefef] py-10 px-2 md:px-4">
          <div className="max-w-350 mx-auto">
            {/* Heading */}
            <div className="mb-10">
              <h2 className="text-[#2d67a3] text-[30px] sm:text-[36px] md:text-[42px] font-bold leading-tight">
                North India — Coming Soon from Bangalore
              </h2>

              <p className="text-[18px] sm:text-[20px] md:text-[22px] text-black leading-[1.2] mt-3 max-w-337.5">
                Rishikesh, Manali, Rajasthan, and Kashmir packages from
                Bangalore are in development. All will follow the same weekly
                Thu/Fri departure format with train tickets included
              </p>
            </div>

            {/* Cards */}
            <div className="space-y-6">
              {northIndia.map((pkg, idx) => (
                <div key={idx} className="border border-[#d5d5d5] bg-[#f5f5f5]">
                  <div className="p-6 md:p-8">
                    {/* Title */}
                    <div className="flex items-start gap-3">
                      <span className="text-[18px] mt-1">▢</span>

                      <div>
                        <h3 className="text-[#6b6b6b] text-[24px] font-bold">
                          {pkg.title}
                        </h3>

                        <p className="text-[#6b6b6b] text-[20px] leading-tight mt-2">
                          {pkg.description}
                        </p>

                        <p className="italic text-[#8a8a8a] text-[18px] mt-2">
                          Planned destinations: {pkg.planned}
                        </p>
                      </div>
                    </div>

                    {/* Button */}
                    <div className="mt-8">
                      <NotifyButton
                        label={pkg.button}
                        className="bg-[#b8b8b8] hover:bg-[#9f9f9f] transition-colors text-white font-bold text-[18px] sm:text-[20px] md:text-[22px] px-16 py-3 sm:w-auto sm:min-w-65 md:min-w-90"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* North East India Packages */}
        <section className="w-full bg-[#efefef] py-10 px-2 md:px-4">
          <div className="max-w-350 mx-auto">
            <div className="mb-10">
              <h2 className="text-[#2d67a3] text-[30px] sm:text-[36px] md:text-[42px] font-bold leading-tight">
                North East India — Meghalaya & Beyond
              </h2>

              <p className="text-[18px] sm:text-[20px] md:text-[22px] text-black leading-[1.2] mt-3 max-w-337.5">
                STC’s Meghalaya package from Bangalore is confirmed and in
                development. Additional Northeast circuits (Assam, Sikkim,
                Arunachal Pradesh) are planned
              </p>
            </div>
            {northEastIndia.map((pkg, idx) => (
              <div key={idx} className={`border ${pkg.border} ${pkg.bg}`}>
                <div className="p-6 md:p-8">
                  {/* Title */}
                  <div className="flex items-start gap-3">
                    <span className="text-[18px] mt-1">▢</span>

                    <div className="w-full">
                      <h3 className="text-[#2d5a91] text-[24px] font-bold">
                        {pkg.title}
                      </h3>

                      <p className="italic text-[#666] text-[18px] leading-[1.3] mt-1">
                        {pkg.description}
                      </p>

                      {/* Points */}
                      {pkg.points && (
                        <ul className="mt-4 space-y-1 text-[17px] text-black leading-[1.3]">
                          {pkg.points.map((point, pointIdx) => (
                            <li key={pointIdx}>▢ {point}</li>
                          ))}
                        </ul>
                      )}

                      {/* Planned destinations */}
                      {pkg.planned && (
                        <p className="italic text-[#8a8a8a] text-[18px] mt-2">
                          Planned destinations: {pkg.planned}
                        </p>
                      )}

                      {/* Button */}
                      <div className="mt-8">
                        <NotifyButton
                          label={pkg.button}
                          className="bg-[#b8b8b8] hover:bg-[#9f9f9f] transition-colors text-white font-bold text-[18px] sm:text-[20px] md:text-[22px] px-16 py-3 sm:w-auto sm:min-w-65 md:min-w-90"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <Reviews />
        <WhyChooseUs
          heading="Why Bangalore Travellers Choose STC?"
          features={features}
          layout={[3, 3]}
        />
        <FinalCTA
          title="Your Weekend Starts This Friday Night."
          description="13+ destinations. Weekly Friday night bus departures and Thursday/Friday train departures. Marathahalli, Silk Board, Majestic, or KSR Bengaluru. Every package confirmed. Every itinerary tested. From ₹3,999"
          primaryLink="/destinations/south-india"
          primaryLabel="Browse All Packages from Bangalore → "
        />
      </div>
    </>
  );
}
