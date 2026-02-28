"use client";

import { useRef } from "react";
import Navbar from "@/components/Navbar";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import VideoEditingWorks from "@/components/VideoEditingWorks";
import UXDesignWorks from "@/components/UXDesignWorks";
import CinematographyWorks from "@/components/CinematographyWorks";
import AboutMe from "@/components/AboutMe";
import Projects from "@/components/Projects";

export default function Home() {
  const scrollyRef = useRef<HTMLDivElement>(null);

  return (
    <main className="bg-[#121212]">
      <Navbar />

      {/* ── Scrollytelling Hero ── */}
      <section id="home" ref={scrollyRef} className="relative">
        <ScrollyCanvas containerRef={scrollyRef} />
        <Overlay containerRef={scrollyRef} />
      </section>

      {/* ── Post-scroll sections ── */}
      <section id="works">
        <VideoEditingWorks />
      </section>

      <section id="ux">
        <UXDesignWorks />
      </section>

      <section id="cinematography">
        <CinematographyWorks />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="about">
        <AboutMe />
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-5 text-center text-sm text-white/30">
        <p>© Azhar. Built with story, design & motion.</p>
      </footer>
    </main>
  );
}
