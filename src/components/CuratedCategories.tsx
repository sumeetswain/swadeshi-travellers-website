/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
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
  return (
    <>
      <div className="bg-white flex flex-col items-center  justify-center gap-5  ">
        <p className=" text-black font-bold text-center text-3xl lg:text-5xl ">
          Curated Destinations
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {trips.map(({ name, link, image }) => (
            <div
              key={link}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <div className="card parent text-black m-2 relative z-0 group">
                <div className="relative w-[10rem] h-[13rem] md:w-[15rem] md:h-[20rem] lg:w-[20rem] lg:h-[25rem] xl:w-[18rem] 2xl:w-[20rem] rounded overflow-hidden">
                  <Link href={link}>
                    <Image
                      width={500}
                      height={500}
                      alt={`${name} Trip`}
                      src={image}
                      className="w-full h-full inset-0 absolute rounded-xl object-cover transition-transform duration-300"
                    />
                  </Link>

                  {/* Animated Border */}
                  <span className="absolute inset-0 rounded-xl border-[3px] border-transparent group-hover:border-green-500 animate-borderDraw pointer-events-none"></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CuratedCategories;
