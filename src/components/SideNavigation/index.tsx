"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import Image from "next/image";
import CallbackPopup from "../CallbackPopup";

export default function SideNavigation() {
  const [isVisible, setIsVisible] = useState(false);
  const [open, setOpen] = useState(false);

  // Show scroll-to-top button only when scrolled down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) setIsVisible(true);
      else setIsVisible(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll smoothly to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <motion.button
        initial={{ x: 80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        className="
    fixed right-5 top-1/2 -translate-y-20
    bg-brand text-white font-semibold
    px-5 py-2 rounded-t-lg
    shadow-lg
    cursor-pointer
    transform
    origin-right
    -rotate-90
    z-10
  "
        onClick={() => setOpen(true)}
      >
        Request Callback
      </motion.button>
      <AnimatePresence>
        {open && <CallbackPopup onClose={() => setOpen(false)} />}
      </AnimatePresence>
      <div className="fixed bottom-6 right-6 flex flex-col items-center gap-6 z-50">
        {/* Request Callback Button */}

        {/* Scroll to Top Button */}
        <AnimatePresence>
          {isVisible && (
            <motion.button
              onClick={scrollToTop}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="p-3 rounded-full bg-white text-black shadow-lg hover:bg-gray-200 transition-all duration-300"
              aria-label="Scroll to top"
            >
              <ArrowUp size={22} />
            </motion.button>
          )}
        </AnimatePresence>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="p-1 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg transition-all duration-300 flex items-center justify-center"
          aria-label="Chat on WhatsApp"
        >
          <Image src="/whatsapp.svg" alt="WhatsApp" width={36} height={26} />
        </a>
      </div>
    </>
  );
}
