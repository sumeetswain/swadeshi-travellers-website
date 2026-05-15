/* eslint-disable @next/next/no-img-element */
import ContactForm from "@/components/ContactForm";
import CuratedCategories from "@/components/CuratedCategories";
import DescriptionBox from "@/components/DescriptionBox";
import FAQ from "@/components/FAQs";
import FinalCta from "@/components/FinalCTA";
import PackageCarousel from "@/components/PackageCarousel";
import Reviews from "@/components/Reviews";
import WhyChooseUs from "@/components/WhyChooseUs";
import React from "react";
import {
  Camera,
  Compass,
  DollarSign,
  Globe,
  IndianRupee,
  MapPinIcon,
  Phone,
  Star,
  Train,
} from "lucide-react";
import Link from "next/link";
import FinalCTA from "@/components/FinalCTA";
export default function DestinationPage() {
  const trips = [
    {
      name: "coorg",
      link: "/destinations/south-india/coorg/from-bangalore",
      image: "/southindia/coorg.png",
    },
    {
      name: "Gokarna",
      link: "/destinations/south-india/gokarna",
      image: "/southindia/gokarna.png",
    },
    {
      name: "kerala",
      link: "/destinations/south-india/kerala/from-bangalore",
      image: "/southindia/kerala.png",
    },
    {
      name: "ooty",
      link: "/destinations/south-india/ooty",
      image: "/southindia/ooty.png",
    },
    {
      name: "pondicherry",
      link: "/destinations/south-india/pondicherry",
      image: "/southindia/pondicherry.png",
    },
    {
      name: "wayanad",
      link: "/destinations/south-india/wayanad",
      image: "/southindia/wayanad.png",
    },
  ];
  const karnataka = [
    {
      title: "Ooty & Coonoor",
      price: "Tamil Nadu / Karnataka border",
      subtitle:
        "🚌 From Bangalore  ₹5,399 · 3 packages 🚂 From Hyderabad  ₹7,199 · 2 packages",
      features: [
        "UNESCO Nilgiri Mountain Railway",
        "Tea estates",
        "Mandalpatti ",
        "Mysore Palace on return",
        "Toy train confirmed",
      ],
      image: "/southindia/ooty.png",
      href: "/destinations/south-india/ooty/from-hyderabad",
      badge: "Group Trip",
    },
    {
      title: "Coorg (Kodagu)",
      price: "Karnataka — Western Ghats",
      subtitle:
        "🚌 From Bangalore  ₹3,999 · 2 packages 🚂 From Hyderabad  ₹6,499 · 1 package",
      features: [
        "Abbey Falls (110K/mo)",
        "Mandalpatti Peak",
        "Raja Seat sunset",
        "Namdroling Golden Temple",
        "Nisargadhama bamboo island",
      ],
      image: "/southindia/ooty.png",
      href: "/destinations/south-india/ooty/from-hyderabad",
      badge: "Group Trip",
    },
    {
      title: "Chikmagalur",
      price: "Karnataka — Baba Budan Giri",
      subtitle:
        "🚌 From Bangalore  ₹3,999 · 1 package 🚂 From Hyderabad  ₹6,499 · 1 package",
      features: [
        "Mullayanagiri — Karnataka&#39;s highest peak (1,930m) ",
        "Hebbe Waterfalls jeep ride",
        "Kemmangundi ",
        "Z Point ridge trek",
        "Belur Temple",
      ],
      image: "/southindia/ooty.png",
      href: "/destinations/south-india/ooty/from-hyderabad",
      badge: "Group Trip",
    },
    {
      title: "Gokarna",
      price: "Karnataka — Uttara Kannada",
      subtitle:
        "🚌 From Bangalore  ₹5,199 · 2 packages 🚂 From Hyderabad  ₹4,999 · 4 packages",
      features: [
        "Om Beach",
        "Kudle Beach",
        "Mahabaleshwar Temple ",
        "Mirjan Fort",
        "Murudeshwar Shiva statue",
        "Nirvana Beach",
      ],
      image: "/southindia/ooty.png",
      href: "/destinations/south-india/ooty/from-hyderabad",
      badge: "Group Trip",
    },
    {
      title: "Hampi",
      price: "Karnataka — Vijayanagara",
      subtitle:
        "🚌 Bangalore  Coming Soon 🚂 From Hyderabad  ₹5,499 · 2 packages",
      features: [
        "Virupaksha Temple (7th century)",
        "Vittala Temple & Stone Chariot",
        "Hemakuta Hill sunset ",
        "Hampi Bazaar",
        "Anjanadri Hill sunrise",
      ],
      image: "/southindia/ooty.png",
      href: "/destinations/south-india/ooty/from-hyderabad",
      badge: "Group Trip",
    },
    {
      title: "Dandeli",
      price: "Karnataka — Kali River",
      subtitle:
        "🚌 From Bangalore  ₹5,999 (via Gokarna pkg) · 1 package 🚂 From Hyderabad  ₹4,999 (via Gokarna pkg) · 1 package",
      features: [
        "Kayaking + Zorbing + Boating + River swimming (all included in Hyderabad package)",
        "Camping Night 1",
        "Full Dandeli meals included ",
      ],
      image: "/southindia/ooty.png",
      href: "/destinations/south-india/ooty/from-hyderabad",
      badge: "Group Trip",
    },
  ];
  const tamilnadu = [
    {
      title: "Pondicherry + Mahabalipuram",
      price: "Tamil Nadu — Coromandel Coast",
      subtitle:
        "🚌 From Bangalore  ₹4,599 · 3 packages 🚂 From Hyderabad  ₹7,199 · 2 packages",
      features: [
        "French Colony",
        "Rock Beach",
        "Auroville  ",
        "Pichavaram Mangrove boating",
        "Shore Temple",
        "Pancha Rathas",
        "Krishna&#39;s Butter Ball",
      ],
      image: "/southindia/ooty.png",
      href: "/destinations/south-india/ooty/from-hyderabad",
      badge: "Group Trip",
    },
    {
      title: "Arunachalam + Pondicherry",
      price: "Tamil Nadu — Tiruvannamalai",
      subtitle:
        "🚌 From Bangalore  ₹6,999 · 1 package 🚂 From Hyderabad  ₹7,199 · 1 package",
      features: [
        "14km Girivalam around the sacred mountain",
        "Arunachaleshwar Temple",
        "Eight Lingams",
        "Ramana Maharshi Ashram",
        "French Colony",
      ],
      image: "/southindia/ooty.png",
      href: "/destinations/south-india/ooty/from-hyderabad",
      badge: "Group Trip",
    },
  ];
  const kerala = [
    {
      title: "Wayanad",
      price: "Kerala — Western Ghats",
      subtitle:
        "🚌 From Bangalore  ₹5,999 · 2 packages 🚂 From Hyderabad  ₹7,999 · 1 package",
      features: [
        "Banasura Sagar Dam (110K/mo)",
        "Chembra Peak heart lake",
        "900 Kandi Glass Bridge",
        "Edakkal Caves",
        "Mysore Palace on return",
      ],
      image: "/southindia/ooty.png",
      href: "/destinations/south-india/ooty/from-hyderabad",
      badge: "Group Trip",
    },
    {
      title: "Kochi + Alleppey",
      price: "Kerala — Kochi + Vembanad",
      subtitle:
        "🚌 From Bangalore  ₹6,399 · 1 package 🚂 Hyderabad  Coming Soon",
      features: [
        "Jew Town",
        "Fort Kochi",
        "Chinese fishing nets",
        "Café hopping",
        "Marari Beach",
        "Alleppey Shikara ride",
        "4 Bangalore pickup points",
      ],
      image: "/southindia/ooty.png",
      href: "/destinations/south-india/ooty/from-hyderabad",
      badge: "Group Trip",
    },
    {
      title: "Kerala Full Circuit",
      price: "Kerala — Munnar + Alleppey + Varkala",
      subtitle:
        "🚌 From Bangalore  ₹17,499 · 1 package 🚂 Hyderabad  Coming Soon",
      features: [
        "Munnar tea estates",
        "Echo Point",
        "Kalaripayattu show",
        "Alleppey backwaters",
        "Varkala Cliff Beach",
        "4 breakfasts included ",
        "AC vehicle",
      ],
      image: "/southindia/ooty.png",
      href: "/destinations/south-india/ooty/from-hyderabad",
      badge: "Group Trip",
    },
  ];
  const andhrapradesh = [
    {
      title: "Araku Valley + Vizag",
      price: "Andhra Pradesh — Eastern Ghats",
      subtitle:
        "🚌 Bangalore  Coming Soon 🚂 From Hyderabad  ₹6,999 · 1 package",
      features: [
        "Vanjangi Hill sunrise (sea of clouds)",
        "Lambasingi (AP&#39;s Shimla)",
        "Borra Caves",
        "Araku coffee valley",
        "Vizag beach circuit",
      ],
      image: "/southindia/ooty.png",
      href: "/destinations/south-india/ooty/from-hyderabad",
      badge: "Group Trip",
    },
    {
      title: "Andhra Pradesh — Coming Soon",
      price: "Tamil Nadu — Tiruvannamalai",
      subtitle:
        "Tirupati (Tirumala Temple · Chittoor) and Puttaparthi circuits from Hyderabad in planning. Both are strong Hyderabad outbound destinations with high search volume. Expected launch: 2026.",
      features: [],
      image: "/southindia/ooty.png",
      href: "/destinations/south-india/ooty/from-hyderabad",
      badge: "Group Trip",
    },
  ];
  const faqs = [
    {
      question:
        "Which South India destinations can I reach from Bangalore with STC?",
      answer:
        "From Bangalore, STC currently runs packages to: Ooty & Coonoor (3 packages from ₹5,399), Pondicherry (3 packages from ₹4,599), Wayanad (2 packages from ₹5,999), Coorg (2 packages from ₹3,999), Chikmagalur (1 package from ₹3,999), Kerala (2 packages from ₹6,399 — Kochi+Alleppey and the 4-Day Munnar+Alleppey+Varkala circuit), and Gokarna (2 packages from ₹5,199). All packages depart from Marathahalli, Silk Board, and Majestic (bus packages) or KSR Bengaluru Railway Station (train packages) every Thursday and Friday.",
    },
    {
      question:
        "Which South India destinations can I reach from Hyderabad with STC?",
      answer:
        "From Hyderabad, STC currently runs packages to: Gokarna (4 packages from ₹4,999 — including Jog Falls, Dandeli, Udupi, and Hampi circuits), Ooty & Coonoor (2 packages from ₹7,199), Pondicherry (2 packages from ₹7,199), Hampi (2 packages from ₹5,499), Coorg & Chikmagalur (1 package from ₹6,499), Wayanad (1 package from ₹7,999), and Araku+Vizag (1 package from ₹6,999). Most Hyderabad packages depart from Kacheguda or Nampally Railway Station by train, every Thursday and Friday.",
    },
    {
      question: "What is the cheapest South India group tour available?",
      answer:
        "The most affordable STC South India tours are the 2-day Coorg and Chikmagalur weekend bus packages from Bangalore, both starting at ₹3,999 per person. These depart Friday nights by bus from Marathahalli, Silk Board, and Majestic — no railway station needed. For Hyderabad, the Gokarna + Dandeli package (₹4,999) is the most comprehensive entry point — it includes all Dandeli water sports (kayaking, zorbing, boating, river swimming) and all Day 1 Dandeli meals in the price.",
    },
    {
      question: "Do STC South India packages include train tickets?",
      answer:
        "Yes — all STC train-based packages include sleeper class non-AC train tickets both ways in the package price. You do not book separately. Bus-based packages (Coorg 2D, Chikmagalur 2D, Wayanad 2D, Ooty 2D, Gokarna 2D, Kochi+Alleppey 2D, Kerala 4D from Bangalore) include the bus transport instead. The specific transport type and pickup station is stated clearly on each destination&#39;s package page.",
    },
    {
      question:
        "Which South India package is best for a first-time STC traveller?",
      answer:
        "From Bangalore, the 2-day Coorg weekend bus tour (₹3,999) is the best entry point — it departs Friday night by bus from 3 Bangalore pickup points and covers Mandalpatti Peak, Abbey Falls, and Raja Seat in 2 days. For Hyderabad, the Gokarna + Dandeli package (₹4,999) is the most value-packed first trip — water sports included, camping, Om Beach, and Murudeshwar Temple. Both are 2-night departures with a trip captain throughout.",
    },
  ];
  return (
    <div className="min-h-screen bg-white">
      {/* Top Full Width Image */}
      <div className="w-full h-[45vh] md:h-[55vh]">
        <img
          src="/wayanad/wayanad.webp"
          alt="Wayanad Cover"
          className="w-full h-full object-cover bg-center"
        />
      </div>
      <DescriptionBox
        title="South India Tour Packages"
        content="Karnataka. Tamil Nadu. Kerala. Andhra Pradesh. 40+ Group Tours. Every Weekend. From ₹3,999.

South India contains more variety within a 10-hour bus or train radius than any other region on the subcontinent. Coffee estates at 1,600 metres in the Nilgiris. French colonial lanes in Pondicherry&#39;s white town. 900 kilometres of backwater canals in Kerala. The laterite cliffs at Varkala rising directly from the Arabian Sea. The Virupaksha Temple at Hampi, active since the 7th century, the archaeological heart of the Vijayanagara Empire. The Murudeshwar Shiva statue visible from the Arabian Sea. The 14-kilometre Girivalam path around the sacred mountain at Arunachalam. Swadeshi Traveller Community runs group tour packages to all of these — every Thursday and Friday, from Bangalore and Hyderabad, at prices that start from ₹3,999. 40+ departures. Every destination confirmed. Every itinerary tested.

"
      />
      {/* Title */}
      <CuratedCategories data={trips} />
      {/* <CuratedCategories data={trips} /> */}

      <PackageCarousel
        items={karnataka}
        title="Karnataka — Coorg, Chikmagalur, Gokarna, Hampi, Dandeli & the Nilgiris"
        description="Karnataka is the most range-dense state in the STC South India portfolio. The Western Ghats run north to south through the state — starting at the coffee estates of Coorg (Kodagu) in the south, moving through the misty peaks of Chikmagalur, then the forest coast at Gokarna where sacred temples meet Arabian Sea beaches, and ending in the ruins of Hampi in the north where the Vijayanagara Empire built its capital between two banks of the Tungabhadra. Dandeli sits in the northern Western Ghats, where the Kali River feeds one of the most accessible white-water and wildlife destinations in South India. STC runs packages to all of these — weekly, from both Bangalore and Hyderabad."
      />
      <PackageCarousel
        items={tamilnadu}
        title="Tamil Nadu — Pondicherry, Arunachalam & Mahabalipuram"
        description="Tamil Nadu&#39;s STC packages cover the coastal and spiritual belt of the state. Pondicherry — the former French colony with its white-town grid, seafront promenades, and Auroville on its northern edge — is accessible from both Bangalore and Hyderabad in 3-day packages from ₹4,599. Arunachalam is the sacred mountain town where the 14-kilometre Girivalam path circles the Arunachaleswarar Temple — one of the five Pancha Bhuta Stalas of Shiva — on full moon evenings. Mahabalipuram, where the Shore Temple and the Pancha Rathas stand at the edge of the Bay of Bengal, is on the Day 3 return circuit for multiple STC packages."
      />
      <PackageCarousel
        items={kerala}
        title="Kerala — Wayanad, Kochi, Alleppey, Munnar & Varkala"
        description="Kerala&#39;s STC packages cover the full topographic range of the state. Wayanad in the north: Banasura Sagar Dam (110,000 searches/month), Chembra Peak heart-shaped lake, Edakkal Caves. Kochi in the centre: Fort Kochi&#39;s colonial quarter — the Dutch cemetery, the Chinese fishing nets, Jew Town, the café lanes. Alleppey on the coast: the Vembanad Lake backwater network and the Shikara ride through the canal system. Munnar in the Nilgiri foothills: tea estates at 1,600 metres, Mattupetty Dam, Echo Point. Varkala on the southern coast: the laterite cliff above the Arabian Sea, Papanasam Beach, Black Sand Beach. STC&#39;s 4-day Kerala circuit from Bangalore covers Munnar, Alleppey, and Varkala in one departure."
      />
      <PackageCarousel
        items={andhrapradesh}
        title="Andhra Pradesh — Araku Valley & Vizag"
        description="The Andhra Pradesh circuit in STC&#39;s portfolio runs north from Hyderabad to Visakhapatnam (Vizag) and into the Eastern Ghats. Araku Valley — the coffee-growing high-altitude bowl in the Ananthagiri Hills — is the centrepiece: paddy terraces, waterfalls, tribal culture, and Borra Caves. The Nilgiri-equivalent of the East Coast. Vanjangi Hill is the Araku circuit&#39;s sunrise viewpoint where a sea of clouds forms in the valley at dawn. Lambasingi — the only place in Andhra Pradesh where temperatures drop below 10°C in winter — is part of the same circuit. Currently available from Hyderabad only."
      />
      <WhyChooseUs />
      <Reviews />
      <FAQ faqs={faqs} />
      <ContactForm />
      <FinalCTA
        title="Every South India Destination. Every Weekend. From ₹3,999."
        description="Experience the diverse landscapes of South India with our carefully curated packages. From the coastal charm of Tamil Nadu to the spiritual heritage of Kerala and the vibrant culture of Andhra Pradesh, we have something for every traveler."
        primaryLink="/destinations/bangalore"
        primaryLabel="View All Bangalore Packages →"
        secondaryLink="/destinations/hyderabad"
        secondaryLabel="View All Hyderabad Packages →"
      />
    </div>
  );
}
