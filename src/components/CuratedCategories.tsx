"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import PathDrawingBorder from "./PathDrawingBorder";
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
  // {
  //   name: "Baku",
  //   link: "international/trip-to-baku",
  //   image: "/VideoInternationalTrips/baku.webp",
  // },
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
const CuratedCategories = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <>
      <div className="bg-white flex flex-col items-center pt-10 justify-center gap-5  ">
        <p className=" text-black font-bold text-center text-3xl lg:text-5xl ">
          Curated Destinations
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {trips.map(({ name, link, image }, index) => (
            <div
              key={link}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <div
                className="card parent text-black m-2 relative z-0 group"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="relative w-[10rem] h-[13rem] md:w-[15rem] md:h-[20rem] lg:w-[20rem] lg:h-[25rem] xl:w-[18rem] 2xl:w-[20rem] rounded-xl overflow-hidden">
                  <Link href={link}>
                    <Image
                      width={500}
                      height={500}
                      alt={`${name} Trip`}
                      src={image}
                      className="w-full h-full inset-0 absolute rounded-xl object-cover transition-transform duration-300"
                    />
                  </Link>
                </div>

                {/* Path Drawing Border on Hover - positioned outside */}
                <PathDrawingBorder
                  isHovered={hoveredIndex === index}
                  borderRadius={8}
                  strokeColor="#22c55e"
                  strokeWidth={3}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CuratedCategories;
