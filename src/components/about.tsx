"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);

  // Track scroll within this section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // Trigger animation throughout the scroll of the section
  });

  // Transform scroll progress (0 to 1) into X positions
  const x = useTransform(scrollYProgress, [0, 0.2, 0.3, 0.5, 0.7, 0.8, 1], ["-100%", "-100%", "0%", "0%", "0%", "100%", "100%"]);
  const springX = useSpring(x, { stiffness: 100, damping: 30 });

  return (
    <section ref={ref} className="w-screen h-screen flex items-center justify-center snap-start">
      <motion.div
        className="bg-zinc-800 text-white p-8 rounded-xl shadow-lg max-w-3xl w-[90%]"
        style={{ x: springX }}
      >
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-zinc-300 leading-relaxed">
          I am a BS Computer Science student at Ateneo de Davao University, passionate about building full-stack apps and improving user experiences. I enjoy experimenting with creative frontend design and building clean, scalable code.
        </p>
      </motion.div>
    </section>
  );
}
