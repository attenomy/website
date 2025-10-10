// components/animated-text.tsx
"use client";

import { motion } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export function AnimatedText({ text, className = "" }: AnimatedTextProps) {
  return (
    <span className={className}>
      {text.split("").map((char, idx) => (
        <motion.span
          key={idx}
          className="inline-block"
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: idx * 0.04 }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}