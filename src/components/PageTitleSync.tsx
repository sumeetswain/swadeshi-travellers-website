"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const ROUTE_TITLES: Record<string, string> = {
  "/":
    "Group Tour Packages from Bangalore & Hyderabad | STC — ₹3,999 Onwards | Ooty, Coorg, Wayanad, Kerala & More",
  "/destinations": "Destinations",
  "/destinations/from-bangalore":
    "Tour Packages from Bangalore 2026 — Ooty, Coorg, Wayanad, Kerala, Gokarna & More | STC | From ₹3,999",
  "/destinations/from-hyderabad":
    "Tour Packages from Hyderabad 2026 — 13 Weekend Trips | Thu & Fri Departures | From ₹4,999 | Swadeshi Traveller",
  "/destinations/north-india":
    "North India Tour Packages — Rishikesh, Manali, Rajasthan & Kashmir | Coming Soon | STC",
  "/destinations/south-india":
    "South India Tour Packages 2026 — Ooty, Coorg, Wayanad, Kerala, Gokarna, Pondicherry & More | STC",
  "/destinations/south-india/coorg/from-bangalore":
    "Coorg Tour Package from Bangalore 2026 — ₹3,999 Onwards | Abbey Falls, Mandalpatti & Mysore | STC",
  "/destinations/south-india/gokarna": "Hyderabad Tour Packages",
  "/destinations/south-india/gokarna/from-bangalore":
    "Gokarna Trip from Bangalore 2026 — ₹5,199 Onwards | Mirjan Fort, Om Beach, Murudeshwar & Dandeli | STC",
  "/destinations/south-india/kerala/from-bangalore":
    "Kerala Packages from Bangalore 2026 — ₹6,399 Onwards | Kochi, Alleppey, Munnar & Varkala | STC",
  "/destinations/south-india/ooty": "Ooty | Swadeshi Traveller",
  "/destinations/south-india/ooty/from-bangalore":
    "Ooty Tour Package from Bangalore 2026 — ₹5,399 Onwards | UNESCO Toy Train | Mysore Palace | Swadeshi Traveller",
  "/destinations/south-india/ooty/from-hyderabad":
    "Ooty Trip from Hyderabad 2026 — 2 Packages | Toy Train, Wildlife & Isha Foundation | ₹7,199 Onwards | Swadeshi Traveller",
  "/destinations/south-india/pondicherry/from-bangalore":
    "Pondicherry Tour Packages from Bangalore 2026 — ₹4,599 Onwards | Swadeshi Traveller",
  "/destinations/south-india/wayanad/from-bangalore":
    "Wayanad Tour Package from Bangalore 2026 — ₹5,999 Onwards | Meals Included | Chembra Trek & Mysore Palace | STC",
};

export default function PageTitleSync() {
  const pathname = usePathname();

  useEffect(() => {
    const routeTitle = getRouteTitle(pathname);

    if (!routeTitle) {
      return;
    }

    const title = formatTitle(routeTitle);
    document.title = title;

    if (pathname.startsWith("/tour/")) {
      return;
    }

    // Re-apply after route transitions so stale metadata cannot win the race.
    const animationFrame = window.requestAnimationFrame(() => {
      document.title = title;
    });
    const timeout = window.setTimeout(() => {
      document.title = title;
    }, 100);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.clearTimeout(timeout);
    };
  }, [pathname]);

  return null;
}

function getRouteTitle(pathname: string) {
  const normalizedPathname = normalizePathname(pathname);

  return ROUTE_TITLES[normalizedPathname];
}

function normalizePathname(pathname: string) {
  const normalizedPathname = pathname.replace(/\/+$/, "");

  return normalizedPathname || "/";
}

function formatTitle(title: string) {
  return title.endsWith(" | Swadeshi") ? title : `${title} | Swadeshi`;
}
