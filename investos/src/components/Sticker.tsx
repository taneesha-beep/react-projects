import { motion } from "framer-motion";
import React from "react";

type Position = {
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
};

interface StickerProps {
  children: React.ReactNode;
  size?: number;
  pos?: Position;
  float?: boolean;
  ariaLabel?: string;
}

/**
 * Sticker component
 * - Places decorative SVGs anywhere relative to their parent
 * - Supports float animation via Framer Motion
 * - Uses absolute positioning for flexible placement
 */
export default function Sticker({
  children,
  size = 60,
  pos,
  float = true,
  ariaLabel,
}: StickerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="pointer-events-none"
      style={{
        position: "absolute",
        width: size,
        height: size,
        ...pos,
        zIndex: 20,
      }}
      aria-hidden={!ariaLabel}
      role={ariaLabel ? "img" : undefined}
      aria-label={ariaLabel}
    >
      <motion.div
        animate={float ? { y: [0, -6, 0] } : undefined}
        transition={
          float
            ? { duration: 3.5, repeat: Infinity, ease: "easeInOut" }
            : undefined
        }
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
