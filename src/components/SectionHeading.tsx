"use client";
import { motion } from "framer-motion";

type SectionHeadingProps = {
  badge: string;
  titleFirst: string;
  titleAccent: string;
  description?: string;
  className?: string;
};

export default function SectionHeading({ badge, titleFirst, titleAccent, description, className = "" }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`max-w-3xl mx-auto text-center mb-12 ${className}`}
    >
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs uppercase tracking-[0.3em] text-purple-200 border border-purple-500/20 mb-4">
        {badge}
      </div>
      <h2 className="text-4xl md:text-5xl font-black leading-tight">
        {titleFirst} <span className="gradient-text">{titleAccent}</span>
      </h2>
      {description ? <p className="mt-4 text-zinc-400 text-sm md:text-base leading-relaxed">{description}</p> : null}
    </motion.div>
  );
}
