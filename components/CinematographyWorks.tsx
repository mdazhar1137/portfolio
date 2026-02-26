"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const shots = [
    {
        title: "Neon Alley, Tokyo",
        caption: "Street cinematography — natural backlight, anamorphic lens",
        aspect: "16/9",
        gradient: "linear-gradient(160deg, #1a0a2e 0%, #0a0814 50%, #120820 100%)",
        accent: "#9c6ec8",
    },
    {
        title: "Portrait in Fog",
        caption: "Single-source soft light, 50mm 1.4 wide open",
        aspect: "3/4",
        gradient: "linear-gradient(160deg, #0a1020 0%, #060c1a 100%)",
        accent: "#6e9fc8",
    },
    {
        title: "Desert Horizon",
        caption: "Magic hour, stabilised gimbal, DJI RS3 · Canon R5",
        aspect: "21/9",
        gradient: "linear-gradient(160deg, #1a0e0a 0%, #0e0805 100%)",
        accent: "#c8a96e",
    },
    {
        title: "Studio Triptych",
        caption: "Controlled lighting setup — Arri SkyPanel + practicals",
        aspect: "16/9",
        gradient: "linear-gradient(160deg, #0a1a12 0%, #060e0a 100%)",
        accent: "#6ec8a9",
    },
];

export default function CinematographyWorks() {
    return (
        <section className="py-32 bg-[#0e0e0e]">
            <div className="max-w-7xl mx-auto px-6">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-16"
                >
                    <span className="text-[10px] tracking-[0.35em] uppercase text-[#9c6ec8] font-light">
                        03 — Camera
                    </span>
                    <h2 className="mt-3 text-4xl md:text-5xl font-black text-white tracking-tight leading-none">
                        Cinematography Works
                    </h2>
                    <p className="mt-4 text-white/40 max-w-lg text-sm leading-relaxed">
                        Light as language. Every frame composed to evoke feeling before
                        narrative.
                    </p>
                </motion.div>

                {/* Masonry-style gallery */}
                <div className="columns-1 md:columns-2 gap-5 space-y-5">
                    {shots.map((shot, i) => (
                        <ShotCard key={i} shot={shot} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ShotCard({
    shot,
    index,
}: {
    shot: (typeof shots)[0];
    index: number;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });
    const y = useTransform(scrollYProgress, [0, 1], [-20, 20]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{ scale: 1.01 }}
            className="group relative rounded-xl overflow-hidden cursor-pointer break-inside-avoid mb-5"
            style={{ border: "1px solid rgba(255,255,255,0.05)" }}
        >
            {/* Image placeholder with parallax */}
            <div style={{ aspectRatio: shot.aspect, overflow: "hidden" }}>
                <motion.div
                    style={{ y, height: "110%", width: "100%" }}
                    className="relative"
                >
                    <div
                        className="absolute inset-0"
                        style={{ background: shot.gradient }}
                    />
                    {/* Simulated film grain */}
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage:
                                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E\")",
                            mixBlendMode: "overlay",
                        }}
                    />
                    {/* Center icon */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-20">
                        <svg
                            width="40"
                            height="40"
                            viewBox="0 0 40 40"
                            fill={shot.accent}
                            opacity="0.6"
                        >
                            <circle cx="20" cy="20" r="10" fill="none" stroke={shot.accent} strokeWidth="1" />
                            <circle cx="20" cy="20" r="3" fill={shot.accent} />
                            <path d="M20 5v5M20 30v5M5 20h5M30 20h5" stroke={shot.accent} strokeWidth="1" strokeLinecap="round" />
                        </svg>
                    </div>
                </motion.div>
            </div>

            {/* Caption overlay */}
            <div
                className="absolute bottom-0 left-0 right-0 p-5"
                style={{
                    background:
                        "linear-gradient(to top, rgba(10,10,10,0.9) 0%, transparent 100%)",
                }}
            >
                <h3 className="text-sm font-semibold text-white mb-1">{shot.title}</h3>
                <p className="text-[10px] text-white/40 leading-relaxed">
                    {shot.caption}
                </p>
            </div>

            {/* Hover accent border */}
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none"
                style={{ border: `1px solid ${shot.accent}30` }}
            />
        </motion.div>
    );
}
