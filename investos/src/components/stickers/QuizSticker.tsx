import React from "react";

export const Compass = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 64 64"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="64" height="64" rx="12" fill="#F3E8FF" />
    <circle cx="32" cy="32" r="20" fill="#A855F7" />
    <polygon points="32,16 38,32 32,48 26,32" fill="#E879F9" />
    <circle cx="32" cy="32" r="3" fill="#fff" />
  </svg>
);

export const Checklist = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 64 64"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="64" height="64" rx="12" fill="#FEF9C3" />
    <rect x="16" y="16" width="32" height="32" rx="3" fill="#FACC15" />
    <path
      d="M22 28l6 6 10-10"
      stroke="#fff"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
