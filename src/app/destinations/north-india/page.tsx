/* eslint-disable @next/next/no-img-element */
import ContactForm from "@/components/ContactForm";
import CuratedCategories from "@/components/CuratedCategories";
import DescriptionBox from "@/components/DescriptionBox";
import FAQ from "@/components/FAQs";
import FinalCta from "@/components/FinalCTA";
import PackageCarousel from "@/components/PackageCarousel";
import WhyChooseUs from "@/components/WhyChooseUs";
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
import React from "react";
const himalayas = [
  {
    title: "Rishikesh",
    price: "Uttarakhand — Ganges",
    subtitle: "India's adventure capital",
    features: [
      "White water rafting",
      "Bungee jump",
      "Laxman Jhula",
      "Beatles Ashram",
      "Triveni Ghat aarti",
    ],
    image: "/southindia/gokarna.png",
    href: "/destinations/south-india/gokarna/from-hyderabad",
    badge: "Group Trip",
  },
  {
    title: "Manali + Solang Valley",
    price: "Himachal Pradesh",
    subtitle: "Snow, glaciers and high-altitude roads",
    features: [
      "Solang Valley skiing",
      "Rohtang Pass",
      "Old Manali",
      "Hadimba Temple",
      "Beas River camping",
    ],
    image: "/southindia/ooty.png",
    href: "/destinations/south-india/ooty/from-hyderabad",
    badge: "Group Trip",
  },
  {
    title: "Leh Ladakh",
    price: "Jammu & Kashmir — Trans-Himalaya",
    subtitle: "The world's most dramatic road trip",
    features: [
      "Magnetic Hill",
      "Pangong Lake",
      "Nubra Valley",
      "Khardung La",
      "Hemis Monastery",
    ],
    image: "/southindia/ooty.png",
    href: "/destinations/south-india/ooty/from-hyderabad",
    badge: "Group Trip",
  },
  {
    title: "Spiti Valley",
    price: "Himachal Pradesh — Cold Desert",
    subtitle: "The moonscape valley at 12,000 feet",
    features: [
      "Key Monastery",
      "Chandratal Lake",
      "Kaza town",
      "Pin Valley",
      "Kibber village",
    ],
    image: "/southindia/ooty.png",
    href: "/destinations/south-india/ooty/from-hyderabad",
    badge: "Group Trip",
  },
];
const rajasthan = [
  {
    title: "Jaipur",
    price: "Rajasthan — Pink City",
    subtitle: "The gateway to Rajasthan",
    features: [
      "Amber Fort",
      "Hawa Mahal",
      "City Palace",
      "Jantar Mantar",
      "Nahargarh Fort",
    ],
    image: "/southindia/ooty.png",
    href: "/destinations/south-india/ooty/from-hyderabad",
    badge: "Group Trip",
  },
  {
    title: "Jodhpur",
    price: "Rajasthan — Blue City",
    subtitle: "The Mehrangarh Fort on a ridge above the city",
    features: [
      "Mehrangarh Fort",
      "Umaid Bhawan Palace",
      "Jaswant Thada",
      "Clock Tower Market",
    ],
    image: "/southindia/ooty.png",
    href: "/destinations/south-india/ooty/from-hyderabad",
    badge: "Group Trip",
  },
  {
    title: "Udaipur",
    price: "Rajasthan — City of Lakes",
    subtitle: "Palaces on the lakes of the Aravalli hills",
    features: [
      "City Palace",
      "Lake Pichola",
      "Jag Mandir",
      "Sajjangarh",
      "Fateh Sagar Lake",
    ],
    image: "/southindia/ooty.png",
    href: "/destinations/south-india/ooty/from-hyderabad",
    badge: "Group Trip",
  },
  {
    title: "Jaisalmer",
    price: "Rajasthan — Thar Desert",
    subtitle: "The golden fortress-city in the desert",
    features: [
      "Jaisalmer Fort",
      "Sam Sand Dunes",
      "Camel safari",
      "Patwon Ki Haveli",
    ],
    image: "/southindia/ooty.png",
    href: "/destinations/south-india/ooty/from-hyderabad",
    badge: "Group Trip",
  },
];
const northindia = [
  {
    title: "Varanasi",
    price: "Uttar Pradesh — Ganges ghats",
    subtitle: "The oldest living city on earth",
    features: [
      "Dashashwamedh Ghat aarti",
      "Ganga boat ride",
      "Kashi Vishwanath Temple",
      "Sarnath",
    ],
    image: "/southindia/ooty.png",
    href: "/destinations/south-india/ooty/from-hyderabad",
    badge: "Group Trip",
  },
  {
    title: "Kedarnath / Char Dham",
    price: "Uttarakhand — Himalayas",
    subtitle: "The highest Shiva shrine in the Himalayas",
    features: [
      "Kedarnath Temple",
      "Badrinath",
      "Gangotri",
      "Yamunotri",
      "Helicopter option",
    ],
    image: "/southindia/ooty.png",
    href: "/destinations/south-india/ooty/from-hyderabad",
    badge: "Group Trip",
  },
  {
    title: "Amritsar",
    price: "Punjab — Golden Temple",
    subtitle: "The most visited holy site in India",
    features: [
      "Golden Temple (Harmandir Sahib)",
      "Wagah Border ceremony",
      "Jallianwala Bagh",
    ],
    image: "/southindia/ooty.png",
    href: "/destinations/south-india/ooty/from-hyderabad",
    badge: "Group Trip",
  },
  {
    title: "Ayodhya",
    price: "Uttar Pradesh — Ram Janmabhoomi",
    subtitle: "The birthplace of Lord Rama",
    features: [
      "Ram Mandir",
      "Saryu River ghat",
      "Hanuman Garhi",
      "Kanak Bhawan",
      "Nageshwarnath",
    ],
    image: "/southindia/ooty.png",
    href: "/destinations/south-india/ooty/from-hyderabad",
    badge: "Group Trip",
  },
];
const kashmir = [
  {
    title: "Delhi + Agra",
    price: "Delhi / Uttar Pradesh",
    subtitle: "The Taj Mahal and Old Delhi in one circuit",
    features: [
      "Taj Mahal",
      "Red Fort",
      "Qutub Minar",
      "India Gate",
      "Fatehpur Sikri",
    ],
    image: "/southindia/ooty.png",
    href: "/destinations/south-india/ooty/from-hyderabad",
    badge: "Group Trip",
  },
  {
    title: "Kashmir",
    price: "Jammu & Kashmir",
    subtitle: "The valley above 1,600 metres",
    features: [
      "Dal Lake houseboat",
      "Pahalgam",
      "Gulmarg skiing",
      "Sonamarg",
      "Mughal Gardens",
    ],
    image: "/southindia/ooty.png",
    href: "/destinations/south-india/ooty/from-hyderabad",
    badge: "Group Trip",
  },
  {
    title: "Shimla + Kasauli",
    price: "Himachal Pradesh — Hill Stations",
    subtitle: "The colonial-era Himalayan hill stations",
    features: [
      "Mall Road Shimla",
      "Kufri",
      "Jakhu Temple",
      "Kasauli brewery walk",
    ],
    image: "/southindia/ooty.png",
    href: "/destinations/south-india/ooty/from-hyderabad",
    badge: "Group Trip",
  },
  {
    title: "Mussoorie + Dehradun",
    price: "Uttarakhand — Himalayan foothills",
    subtitle: "The Queen of Hill Stations",
    features: ["Kempty Falls", "Gun Hill", "Lal Tibba", "Dehradun Clock Tower"],
    image: "/southindia/ooty.png",
    href: "/destinations/south-india/ooty/from-hyderabad",
    badge: "Group Trip",
  },
];
const features = [
  {
    title: "Train Tickets Included",
    description:
      "All STC train packages include sleeper class tickets both ways. You do not book separately.",
    icon: <Train className="w-8 h-8 text-gray-700" />,
  },
  {
    title: "Multiple City Pickup Points",
    description:
      "Bangalore and Hyderabad packages will have multiple pickup points — same convenience as the South India portfolio.",
    icon: <MapPinIcon className="w-8 h-8 text-gray-700" />,
  },
  {
    title: "Dedicated Trip Captain",
    description:
      "Every departure has a dedicated trip captain from pickup to drop. Not a call centre — a person who is there with you.",
    icon: <Compass className="w-8 h-8 text-gray-700" />,
  },
  {
    title: "Transparent Pricing",
    description:
      "Price you see = price you pay + 5% GST. Entry tickets and food stated clearly in every itinerary. No surprise charges.",
    icon: <IndianRupee className="w-8 h-8 text-gray-700" />,
  },
  {
    title: "4.8 Google Rating",
    description:
      "200+ verified five-star reviews across the South India portfolio. North India packages will follow the same standard.",
    icon: <Star className="w-8 h-8 text-gray-700" />,
  },
];
const faqs = [
  {
    question: "When will North India packages be available?",
    answer:
      "STC is actively developing group tour packages from Bangalore and Hyderabad to Rishikesh, Manali, Rajasthan, and Kashmir. Launch timelines depend on itinerary confirmation, accommodation partnerships, and train ticket allocation. Leave your details in the form above and you will be notified the moment a package goes live — before it is publicly announced.",
  },
  {
    question: "Which North India destinations are you planning to cover?",
    answer:
      "The planned destinations include: Rishikesh (adventure + yoga), Manali and Solang Valley (snow + trekking), Rajasthan circuit (Jaipur, Jodhpur, Udaipur, Jaisalmer), Kashmir (Dal Lake, Pahalgam, Gulmarg), Varanasi (Ganges ghats), Kedarnath and Char Dham (pilgrimage), Amritsar (Golden Temple + Wagah Border), Leh Ladakh, Delhi + Agra, Mussoorie, and Shimla. Priority order is based on demand signals from the Notify Me form — the destination with the most interest gets built first.",
  },
  {
    question:
      "Will North India packages include train tickets like South India packages?",
    answer:
      "Yes — all train-based STC packages include sleeper class tickets both ways in the package price. North India packages will follow the same model. For destinations that require flights (Leh Ladakh, Kashmir), the package structure will be confirmed when the itinerary is finalised.",
  },
  {
    question: "Can I travel to North India with STC from Hyderabad?",
    answer:
      "Yes — STC runs packages from both Bangalore and Hyderabad. All planned North India packages will be available from both cities where train connectivity allows. Hyderabad is particularly well connected by train to Rajasthan, Varanasi, Amritsar, and Delhi. Leave your departure city in the Notify Me form above.",
  },
  {
    question: "What South India packages are available right now while I wait?",
    answer:
      "STC currently runs 40+ group tour packages from Bangalore and Hyderabad to South India — Ooty, Coorg, Wayanad, Kerala, Gokarna, Pondicherry, Hampi, Chikmagalur, and Araku. Packages start from ₹3,999. All depart every Thursday and Friday. See the South India section above or visit swadeshitraveller.com/destinations/south-india/.",
  },
];

