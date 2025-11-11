import { motion } from "framer-motion";
import React from "react";

type Pos = { top?: string; right?: string; bottom?: string; left?: string };

export const Piggy = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 64 64"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
  >
    <rect width="64" height="64" rx="12" fill="#FBE8A6" />
    <path
      d="M18 38c-1.5 0-3 0-3-3s1.5-3 3-3h28c6 0 6 6 6 6v2H18z"
      fill="#F9C74F"
    />
    <path
      d="M44 26c0 3-5 5-11 5s-11-2-11-5 5-6 11-6 11 3 11 6z"
      fill="#FFB4A2"
    />
    <circle cx="46" cy="20" r="3" fill="#333" />
    <rect x="26" y="12" width="12" height="4" rx="1" fill="#ffffff66" />
  </svg>
);

export const Coins = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 64 64"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
  >
    <rect width="64" height="64" rx="12" fill="#E8F7EF" />
    <ellipse cx="32" cy="28" rx="16" ry="6" fill="#FFD966" />
    <ellipse cx="32" cy="36" rx="16" ry="6" fill="#F4C542" />
    <ellipse cx="32" cy="44" rx="16" ry="6" fill="#E8A600" />
    <text
      x="32"
      y="36"
      textAnchor="middle"
      dominantBaseline="middle"
      fontSize="10"
      fill="#7a4b00"
      fontWeight="700"
    >
      $
    </text>
  </svg>
);

export default function Sticker({
  children,
  size = 56,
  pos,
  float = true,
  ariaLabel,
}: {
  children: React.ReactNode;
  size?: number;
  pos?: Pos;
  float?: boolean;
  ariaLabel?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
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
