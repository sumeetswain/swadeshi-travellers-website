import Link from "next/link";
import { Phone, Camera, Globe } from "lucide-react";

interface FinalCTAProps {
  title: string;
  description: string;

  primaryLink: string;
  primaryLabel: string;

  // Optional second package
  secondaryLink?: string;
  secondaryLabel?: string;

  // Optional third package
  thirdLink?: string;
  thirdLabel?: string;

  phone?: string;
  instagram?: string;
  website?: string;
}

const FinalCTA: React.FC<FinalCTAProps> = ({
  title,
  description,

  primaryLink,
  primaryLabel,

  secondaryLink,
  secondaryLabel,

  thirdLink,
  thirdLabel,

  phone = "+91 8886051052",
  instagram = "@swadeshi_traveller",
  website = "https://www.swadeshitraveller.com",
}) => {
  // Count how many buttons exist
  const buttonCount = [
    true,
    secondaryLink && secondaryLabel,
    thirdLink && thirdLabel,
  ].filter(Boolean).length;

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
        <div
          className={`grid gap-6 ${
            buttonCount === 3
              ? "grid-cols-1 md:grid-cols-3"
              : buttonCount === 2
                ? "grid-cols-1 md:grid-cols-2"
                : "grid-cols-1"
          }`}
        >
          {/* Primary */}
          <Link
            href={primaryLink}
            className="w-full text-center bg-brand text-black font-medium py-3 px-6 hover:opacity-90 transition"
          >
            {primaryLabel}
          </Link>

          {/* Optional Secondary */}
          {secondaryLink && secondaryLabel && (
            <Link
              href={secondaryLink}
              className="w-full text-center bg-brand text-black font-medium py-3 px-6 hover:opacity-90 transition"
            >
              {secondaryLabel}
            </Link>
          )}

          {/* Optional Third */}
          {thirdLink && thirdLabel && (
            <Link
              href={thirdLink}
              className="w-full text-center bg-brand text-black font-medium py-3 px-6 hover:opacity-90 transition"
            >
              {thirdLabel}
            </Link>
          )}
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
