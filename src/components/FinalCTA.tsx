import Link from "next/link";
import { Phone, Camera, Globe } from "lucide-react";

const FinalCTA = ({
  title,
  description,
  primaryLink,
  primaryLabel,
  secondaryLink,
  secondaryLabel,
  phone = "+91 8886051052",
  instagram = "@swadeshi_traveller",
  website = "https://www.swadeshitraveller.com",
}) => {
  return (
    <section className="w-full bg-brand/20 text-white py-16 flex flex-col items-center">
      <div className="w-full max-w-6xl px-6">
        {/* Title */}
        <h2 className="text-xl md:text-2xl font-semibold text-brand mb-4">
          {title}
        </h2>

        {/* Description */}
        <p className="text-sm md:text-base text-black leading-relaxed max-w-4xl">
          {description}
        </p>

        {/* Divider */}
        <div className="w-full border-t border-gray-700 my-12" />

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-6">
          <Link
            href={primaryLink}
            className="w-full md:w-1/2 text-center bg-brand text-black font-medium py-3 px-6 hover:opacity-90 transition"
          >
            {primaryLabel}
          </Link>

          <Link
            href={secondaryLink}
            className="w-full md:w-1/2 text-center bg-brand text-black font-medium py-3 px-6 hover:opacity-90 transition"
          >
            {secondaryLabel}
          </Link>
        </div>

        {/* Contact Row */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-black mt-5">
          {/* Phone */}
          <a
            href={`tel:${phone}`}
            className="flex items-center gap-2 hover:underline"
          >
            <Phone size={16} />
            {phone}
          </a>

          <span className="hidden md:block text-gray-500">|</span>

          {/* Instagram */}
          <a
            href="https://instagram.com/swadeshi_traveller"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline"
          >
            <Camera size={16} />
            {instagram}
          </a>

          <span className="hidden md:block text-gray-500">|</span>

          {/* Website */}
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline"
          >
            <Globe size={16} />
            {website.replace("https://", "")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
