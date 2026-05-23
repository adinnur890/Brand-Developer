"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { stats } from "@/lib/data";
import { useLang } from "@/lib/langStore";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = value / 60;
    const timer = setInterval(() => {
      start += step;
      if (start >= value) { setCount(value); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 20);
    return () => clearInterval(timer);
  }, [inView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Stats() {
  const { lang } = useLang();

  return (
    <section className="py-20 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-950/20 via-transparent to-blue-950/20 pointer-events-none" />
      <div className="max-w-4xl mx-auto">
        <div className="glass rounded-3xl p-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {stats.map((s, i) => (
            <motion.div
              key={s.label.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <div className="text-5xl font-black gradient-text mb-2">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className="text-zinc-400 text-sm">{s.label[lang]}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
