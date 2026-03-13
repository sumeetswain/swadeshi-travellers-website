import { PackageLoader } from "@/components/PackageLoader/PackageLoader";
import Image from "next/image";
import React from "react";

export const metadata = {
  title: "Bangalore Tour Packages",
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
            src="/destination/bangalore.png"
            alt="Chennai Cover"
            className="w-full h-full object-cover bg-bottom"
          />
        </div>

        {/* Title */}
        <h1 className="text-center text-3xl md:text-4xl font-semibold mt-10 mb-8 text-brand">
          Bangalore Tour Packages
        </h1>
        {/* <PackageLoader
        title="Backpacking Trips"
        category="weekend-trips-bangalore"
        /> */}
        <PackageLoader title="One Day Trips" category="one-day-trip" />
        <PackageLoader title="Two Day Trips" category="two-day-trips" />
        <PackageLoader title="Three Day Trips" category="three-day-trips" />
        <PackageLoader
          title="Weekend Trips"
          category="backpacking-trips-bangalore"
        />
        {/* Packages Section */}
      </div>
    </>
  );
}
