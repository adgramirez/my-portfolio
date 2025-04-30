"use client";

// import Link from "next/link";
import React, { useEffect } from "react";
import Particles from "@/components/particles";
import { Navigation } from "@/components/nav";
import ProjectCard from "@/components/projectcard";
import Masonry from "react-masonry-css";
import About from "@/components/about";

// const navigation = [
//   { name: "Projects", href: "/projects" },
//   { name: "Contact", href: "/contact" },
// ];

const projects = [
  { title: "UniVents", description: "Short description here." },
  { title: "Tycheros Cafe and Bar", description: "Another cool project." },
  { title: "Project 3", description: "Yet another one." },
  { title: "Project 4", description: "And yet another one." },
  { title: "Project 5", description: "And yet another one." },
  { title: "Project 6", description: "And yet another one." },
];

const breakpointColumnsObj = {
  default: 3,
  1100: 2,
  700: 1,
};

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

      <section className="relative flex flex-col items-center justify-center w-screen min-h-screen snap-start">
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
            A BS Computer Science Student at the Ateneo de Davao University
          </h2>
        </div>
      </section>

      <section className="relative flex flex-col items-center justify-center w-screen min-h-screen snap-start">
        <About />
      </section>

      <section className="w-full max-w-5xl mx-auto h-auto bg-zinc-800 text-white flex flex-col justify-center overflow-hidden px-4 sm:px-8 py-16 rounded-lg my-16 sm:my-50 snap-start">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6">
          Projects
        </h2>

        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex w-auto gap-6"
          columnClassName="bg-clip-padding"
        >
          {projects.map((project, index) => (
            <div key={index} className="mt-6">
              <ProjectCard
                title={project.title}
                description={project.description}
              />
            </div>
          ))}
        </Masonry>
      </section>
    </div>
  );
}
