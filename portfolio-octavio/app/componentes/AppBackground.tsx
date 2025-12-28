"use client";

import { motion } from "framer-motion";

export default function AppBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute -top-64 -left-64 w-[900px] h-[900px] rounded-full bg-blue-600/25 blur-[200px]"
        animate={{ x: [0, 80, 0], y: [0, 40, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
      />

      <motion.div
        className="absolute top-1/3 right-[-300px] w-[800px] h-[800px] rounded-full bg-purple-600/25 blur-[200px]"
        animate={{ x: [0, -60, 0], y: [0, -40, 0] }}
        transition={{ duration: 25, repeat: Infinity }}
      />

      <motion.div
        className="absolute bottom-[-300px] left-1/3 w-[700px] h-[700px] rounded-full bg-cyan-500/20 blur-[200px]"
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 22, repeat: Infinity }}
      />
    </div>
  );
}