"use client";

import { motion } from "framer-motion";

type Props = {
  variant?: "blue" | "purple" | "cyan";
};

export default function BackgroundGlow({ variant = "blue" }: Props) {
  const colors = {
    blue: "bg-blue-600/30",
    purple: "bg-purple-600/30",
    cyan: "bg-cyan-500/25",
  };

  return (
    <motion.div
      className="absolute inset-0 pointer-events-none"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true }}
    >
      <div
        className={`absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full blur-[160px] ${colors[variant]}`}
      />
      <div
        className={`absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full blur-[160px] ${colors[variant]}`}
      />
    </motion.div>
  );
}
