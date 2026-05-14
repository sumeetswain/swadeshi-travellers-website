"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQProps = {
  faqs?: FAQItem[];
  title?: string;
};
const defaultFaqs = [
  {
    question: "Do you offer packages from both Bangalore and Hyderabad?",
    answer:
      "Yes — STC runs group tour packages every Thursday and Friday from both cities. Bangalore packages depart from Marathahalli, Silk Board, and Majestic by bus, or from KSR Bengaluru Railway Station by train. Hyderabad packages depart from Nampally, Kacheguda, Begumpet, and Lingampally by train. Both cities have separate package portfolios — check the relevant section on this page or call us at +91 8886051052.",
  },
  {
    question: "Are train tickets included in the package price?",
    answer:
      "Yes — for all train-based packages from both cities, sleeper class non-AC train tickets both ways are included in the package price. You do not need to book separately. The only exception is the Bangalore bus packages (Ooty 2D, Coorg 2D, Wayanad 2D, Chikmagalur 2D, Gokarna 2D, Kochi+Alleppey 2D, Kerala 4D) which depart by bus — bus transport is included in those package prices.",
  },
  {
    question: "How do I confirm my booking?",
    answer:
      "Pay 50% advance to confirm your seat. The remaining 50% is due 1 day before departure. For bookings made within 3 days of departure, 100% payment is required upfront. Payment confirmation is shared digitally. Call +91 8886051052 or message @swadeshi_traveller_bangalore on Instagram to book.",
  },
  {
    question: "Is food included in the packages?",
    answer:
      "Most STC packages do not include food — entry tickets and meals are at your own expense unless specified. Exceptions: (1) The Wayanad 2-day bus package from Bangalore includes 2 breakfasts + 1 dinner. (2) The Gokarna + Dandeli 3-day package from Hyderabad includes all Dandeli Day 1 meals — breakfast, lunch, and dinner. (3) The Kerala 4-Day Circuit from Bangalore includes 4 breakfasts. Any package with meals included has this clearly stated in the inclusions.",
  },
  {
    question: "What is the minimum group size?",
    answer:
      " A minimum of 10 participants is required to run any STC trip. If the minimum is not met, STC may reschedule the trip or offer an alternative plan. Most departures fill well above the minimum — especially on peak weekends (Oct–Feb, long weekends, Diwali, Christmas, New Year).",
  },
  {
    question: "What is the cancellation policy?",
    answer:
      "No refund on the initial booking amount once paid. If you cancel 7 days before departure: 50% of the trip cost is charged. 3–6 days before: 75% charged. Within 3 days: 100% charged (no refund). In case of natural disasters, government restrictions, or unavoidable situations, STC will arrange alternate activities but no monetary refund will be provided.",
  },
  {
    question: "Are water sports included in the Gokarna + Dandeli package?",
    answer:
      " Yes — the Gokarna + Dandeli package from Hyderabad (₹4,999) includes all Dandeli water sports: kayaking, zorbing, boating, and river swimming. Indoor games (archery, dart, badminton, rain dance, campfire) are also included on Day 1. River rafting and zipline are available at extra cost. This is the only STC package with water sports fully confirmed in the inclusions.",
  },
  {
    question: "Is STC safe? What are your credentials?",
    answer:
      "STC is MSME Certified, ATOAI (Adventure Tour Operators Association of India) Certified, and recognised by StartupIndia. We hold a 4.8 rating on Google from 200+ verified reviews. Every trip has a trained trip captain throughout. First aid is included in most packages. For adventure packages (rafting, trekking, water sports), activities are conducted by authorised operators at the site.",
  },
];
export default function FAQ({ faqs = [], title }: FAQProps) {
  const finalFaqs = faqs?.length ? faqs : defaultFaqs;
  const finalTitle = title || "Frequently Asked Questions";
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="font-inter w-full px-4 md:px-8 lg:px-16 py-16 bg-[#F9F9F9]">
      <div className="max-w-4xl mx-auto">
        {/* HEADER */}
        <div className="mb-12">
          <h2 className="text-[28px] md:text-[34px] font-medium text-black tracking-tight">
            {finalTitle}
          </h2>
        </div>

        {/* LIST */}
        <div>
          {finalFaqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="border-b border-black/10">
                {/* QUESTION */}
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between gap-6 py-6 text-left group"
                >
                  <span className="text-[15px] md:text-[16px] font-medium text-black leading-snug">
                    {faq.question}
                  </span>

                  {/* ICON */}
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="flex-shrink-0 text-black/70"
                  >
                    <ChevronDown size={18} strokeWidth={2} />
                  </motion.div>
                </button>

                {/* ANSWER */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.35,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="overflow-hidden"
                    >
                      <div className="pb-6 pr-10 text-[14px] md:text-[15px] text-black/60 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
