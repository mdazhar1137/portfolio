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
    title: "Music Video — 'Horizon'",
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
    <section className="bg-[#0e0e0e] py-20 sm:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 sm:mb-16 lg:mb-20 flex flex-col items-center text-center max-w-3xl mx-auto"
        >
          <span className="text-[10px] tracking-[0.35em] uppercase text-[#c8a96e] font-light">
            01 — Editing
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-none">
            Video Editing Works
          </h2>
          <p className="mt-4 text-white/40 max-w-lg text-sm leading-relaxed">
            Story-driven edits that combine technical precision with emotional
            resonance. Every cut is intentional.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {videos.map((video, index) => (
            <VideoCard key={index} video={video} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}

function VideoCard({
  video,
  index,
}: {
  video: (typeof videos)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
      className="group relative w-full rounded-xl overflow-hidden cursor-pointer"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, #1a1a1a ${index * 8}%, #0a0a0a)`,
          }}
        />

        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.01) 2px, rgba(255,255,255,0.01) 4px)",
          }}
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-14 h-14 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: "rgba(200, 169, 110, 0.2)",
              border: "1px solid rgba(200, 169, 110, 0.4)",
              backdropFilter: "blur(8px)",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="#c8a96e">
              <path d="M5 3l9 5-9 5V3z" />
            </svg>
          </motion.div>
        </div>

        <span
          className="absolute bottom-3 right-3 text-[10px] font-mono text-white/60 px-2 py-0.5 rounded-sm"
          style={{ background: "rgba(0,0,0,0.6)" }}
        >
          {video.duration}
        </span>

        <span className="absolute top-3 left-3 text-[9px] tracking-widest text-white/40">
          {video.year}
        </span>
      </div>

      {/* Info */}
      <div className="p-4 sm:p-5">
        <h3 className="text-sm sm:text-base font-semibold text-white mb-1 tracking-tight">
          {video.title}
        </h3>
        <p className="text-[11px] text-white/35 mb-3">{video.client}</p>
        <span
          className="text-[9px] tracking-[0.2em] uppercase px-2.5 py-1 rounded-sm"
          style={{
            color: "#c8a96e",
            background: "rgba(200,169,110,0.1)",
            border: "1px solid rgba(200,169,110,0.2)",
          }}
        >
          {video.role}
        </span>
      </div>
    </motion.div>
  );
}