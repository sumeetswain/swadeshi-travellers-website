import ContactForm from "@/components/ContactForm";
import DescriptionBox from "@/components/DescriptionBox";
import FAQ from "@/components/FAQs";
import PackageCarousel from "@/components/PackageCarousel";
import { PackageLoader } from "@/components/PackageLoader/PackageLoader";

import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  Camera,
  Compass,
  DollarSign,
  Globe,
  IndianRupee,
  MapPinIcon,
  Phone,
  Star,
  Train,
  TreePalm,
} from "lucide-react";
import React from "react";
import WhyChooseUs from "@/components/WhyChooseUs";

export const metadata = {
  title: "Hyderabad Tour Packages",
};
export default function DestinationPage() {
  const kerala = [
    {
      title: "🚌  2-Day Kochi + Alleppey",
      price: "₹6,399  ·  2D/1N  ·  Bus",
      subtitle: "4 pickup points  ·  Friday nights",
      features: [
        "Day 1: Jew Town, Fort Kochi · Café Hopping · Marine Drive",
        "Day 2: Marari Beach · Toddy Tasting · Alleppey Shikara Ride",
        "Fort Kochi — colonial lanes, Dutch/Portuguese heritage ",
        "Alleppey Shikara — backwater experience (available at site)",
        "4 pickup points: Majestic · Domlur · Marathahalli · Silk Board",
        "Best for: Kochi explorer · backwaters intro · quick Kerala weekend",
      ],
      image: "/southindia/ooty.png",
      href: "/destinations/south-india/ooty/from-hyderabad",
      badge: "Group Trip",
    },
    {
      title: "🏔️  4-Day Kerala Full Circuit",
      price: "₹17,499  ·  4D/3N  ·  AC Bus  ·  4 Breakfasts",
      subtitle: "Marathahalli + HSR Layout  ·  Wednesday evenings",
      features: [
        "Day 1: Munnar tea gardens · Mattupetty Dam · Echo Point · Kalaripayattu",
        "Day 2: Alleppey backwaters · spice plantation · lakeside sunset",
        "Day 3: Varkala Cliff Beach · Papanasam Beach · Black Sand Beach",
        "Day 4: Beach leisure · brunch · return to Bangalore",
        "4 Breakfasts included · AC vehicle · 3 destinations",
        "Best for: complete Kerala · mountain + water + beach · premium",
      ],
      image: "/southindia/ooty.png",
      href: "/destinations/south-india/ooty/from-hyderabad",
      badge: "Group Trip",
    },
  ];
  const faqs = [
    {
      question:
        "What is the difference between the 2-day and 4-day Kerala packages from Bangalore?",
      answer:
        "The 2-day Kochi + Alleppey package (₹6,399) departs Friday night by bus from 4 points across Bangalore: Majestic (9PM), Domlur (9:30PM), Marathahalli (10PM), and Silk Board (11PM). Day 1 is Fort Kochi — Jew Town, café hopping, and the Marine Drive waterfront. Day 2 is Marari Beach, toddy tasting, and the Alleppey Shikara ride. The 4-day Kerala full circuit (₹17,499) departs Wednesday evenings from Marathahalli area and HSR Layout. It covers three complete Kerala experiences: Munnar tea gardens, Mattupetty Dam, Echo Point, and a Kalaripayattu show on Day 1; Alleppey backwaters on Day 2; Varkala Cliff Beach, Papanasam Beach, and the Black Sand Beach on Days 3 and 4. 4 breakfasts are included in the 4-day package. AC vehicle throughout.",
    },
    {
      question: "Does STC offer an Alleppey houseboat stay?",
      answer:
        "Both STC Kerala packages include an Alleppey Shikara ride — a traditional wooden boat ride through the Vembanad Lake backwater network. Neither package includes an overnight houseboat stay. The Shikara ride in the 2-day package is available at the site (extra cost). The 4-day package explicitly lists the Shikara ride as self-sponsored. If an overnight houseboat stay is your priority, STC&#39;s current Kerala packages are Shikara-based backwater experiences.",
    },
    {
      question:
        "What is Kalaripayattu and why is it on the 4-day Kerala itinerary?",
      answer:
        "Kalaripayattu is the traditional martial art of Kerala, considered one of the oldest fighting systems in the world, with documented history going back over 3,000 years. The practice involves acrobatics, strikes, kicks, weaponry, and healing traditions — it is the predecessor of many Asian martial arts and was revived in the 20th century after being suppressed during British rule. A live Kalaripayattu demonstration is included as part of the Day 1 Munnar evening on the 4-day Kerala circuit. This is the only STC Bangalore package that includes a live cultural performance of this kind.",
    },
    {
      question:
        "What are the 4 pickup points for the 2-day Kochi + Alleppey package?",
      answer:
        "The 2-day Kochi + Alleppey package (Pkg 9) departs from 4 Bangalore locations: Majestic — Metro Station East Entrance at 9:00 PM, Domlur at 9:30 PM, Marathahalli — Tansi Honda at 10:00 PM, and Silk Board — Nahdi Mandi Restaurant at 11:00 PM. Friday nights only. This is the widest Bangalore pickup coverage of any STC package — 4 points covering central, east, and south Bangalore. The 4-day Kerala circuit (Pkg 8) departs Wednesday evenings from the Marathahalli area and HSR Layout.",
    },
    {
      question:
        "Is the 4-day Kerala circuit worth ₹17,499 compared to the 2-day at ₹6,399?",
      answer:
        "The two packages cover almost entirely different places. The 2-day covers Fort Kochi and Alleppey. The 4-day covers Munnar (a different Kerala entirely — the high-altitude tea country), Alleppey, and Varkala (the cliff beach on the Thiruvananthapuram coast). The ₹17,499 price includes 4 breakfasts, an AC vehicle for the overnight drive, 3 nights accommodation, and the complete Kerala geography: mountain + backwater + beach. If you want the full Kerala — all three of its defining landscapes — the 4-day is the only package that delivers this in one departure.",
    },
  ];
  const features = [
    {
      title: "4.8 Google Rating",
      description:
        "200+ verified five-star reviews. Every trip is run with the same attention to timing, safety, and comfort — whether it&#39;s your first STC trip or your tenth.",
      icon: <Star className="w-6 h-6" />,
    },
    {
      title: "MSME + ATOAI Certified",
      description:
        "Recognised by the Ministry of MSME, the Adventure Tour Operators Association of India (ATOAI), and StartupIndia. Credentials that are earned, not bought.",
      icon: <BadgeCheck className="w-6 h-6" />,
    },
    {
      title: "Expert Trip Captains",
      description:
        "Every STC trip has a dedicated captain — from pickup to drop, fully guided, zero logistics needed from you.",
      icon: <Compass className="w-8 h-8 text-gray-700" />,
    },
    {
      title: "Mountain + Backwater + Beach in One Circuit",
      description:
        "STC&#39;s 4-day Kerala full circuit is the only group tour from Bangalore that covers all three of Kerala&#39;s defining landscapes — Munnar&#39;s high-altitude tea estates, Alleppey&#39;s Vembanad backwaters, and Varkala&#39;s cliff beach — in a single Wednesday departure.",
      icon: <TreePalm className="w-8 h-8 text-gray-700" />,
    },
  ];
  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Top Full Width Image */}
        <div className="w-full h-[45vh] md:h-[55vh]">
          <Image
            width={2000}
            height={560}
            src="/southindia/banners/kerala.png"
            alt="Kerala Cover"
            className="w-full h-full object-cover bg-bottom"
          />
        </div>

        {/* Title */}
        <h1 className="text-center text-3xl md:text-4xl font-semibold mt-10 mb-8 text-brand">
          Kerala Packages from Bangalore
        </h1>
        <DescriptionBox
          title="Fort Kochi&#39;s Colours. Alleppey&#39;s Backwaters. Munnar&#39;s Tea Gardens. Varkala&#39;s Cliff Beach. Two Ways Into God&#39;s Own Country. From ₹6,399."
          content="Kerala does not begin at the airport. It begins the moment the road narrows and the coconut trees close in overhead and the air carries a specific combination of backwater salt and spice and rain-on-red-earth that is particular to this coast. STC runs two Kerala group tour packages from Bangalore: a 2-day Kochi and Alleppey tour from ₹6,399 — Fort Kochi&#39;s Jew Town and café lanes, Marari Beach, and the Alleppey backwaters — and a 4-day Kerala full circuit from ₹17,499 in an AC Tempo Traveller that covers Munnar&#39;s high-altitude tea estates, the Alleppey backwaters at sunrise, and three different Varkala beach experiences. 4 breakfasts included in the 4-day package."
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
        <PackageCarousel items={kerala} title="Choose Your Kerala Journey" />
        <div className="w-[80%] mx-auto overflow-x-auto  bg-white my-10">
          <p className="text-2xl text-brand font-semibold">
            Compare Both Kerala Packages from Bangalore
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
                  🚌 Pkg 9 - 2-Day Kochi + Alleppey
                </th>

                <th className="p-4 text-brand font-semibold bg-brand/20">
                  ⛰️ Pkg 8 - 4-Day Kerala Full Circuit
                </th>
              </tr>
            </thead>

            <tbody className="text-neutral-700">
              {/* Price */}
              <tr className="border-b">
                <td className="p-4 font-medium text-neutral-900">Price</td>
                <td className="p-4 font-semibold text-brand bg-brand/5">
                  ₹6,399
                </td>
                <td className="p-4 font-semibold text-brand bg-brand/10">
                  ₹17,499
                </td>
              </tr>

              {/* Duration */}
              <tr className="border-b">
                <td className="p-4 font-medium text-neutral-900">Duration</td>
                <td className="p-4">2 Days / 1 Night</td>
                <td className="p-4">4 Days / 3 Nights</td>
              </tr>

              {/* Vehicle */}
              <tr className="border-b">
                <td className="p-4 font-medium text-neutral-900">Vehicle</td>
                <td className="p-4">Bus — Tempo Traveller / Mini Bus</td>
                <td className="p-4 text-brand font-medium">
                  AC Tempo Traveller / Mini Bus
                </td>
              </tr>

              {/* Departure */}
              <tr className="border-b">
                <td className="p-4 font-medium text-neutral-900">Departure</td>
                <td className="p-4 bg-brand/5 text-brand font-medium">
                  Friday nights
                </td>
                <td className="p-4 bg-brand/10 text-brand font-medium">
                  Wednesday evenings
                </td>
              </tr>

              {/* Meals */}
              <tr className="border-b">
                <td className="p-4 font-medium text-neutral-900">Meals</td>
                <td className="p-4 text-red-500 font-medium">
                  ❌ No meals included
                </td>
                <td className="p-4 text-green-600 font-medium">
                  ✅ 4 Breakfasts included
                </td>
              </tr>

              {/* Day 1 */}
              <tr className="border-b">
                <td className="p-4 font-medium text-neutral-900">Day 1</td>
                <td className="p-4">
                  Jew Town · Fort Kochi · Café hopping · Marine Drive
                </td>
                <td className="p-4">
                  Munnar tea gardens · Mattupetty Dam · Echo Point ·
                  Kalaripayattu show
                </td>
              </tr>

              {/* Day 2 */}
              <tr className="border-b">
                <td className="p-4 font-medium text-neutral-900">Day 2</td>
                <td className="p-4">
                  Marari Beach · Toddy tasting · Alleppey Shikara ride
                </td>
                <td className="p-4">
                  Alleppey backwaters · Shikara ride · Lakeside sunset
                </td>
              </tr>

              {/* Day 3 */}
              <tr className="border-b">
                <td className="p-4 font-medium text-neutral-900">Day 3</td>
                <td className="p-4 text-neutral-400">—</td>
                <td className="p-4">
                  Varkala Cliff · Papanasam Beach · Black Sand Beach
                </td>
              </tr>

              {/* Day 4 */}
              <tr className="border-b">
                <td className="p-4 font-medium text-neutral-900">Day 4</td>
                <td className="p-4 text-neutral-400">—</td>
                <td className="p-4">
                  Beach leisure · Brunch · Shopping · Return
                </td>
              </tr>

              {/* CTA */}

              {/* Fort Kochi */}
              <tr className="border-b">
                <td className="p-4 font-medium text-neutral-900">Fort Kochi</td>
                <td className="p-4 text-green-600 bg-brand/5 font-medium">
                  ✅ Day 1 — Exclusive
                </td>
                <td className="p-4 text-red-500 font-medium">
                  ❌ Not included
                </td>
              </tr>

              {/* Munnar Tea Gardens */}
              <tr className="border-b">
                <td className="p-4 font-medium text-neutral-900">
                  Munnar Tea Gardens
                </td>
                <td className="p-4 text-red-500 font-medium">
                  ❌ Not included
                </td>
                <td className="p-4 text-green-600 bg-brand/10 font-medium">
                  ✅ Day 1 — Exclusive
                </td>
              </tr>

              {/* Kalaripayattu Show */}
              <tr className="border-b">
                <td className="p-4 font-medium text-neutral-900">
                  Kalaripayattu Show
                </td>
                <td className="p-4 text-red-500 font-medium">
                  ❌ Not included
                </td>
                <td className="p-4 text-green-600 bg-brand/10 font-medium">
                  ✅ Day 1 — Exclusive
                </td>
              </tr>

              {/* Varkala Beach */}
              <tr className="border-b">
                <td className="p-4 font-medium text-neutral-900">
                  Varkala Beach
                </td>
                <td className="p-4 text-red-500 font-medium">
                  ❌ Not included
                </td>
                <td className="p-4 text-green-600 bg-brand/10 font-medium">
                  ✅ Days 3+4 — 3 beach zones
                </td>
              </tr>

              {/* Alleppey Backwaters */}
              <tr className="border-b">
                <td className="p-4 font-medium text-neutral-900">
                  Alleppey Backwaters
                </td>
                <td className="p-4 text-green-600 bg-brand/5 font-medium">
                  ✅ Day 2 — Shikara (at site)
                </td>
                <td className="p-4 text-green-600 bg-brand/10 font-medium">
                  ✅ Day 2 — Shikara (self-sponsored)
                </td>
              </tr>

              {/* Houseboat */}
              <tr className="border-b">
                <td className="p-4 font-medium text-neutral-900">Houseboat</td>
                <td className="p-4 text-neutral-500">
                  ❌ Not offered — Shikara only
                </td>
                <td className="p-4 text-neutral-500">
                  ❌ Not offered — Shikara only
                </td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-neutral-900">
                  Choose if...
                </td>

                <td className="p-4 bg-brand/5 rounded-bl-2xl">
                  <p className="text-sm mb-3">
                    Fort Kochi + Alleppey is your priority. Budget trip.
                  </p>
                  <button className="bg-brand text-white px-4 py-2 rounded-xl font-medium hover:opacity-90 transition">
                    Book 2-Day →
                  </button>
                </td>

                <td className="p-4 bg-brand/10 rounded-br-2xl">
                  <p className="text-sm mb-3">
                    Full Kerala experience with AC comfort & meals.
                  </p>
                  <button className="bg-brand text-white px-4 py-2 rounded-xl font-medium hover:opacity-90 transition">
                    Book 4-Day →
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <FAQ faqs={faqs} />
        <WhyChooseUs features={features} layout={[3, 1]} />
        <ContactForm />
        <section className="w-full bg-brand/20 text-white py-16 flex flex-col items-center">
          <div className="w-full max-w-6xl px-6">
            {/* Title */}
            <h2 className="text-xl md:text-2xl font-semibold text-brand mb-4">
              Two Keralas From Bangalore. One Friday Night. One Wednesday
              Evening.
            </h2>

            {/* Description */}
            <p className="text-sm md:text-base text-black leading-relaxed max-w-4xl">
              The 2-day package covers Fort Kochi&#39;s Jew Town and the
              Alleppey backwaters — two days, one overnight, back by Sunday
              night. The 4-day package covers the full Kerala arc from the tea
              hills at 1,600 metres down through the backwaters to the cliff
              beach at Varkala — with 4 breakfasts, an AC vehicle, and a live
              Kalaripayattu performance in between. From ₹6,399. Both depart
              every week.
            </p>

            {/* Divider */}
            <div className="w-full border-t border-gray-700 my-12" />

            {/* Buttons */}
            <div className="flex flex-col md:flex-row gap-6">
              <Link
                href="/destinations/north-india"
                className="w-full md:w-1/2 text-center bg-brand text-black font-medium py-3 px-6 hover:opacity-90 transition"
              >
                2-Day Kochi + Alleppey ₹6,399 →
              </Link>

              <Link
                href="/destinations/south-india"
                className="w-full md:w-1/2 text-center bg-brand text-black font-medium py-3 px-6 hover:opacity-90 transition"
              >
                4-Day Kerala Full Circuit ₹17,499 →
              </Link>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-black mt-5">
              {/* Phone */}
              <a
                href="tel:+918886051052"
                className="flex items-center gap-2 hover:underline"
              >
                <Phone size={16} />
                +91 8886051052
              </a>

              <span className="hidden md:block text-gray-500">|</span>

              {/* Instagram */}
              <a
                href="https://instagram.com/swadeshi_traveller"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:underline"
              >
                <Camera size={16} />
                @swadeshi_traveller
              </a>

              <span className="hidden md:block text-gray-500">|</span>

              {/* Website */}
              <a
                href="https://www.swadeshitraveller.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:underline"
              >
                <Globe size={16} />
                www.swadeshitraveller.com
              </a>
            </div>
          </div>
        </section>
        {/* Packages Section */}
      </div>
    </>
  );
}
