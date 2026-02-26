"use client";

import { motion } from "framer-motion";

const videos = [
  {
    title: "Luxury Brand Film",
    client: "Automotive Campaign",
    duration: "3:24",
    year: "2024",
    role: "Editor · Colorist",
  },
  {
    title: "Documentary — Voices Unheard",
    client: "Independent",
    duration: "18:47",
    year: "2023",
    role: "Lead Editor",
  },
  {
    title: "Festival Opener Reel",
    client: "Film Festival",
    duration: "2:10",
    year: "2024",
    role: "Editor · Motion Design",
  },
  {
    title: "Corporate Series — S1",
    client: "Tech Fortune 500",
    duration: "5×6:00",
    year: "2023",
    role: "Editor · DI",
  },
  {
    title: "Music Video — Horizon",
    client: "Independent Artist",
    duration: "4:12",
    year: "2022",
    role: "Director · Editor",
  },
  {
    title: "Sports Brand Anthem",
    client: "Sports Brand",
    duration: "1:30",
    year: "2024",
    role: "Editor · Sound Design",
  },
];

export default function VideoEditingWorks() {
  return (
    <section className="w-full bg-[#0e0e0e] py-24">
      <div className="w-full">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 sm:mb-16 lg:mb-20 text-center max-w-3xl mx-auto"
        >
          <span className="text-[10px] tracking-[0.35em] uppercase text-[#c8a96e]">
            01 — Editing
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black text-white">
            Video Editing Works
          </h2>
          <p className="mt-4 text-white/40 text-sm max-w-lg mx-auto">
            Story-driven edits that combine technical precision with emotional resonance.
          </p>
        </motion.div>

    {/* Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 px-5 lg:px-6">
          {videos.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-xl overflow-hidden bg-white/[0.03] border border-white/[0.06]"
            >
              <div className="aspect-video bg-neutral-900 flex items-center justify-center text-white/30 text-xs">
                16:9 Thumbnail
              </div>

              <div className="p-4 sm:p-5">
                <h3 className="text-sm sm:text-base font-semibold text-white">
                  {v.title}
                </h3>
                <p className="text-xs text-white/40">{v.client}</p>
                <span className="inline-block mt-3 text-[9px] tracking-widest uppercase text-[#c8a96e]">
                  {v.role}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}