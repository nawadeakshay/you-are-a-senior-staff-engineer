"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.46, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
