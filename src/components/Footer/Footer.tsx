"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#f4f6f8] text-[#2f343c] text-sm">
      {/* MAIN GRID */}
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">
        {/* LOGO + ABOUT */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Image
              src="/logo.webp"
              alt="Tripper Trails logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <h3 className="text-lg font-bold">TRIPPER TRAILS</h3>
          </div>
          <p className="text-sm leading-relaxed text-[#444] max-w-xs">
            At Tripper Trails, we strongly believe in protecting consumer
            privacy. That’s why we only ask you for information related to the
            services we provide.
          </p>
        </div>

        {/* COMPANY LINKS */}
        <div>
          <h3 className="text-base font-semibold mb-4 relative">
            Company
            <span className="block w-10 h-[2px] bg-green-500 mt-1"></span>
          </h3>
          <ul className="space-y-2 text-[#444]">
            <li>
              <Link href="/tours" className="hover:underline">
                Tours
              </Link>
            </li>
            <li>
              <Link href="/careers" className="hover:underline">
                Careers
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:underline">
                Blogs
              </Link>
            </li>
            <li>
              <Link href="/teams" className="hover:underline">
                Teams
              </Link>
            </li>
            <li>
              <Link href="/request-callback" className="hover:underline">
                Inquiry Form
              </Link>
            </li>
          </ul>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-base font-semibold mb-4 relative">
            Quick Links
            <span className="block w-10 h-[2px] bg-green-500 mt-1"></span>
          </h3>
          <ul className="space-y-2 text-[#444]">
            <li>
              <Link href="/privacy-policy" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/cancellation-policy" className="hover:underline">
                Cancellation Policy
              </Link>
            </li>
            <li>
              <Link href="/terms-and-conditions" className="hover:underline">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="/about-us" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/disclaimer" className="hover:underline">
                Disclaimer
              </Link>
            </li>
            <li>
              <Link href="/copyright" className="hover:underline">
                Copyright
              </Link>
            </li>
          </ul>
        </div>

        {/* OFFICE INFO */}
        <div>
          <h3 className="text-base font-semibold mb-4 relative">
            Our Office
            <span className="block w-10 h-[2px] bg-green-500 mt-1"></span>
          </h3>
          <p className="text-[#444] leading-relaxed">
            Tripper Trails (A unit of Tripper Trails Journeys Pvt. Ltd.)
            <br />
            #4036, 3rd Floor, 80 Feet Rd, near Sita Circle, next to Saligrama
            Party Hall,
            <br />
            1st Phase, Girinagar,
            <br />
            Bengaluru, Karnataka 560050
          </p>
        </div>
      </div>

      {/* SOCIAL + PAYMENT + COPYRIGHT */}
      <div className="border-t border-gray-300 py-6 flex flex-col items-center gap-4">
        {/* Social Icons */}
        <div className="flex gap-4">
          <a
            href="https://www.instagram.com/trippertrails/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/footerig.webp"
              alt="Instagram"
              width={30}
              height={30}
              className="hover:opacity-70"
            />
          </a>
          <a
            href="https://www.facebook.com/TripperTrails/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/footerfb.webp"
              alt="Facebook"
              width={30}
              height={30}
              className="hover:opacity-70"
            />
          </a>
          <a
            href="https://www.youtube.com/@Tripper.Trails"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/footeryt.webp"
              alt="YouTube"
              width={30}
              height={30}
              className="hover:opacity-70"
            />
          </a>
          <a
            href="https://in.pinterest.com/trippertrails/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/footerpintrest.webp"
              alt="Pinterest"
              width={30}
              height={30}
              className="hover:opacity-70"
            />
          </a>
        </div>

        {/* Payment icons */}

        {/* Copyright */}
        <p className="text-xs text-center text-gray-600">
          © Copyright {new Date().getFullYear()} TripperTrails.in. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
