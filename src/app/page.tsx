"use client";

// import Link from "next/link";
import React, { useEffect } from "react";
import Particles from "@/components/particles";
import { Navigation } from "@/components/nav";
import ProjectCard from "@/components/projectcard";
// import Masonry from "react-masonry-css";
import About from "@/components/about";
import { motion } from "framer-motion";

// const navigation = [
//   { name: "Projects", href: "/projects" },
//   { name: "Contact", href: "/contact" },
// ];

const laptopProjects = [
  { 
    title: "ITC", 
    description: "Yet another one.", 
    imageUrls: [
      "./assets/ITC.png"
    ] 
  },
  { 
    title: "Valorant", 
    description: "Yet another one.", 
    imageUrls: [
      "./assets/Valorant.png"
    ] 
  },
];

const mobileProjects = [
  {
    title: "UniVents",
    description: "Short description here.",
    imageUrls: [
      "./assets/UniVents.png",
      "./assets/UniVents2.png",
      "./assets/UniVents3.png",
    ],
  },
  {
    title: "Tycheros Cafe and Bar",
    description: "Another cool project.",
    imageUrls: [
      "./assets/Tycheros.png",
      //"./assets/Tycheros2.png",
    ],
  },
];

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
    // Add the 'no-scroll' class to disable scrolling
    document.body.classList.add("no-scroll");

    // After 3 seconds, remove the 'no-scroll' class to enable scrolling
    const timer = setTimeout(() => {
      document.body.classList.remove("no-scroll");
    }, 3000);

    // Cleanup the timer when the component is unmounted
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen overflow-x-hidden overflow-y-auto bg-gradient-to-tl from-black via-zinc-600/20 to-black snap-y snap-mandatory">
      <Navigation />

      <section id = "home" className="relative flex flex-col items-center justify-center w-screen min-h-screen snap-start">
        <div className="text-center animate-fade-in">
          <h2 className="mt-4 text-sm sm:text-base md:text-lg text-zinc-500 animate-fade-in">
            Hi! I am
          </h2>
        </div>

        <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 mt-0 p-0" />
        <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={100} />

        <h1 className="px-0.5 z-10 font-bold text-4xl sm:text-6xl md:text-9xl text-transparent bg-white bg-clip-text cursor-default text-edge-outline animate-title font-display whitespace-nowrap">
          AARON
        </h1>

        <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 mt-0 p-0" />

        <div className="mb-16 text-center animate-fade-in overflow-hidden sm:overflow-visible">
          <h2 className="mx-20 mt-4 text-sm sm:text-base md:text-lg text-zinc-500 animate-fade-in">
            A 3rd Year Computer Science Student at Ateneo de Davao University
          </h2>
        </div>
      </section>

      <section id = "about" className="relative flex flex-col items-center justify-center w-screen min-h-screen snap-start">
      <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={100} />
        <About />
      </section>

      <section id = "about" className="relative flex flex-col items-center justify-center w-screen min-h-screen snap-start">
        <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={100} />
        <section id = "projects" className="w-full max-w-5xl mx-auto h-auto text-white flex flex-col justify-center overflow-hidden px-4 sm:px-8 py-16 rounded-lg my-16 sm:my-10 snap-start">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center my-6">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-[4fr_1fr] gap-8 w-full">
            {/* Left column: laptop projects */}
            <div className="flex flex-col gap-6">
              {laptopProjects.map((project, index) => (
                <motion.div
                  key={`laptop-${index}`}
                  initial={{ opacity: 0, y: -40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1,
                    delay: index * 0.2,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                >
                  <ProjectCard {...project} device="laptop" />
                </motion.div>
              ))}
            </div>

            {/* Right column: mobile projects */}
            <div className="flex flex-col items-center gap-12">
              {mobileProjects.map((project, index) => (
                <motion.div
                  key={`mobile-${index}`}
                  initial={{ opacity: 0, y: -40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1,
                    delay: index * 0.2,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                >
                  <ProjectCard {...project} device="mobile" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
