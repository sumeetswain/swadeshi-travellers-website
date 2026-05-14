import React from "react";
import { CalendarCheck, Ticket, Users, Map, Home } from "lucide-react";
type Feature = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

type SecretSauceProps = {
  features?: Feature[];
  layout?: number[];
  badge?: string;
  heading?: string;
  description?: string;
};
const buildRows = (data: Feature[], layout: number[]) => {
  const rows: Feature[][] = [];

  layout.reduce((index, count) => {
    rows.push(data.slice(index, index + count));
    return index + count;
  }, 0);

  return rows;
};

const defaultFeatures: Feature[] = [
  {
    title: "Book your seat",
    description: "Choose your package and date. Pay online or call us.",
    icon: <CalendarCheck className="w-8 h-8 text-gray-700" />,
  },
  {
    title: "We book your transport",
    description: "We handle all tickets from your city and back.",
    icon: <Ticket className="w-8 h-8 text-gray-700" />,
  },
  {
    title: "Meet your trip captain",
    description: "Your dedicated captain meets you at the departure point.",
    icon: <Users className="w-8 h-8 text-gray-700" />,
  },
  {
    title: "Travel, explore, relax",
    description: "Stay, transport, and experiences — all handled.",
    icon: <Map className="w-8 h-8 text-gray-700" />,
  },
  {
    title: "Return hassle-free",
    description: "Reach back comfortably and on time.",
    icon: <Home className="w-8 h-8 text-gray-700" />,
  },
];
const Card = ({ item }: { item: Feature }) => (
  <div
    className="
      bg-white rounded-2xl
      border border-gray-100
      shadow-[0_4px_20px_rgba(0,0,0,0.04)]
      hover:shadow-[0_6px_30px_rgba(0,0,0,0.08)]
      transition-all duration-300
      p-4 lg:p-5
      flex flex-col
      items-center lg:items-start
      text-center lg:text-left
    "
  >
    <div className="mb-3 flex items-center justify-center lg:justify-start w-full">
      {item.icon}
    </div>

    <h3 className="text-[15px] lg:text-[18px] xl:text-[20px] mb-2 font-semibold">
      {item.title}
    </h3>

    <p className="text-[11px] lg:text-[13px] xl:text-[14px] text-gray-600">
      {item.description}
    </p>
  </div>
);
const SecretSauce: React.FC<SecretSauceProps> = ({
  features,
  layout = [3, 2],
  badge = "Why choose STC?",
  heading = "How Every Trip from STC Works !",
  description = "",
}) => {
  const data = features ?? defaultFeatures;

  const rows = buildRows(data, layout);

  return (
    <section className="w-full bg-white py-12 lg:py-14 xl:py-16">
      {/* HEADER */}
      <div className="max-w-5xl mx-auto px-4 text-center mb-10 xl:mb-12">
        {badge && (
          <span className="inline-block px-4 py-1 mb-4 text-md rounded-full bg-brand text-white">
            {badge}
          </span>
        )}

        {heading && (
          <h2 className="text-3xl md:text-5xl font-semibold">{heading}</h2>
        )}
        {description && (
          <p className="text-lg md:text-lg font-normal mt-5">{description}</p>
        )}
      </div>

      {/* ROWS */}
      <div className="max-w-full lg:max-w-[70%] mx-auto px-4 space-y-4 lg:space-y-5 xl:space-y-6">
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="flex justify-center gap-4 lg:gap-5 xl:gap-6 flex-wrap"
          >
            {row.map((item, index) => (
              <div key={index} className="w-full sm:w-[48%] lg:w-[30%]">
                <Card item={item} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SecretSauce;
