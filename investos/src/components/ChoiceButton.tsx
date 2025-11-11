import { motion } from "framer-motion";

export default function ChoiceButton({
  label,
  onClick,
  active,
}: {
  label: string;
  onClick: () => void;
  active?: boolean;
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`text-left p-4 rounded-xl border transition ${
        active
          ? "bg-white/30 border-white"
          : "bg-white/10 border-white/20 hover:bg-white/20"
      }`}
    >
      {label}
    </motion.button>
  );
}
