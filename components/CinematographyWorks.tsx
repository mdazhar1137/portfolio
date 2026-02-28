"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const reels = [
    { title: "Urban Night Walk", youtubeId: "ysEExM1EAM8" },
    { title: "Brand Film Shot", youtubeId: "k9KmdB9pmAU" },
    { title: "Podcast Cinematic Cut", youtubeId: "UjleExNh810" },
    { title: "Music Cover Visual", youtubeId: "YE4UPMc_-tY" },
    { title: "Political Documentary", youtubeId: "1ehUf4NJ-Lo" },
    { title: "3D Lyrical Visual", youtubeId: "fNZmWCZCkKM" },
    { title: "Wedding Teaser", youtubeId: "dQw4w9WgXcQ" },
    { title: "Product Macro Shot", youtubeId: "OPf0YbXqDm0" },
    { title: "Travel Cinematic", youtubeId: "RgKAFK5djSk" },
    { title: "Portrait Reel", youtubeId: "l482T0yNkeo" },
];

export default function CinematographyReels() {
    return (
        <section className="py-32 bg-[#0e0e0e] overflow-hidden">
            <div className="w-full">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-14 text-center max-w-8xl mx-auto"
                >
                    <span className="text-[10px] tracking-[0.35em] uppercase text-[#9c6ec8]">
                        03 — Camera, Edit, Design
                    </span>
                    <h2 className="mt-3 text-4xl md:text-5xl font-black text-white">
                        Recent Works
                    </h2>
                    <p className="mt-4 text-white/40 text-sm max-w-xl mx-auto">
                        Vertical visual storytelling — composed for motion, rhythm, and emotion.
                    </p>
                </motion.div>

                {/* Reels Carousel */}
                <motion.div
                    className="flex gap-6 px-[20px] cursor-grab"
                    drag="x"
                    dragConstraints={{ left: -1600, right: 0 }}
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.6 }}
            className="relative min-w-[240px] md:min-w-[280px] rounded-2xl overflow-hidden bg-black border border-white/[0.08]"
        >
            {/* 9:16 container */}
            <div className="relative w-full aspect-[9/16] overflow-hidden">
                {!play ? (
                    <button
                        onClick={() => setPlay(true)}
                        className="absolute inset-0 group"
                    >
                        {/* YouTube thumbnail */}
                        <img
                            src={`https://i.ytimg.com/vi/${reel.youtubeId}/hqdefault.jpg`}
                            alt={reel.title}
                            className="absolute inset-0 w-full h-full object-cover"
                        />

                        {/* Dark overlay */}
                        <div className="absolute inset-0 bg-black/40" />

                        {/* Play button */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-14 h-14 rounded-full border border-white/60 flex items-center justify-center group-hover:scale-110 transition">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </div>
                        </div>
                    </button>
                ) : (
                    <iframe
                        className="absolute inset-0 w-full h-full"
                        src={`https://www.youtube.com/embed/${reel.youtubeId}?autoplay=1&mute=1&playsinline=1&rel=0`}
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                    />
                )}
            </div>

            {/* Caption */}
            <div className="p-4">
                <h3 className="text-xs font-semibold text-white">
                    {reel.title}
                </h3>
            </div>
        </motion.div>
    );
}