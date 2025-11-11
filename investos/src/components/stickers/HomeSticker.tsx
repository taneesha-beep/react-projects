import React from "react";

export const Wallet = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 64 64"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="64" height="64" rx="12" fill="#E0F2FE" />
    <path
      d="M14 22h36a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4H14a4 4 0 0 1-4-4V26a4 4 0 0 1 4-4z"
      fill="#38BDF8"
    />
    <rect x="40" y="28" width="10" height="8" rx="2" fill="#0EA5E9" />
    <circle cx="46" cy="32" r="1.5" fill="#fff" />
  </svg>
);

export const Plant = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 64 64"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="64" height="64" rx="12" fill="#DCFCE7" />
    <path
      d="M32 44V22c0-6 4-10 8-10s8 4 8 10v2c-4 0-8 3-8 6v16h-8z"
      fill="#22C55E"
    />
    <path
      d="M28 44V30c0-6-4-10-8-10s-8 4-8 10v2c4 0 8 3 8 6v6h8z"
      fill="#4ADE80"
    />
    <rect x="26" y="44" width="12" height="6" rx="2" fill="#166534" />
  </svg>
);
