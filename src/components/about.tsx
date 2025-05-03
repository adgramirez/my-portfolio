"use client";

import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  // useMotionValue,
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
  const springX = useSpring(x, { stiffness: 2000, damping: 100 });

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
        className="relative bg-gradient-to-br from-zinc-800 via-zinc-700 to-zinc-900 text-white p-8 rounded-3xl shadow-2xl max-w-3xl w-[90%] overflow-hidden border border-transparent hover:border-zinc-400/60 group transition-all duration-500"
        style={{ x: springX }}
      >
        {/* Glowing background gradient overlay */}
        <div className="pointer-events-none">
          <div className="absolute inset-0 z-0 transition duration-1000 [mask-image:linear-gradient(black,transparent)]" />
          <motion.div
            className="absolute inset-0 z-10 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10 transition duration-1000 group-hover:opacity-60"
            style={style}
          />
          <motion.div
            className="absolute inset-0 z-10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition duration-1000"
            style={style}
          />
        </div>

        {/* Text Content */}
        <h2 className="text-4xl font-extrabold mb-6 text-white relative z-20 tracking-tight">
          About Me
        </h2>
        <div className="space-y-5 text-zinc-300 text-lg leading-relaxed relative z-20">
          <p>
            I am{" "}
            <span className="font-semibold bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 bg-clip-text text-transparent">
              Aaron Daniel Ramirez
            </span>
            , a{" "}
            <span className="font-semibold text-white drop-shadow-glow">
              curious
            </span>{" "}
            and{" "}
            <span className="font-semibold text-white drop-shadow-glow">
              driven
            </span>{" "}
            3rd Year Computer Science student who enjoys bringing ideas to life through code.
          </p>
          <p>
            While I started out working mostly behind the scenes with{" "}
            <span className="text-purple-400 font-medium drop-shadow-glow">
              backend logic
            </span>
            , I{"'"}ve recently been exploring the creative side of tech—building interfaces, designing user flows, and diving into{" "}
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent animate-text-glow font-semibold">
              mobile development
            </span>
            .
          </p>
          <p>
            I enjoy{" "}
            <span className="text-white font-semibold drop-shadow-glow">
              learning new tools
            </span>{" "}
            and finding better ways to make digital experiences smoother and more engaging.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
