"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback } from "react";

const images = [
  { src: "/ultimate/1.png", label: "Himachal" },
  { src: "/ultimate/2.png", label: "Spiti" },
  { src: "/ultimate/3.png", label: "Thailand" },
  { src: "/ultimate/4.png", label: "Vietnam" },
  { src: "/ultimate/5.png", label: "Ladakh" },
];

export default function Gallery() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    loop: true,
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="py-16 bg-gray-100 relative">
      {/* <svg width="0" height="0" className="absolute">
        <defs>
          <clipPath id="curveClip" clipPathUnits="objectBoundingBox">
            <path d="M0,0.08 Q0.4,0.1 1,0.08 L1,0.92 Q0.5,0.9 0,0.92 Z" />
          </clipPath>
        </defs>
      </svg> */}
      <h2 className="text-center text-2xl font-semibold">JOURNEY IN FRAMES</h2>
      <p className="text-center text-gray-500 mb-10">
        Pictures Perfect Moments
      </p>

      {/* Buttons */}
      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-teal-500 w-10 h-10 rounded-full text-white"
      >
        ‹
      </button>

      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-teal-500 w-10 h-10 rounded-full text-white"
      >
        ›
      </button>

      {/* Carousel */}
      <div
        className="overflow-hidden px-6 md:px-10"
        style={{ clipPath: "url(#curveClip)" }}
        ref={emblaRef}
      >
        <div className="flex">
          {images.map((item, index) => (
            <div
              key={index}
              className="flex-[0_0_70%] md:flex-[0_0_30%] px-2.5 relative"
            >
              <div className="rounded-xl overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.label}
                  width={500}
                  height={420}
                  className="w-full h-[520px] object-cover"
                />

                <div className="absolute bottom-4 left-4 bg-black/60 text-white text-sm px-3 py-1 rounded-full">
                  {item.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
