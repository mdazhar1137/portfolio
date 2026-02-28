"use client";

import { motion } from "framer-motion";

const videos = [
  {
    title: "Laila Moive",
    client: "Shine Screens",
    duration: "3:24",
    year: "2025",
    role: "Associate Editor",
    youtubeId: "FyhFBHpTh6Y",
  },
  {
    title: "Airfryer - Commercial",
    client: "SOLARA",
    duration: "18:47",
    year: "2026",
    role: "DOP · Editor · DI · SFX",
    youtubeId: "k9KmdB9pmAU",
  },
  {
    title: "PODCAST",
    client: "ACCHA TALKS",
    duration: "2:10",
    year: "2024",
    role: "Editor · Motion Design · Thumbnail · SEO",
    youtubeId: "UjleExNh810",
  },
  {
    title: "Nailu Nadi Cover Song",
    client: "Sumith Bunny",
    duration: "5×6:00",
    year: "2023",
    role: "Editor · DI · Title Design · Poster Design",
    youtubeId: "YE4UPMc_-tY",
  },
  {
    title: "Political Interviews",
    client: "Bhala Media",
    duration: "4:12",
    year: "2020 - Present",
    role: "Editor · Thumbnail Design",
    youtubeId: "1ehUf4NJ-Lo",
  },
  {
    title: "Sports Brand Anthem",
    client: "Sports Brand",
    duration: "1:30",
    year: "2024",
    role: "Editor · Sound Design",
    youtubeId: "RgKAFK5djSk",
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
          className="mb-12 sm:mb-16 lg:mb-20 text-center max-w-8xl mx-auto"
        >
          <span className="text-[10px] tracking-[0.35em] uppercase text-[#c8a96e]">
            01 — Shaping Stories
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black text-white">
            The Final Cut
          </h2>
          <p className="mt-4 text-white/40 text-sm max-w-8xl mx-auto">
            Story-driven edits that combine technical precision with emotional
            resonance.
          </p>
        </motion.div>

        {/* Grid with 20px side padding (exact DevTools match) */}
        <div
          style={{
            paddingLeft: "20px",
            paddingRight: "20px",
            paddingTop: "20px",
            paddingBottom: "20px",
          }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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
                <div className="aspect-video bg-neutral-900 overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${v.youtubeId}?rel=0`}
                    title={v.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>

                <div
                  className="space-y-1.5"
                  style={{ paddingLeft: "20px", paddingTop: "20px", paddingBottom: "20px" }}
                >
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
      </div>
    </section>
  );
}
