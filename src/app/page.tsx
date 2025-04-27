import Link from "next/link";
import React from "react";
import Particles from "@/components/particles";
import { Navigation } from "@/components/nav"; // Import the Navigation component

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen overflow-auto bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <Navigation />
      <div className="mt-50 hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <h1 className="py-3.5 px-0.5 z-10 font-bold text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text">
        AARON
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="mb-100 my-16 text-center animate-fade-in">
        <h2 className="text-sm text-zinc-500 sm:text-base md:text-lg">
          A BS Computer Science Student at the Ateneo de Davao University
        </h2>
      </div>

      <section className="w-full max-w-5xl mx-auto h-auto bg-zinc-800 text-white flex flex-col justify-center overflow-hidden px-4 sm:px-8 py-16 rounded-lg">
      <h2 className="text-3xl font-bold text-center mb-12 sm:text-4xl md:text-5xl">
        Projects
      </h2>
      <div className="relative flex flex-col items-start space-y-16 md:space-y-8 lg:space-y-4">
        <div className="self-start transform translate-x-0">
          <div className="p-4 sm:p-6 bg-zinc-700 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2 sm:text-2xl">
              Project 1
            </h3>
            <p className="text-zinc-300 text-sm sm:text-base">
              Short description here.
            </p>
          </div>
        </div>
        <div className="self-center transform translate-x-4">
          <div className="p-4 sm:p-6 bg-zinc-700 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2 sm:text-2xl">
              Project 2
            </h3>
            <p className="text-zinc-300 text-sm sm:text-base">
              Short description here.
            </p>
          </div>
        </div>
        <div className="self-end transform translate-x-0">
          <div className="p-4 sm:p-6 bg-zinc-700 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2 sm:text-2xl">
              Project 3
            </h3>
            <p className="text-zinc-300 text-sm sm:text-base">
              Short description here.
            </p>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}