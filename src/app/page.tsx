import CuratedCategories from "@/components/CuratedCategories";
import { PackageLoader } from "@/components/PackageLoader/PackageLoader";
import CallbackButton from "@/components/CallbackButton";
import PackageCarousel from "@/components/PackageCarousel";
import HeroSection from "@/components/HeroSection";
import Gallery from "@/components/Gallery";
import FAQ from "@/components/FAQs";
import ContactForm from "@/components/ContactForm";
import WhyChooseUs from "@/components/WhyChooseUs";
import FinalCta from "@/components/FinalCTA";
import DealsSection from "@/components/DealsSection";
import { Camera, Globe, Phone, RotateCcw, Target, Users } from "lucide-react";
import Reviews from "@/components/Reviews";
import {
  Star,
  BadgeCheck,
  Train,
  MapPin,
  Compass,
  Wallet,
  Utensils,
  Waves,
} from "lucide-react";
import DescriptionBox from "@/components/DescriptionBox";
import ExpandableContentBox from "@/components/ExpandableContentBox";
import Link from "next/link";

const deals = [
  {
    icon: <Target />,
    title: "Book Early",
    description:
      "Secure your seat before it fills. Weekend trips sell out 2–3 weeks in advance during peak season (Oct–Feb). 50% advance confirms your seat.",
  },
  {
    icon: <Users />,
    title: "Group Discount",
    description:
      "Travelling with 8+ friends? Ask us about group pricing. The more you bring, the better it gets. Call: +91 8886051052.",
  },
  {
    icon: <RotateCcw />,
    title: "Flexible Rescheduling",
    description:
      "Plans change. Book now and reschedule up to 7 days before departure — no questions asked within policy. Flexible rebooking on all packages.",
  },
];
const frombglr = [
  {
    title: "Ooty Coonoor",
    image: "/south/3.png",
    price: "From ₹5,399",
    subtitle: "2D/1N or 3D/2N • Bus/Train",
    features: [
      "UNESCO Toy Train",
      "Mysore Palace option",
      "3 Packages available",
    ],
    href: "/tour/ooty-coonoor-weekend-getaway",
    badge: "Group Trip",
  },
  {
    title: "Coorg Weekend Tour",
    image: "/south/1.png",
    price: "From ₹3,999",
    subtitle: "2D/1N • Bus/Train • Fri nights",
    features: [
      "Mandalpatti Peak + Abbey Falls",
      "Zipline + Glass Bridge + Raja Seat",
      "Marathahalli/Silk Board/Majestic pickup",
      "Most affordable in BLR portfolio",
    ],
    href: "/tour/coorg-the-scotland-of-india-z64n",
    badge: "Group Trip",
  },
  {
    title: "Kerala Full Circuit",
    image: "/inc/2.png",
    price: "From ₹17,499",
    subtitle: "4D/3N • AC Bus • Wed evenings",
    features: [
      "Munnar + Alleppey + Varkala",
      "4 Breakfasts included",
      "AC vehicle  •  3 nights 3 cities",
      "Kalaripayattu live show — Day 1",
    ],
    href: "/tour/ooty-coonoor-mysore-mpes", // ! need link for this
    badge: "Group Trip",
  },
];
const fromhyd = [
  {
    title: "Gokarna + Dandeli Tour",
    image: "/hyd/1.png",
    price: "From ₹4,999",
    subtitle: "3D/2N • Train • Nampally/Begumpet/Lingampally",
    features: [
      "Water sports ALL INCLUDED",
      "Kayaking + Zorbing + Boating + River swim",
      "All Dandeli meals included (B+L+D)",
      "Camping + Om Beach + Murudeshwar",
    ],
    href: "/tour/gokarna-dandeli-2n3d-ex-blr-r5i3",
    badge: "Group Trip",
  },
  {
    title: "Ooty & Coonoor — Hyderabad",
    image: "/hyd/3.png",
    price: "From ₹7,199",
    subtitle: "3D/2N • Train • Kacheguda",
    features: [
      "Bandipur Forest Day 1",
      "Nilgiri toy train + Tea Gardens",
      "Mysore Palace on return",
      "Train from Kacheguda every Thu/Fri",
    ],
    href: "/tour/coorg-chikmagalur-le2e",
    badge: "Group Trip",
  },
  {
    title: "Wayanad — Hyderabad",
    image: "/hyd/6.png",
    price: "From ₹7,999",
    subtitle: "3D/2N • Train • Kacheguda 7:05PM",
    features: [
      "Banasura Sagar Dam + Chembra Peak",
      "900 Kandi Glass Bridge",
      "Mysore Palace on return",
      "Premium Hyderabad package",
    ],
    href: "/tour/ooty-coonoor-mysore-mpes",
    badge: "Group Trip",
  },
];
const bglrTrips = [
  {
    title: "Ooty",
    price: "From ₹5,399",
    subtitle: "3 packages • UNESCO Train ",
    image: "/southindia/ooty.png",
    href: "/destinations/south-india/ooty/from-bangalore",
    badge: "Group Trip",
  },
  {
    title: "Pondicherry",
    price: "From ₹4,599",
    subtitle: "3 packages • French Colony ",
    image: "/southindia/pondicherry.png",
    href: "/destinations/south-india/pondicherry/from-bangalore",
    badge: "Group Trip",
  },
  {
    title: "Wayanad",
    price: "From ₹5,999",
    subtitle: "2 packages • Meals included ",
    image: "/southindia/wayanad.png",
    href: "/destinations/south-india/wayanad/from-bangalore",
    badge: "Group Trip",
  },
  {
    title: "Coorg",
    price: "From ₹3,999",
    subtitle: "2 packages • Abbey Falls ",
    image: "/southindia/coorg.png",
    href: "/destinations/south-india/coorg/from-bangalore",
    badge: "Group Trip",
  },
  {
    title: "Kerala",
    price: "From ₹6,399",
    subtitle: "2 packages • Kochi+Alleppey ",
    image: "/southindia/kerala.png",
    href: "/destinations/south-india/kerala/from-bangalore",
    badge: "Group Trip",
  },
  {
    title: "Gokarna",
    price: "From ₹5,199",
    subtitle: "2 packages • Om Beach ",
    image: "/southindia/gokarna.png",
    href: "/destinations/south-india/gokarna/from-bangalore",
    badge: "Group Trip",
  },
  {
    title: "✦ More →",
    price: "See all Bangalore destinations",
    image: "/hyd/1.png",
    href: "/destinations/bangalore",
    badge: "Group Trip",
  },
];
const hydTrips = [
  {
    title: "Gokarna",
    price: "From ₹4,999",
    subtitle: "4 packages",
    image: "/southindia/gokarna.png",
    href: "/destinations/south-india/gokarna/from-hyderabad",
    badge: "Group Trip",
  },
  {
    title: "Ooty",
    price: "From ₹7,199",
    subtitle: "2 packages",
    image: "/southindia/ooty.png",
    href: "/destinations/south-india/ooty/from-hyderabad",
    badge: "Group Trip",
  },
  {
    title: "Pondicherry",
    price: "From ₹7,199",
    subtitle: "2 packages",
    image: "/southindia/pondicherry.png",
    href: "/destinations/south-india/pondicherry/from-hyderabad",
    badge: "Group Trip",
  },
  {
    title: "Coorg",
    price: "From ₹6,499",
    subtitle: "1 package",
    image: "/southindia/coorg.png",
    href: "/destinations/south-india/coorg/from-hyderabad",
    badge: "Group Trip",
  },
  {
    title: "Wayanad",
    price: "From ₹7,999",
    subtitle: "1 package",
    image: "/southindia/wayanad.png",
    href: "/destinations/south-india/wayanad/from-hyderabad",
    badge: "Group Trip",
  },
];
const incredibleIndia = [
  {
    title: "Agra Manali",
    image: "/inc/1.png",
    href: "/destinations/north-india/agra",
    badge: "Group Trip",
  },
  {
    title: "Kerala",
    image: "/inc/2.png",
    href: "/destinations/south-india/kerala",
    badge: "Group Trip",
  },
  {
    title: "Andaman & Nicobar Islands",
    image: "/inc/3.png",
    href: "/trips/kedarnath", // ! what will be the link for this? south/north/union
    badge: "Group Trip",
  },
  {
    title: "Meghalaya",
    image: "/inc/4.png",
    href: "/destinations/north-india/meghalaya", // ! north india or north east?
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

const trips = [
  {
    name: "North India",
    link: "destinations/north-india",
    image: "/curated/northindia.png",
  },
  {
    name: "South India",
    link: "destinations/south-india",
    image: "/curated/southindia.png",
  },
];
const stcFeatures = [
  {
    title: "4.8 Google Rating",
    description:
      "200+ verified five-star reviews. Every trip is run with the same attention to timing, safety, and comfort — whether it&#39;s your first STC trip or your tenth.",
    icon: <Star className="w-6 h-6" />,
  },
  {
    title: "MSME + ATOAI Certified",
    description:
      "Recognised by the Ministry of MSME, the Adventure Tour Operators Association of India (ATOAI), and StartupIndia. Credentials that are earned, not bought.",
    icon: <BadgeCheck className="w-6 h-6" />,
  },
  {
    title: "Train Tickets Included",
    description:
      "Every STC train package includes sleeper class tickets both ways in the package price. You don&#39;t book separately. You don&#39;t chase tatkal. The ticket is already yours.",
    icon: <Train className="w-6 h-6" />,
  },
  {
    title: "Multiple Pickup Points",
    description:
      "Bangalore packages pick up from Marathahalli, Silk Board, and Majestic. Hyderabad packages from Nampally, Kacheguda, Begumpet, and Lingampally. You board where you live.",
    icon: <MapPin className="w-6 h-6" />,
  },
  {
    title: "Dedicated Trip Captain",
    description:
      "Every STC departure has a dedicated trip captain on the bus or at the station — from pickup to drop. Not a call centre. A person who is actually there with you.",
    icon: <Compass className="w-6 h-6" />,
  },
  {
    title: "Transparent Pricing",
    description:
      "The price you see is the price you pay, plus GST at 5%. Entry tickets and food are excluded and stated clearly in every itinerary. No surprise charges at the destination.",
    icon: <Wallet className="w-6 h-6" />,
  },
  {
    title: "Meals Included — Select Packages",
    description:
      "The Wayanad 2D bus package (Bangalore) includes 2 breakfasts + 1 dinner. The Gokarna+Dandeli package (Hyderabad) includes all Dandeli meals — breakfast, lunch, and dinner on Day 1. Both confirmed in itinerary inclusions.",
    icon: <Utensils className="w-6 h-6" />,
  },
  {
    title: "Water Sports — Fully Included",
    description:
      "The Gokarna + Dandeli package from Hyderabad (₹4,999) includes all Dandeli water sports: kayaking, zorbing, boating, and river swimming. Plus indoor games. No hidden activity charges.",
    icon: <Waves className="w-6 h-6" />,
  },
];
export const metadata = {
  title: "Swadeshi",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <DescriptionBox
        title="Group Tour Packages from Bangalore & Hyderabad
"
        content="Ooty. Coorg. Wayanad. Kerala. Gokarna. Pondicherry. Hampi. Araku. Lonavala. Every Weekend. From ₹3,999.

Swadeshi Traveller Community was built for people who want to travel and not plan. Every package in the portfolio is built around one principle: you board the bus or the train at the stated time, from the stated pickup point, and everything else — the route, the accommodation, the sightseeing order, the return — is handled. STC runs group tour packages every Thursday and Friday from Bangalore and Hyderabad, covering South India&#39;s most significant hill stations, beaches, temple circuits, heritage sites, backwaters, and forests. 13 Hyderabad packages. 13+ Bangalore packages. Every destination confirmed. Every itinerary tested. From ₹3,999.
"
      />
      <CuratedCategories data={trips} />
      <PackageLoader title="Upcoming Trips" />
      <p className="text-center font-bold text-3xl text-brand">
        Trending This Weekend
      </p>
      <PackageCarousel items={frombglr} title="From Bangalore" />
      <PackageCarousel items={fromhyd} title="From Hyderabad" />
      {/* <PackageCarousel items={hydTrips} title="Epic Weekend Getaways" /> */}
      <DealsSection
        sectionTitle="Guaranteed Seats. Guaranteed Prices."
        deals={deals}
      />
      <p className="text-center font-bold text-3xl text-brand mt-4">
        Explore by Destination
      </p>
      <PackageCarousel items={bglrTrips} title="From Bangalore" />
      <PackageCarousel items={hydTrips} title="From Hyderabad" />
      {/* <PackageCarousel items={ultimateIndia} title="Ultimate India" /> */}

      <WhyChooseUs features={stcFeatures} layout={[3, 3, 2]} />
      <Reviews />
      <Gallery />
      <ExpandableContentBox
        title="The STC Story"
        content="Swadeshi Traveller Community was built on one conviction: the best travel experiences in India are within reach of a weekend bus or train from where you live. South India holds some of the most extraordinary natural, cultural, and spiritual landscapes on the subcontinent — and most of them are 8–12 hours from Bangalore or Hyderabad.

STC runs group tour packages because travel is better in a group. The group splits the logistics cost, fills the train compartment with energy, and turns a solo travel plan into a shared memory. Every STC trip has a dedicated trip captain who handles the route, the timing, and the unexpected — so the traveller handles nothing except showing up at the pickup point on time.

The STC portfolio covers South India (Ooty, Coorg, Wayanad, Kerala, Gokarna, Pondicherry, Hampi, Chikmagalur, Araku) and West India (Lonavala, Khandala) from both Bangalore and Hyderabad — 26+ packages, every destination tested, every itinerary confirmed. MSME Certified. ATOAI Certified. StartupIndia Recognised. 4.8 on Google.
"
        buttonText="Read More"
      />
      {/* Blogs */}
      <FAQ />
      <ContactForm />
      <section className="w-full bg-brand/20 text-white py-16 flex flex-col items-center">
        <div className="w-full max-w-6xl px-6">
          {/* Title */}
          <h2 className="text-xl md:text-2xl font-semibold text-brand mb-4">
            The Weekend Is 4 Days Away. The Train Ticket Is Already in the
            Package Price.
          </h2>

          {/* Description */}
          <p className="text-sm md:text-base text-black leading-relaxed max-w-4xl">
            Every Thursday and Friday, STC group tours depart from Bangalore and
            Hyderabad to South India&#39;s most extraordinary destinations. You
            don&#39;t need to research the route, book the train, arrange
            accommodation, or coordinate a group. You need to confirm your seat.
            We handle the rest.
            <br />
            <br />
            Ooty. Coorg. Wayanad. Kerala. Gokarna. Pondicherry. Hampi. Araku.
            Lonavala. 26+ packages. Both cities. Every weekend.
          </p>

          {/* Divider */}
          <div className="w-full border-t border-gray-700 my-12" />

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-6">
            <Link
              href="/destinations/bangalore"
              className="w-full md:w-1/2 text-center bg-brand text-black font-medium py-3 px-6 hover:opacity-90 transition"
            >
              🚌 View All Bangalore Packages →
            </Link>

            <Link
              href="/destinations/hyderabad"
              className="w-full md:w-1/2 text-center bg-brand text-black font-medium py-3 px-6 hover:opacity-90 transition"
            >
              🚂 View All Hyderabad Packages →
            </Link>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-black mt-5">
            {/* Phone */}
            <a
              href="tel:+918886051052"
              className="flex items-center gap-2 hover:underline"
            >
              <Phone size={16} />
              +91 8886051052
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
              @swadeshi_traveller
            </a>

            <span className="hidden md:block text-gray-500">|</span>

            {/* Website */}
            <a
              href="https://www.swadeshitraveller.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:underline"
            >
              <Globe size={16} />
              www.swadeshitraveller.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
