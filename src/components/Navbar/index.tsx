"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, ChevronDown, X } from "lucide-react";

type DestinationPlace = { label: string; href: string };
type DestinationRegion = {
  label: string;
  href: string;
  key: string;
  places: DestinationPlace[];
};

const destinationsNav: DestinationRegion[] = [
  {
    label: "South India",
    href: "/destinations/south-india",
    key: "south-india",
    places: [
      { label: "All South India", href: "/destinations/south-india" },
      {
        label: "Coorg",
        href: "/destinations/south-india/coorg/from-bangalore",
      },
      { label: "Gokarna", href: "/destinations/south-india/gokarna" },
      {
        label: "Kerala",
        href: "/destinations/south-india/kerala/from-bangalore",
      },
      {
        label: "Ooty",
        href: "/destinations/south-india/ooty",
      },
      {
        label: "Pondicherry",
        href: "/destinations/south-india/pondicherry/from-bangalore",
      },
      {
        label: "Wayanad",
        href: "/destinations/south-india/wayanad/from-bangalore",
      },
    ],
  },
  {
    label: "North India",
    href: "/destinations/north-india",
    key: "north-india",
    places: [],
  },
];

const departuresNav = [
  { label: "From Hyderabad", href: "/destinations/from-hyderabad" },
  { label: "From Bangalore", href: "/destinations/from-bangalore" },
];

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <nav className="w-full bg-brand shadow-md fixed top-0 left-0 z-50">
      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        <Link href="/" className="text-white font-bold text-xl">
          Swadeshi
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <div className="relative group">
            <button className="flex items-center gap-1 text-white font-medium">
              Destinations
              <ChevronDown
                size={16}
                className="text-white group-hover:rotate-180 transition-transform duration-200"
              />
            </button>

            <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-3 mt-2 min-w-[220px] opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 translate-y-2">
              {destinationsNav.map((region) => (
                <div key={region.key} className="px-2">
                  <Link
                    href={region.href}
                    className="block px-3 py-2 text-black font-semibold rounded-md"
                  >
                    {region.label}
                  </Link>
                  {region.places.length > 0 && (
                    <div className="pl-3 pb-2">
                      {region.places
                        .filter((place) => place.href !== region.href)
                        .map((place) => (
                          <Link
                            key={place.href}
                            href={place.href}
                            className="block px-3 py-1.5 text-sm text-black/80 rounded-md"
                          >
                            {place.label}
                          </Link>
                        ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="relative group">
            <button className="flex items-center gap-1 text-white font-medium">
              Departures
              <ChevronDown
                size={16}
                className="text-white group-hover:rotate-180 transition-transform duration-200"
              />
            </button>

            <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 translate-y-2">
              {departuresNav.map((departure) => (
                <Link
                  key={departure.href}
                  href={departure.href}
                  className="block px-4 py-2 text-black"
                >
                  {departure.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar Toggle Button */}
        <button
          className="md:hidden text-white"
          onClick={toggleSidebar}
          aria-label="Toggle menu"
        >
          {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-brand shadow-lg z-50 transform transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-white/20">
          <span className="text-white font-bold text-lg">Menu</span>
          <button onClick={closeSidebar} className="text-white">
            <X size={24} />
          </button>
        </div>

        <div className="p-4">
          <div className="mb-3">
            <p className="flex items-center justify-between text-white font-medium py-2">
              Destinations
              <ChevronDown size={18} className="text-white shrink-0" />
            </p>

            <div className="pl-4 mt-1 space-y-3">
              {destinationsNav.map((region) => (
                <div key={region.key}>
                  {region.places.length === 0 ? (
                    <Link
                      href={region.href}
                      onClick={closeSidebar}
                      className="block py-1 text-white font-medium rounded-md px-2"
                    >
                      {region.label}
                    </Link>
                  ) : (
                    <>
                      <p className="flex items-center justify-between text-white font-medium py-1 px-2">
                        {region.label}
                        <ChevronDown
                          size={16}
                          className="text-white shrink-0"
                        />
                      </p>
                      <div className="pl-3 mt-1 space-y-1">
                        {region.places.map((place) => (
                          <Link
                            key={place.href}
                            href={place.href}
                            onClick={closeSidebar}
                            className="block py-1 text-white rounded-md px-2"
                          >
                            {place.label}
                          </Link>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mb-3">
            <p className="flex items-center justify-between text-white font-medium py-2">
              Departures
              <ChevronDown size={18} className="text-white shrink-0" />
            </p>

            <div className="pl-4 mt-1 space-y-1">
              {departuresNav.map((departure) => (
                <Link
                  key={departure.href}
                  href={departure.href}
                  onClick={closeSidebar}
                  className="block py-1 text-white rounded-md px-2"
                >
                  {departure.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
