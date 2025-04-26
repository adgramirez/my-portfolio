"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export const Navigation: React.FC = () => {
    const ref = useRef<HTMLElement>(null);
    const [isIntersecting, setIntersecting] = useState(true);

    useEffect(() => {
        if (!ref.current) return;
        const observer = new IntersectionObserver(([entry]) =>
            setIntersecting(entry.isIntersecting),
        );

        observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <header ref={ref}>
            <div
                className={`fixed inset-x-0 top-0 z-50 backdrop-blur duration-200 border-b ${
                    isIntersecting
                        ? "bg-zinc-900/0 border-transparent"
                        : "bg-zinc-900/500 border-zinc-800"
                }`}
            >
                <div className="container flex items-center justify-between p-6 mx-auto">
                    {/* Left Section */}
                    {/* <Link
                        href="/"
                        className="duration-200 text-zinc-300 hover:text-zinc-100 flex items-center"
                    >
                        <ArrowLeft className="w-6 h-6 mr-2" />
                        <span>Home</span>
                    </Link> */}

                    {/* Right Section */}
                    <div className="flex items-center gap-8 ml-auto">
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
                </div>
            </div>
        </header>
    );
};