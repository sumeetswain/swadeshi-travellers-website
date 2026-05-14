"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import PathDrawingBorder from "./PathDrawingBorder";

type TripItem = {
  name: string;
  link: string;
  image: string;
};

type CuratedCategoriesProps = {
  data: TripItem[];
  title?: string;
};

const CuratedCategories: React.FC<CuratedCategoriesProps> = ({
  data,
  title = "Curated Destinations",
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="bg-white flex flex-col items-center pt-10 justify-center gap-5">
      <p className="text-black font-bold text-center text-3xl lg:text-5xl">
        {title}
      </p>

      <div
        className={`
    w-full
    grid
    grid-cols-[repeat(auto-fit,minmax(330px,330px))]
    justify-center
    gap-5
  `}
      >
        {data.map(({ name, link, image }, index) => (
          <div key={link} className="flex items-center justify-center m-2">
            <div
              className="card parent text-black m-2 relative z-0 group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* 👇 Fixed size box */}
              <div className="relative w-[330px] h-[350px] rounded-xl overflow-hidden">
                <Link href={link}>
                  <Image
                    width={330}
                    height={300}
                    alt={`${name} Trip`}
                    src={image}
                    className="w-full h-full inset-0 absolute rounded-xl object-cover transition-transform duration-300"
                  />
                </Link>
              </div>

              <PathDrawingBorder
                isHovered={hoveredIndex === index}
                borderRadius={12}
                strokeColor="#22c55e"
                strokeWidth={3}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CuratedCategories;
