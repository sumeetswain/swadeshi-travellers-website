"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import RatingsDesktop from "./RatingsDesktop";

const images = ["/home/1.png", "/home/2.png", "/home/3.png", "/home/4.png"];

const words = ["Peace", "Adventure", "Freedom"];

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);
  const [currentWord, setCurrentWord] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => {
        const next = (prev + 1) % images.length;
        return next;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const current = words[currentWord];
    const typingSpeed = isDeleting ? 80 : 120;

    const timeout = setTimeout(() => {
      setTypedText((prev) =>
        isDeleting ? prev.slice(0, -1) : current.slice(0, prev.length + 1),
      );

      if (!isDeleting && typedText === current) {
        setTimeout(() => setIsDeleting(true), 1200);
      } else if (isDeleting && typedText === "") {
        setIsDeleting(false);
        setCurrentWord((prev) => (prev + 1) % words.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, currentWord]);

  return (
    <section className="relative w-full h-[100vh] overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentImage}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <Image
              src={images[currentImage]}
              alt="Travel background"
              fill
              className="object-cover brightness-75"
              priority
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 z-[1] pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_50%,rgba(0,0,0,0.4)_100%)]" />
        </div>
      </div>

      <div className="relative z-10 text-left text-white px-8 sm:px-16 max-w-3xl">
        <p className="text-lg sm:text-xl mb-2 font-light tracking-wide">
          Experience
        </p>
        <h1 className="text-5xl sm:text-7xl font-extrabold min-w-[8ch]">
          {typedText}
          <span className="animate-pulse">|</span>
        </h1>
      </div>

      <div className="absolute z-10 bottom-6 left-1/2 transform -translate-x-1/2 w-full px-4 pb-12 flex justify-center text-white text-sm sm:text-base">
        <div className="px-4 py-2 rounded-full text-center">
          📞 +91 8886051052 &nbsp; | &nbsp; Every Thursday & Friday &nbsp; |
          &nbsp; Pickup from your city
        </div>
      </div>
      <RatingsDesktop stickToBottom />
    </section>
  );
}
