/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function BhutanPage() {
  const packages = [
    {
      id: 1,
      title: "Bhutan Backpacking Trip",
      days: "6N/7D",
      price: "₹ 31999/-",
      image:
        "https://images.unsplash.com/photo-1524169358666-79f22534bc6e?auto=format&fit=crop&w=1600&q=60",
      type: "Group Trip",
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
      <h1 className="text-center text-3xl md:text-4xl font-semibold mt-10 mb-8 text-brand">
        Wayanad Tour Packages
      </h1>

      {/* Packages Section */}
      <div className="max-w-5xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center">
          {packages.map((p) => (
            <div
              key={p.id}
              className="bg-white border border-green-400 rounded-xl shadow-sm w-full max-w-md"
            >
              {/* Image */}
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-52 object-cover rounded-t-xl"
              />

              {/* Badge */}
              <div className="px-4 -mt-5">
                <span className="bg-green-500 text-white text-sm px-4 py-1 rounded-md">
                  {p.type}
                </span>
              </div>

              {/* Content */}
              <div className="p-4">
                <h2 className="text-lg font-semibold mt-2 text-brand">
                  {p.title}
                </h2>

                <p className="text-sm text-gray-600 mt-2">From {p.price}</p>

                <div className="flex justify-end items-center mt-4 text-gray-600 text-sm">
                  <span className="mr-2">📅</span>
                  {p.days}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
