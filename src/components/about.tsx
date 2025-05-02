"use client";

import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  useMotionTemplate,
} from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);

  // Scroll-based animation
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 0.2, 0.3, 0.5, 0.7, 0.8, 1],
    ["-100%", "-100%", "0%", "0%", "0%", "100%", "100%"]
  );
  const springX = useSpring(x, { stiffness: 100, damping: 30 });

  // Hover gradient animation logic
  const mouseX = useSpring(0, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 100 });

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const maskImage = useMotionTemplate`radial-gradient(240px at ${mouseX}px ${mouseY}px, white, transparent)`;
  const style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <section
      ref={ref}
      className="w-screen h-screen flex items-center justify-center snap-start"
    >
      <motion.div
        onMouseMove={onMouseMove}
        className="relative bg-zinc-800 text-white p-8 rounded-xl shadow-lg max-w-3xl w-[90%] overflow-hidden border border-zinc-600 hover:border-zinc-400/50 group"
        style={{ x: springX }}
      >
        {/* Hover Layers */}
        <div className="pointer-events-none">
          <div className="absolute inset-0 z-0 transition duration-1000 [mask-image:linear-gradient(black,transparent)]" />
          <motion.div
            className="absolute inset-0 z-10 bg-gradient-to-br via-zinc-100/10 transition duration-1000 group-hover:opacity-50"
            style={style}
          />
          <motion.div
            className="absolute inset-0 z-10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition duration-1000"
            style={style}
          />
        </div>

        {/* Actual Content */}
        <h2 className="text-3xl font-bold mb-4 relative z-20">About Me</h2>
        <p className="text-zinc-300 leading-relaxed relative z-20">
          I am a 3rd Year Computer Science student at Ateneo de Davao University, passionate about building full-stack apps and improving user experiences. I enjoy experimenting with creative frontend design and building clean, scalable code.
        </p>
      </motion.div>
    </section>
  );
}
