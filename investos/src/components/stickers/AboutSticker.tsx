import React from "react";

export const Book = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 64 64"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="64" height="64" rx="12" fill="#FEF2F2" />
    <path d="M18 18h14v28H18a2 2 0 0 1-2-2V20a2 2 0 0 1 2-2z" fill="#F87171" />
    <path d="M32 18h14a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2H32V18z" fill="#DC2626" />
  </svg>
);

export const Lightbulb = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 64 64"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="64" height="64" rx="12" fill="#FEF3C7" />
    <circle cx="32" cy="28" r="12" fill="#FBBF24" />
    <rect x="28" y="40" width="8" height="8" rx="2" fill="#92400E" />
  </svg>
);
