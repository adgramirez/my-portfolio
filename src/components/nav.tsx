"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export const Navigation: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const [isIntersecting, setIntersecting] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <header ref={ref}>
      <div
        className={`animate-fade-in fixed inset-x-0 top-0 z-50 backdrop-blur duration-200 border-b ${
          isIntersecting
            ? "bg-zinc-900/0 border-transparent"
            : "bg-zinc-900/500 border-zinc-800"
        }`}
      >
        <div className="container flex items-center justify-between p-6 mx-auto">
          {/* Navigation Links (Desktop) */}
          <div className="hidden lg:flex items-center gap-8 ml-auto">
            <Link
              href="/about"
              className="duration-200 text-zinc-400 hover:text-zinc-100"
            >
              About
            </Link>
            <Link
              href="/projects"
              className="duration-200 text-zinc-400 hover:text-zinc-100"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="duration-200 text-zinc-400 hover:text-zinc-100"
            >
              Contact
            </Link>
            <Link
              href="/resume"
              className="px-4 py-2 text-white bg-blue-600 rounded-md shadow-md hover:bg-blue-700 duration-200"
            >
              Resume
            </Link>
          </div>

          {/* Hamburger Icon for Small Screens */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-zinc-400 hover:text-zinc-100 ml-auto"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Sidebar for Mobile View */}
      <div
        className={`fixed top-2 h-auto right-0 z-50 w-64 bg-zinc-900 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 lg:hidden`}
      >
        <div className="flex flex-col p-6 space-y-6">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="self-end text-zinc-400 hover:text-zinc-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <Link
            href="/about"
            className="duration-200 text-zinc-400 hover:text-zinc-100"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/projects"
            className="duration-200 text-zinc-400 hover:text-zinc-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="duration-200 text-zinc-400 hover:text-zinc-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          <Link
            href="/resume"
            className="px-4 py-2 text-white bg-blue-600 rounded-md shadow-md hover:bg-blue-700 duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            Resume
          </Link>
        </div>
      </div>

      {/* Overlay for Sidebar */}
      {isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(false)}
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
        ></div>
      )}
    </header>
  );
};