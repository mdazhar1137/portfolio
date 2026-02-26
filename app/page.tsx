"use client";

import { useRef } from "react";

import Navbar from "@/components/Navbar";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";

import VideoEditingWorks from "@/components/VideoEditingWorks";
import UXDesignWorks from "@/components/UXDesignWorks";
import CinematographyWorks from "@/components/CinematographyWorks";
import Projects from "@/components/Projects";
import AboutMe from "@/components/AboutMe";

export default function Home() {
  const scrollyRef = useRef<HTMLDivElement>(null);

  return (
    <main className="bg-[#121212] w-full overflow-x-hidden">
      {/* ───────────────── NAVBAR ───────────────── */}
      <Navbar />

      {/* ───────────────── SCROLLY HERO (ISOLATED) ───────────────── */}
      <section
        id="home"
        ref={scrollyRef}
        className="relative w-full min-h-screen overflow-hidden"
      >
        <ScrollyCanvas containerRef={scrollyRef} />
        <Overlay containerRef={scrollyRef} />
      </section>

      {/* ───────────────── RESET LAYOUT FLOW ───────────────── */}
      {/* EVERYTHING BELOW IS NORMAL DOCUMENT FLOW */}
      <div className="relative w-full flex flex-col items-center overflow-hidden">

        <section id="works" className="w-full flex justify-center">
          <VideoEditingWorks />
        </section>

        <section id="ux" className="w-full flex justify-center">
          <UXDesignWorks />
        </section>

        <section id="cinematography" className="w-full flex justify-center">
          <CinematographyWorks />
        </section>

        <section id="projects" className="w-full flex justify-center">
          <Projects />
        </section>

        <section id="about" className="w-full flex justify-center">
          <AboutMe />
        </section>

        {/* ───────────────── FOOTER ───────────────── */}
        <footer className="w-full border-t border-white/5 py-10 text-center text-sm text-white/30">
          <p>© 2024 — Crafted with intention &amp; cinematic precision</p>
        </footer>
      </div>
    </main>
  );
}