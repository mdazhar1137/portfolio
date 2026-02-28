"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const reels = [
    { title: "Urban Night Walk", youtubeId: "FyhFBHpTh6Y" },
    { title: "Brand Film Shot", youtubeId: "k9KmdB9pmAU" },
    { title: "Podcast Cinematic Cut", youtubeId: "UjleExNh810" },
    { title: "Music Cover Visual", youtubeId: "YE4UPMc_-tY" },
    { title: "Political Documentary", youtubeId: "1ehUf4NJ-Lo" },
    { title: "3D Lyrical Visual", youtubeId: "fNZmWCZCkKM" },
    { title: "Wedding Teaser", youtubeId: "dQw4w9WgXcQ" },
    { title: "Product Macro Shot", youtubeId: "OPf0YbXqDm0" },
    { title: "Travel Cinematic", youtubeId: "RgKAFK5djSk" },
    { title: "Portrait Reel", youtubeId: "l482T0yNkeo" },
    { title: "Street B-roll", youtubeId: "3tmd-ClpJxA" },
    { title: "Studio Lighting Test", youtubeId: "9bZkp7q19f0" },
];

export default function CinematographyWorks() {
    return (
        <section className="py-32 bg-[#0e0e0e] overflow-hidden">
            <div className="w-full">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-14 text-center max-w-6xl mx-auto"
                >
                    <span className="text-[10px] tracking-[0.35em] uppercase text-[#9c6ec8]">
                        03 — Camera
                    </span>
                    <h2 className="mt-3 text-4xl md:text-5xl font-black text-white">
                        Cinematography Reels
                    </h2>
                    <p className="mt-4 text-white/40 text-sm max-w-xl mx-auto">
                        A curated selection of visual storytelling, framing emotion through light,
                        movement, and composition.
                    </p>
                </motion.div>

                {/* Carousel */}
                <motion.div
                    className="flex gap-6 px-[20px] cursor-grab"
                    drag="x"
                    dragConstraints={{ left: -1200, right: 0 }}
                >
                    {reels.map((reel, i) => (
                        <ReelCard key={i} reel={reel} index={i} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

function ReelCard({
    reel,
    index,
}: {
    reel: { title: string; youtubeId: string };
    index: number;
}) {
    const [play, setPlay] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.6 }}
            className="relative min-w-[320px] md:min-w-[420px] rounded-xl overflow-hidden bg-black border border-white/[0.08]"
        >
            {/* 16:9 Container */}
            <div className="aspect-video relative overflow-hidden">
                {!play ? (
                    <button
                        onClick={() => setPlay(true)}
                        className="absolute inset-0 flex items-center justify-center group"
                    >
                        {/* Placeholder thumbnail */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#111] to-[#000]" />

                        {/* Play button */}
                        <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full border border-white/40 group-hover:scale-110 transition">
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="white"
                            >
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </div>
                    </button>
                ) : (
                    <iframe
                        className="w-full h-full"
                        src={`https://www.youtube.com/embed/${reel.youtubeId}?autoplay=1&rel=0`}
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                    />
                )}
            </div>

            {/* Caption */}
            <div className="p-4">
                <h3 className="text-sm font-semibold text-white">
                    {reel.title}
                </h3>
            </div>
        </motion.div>
    );
}