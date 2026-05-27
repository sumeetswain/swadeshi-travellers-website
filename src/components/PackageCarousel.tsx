"use client";

import { useState } from "react";
import CallbackPopup from "./CallbackPopup";

type CarouselItem = {
  href?: string; // optional now
  image: string;
  title: string;
  price?: string;
  subtitle?: string;
  features?: string[];
};

type HorizontalImageCarouselProps = {
  title?: string;
  items: CarouselItem[];
  description?: string;
  cardWidth?: number;
  cardHeight?: number;
  containerWidth?: string;
  gap?: number;
};

export default function HorizontalImageCarousel({
  title,
  items,
  description = "",
  cardWidth = 350,
  cardHeight = 350,
  containerWidth = "85%",
  gap = 40,
}: HorizontalImageCarouselProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="w-full py-10 flex flex-col items-center">
        {/* Title */}
        {title && (
          <h2 className="w-full max-w-[85%] text-xl font-semibold text-green-600 mb-6">
            {title}
          </h2>
        )}

        {description && (
          <p className="w-full max-w-[85%] text-base text-gray-600 mb-6">
            {description}
          </p>
        )}

        {/* Carousel */}
        <div
          className="overflow-x-auto custom-scrollbar"
          style={{ width: containerWidth }}
        >
          <div className="flex min-w-max pb-4" style={{ gap: `${gap}px` }}>
            {items.map((item, index) => {
              const CardContent = (
                <div
                  className="relative rounded-2xl overflow-hidden"
                  style={{ height: cardHeight }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition duration-300" />

                  <div className="absolute inset-0 p-4 text-white">
                    {/* DEFAULT CONTENT */}
                    <div className="absolute bottom-4 left-4 right-4 transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-2">
                      <h3 className="text-lg font-semibold">{item.title}</h3>

                      {item.price && (
                        <p className="text-pink-300 font-bold text-xl mt-1">
                          {item.price}
                        </p>
                      )}

                      {item.subtitle && (
                        <p className="text-sm text-gray-200 mt-1">
                          {item.subtitle}
                        </p>
                      )}
                    </div>

                    {/* HOVER CONTENT */}
                    <div className="absolute inset-x-4 bottom-4 opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                      {item.features && (
                        <ul className="space-y-1 text-xs text-gray-200">
                          {item.features.map((f, i) => (
                            <li key={i}>✦ {f}</li>
                          ))}
                        </ul>
                      )}

                      <div className="inline-block mt-3 bg-green-400 text-black text-sm font-medium py-2 px-4 rounded-md">
                        {item.href ? "View Packages →" : "Request Callback →"}
                      </div>
                    </div>
                  </div>
                </div>
              );

              return item.href ? (
                <a
                  key={index}
                  href={item.href}
                  className="group flex-shrink-0"
                  style={{ width: cardWidth }}
                >
                  {CardContent}
                </a>
              ) : (
                <button
                  key={index}
                  onClick={() => setOpen(true)}
                  className="group flex-shrink-0 text-left"
                  style={{ width: cardWidth }}
                >
                  {CardContent}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Popup */}
      {open && <CallbackPopup onClose={() => setOpen(false)} />}
    </>
  );
}
