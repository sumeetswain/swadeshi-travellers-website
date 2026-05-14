"use client";

type CarouselItem = {
  href: string;
  image: string;
  title: string;
  price?: string;
  subtitle?: string;
  features?: string[];
};

type HorizontalImageCarouselProps = {
  title?: string;
  items: CarouselItem[];
  description?: string;
  cardWidth?: number;
  cardHeight?: number;
  containerWidth?: string;
  gap?: number;
};

export default function HorizontalImageCarousel({
  title,
  items,
  description = "",
  cardWidth = 350,
  cardHeight = 350,
  containerWidth = "85%",
  gap = 40,
}: HorizontalImageCarouselProps) {
  return (
    <section className="w-full py-10 flex flex-col items-center">
      {/* Title */}
      {title && (
        <h2 className="w-full max-w-[85%] text-xl font-semibold text-green-600 mb-6">
          {title}
        </h2>
      )}

      {description && (
        <p className="w-full max-w-[85%] text-base text-gray-600 mb-6">
          {description}
        </p>
      )}

      {/* Carousel */}
      <div className="overflow-x-auto" style={{ width: containerWidth }}>
        <div className="flex min-w-max pb-4" style={{ gap: `${gap}px` }}>
          {items.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="group flex-shrink-0"
              style={{ width: cardWidth }}
            >
              <div
                className="relative rounded-2xl overflow-hidden"
                style={{ height: cardHeight }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition duration-300" />

                <div className="absolute inset-0 flex flex-col justify-end p-4 text-white translate-y-6 group-hover:translate-y-0 transition duration-300">
                  <h3 className="text-lg font-semibold">{item.title}</h3>

                  {item.price && (
                    <p className="text-pink-300 font-bold text-xl mt-1">
                      {item.price}
                    </p>
                  )}

                  {item.subtitle && (
                    <p className="text-sm text-gray-200 mt-1">
                      {item.subtitle}
                    </p>
                  )}

                  {item.features && (
                    <ul className="mt-2 space-y-1 text-xs text-gray-200 opacity-0 group-hover:opacity-100 transition duration-300">
                      {item.features.map((f, i) => (
                        <li key={i}>✦ {f}</li>
                      ))}
                    </ul>
                  )}

                  <button className="mt-3 bg-green-400 text-black text-sm font-medium py-2 rounded-md opacity-0 group-hover:opacity-100 transition duration-300">
                    View Packages →
                  </button>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
