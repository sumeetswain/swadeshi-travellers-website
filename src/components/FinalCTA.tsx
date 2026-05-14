"use client";

import { useState } from "react";
import Image from "next/image";
import CallbackPopup from "./CallbackPopup";

export default function FinalCta() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="w-full flex justify-center py-12">
        {/* Main Container */}
        <div
          className="
            relative
            w-[360px]
            h-[565px]
            md:w-full
            md:max-w-[clamp(880px,86vw,1760px)]
            md:aspect-[1240/540]
            md:h-auto
            rounded-3xl
            overflow-hidden
            bg-purple-50
          "
        >
          {/* Mobile Image */}
          <Image
            src="/planning/plan2.png"
            alt="Travel banner mobile"
            fill
            className="object-cover md:hidden"
            priority
          />

          {/* Desktop Image */}
          <Image
            src="/planning/8.png"
            alt="Travel banner"
            fill
            className="object-cover hidden md:block"
            priority
          />

          {/* Overlay Content */}
          <div
            className="
              relative
              h-full
              flex
              flex-col
              items-center
              justify-start
              pt-9
              text-center

              md:flex-row
              md:items-center
              md:justify-start
              md:pt-0
              md:text-left
              md:pl-[clamp(70px,7vw,142px)]
            "
          >
            {/* Text Container */}
            <div
              className="
                max-w-[320px]
                md:max-w-[clamp(384px,38vw,767px)]
              "
            >
              {/* Heading */}
              <p
                className="
                  text-[clamp(28px,6vw,40px)]
                  md:text-[clamp(40px,4vw,80px)]
                  font-semibold
                  leading-tight
                  text-brand
                "
              >
                You pick the mood.
                <br />
                We map the route.
              </p>

              {/* Button */}
              <div className="mt-6 md:mt-[clamp(28px,3vw,56px)]">
                <button
                  onClick={() => setOpen(true)}
                  className="
                    w-full
                    sm:w-1/2
                    bg-brand text-white font-semibold py-2 rounded-lg
                    hover:opacity-90 transition
                  "
                >
                  Request Callback
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Use existing popup */}
      {open && <CallbackPopup onClose={() => setOpen(false)} />}
    </>
  );
}
