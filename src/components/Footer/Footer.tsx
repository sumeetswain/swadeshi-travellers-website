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
              src="/swadeshi-logo.jpeg"
              alt="Swadeshi Travellers logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <h3 className="text-lg font-bold">SWADESHI TRAVELLERS</h3>
          </div>
          <p className="text-sm leading-relaxed text-[#444] max-w-xs">
            We are group of passionate travelers who would like to encourage the
            enthusiastic travelers to explore India with our vision and form a
            community of travelers to spread awareness about India and its
            prosperity.
          </p>
        </div>

        {/* DESTINATIONS */}
        <div>
          <h3 className="text-base font-semibold mb-4 relative">
            Destinations
            <span className="block w-10 h-[2px] bg-green-500 mt-1"></span>
          </h3>
          <ul className="space-y-2 text-[#444]">
            <li>
              <Link
                href="/destinations/south-india"
                className="hover:underline"
              >
                South India
              </Link>
            </li>
            <li>
              <Link
                href="/destinations/south-india/coorg/from-bangalore"
                className="hover:underline"
              >
                Coorg
              </Link>
            </li>
            <li>
              <Link
                href="/destinations/south-india/gokarna"
                className="hover:underline"
              >
                Gokarna
              </Link>
            </li>
            <li>
              <Link
                href="/destinations/south-india/kerala/from-bangalore"
                className="hover:underline"
              >
                Kerala
              </Link>
            </li>
            <li>
              <Link
                href="/destinations/south-india/ooty"
                className="hover:underline"
              >
                Ooty
              </Link>
            </li>
            <li>
              <Link
                href="/destinations/south-india/pondicherry/from-bangalore"
                className="hover:underline"
              >
                Pondicherry
              </Link>
            </li>
            <li>
              <Link
                href="/destinations/south-india/wayanad/from-bangalore"
                className="hover:underline"
              >
                Wayanad
              </Link>
            </li>
            <li>
              <Link
                href="/destinations/north-india"
                className="hover:underline"
              >
                North India
              </Link>
            </li>
          </ul>
        </div>

        {/* DEPARTURES */}
        <div>
          <h3 className="text-base font-semibold mb-4 relative">
            Departures
            <span className="block w-10 h-[2px] bg-green-500 mt-1"></span>
          </h3>
          <ul className="space-y-2 text-[#444]">
            <li>
              <Link
                href="/destinations/from-hyderabad"
                className="hover:underline"
              >
                From Hyderabad
              </Link>
            </li>
            <li>
              <Link
                href="/destinations/from-bangalore"
                className="hover:underline"
              >
                From Bangalore
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
            Swadeshi Travellers (A unit of Swadeshi Travellers Pvt. Ltd.)
            <br />
            H.no 12-2-252, Mallikarjuna Nagar Rd, opp. GSI TRAINING INSTITUTE
            <br />
            Bandlaguda, Nagole
            <br />
            Hyderabad, Telangana 500068
          </p>
        </div>
      </div>

      {/* SOCIAL + PAYMENT + COPYRIGHT */}
      <div className="border-t border-gray-300 py-6 flex flex-col items-center gap-4">
        {/* Social Icons */}
        <div className="flex gap-4">
          <a
            href="https://www.instagram.com/swadeshi_traveller/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/insta-logo.png"
              alt="Instagram"
              width={30}
              height={30}
              className="hover:opacity-70"
            />
          </a>
          <a
            href="https://www.facebook.com/swadeshi.traveller/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/social.png"
              alt="Facebook"
              width={30}
              height={30}
              className="hover:opacity-70"
            />
          </a>
          <a
            href="https://www.youtube.com/@swadeshitraveller4505"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/video.png"
              alt="YouTube"
              width={30}
              height={30}
              className="hover:opacity-70"
            />
          </a>
          {/* <a
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
          </a> */}
        </div>

        {/* Payment icons */}

        {/* Copyright */}
        <p className="text-xs text-center text-gray-600">
          © Copyright {new Date().getFullYear()} Swadeshi Travellers. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
