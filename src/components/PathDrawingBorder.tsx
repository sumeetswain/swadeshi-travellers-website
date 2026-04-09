"use client";

import { motion, Variants } from "framer-motion";

const draw: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { type: "spring", duration: 0.6, bounce: 0 },
      opacity: { duration: 0.01 },
    },
  },
};

interface PathDrawingBorderProps {
  isHovered: boolean;
  borderRadius?: number;
  strokeColor?: string;
  strokeWidth?: number;
}

export default function PathDrawingBorder({
  isHovered,
  borderRadius = 8,
  strokeColor = "#22c55e", // green-500 to match existing hover effect
  strokeWidth = 3,
}: PathDrawingBorderProps) {
  // Use a viewBox for responsive scaling (using a base reference size)
  const viewBoxWidth = 1000;
  const viewBoxHeight = 910; // Approximate aspect ratio of the image containers
  // Scale border radius proportionally to viewBox
  const borderRadiusX = (borderRadius / 330) * viewBoxWidth;
  const borderRadiusY = (borderRadius / 300) * viewBoxHeight;

  // Calculate the path for a rounded rectangle
  // Starting from top-left, going clockwise
  const path = `
    M ${borderRadiusX} 0
    L ${viewBoxWidth - borderRadiusX} 0
    Q ${viewBoxWidth} 0, ${viewBoxWidth} ${borderRadiusY}
    L ${viewBoxWidth} ${viewBoxHeight - borderRadiusY}
    Q ${viewBoxWidth} ${viewBoxHeight}, ${
      viewBoxWidth - borderRadiusX
    } ${viewBoxHeight}
    L ${borderRadiusX} ${viewBoxHeight}
    Q 0 ${viewBoxHeight}, 0 ${viewBoxHeight - borderRadiusY}
    L 0 ${borderRadiusY}
    Q 0 0, ${borderRadiusX} 0
    Z
  `;

  // Calculate stroke width in viewBox units
  const strokeWidthViewBox = (strokeWidth / 110) * viewBoxWidth;
  // Offset the path outward by half the stroke width so the border appears outside
  const offset = strokeWidthViewBox / 2;

  // Adjusted path that's offset outward
  const pathOffset = `
    M ${borderRadiusX + offset} ${offset}
    L ${viewBoxWidth - borderRadiusX - offset} ${offset}
    Q ${viewBoxWidth - offset} ${offset}, ${viewBoxWidth - offset} ${
      borderRadiusY + offset
    }
    L ${viewBoxWidth - offset} ${viewBoxHeight - borderRadiusY - offset}
    Q ${viewBoxWidth - offset} ${viewBoxHeight - offset}, ${
      viewBoxWidth - borderRadiusX - offset
    } ${viewBoxHeight - offset}
    L ${borderRadiusX + offset} ${viewBoxHeight - offset}
    Q ${offset} ${viewBoxHeight - offset}, ${offset} ${
      viewBoxHeight - borderRadiusY - offset
    }
    L ${offset} ${borderRadiusY + offset}
    Q ${offset} ${offset}, ${borderRadiusX + offset} ${offset}
    Z
  `;

  return (
    <motion.svg
      viewBox={`${-offset} ${-offset} ${viewBoxWidth + offset * 2} ${
        viewBoxHeight + offset * 2
      }`}
      className="absolute inset-[-11px] pointer-events-none w-[calc(100%+22px)] h-[calc(100%+22px)]"
      preserveAspectRatio="none"
      initial="hidden"
      animate={isHovered ? "visible" : "hidden"}
    >
      <motion.path
        d={pathOffset}
        stroke={strokeColor}
        strokeWidth={strokeWidthViewBox}
        fill="transparent"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={draw}
      />
    </motion.svg>
  );
}
