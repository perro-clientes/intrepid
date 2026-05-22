"use client";

import { motion } from "motion/react";
import { type ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  onlyOpacity?: boolean;
}

export function AnimatedSection({ children, delay = 0, className, onlyOpacity = false }: AnimatedSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, ...(onlyOpacity ? {} : { y: 30 }) }}
      whileInView={{ opacity: 1, ...(onlyOpacity ? {} : { y: 0 }) }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeInOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
