"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const images = ["/bhutanimage.png", "/cover.png", "/cover.webp"];

const words = ["Peace", "Adventure", "Freedom"];

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);
  const [currentWord, setCurrentWord] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
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
        <AnimatePresence>
          <motion.div
            key={currentImage}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
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

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-wrap justify-center items-center gap-24 text-white text-sm sm:text-base">
        <div className="flex flex-col items-center space-y-2">
          <Image
            src="/insta-logo.png"
            alt="Instagram Logo"
            width={28}
            height={28}
            className="opacity-90"
          />
          <span className="font-semibold">97k+</span>
          <span className="opacity-80">Followers</span>
        </div>

        <div className="flex flex-col items-center space-y-2">
          <Image
            src="/google.png"
            alt="Google Logo"
            width={28}
            height={28}
            className="opacity-90"
          />
          <span className="font-semibold">4500+</span>
          <span className="opacity-80">Reviews</span>
        </div>

        <div className="flex flex-col items-center space-y-2">
          <Image
            src="/icons/travel.svg"
            alt="Trips Logo"
            width={28}
            height={28}
            className="opacity-90"
          />
          <span className="font-semibold">800+</span>
          <span className="opacity-80">Trips</span>
        </div>
      </div>
    </section>
  );
}
