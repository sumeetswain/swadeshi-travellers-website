import ContactForm from "@/components/ContactForm";
import CuratedCategories from "@/components/CuratedCategories";
import FAQ from "@/components/FAQs";
import PackageCarousel from "@/components/PackageCarousel";
import { PackageLoader } from "@/components/PackageLoader/PackageLoader";
import Reviews from "@/components/Reviews";
import Image from "next/image";

import React from "react";

export const metadata = {
  title: "Hyderabad Tour Packages",
};
const trips = [
  {
    name: "From Bangalore",
    link: "/destinations/south-india/gokarna/from-bangalore",
    image: "/starting/blr.png",
  },
  {
    name: "From Hyderabad",
    link: "/destinations/south-india/gokarna/from-hyderabad",
    image: "/packages/gokarnajog.png",
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
            src="/southindia/banners/gokarna.png"
            alt="Hyderabad Cover"
            className="w-full h-full object-cover bg-bottom"
          />
        </div>

        {/* Title */}
        <h1 className="text-center text-3xl md:text-4xl font-semibold mt-10 mb-8 text-brand">
          Gokarna Tour Packages
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
