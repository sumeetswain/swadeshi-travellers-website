"use client";

export default function HorizontalImageCarousel({
  title,
  items,
  cardWidth = 350,
  cardHeight = 350,
  containerWidth = "85%",
  gap = 40,
}) {
  return (
    <section className="w-full py-10 flex flex-col items-center">
      {/* Title */}
      {title && (
        <h2 className="w-full max-w-[85%] text-xl font-semibold text-green-600 mb-6">
          {title}
        </h2>
      )}

      {/* Centered Carousel Container */}
      <div className="overflow-x-auto" style={{ width: containerWidth }}>
        <div className="flex min-w-max pb-4" style={{ gap: `${gap}px` }}>
          {items.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="group flex-shrink-0"
              style={{ width: cardWidth }}
            >
              {/* Card */}
              <div
                className="relative rounded-2xl overflow-hidden"
                style={{ height: cardHeight }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Top Label */}

                {/* Bottom Badge */}
                {item.badge && (
                  <div className="absolute bottom-0 left-0 right-0 bg-green-500 text-white text-center py-2 font-medium">
                    {item.badge}
                  </div>
                )}
              </div>

              {/* Bottom Title */}
              <p className="mt-3 text-sm text-gray-900 leading-snug">
                {item.title}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