export default function BhutanPage() {
  const trips = [
    {
      name: "manali",
      link: "/destinations/north-india/manali",
      image: "/northindia/manali.png",
    },
    {
      name: "shimla",
      link: "/destinations/north-india/shimla",
      image: "/northindia/shimla.png",
    },
    {
      name: "kashmir",
      link: "/destinations/north-india/kashmir",
      image: "/northindia/kashmir.png",
    },
    {
      name: "agra",
      link: "/destinations/north-india/agra",
      image: "/northindia/agra.png",
    },
    {
      name: "spiti",
      link: "/destinations/north-india/spiti",
      image: "/northindia/spiti.png",
    },
    {
      name: "haridwar",
      link: "/destinations/north-india/haridwar",
      image: "/northindia/haridwar.png",
    },
    {
      name: "ladakh",
      link: "/destinations/north-india/ladakh",
      image: "/northindia/ladakh.png",
    },
    {
      name: "rishikesh",
      link: "/destinations/north-india/rishikesh",
      image: "/northindia/rishikesh.png",
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
        title="North India Tour Packages"
        content="The Himalayas. The Desert Forts. The Sacred Rivers. The Floating Gardens of Dal Lake. Coming Soon from Bangalore & Hyderabad.

North India is the part of India that rewrites scale. The Himalayas — the highest mountain range on earth, visible on clear days from cities 200 kilometres away — run along its northern edge. The Thar Desert fills the western boundary with dune systems and mediaeval forts. The Gangetic plain between them holds three of the oldest continuously inhabited cities in the world: Varanasi, where the ghats have been burning at the river's edge since the 11th century BCE; Mathura, where Krishna was born; and Agra, where a 17th-century emperor built his wife a tomb out of white marble that now receives more visitors than any other monument in India. Kashmir sits above all of it, in a valley above 1,600 metres, with its Dal Lake houseboats and the Mughal gardens and the apple orchards and the Pir Panjal mountains on three sides.

Swadeshi Traveller Community is building group tour packages to all of this — from Bangalore and Hyderabad, by overnight train, every Thursday and Friday, at the same price transparency and trip-captain standard as every South India package in the current portfolio. North India packages are in development. Leave your details below to be the first to know when they go live.
"
      />
      <section className="w-full relative left-1/2 right-1/2 -mx-[50vw] bg-brand/20 py-10 px-4 text-center mt-12">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-black">
            North India packages are coming. Be the first to know.
          </h2>

          <p className="mt-2 text-sm sm:text-base text-black/80 max-w-3xl">
            Leave your name, mobile number, and which destination you're most
            excited about. We'll notify you the moment it goes live.
          </p>

          <a
            href="#notify-form"
            className="mt-6 w-full max-w-3xl bg-brand hover:bg-brand/80 transition-all duration-300 text-black font-medium py-3 px-6 flex items-center justify-center"
          >
            Notify Me When North India Launches →
          </a>

          <p className="mt-4 text-sm text-black/80 flex items-center gap-2 flex-wrap justify-center">
            <span>📞 Or call us: +91 8886051052</span>
            <span>•</span>
            <span>@swadeshi_traveller_bangalore</span>
          </p>
        </div>
      </section>

      {/* Title */}
      <CuratedCategories data={trips} />
      <p className="w-[85%] mx-auto text-start  font-bold text-3xl text-brand mt-20">
        Where We're Going — North India Destinations in Development
      </p>
      <p className="w-[85%] mx-auto text-start font-bold text-xl text-brand/80 mt-2">
        These are the destinations STC is building packages for. Tell us which
        one you want most — it helps us prioritise
      </p>
      <PackageCarousel
        items={himalayas}
        title="The Himalayas — Adventure & Nature"
      />
      <PackageCarousel
        items={rajasthan}
        title="Rajasthan — Forts, Palaces & the Desert"
      />
      <PackageCarousel items={northindia} title="Spiritual North India" />
      <PackageCarousel items={kashmir} title="From Hyderabad" />
      <WhyChooseUs
        badge="WHAT TO EXPECT FROM STC NORTH INDIA PACKAGES"
        heading="The Same Standard As Every South India Trip — Applied to the Himalayas"
        description="Every STC North India package will follow the same principles as the South India portfolio: weekly Thursday and Friday departures, overnight train or flight from Bangalore and Hyderabad, train tickets included in the package price, a dedicated trip captain throughout, multiple pickup points across your city, and fully confirmed itineraries with zero hidden costs. The destinations are different. The commitment is the same."
        features={features}
      />
      {/* Reviews */}
      <div id="notify-form">
        <ContactForm />
      </div>
      <FAQ faqs={faqs} />
      <section className="w-full bg-brand/20 text-white py-16 flex flex-col items-center">
        <div className="w-full max-w-6xl px-6">
          {/* Title */}
          <h2 className="text-xl md:text-2xl font-semibold text-brand mb-4">
            The Himalayas Are Being Planned. South India Is Live Right Now.
          </h2>

          {/* Description */}
          <p className="text-sm md:text-base text-black leading-relaxed max-w-4xl">
            Leave your details above and we will notify you when the first North
            India package goes live. In the meantime, STC's South India
            portfolio covers 40+ destinations every weekend from ₹3,999. Every
            Thursday and Friday. From Bangalore and Hyderabad.
          </p>

          {/* Divider */}
          <div className="w-full border-t border-gray-700 my-12" />

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-6">
            <Link
              href="/destinations/north-india"
              className="w-full md:w-1/2 text-center bg-brand text-black font-medium py-3 px-6 hover:opacity-90 transition"
            >
              Notify Me for North India →
            </Link>

            <Link
              href="/destinations/south-india"
              className="w-full md:w-1/2 text-center bg-brand text-black font-medium py-3 px-6 hover:opacity-90 transition"
            >
              View South India Packages →
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
    </div>
  );
}
