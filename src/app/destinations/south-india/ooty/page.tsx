import ContactForm from "@/components/ContactForm";
import CuratedCategories from "@/components/CuratedCategories";
import FAQ from "@/components/FAQs";
import { PackageLoader } from "@/components/PackageLoader/PackageLoader";
import Reviews from "@/components/Reviews";
import Image from "next/image";

import React from "react";

const trips = [
  {
    name: "From Bangalore",
    link: "/destinations/south-india/ooty/from-bangalore",
    image: "/starting/blr.png",
  },
  {
    name: "From Hyderabad",
    link: "/destinations/south-india/ooty/from-hyderabad",
    image: "/starting/hyd.png",
  },
];

export const metadata = {
  title: "Ooty | Swadeshi Traveller",
  description:
    "Explore Ooty with Swadeshi Traveller. Curated tour packages from Bangalore and Hyderabad. Experience the Nilgiri hills, UNESCO toy train, tea plantations, waterfalls, and Isha Foundation. Book your unforgettable Ooty trip today!",
  keywords:
    "ooty tour packages, Ooty trip from Bangalore, Ooty trip from Hyderabad, Ooty toy train, Ooty tea plantations, Ooty waterfalls, Isha Foundation Ooty, Ooty group tours, Ooty travel guide",
};
export default function DestinationPage() {
  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Top Full Width Image */}
        <div className="w-full h-[45vh] md:h-[55vh]">
          <Image
            width={2000}
            height={560}
            src="/southindia/banners/ooty.png"
            alt="Hyderabad Cover"
            className="w-full h-full object-cover bg-bottom"
          />
        </div>

        {/* Title */}
        <h1 className="text-center text-3xl md:text-4xl font-semibold mt-10 mb-8 text-brand">
          Ooty Tour Packages
        </h1>
        <CuratedCategories data={trips} />
        <Reviews />
        <FAQ />
        <ContactForm />
        {/* Packages Section */}
      </div>
    </>
  );
}
