/* eslint-disable @next/next/no-img-element */
import { API_ENDPOINT, API_KEY } from "@/api/api";
import BookingWidget from "@/components/BookingWidget";
import ContactForm from "@/components/ContactForm";
import FAQs from "@/components/FAQs";
import Reviews from "@/components/Reviews";
import WhyChooseUs from "@/components/WhyChooseUs";
import type { Metadata } from "next";
import { cache } from "react";

export const dynamic = "force-dynamic";

type TourPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

type TrekDay = {
  id: number;
  daysnumber?: number;
  name?: string;
  details?: string;
};

type TrekEvent = {
  cover_pic?: string;
  name?: string;
  number_of_nights?: number;
  number_of_days?: number;
  event_location?: string;
  addday?: TrekDay[];
  inclusions?: string;
  exclusions?: string;
  price_striked?: number | string;
  price?: number | string;
};

function getSlugTitle(slug: string) {
  if (!slug) {
    return "Tour";
  }

  return slug
    .split("-")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

const fetchTourEvent = cache(async (slug: string) => {
  const primaryEvent = await fetchTourEventWithKey(slug, API_KEY);

  if (primaryEvent) {
    return primaryEvent;
  }

  return fetchTourEventWithKey(
    slug,
    process.env.NEXT_PUBLIC_HYDERABAD_API_KEY,
  );
});

async function fetchTourEventWithKey(slug: string, apiKey?: string) {
  if (!apiKey) {
    return null;
  }

  const url = new URL(`${API_ENDPOINT}/event-details`);
  url.searchParams.set("slug", slug);
  url.searchParams.set("api_key", apiKey);

  try {
    const response = await fetch(url, { cache: "no-store" });

    if (!response.ok) {
      return null;
    }

    const data = (await response.json()) as Record<string, TrekEvent>;
    const events = Object.values(data || {});

    return events[0] ?? null;
  } catch (error) {
    console.error("Error fetching trek data:", error);
    return null;
  }
}

export async function generateMetadata({
  params,
}: TourPageProps): Promise<Metadata> {
  const { slug } = await params;
  const event = await fetchTourEvent(slug);
  const title = event?.name || getSlugTitle(slug);

  return {
    title,
    alternates: {
      canonical: `/tour/${slug}`,
    },
  };
}

export default async function TrekPage({ params }: TourPageProps) {
  const { slug } = await params;
  const event = await fetchTourEvent(slug);

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <BookingWidget eventSlug={slug} />

      <div className="w-full h-[45vh] relative overflow-hidden">
        <img
          src={event?.cover_pic}
          alt={event?.name ?? getSlugTitle(slug)}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-opacity-30 flex items-end justify-start p-6 md:p-10">
          <h1 className="text-white text-4xl md:text-6xl font-bold">
            {event?.name ?? getSlugTitle(slug)}
          </h1>
        </div>
      </div>

      <div className="max-w-8xl mx-auto px-4 md:px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        <div className="md:col-span-2 space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-5 bg-white rounded-2xl shadow">
            <div>
              <p className="text-gray-500 text-sm">Duration</p>
              <p className="font-semibold">
                {event?.number_of_nights}N / {event?.number_of_days}D
              </p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Difficulty</p>
              <p className="font-semibold">Moderate</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Pickup & Drop</p>
              <p className="font-semibold">{event?.event_location}</p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 pt-10">
            <section className="w-full lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Itinerary</h2>

              <div className="w-full space-y-3">
                {event?.addday?.map((day, index) => (
                  <details
                    key={day?.id ?? index}
                    className="border border-gray-200 rounded-lg px-4 bg-white"
                    open={index === 0}
                  >
                    <summary className="font-inter flex items-start gap-3 text-left py-4 cursor-pointer list-none">
                      <span className="shrink-0 bg-black text-white text-sm font-semibold px-3 py-1 rounded-full">
                        Day {day?.daysnumber}
                      </span>

                      <span className="flex-1 text-left text-base font-medium text-gray-900 wrap-break-word">
                        {day?.name}
                      </span>
                    </summary>

                    <div
                      className="pt-2 pb-4 text-sm text-gray-700 leading-relaxed"
                      dangerouslySetInnerHTML={{
                        __html: day?.details ?? "",
                      }}
                    />
                  </details>
                ))}
              </div>
            </section>

            <section className="w-full lg:w-1/2 space-y-6">
              <div className="space-y-3 text-base p-4 bg-white border rounded-xl">
                <h2 className="text-2xl font-bold">Inclusions</h2>
                <div
                  className="text-sm sm:text-base"
                  dangerouslySetInnerHTML={{
                    __html: event?.inclusions ?? "",
                  }}
                />
              </div>

              <div className="space-y-3 text-base p-4 bg-white border rounded-xl">
                <h2 className="text-2xl font-bold">Exclusions</h2>
                <div
                  className="text-sm sm:text-base"
                  dangerouslySetInnerHTML={{
                    __html: event?.exclusions ?? "",
                  }}
                />
              </div>
            </section>
          </div>
        </div>

        <div className="md:col-span-1">
          <div className="sticky top-4 space-y-5">
            <div className="bg-white p-6 rounded-2xl shadow text-center">
              <p className="text-gray-500 line-through">
                ₹ {event?.price_striked}
              </p>
              <p className="text-3xl font-bold text-green-600">
                ₹ {event?.price}
              </p>
              <p className="text-gray-500 text-sm">
                per person (Excl. taxes)
              </p>
              <button className="w-full mt-4 bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition">
                Book Now
              </button>
            </div>

            <ContactForm
              title="Request a Callback"
              compact
              className="max-w-none mx-0 my-0 p-6 rounded-2xl shadow"
            />
          </div>
        </div>
      </div>

      <Reviews />
      <WhyChooseUs />
      <FAQs />
    </div>
  );
}
