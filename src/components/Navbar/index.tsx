"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, ChevronDown, ChevronUp, X } from "lucide-react";

const Navbar = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSection = (section: string) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    setOpenSection(null);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
    setOpenSection(null);
  };

  const navLinks = [
    {
      label: "Domestic Trips",
      key: "domestic",
      subLinks: [
        { label: "Kerala", href: "/destinations/kerala" },
        { label: "Uttarakhand", href: "/destinations/uttarakhand" },
        { label: "Kashmir", href: "/destinations/kashmir" },
        { label: "North East", href: "/destinations/northeast" },
      ],
    },

    {
      label: "International Trips",
      key: "international",
      subLinks: [
        { label: "Vietnam", href: "/destinations/vietnam" },
        { label: "Thailand", href: "/destinations/thailand" },
        { label: "Bali", href: "/destinations/bali" },
        { label: "Singapore", href: "/destinations/singapore" },
      ],
    },
    {
      label: "Weekend Trips",
      key: "weekend",
      subLinks: [
        { label: "Coorg", href: "/destinations/coorg" },
        { label: "Chikmagalur", href: "/destinations/chikmagalur" },
        { label: "Wayanad", href: "/destinations/wayanad" },
        { label: "Gokarna", href: "/destinations/gokarna" },
      ],
    },
  ];

  return (
    <nav className="w-full bg-brand shadow-md fixed top-0 left-0 z-50">
      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        <Link href="/" className="text-white font-bold text-xl">
          Swadeshi
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8">
          {/* {navLinks.map((section) => (
            <div key={section.key} className="relative group">
              <button className="flex items-center gap-1 text-white hover:text-black/80 font-medium">
                {section.label}
                <ChevronDown
                  size={16}
                  className="group-hover:rotate-180 transition-transform duration-200"
                />
              </button>

             
              <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 translate-y-2">
                {section.subLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2 text-black hover:bg-black/10"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))} */}
          <Link href="/destinations/pune" className=" text-white">
            Pune
          </Link>
          <Link href="/destinations/chennai" className=" text-white">
            Chennai
          </Link>
          <Link href="/destinations/hyderabad" className=" text-white">
            Hyderabad
          </Link>
          <Link href="/destinations/bangalore" className=" text-white">
            Bangalore
          </Link>
        </div>

        {/* Sidebar Toggle Button */}
        <button
          className="md:hidden text-black"
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
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <span className="text-black font-bold text-lg">Menu</span>
          <button onClick={closeSidebar} className="text-black">
            <X size={24} />
          </button>
        </div>

        <div className="p-4">
          {navLinks.map((section) => (
            <div key={section.key} className="mb-3">
              <button
                onClick={() => toggleSection(section.key)}
                className="flex justify-between items-center w-full text-black font-medium py-2"
              >
                {section.label}
                {openSection === section.key ? (
                  <ChevronUp size={18} />
                ) : (
                  <ChevronDown size={18} />
                )}
              </button>

              {/* Sidebar Dropdown with transition */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openSection === section.key
                    ? "max-h-60 opacity-100 mt-1"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="pl-4 mt-1 space-y-1">
                  {section.subLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={closeSidebar}
                      className="block py-1 text-black hover:bg-black/10 rounded-md px-2"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
