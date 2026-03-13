import CuratedCategories from "@/components/CuratedCategories";
import { PackageLoader } from "@/components/PackageLoader/PackageLoader";
import CallbackButton from "@/components/CallbackButton";
import PackageCarousel from "@/components/PackageCarousel";
import HeroSection from "@/components/HeroSection";

const hydTrips = [
  {
    title: "Gokarna Dandeli",
    image: "/hyd/1.png",
    href: "/trips/himachal",
    badge: "Group Trip",
  },
  {
    title: "Coorg Chikmagalur",
    image: "/hyd/2.png",
    href: "/trips/kasol",
    badge: "Group Trip",
  },
  {
    title: "Ooty Coonoor",
    image: "/hyd/3.png",
    href: "/trips/kedarnath",
    badge: "Group Trip",
  },
  {
    title: "Arunachalam Pondicherry",
    image: "/hyd/4.png",
    href: "/trips/kedarnath",
    badge: "Group Trip",
  },
  {
    title: "Wayanad",
    image: "/hyd/6.png",
    href: "/trips/kedarnath",
    badge: "Group Trip",
  },
  {
    title: "Isha Ooty",
    image: "/hyd/5.png",
    href: "/trips/kedarnath",
    badge: "Group Trip",
  },
];
const incredibleIndia = [
  {
    title: "Agra Manali",
    image: "/inc/1.png",
    href: "/trips/himachal",
    badge: "Group Trip",
  },
  {
    title: "Kerala",
    image: "/inc/2.png",
    href: "/trips/kasol",
    badge: "Group Trip",
  },
  {
    title: "Andaman & Nicobar Islands",
    image: "/inc/3.png",
    href: "/trips/kedarnath",
    badge: "Group Trip",
  },
  {
    title: "Meghalaya",
    image: "/inc/4.png",
    href: "/trips/kedarnath",
    badge: "Group Trip",
  },
  {
    title: "Ooty Kodaikanal",
    image: "/inc/5.png",
    href: "/trips/kedarnath",
    badge: "Group Trip",
  },
  {
    title: "Rajasthan",
    image: "/inc/6.png",
    href: "/trips/kedarnath",
    badge: "Group Trip",
  },
];
const southernEscapes = [
  {
    title: "Coorg",
    image: "/south/1.png",
    href: "/trips/himachal",
    badge: "Group Trip",
  },
  {
    title: "Chikmagalur",
    image: "/south/2.png",
    href: "/trips/kasol",
    badge: "Group Trip",
  },
  {
    title: "Ooty Coonoor",
    image: "/south/3.png",
    href: "/trips/kedarnath",
    badge: "Group Trip",
  },
  {
    title: "Pondicherry",
    image: "/south/4.png",
    href: "/trips/kedarnath",
    badge: "Group Trip",
  },
  {
    title: "Kodaikanal",
    image: "/south/5.png",
    href: "/trips/kedarnath",
    badge: "Group Trip",
  },
  {
    title: "Hampi",
    image: "/south/6.png",
    href: "/trips/kedarnath",
    badge: "Group Trip",
  },
];
const ultimateIndia = [
  {
    title: "Spiti Valley",
    image: "/ultimate/1.png",
    href: "/trips/himachal",
    badge: "Group Trip",
  },
  {
    title: "Leh Ladakh",
    image: "/ultimate/2.png",
    href: "/trips/kasol",
    badge: "Group Trip",
  },
  {
    title: "Meghalaya",
    image: "/ultimate/3.png",
    href: "/trips/kedarnath",
    badge: "Group Trip",
  },
  {
    title: "Kashmir",
    image: "/ultimate/4.png",
    href: "/trips/kedarnath",
    badge: "Group Trip",
  },
  {
    title: "Sikkim",
    image: "/ultimate/5.png",
    href: "/trips/kedarnath",
    badge: "Group Trip",
  },
  {
    title: "Kerala",
    image: "/ultimate/6.png",
    href: "/trips/kedarnath",
    badge: "Group Trip",
  },
];

export const metadata = {
  title: "Swadeshi",
};
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CuratedCategories />
      <PackageLoader title="Upcoming Trips" />
      <PackageCarousel items={hydTrips} title="Epic Weekend Getaways" />
      <PackageCarousel items={incredibleIndia} title="Incredible India" />
      <PackageCarousel items={southernEscapes} title="Southern Escapes" />
      <PackageCarousel items={ultimateIndia} title="Ultimate India" />
    </>
  );
}
