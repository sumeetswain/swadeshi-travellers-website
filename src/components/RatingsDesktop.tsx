import {
  faCheckCircle,
  faStar,
  faMedal,
  faBullseye,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

type RatingsDesktopProps = {
  stickToBottom?: boolean;
  variant?: "solid" | "glass";
};

export default function RatingsDesktop({
  stickToBottom = false,
  variant = "solid",
}: RatingsDesktopProps) {
  const isGlass = variant === "glass";

  return (
    <div
      className={`
        w-full z-10
        ${stickToBottom ? "absolute bottom-0 left-0" : ""}
        ${
          isGlass
            ? "backdrop-blur-md bg-white/10 border border-white/20"
            : "bg-[#4CCA51]"
        }
      `}
    >
      <div className="h-[48px] lg:h-[55px] flex items-center justify-center">
        <MarqueeContent isGlass={isGlass} />
      </div>
    </div>
  );
}
function MarqueeContent({ isGlass = false }) {
  return (
    <div
      className={`
        flex flex-wrap justify-center items-center gap-6 lg:gap-10
        ${isGlass ? "text-white" : "text-white"}
      `}
    >
      {/* Google */}
      <Item>
        <div className="flex items-center gap-2">
          <div className="rounded-full bg-white p-1 flex">
            <Image src="/google.png" width={14} height={14} alt="google" />
          </div>
          <div className="flex items-center">
            <span className="text-lg font-bold">5</span>
            <FontAwesomeIcon icon={faStar} className="text-white h-4 px-1" />
            <span>Rated</span>
          </div>
        </div>
      </Item>

      {/* Instagram */}
      <Item className="hidden lg:flex">
        <div className="flex items-center gap-2">
          <div className="rounded-full bg-white p-1 flex">
            <FontAwesomeIcon icon={faRocket} className="text-brand h-4 w-4" />
          </div>
          <span>StartupIndia Recognised</span>
        </div>
      </Item>

      {/* Happy Customers */}
      <Item className="hidden lg:flex">
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faCheckCircle} className="text-white h-4" />
          <span>200+ Happy Travellers</span>
        </div>
      </Item>

      {/* Pay Later */}
      <Item className="hidden lg:flex">
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faMedal} className="text-white h-4" />
          <span>MSME Certified</span>
        </div>
      </Item>

      {/* Support */}
      <Item>
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faBullseye} className="text-white h-4" />
          <span>ATOAI Certified</span>
        </div>
      </Item>
    </div>
  );
}

/* -------------------------------- */
/* Fixed-width slot (KEY PART)      */
/* -------------------------------- */
function Item({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center justify-center px-6 lg:px-10
                  min-w-[220px] lg:min-w-[260px] ${className}`}
    >
      {children}
    </div>
  );
}
