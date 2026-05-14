import Image from "next/image";
import { ReactNode } from "react";

type DealItem = {
  icon: string | ReactNode;
  title: string;
  description: string;
};

type DealsSectionProps = {
  sectionTitle: string;
  deals: DealItem[];
};

export default function DealsSection({
  sectionTitle,
  deals,
}: DealsSectionProps) {
  return (
    <section className="w-full bg-brand/10 py-10 px-4 lg:px-16">
      {/* SECTION TITLE */}
      <h2 className="text-center text-lg lg:text-xl font-semibold mb-10">
        {sectionTitle}
      </h2>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {deals.map((item, index) => (
          <div key={index} className="flex items-start gap-4">
            {/* ICON */}
            {typeof item.icon === "string" ? (
              <Image
                src={item.icon}
                alt={item.title}
                width={40}
                height={40}
                className="object-contain mt-1"
              />
            ) : (
              <div className="w-10 h-10 flex items-center justify-center mt-1 [&>svg]:w-8 [&>svg]:h-8">
                {item.icon}
              </div>
            )}

            {/* TEXT */}
            <div className="flex flex-col">
              <h3 className="font-semibold text-base text-gray-900">
                {item.title}
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* FOOTNOTE */}
      <div className="text-right text-xs mt-6 text-gray-700">
        T&amp;C applied*
      </div>
    </section>
  );
}
