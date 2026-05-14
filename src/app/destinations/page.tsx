/* eslint-disable @next/next/no-img-element */
import CuratedCategories from "@/components/CuratedCategories";
import React from "react";

export default function BhutanPage() {
  const trips = [
    {
      name: "Thailand",
      link: "international/trip-to-thailand",
      image: "/curatedcategories/thailand.webp",
    },
    {
      name: "Bhutan",
      link: "international/trip-to-bhutan",
      image: "/curatedcategories/bhutan.webp",
    },
    {
      name: "Almaty",
      link: "international/trip-to-almaty",
      image: "/curatedcategories/almaty.webp",
    },
    {
      name: "Bali",
      link: "international/trip-to-bali",
      image: "/curatedcategories/bali.webp",
    },
    {
      name: "Dubai",
      link: "international/trip-to-dubai",
      image: "/curatedcategories/dubai.webp",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Top Full Width Image */}
      <div className="w-full h-[45vh] md:h-[55vh]">
        <img
          src="/wayanad/wayanad.webp"
          alt="Wayanad Cover"
          className="w-full h-full object-cover bg-center"
        />
      </div>

      {/* Title */}
      <CuratedCategories data={trips} />
    </div>
  );
}
