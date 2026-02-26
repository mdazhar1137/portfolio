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
    <section className="bg-red-600 py-20 sm:py-28 lg:py-32">
      {/* 👆 RED BACKGROUND IS INTENTIONAL FOR DEBUG */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* DEBUG MARKER */}
        <h1 className="text-white text-4xl text-center mb-10">
          DEBUG: VIDEO EDITING WORKS
        </h1>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Video Editing Works
          </h2>
          <p className="mt-4 text-white/80 text-sm">
            Clean, responsive, centered grid test.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="rounded-xl overflow-hidden bg-black/80 border border-white/10"
            >
              {/* Thumbnail */}
              <div className="aspect-video bg-neutral-900 flex items-center justify-center text-white/40 text-sm">
                16:9 Thumbnail
              </div>

              {/* Info */}
              <div className="p-4">
                <h3 className="text-white font-semibold text-sm">
                  {video.title}
                </h3>
                <p className="text-white/50 text-xs mt-1">
                  {video.client}
                </p>
                <p className="text-white/40 text-xs mt-2">
                  {video.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}