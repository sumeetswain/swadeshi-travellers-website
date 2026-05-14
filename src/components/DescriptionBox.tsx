"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface DescriptionBoxProps {
  title: string;
  content: string | React.ReactNode;
}

const DescriptionBox = ({ title, content }: DescriptionBoxProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="flex justify-center">
      <div className="w-full lg:w-[85%] mx-3 mt-10">
        <div className="p-5 rounded-xl border border-gray-200 bg-white">
          {/* Title */}
          <h2 className="text-lg lg:text-2xl font-medium mb-3">{title}</h2>

          {/* Content */}
          <div className="relative">
            <motion.div
              initial={false}
              animate={{
                height: expanded ? "auto" : "6em", // control collapsed height
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="text-gray-600 text-sm md:text-base leading-relaxed overflow-hidden"
            >
              <div className={!expanded ? "line-clamp-4 md:line-clamp-3" : ""}>
                {typeof content === "string" ? (
                  <div dangerouslySetInnerHTML={{ __html: content }} />
                ) : (
                  content
                )}
              </div>
            </motion.div>
          </div>

          {/* Button */}
          <div className="mt-3 flex justify-end">
            <button
              onClick={() => setExpanded((prev) => !prev)}
              className="text-sm font-medium text-brand hover:underline"
            >
              {expanded ? "Show Less" : "Read More"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DescriptionBox;
