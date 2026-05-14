"use client";

import { useState } from "react";

export default function ExpandableContentBox({
  title,
  content,
  buttonText = "Read More",
  maxHeight = "15rem",
}: {
  title: string;
  content: string;
  buttonText?: string;
  maxHeight?: string;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="w-full py-10 mt-8">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="bg-gray-100 rounded-xl p-6 md:p-8 shadow-sm">
          <h3 className="text-xl font-semibold mb-4">{title}</h3>

          <div
            className="text-gray-700 leading-relaxed whitespace-pre-line overflow-hidden"
            style={{ maxHeight: expanded ? "none" : maxHeight }}
          >
            {content}
          </div>

          <div className="mt-4 flex justify-center md:justify-end">
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-brand font-medium hover:underline"
            >
              {expanded ? "Show Less" : buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
