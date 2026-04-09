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
    question: "What is Tripper Trails?",
    answer:
      "Tripper Trails is a backpacking community which provides end-to-end travel and tour services in India and abroad. With a focus on community trips, we encourage all kinds of travellers including solo, groups or couples wherein the travel itineraries are catered to your preferences and needs.",
  },
  {
    question:
      "How is Tripper Trails different from other online travel portals?",
    answer:
      "At Tripper Trails, we practice what we preach. We are a travel backpacking community with a focus on creating experiences for people which they will remember for a lifetime. Since our operations are conducted in-house, there are no third parties involved which helps us to avoid unnecessary delays or any such hassle.",
  },
  {
    question: "How do I book a trip through Tripper Trails?",
    answer:
      "Booking a trip through Tripper Trails is as easy as it gets. Decide where you want to go, drop us a query either on our website or on our social media handle and we will get back to you with all details. Our team will guide you on how to proceed.",
  },
  {
    question: "Can I change the date after booking?",
    answer:
      "Yes, you can change the date of your booking until 15 days prior to the date of departure of your trip.",
  },
  {
    question: "What are community trips?",
    answer:
      "Community trips are where you travel with a group of people you may or may not know to form a community. You meet like-minded people, participate in activities, and experience a destination together.",
  },
  {
    question: "Are community trips safe for solo female travellers?",
    answer:
      "Safety of our travellers is our topmost priority. We ensure solo female travellers feel safe and comfortable. Any concerns are immediately addressed by the trip captain and our ground team.",
  },
  {
    question: "I am a solo traveller. Which trip would suit me?",
    answer:
      "Any of our community trips are ideal for solo travellers. They are budget-friendly and a great way to meet fellow travel enthusiasts.",
  },
  {
    question: "Can I create my trip plan using my own destination?",
    answer:
      "Absolutely! You can customise trips across South India, Ladakh, Spiti, Himachal Pradesh, and international destinations like Thailand and Bhutan with the help of our travel experts.",
  },
  {
    question: "Does the mentioned price include the flight ticket fee?",
    answer:
      "No, domestic trips do not include flight tickets. International trip packages will specify if airfare is included.",
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
