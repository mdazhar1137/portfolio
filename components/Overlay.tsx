"use client";

import { RefObject } from "react";
import {
    motion,
    useScroll,
    useTransform,
    MotionValue,
} from "framer-motion";

interface TextSectionProps {
    scrollYProgress: MotionValue<number>;
    start: number;
    end: number;
    title: string;
    tagline: string;
    align: "left" | "center" | "right";
    parallaxDir?: 1 | -1;
}

function TextSection({
    scrollYProgress,
    start,
    end,
    title,
    tagline,
    align,
    parallaxDir = 1,
}: TextSectionProps) {
    const mid = (start + end) / 2;
    const fadePad = (end - start) * 0.28;

    const opacity = useTransform(
        scrollYProgress,
        [start, start + fadePad, mid, end - fadePad, end],
        [0, 1, 1, 1, 0]
    );

    const y = useTransform(
        scrollYProgress,
        [start, end],
        [parallaxDir * 40, parallaxDir * -40]
    );

    const alignClass =
        align === "left"
            ? "items-start text-left pl-10 md:pl-24"
            : align === "right"
                ? "items-end text-right pr-10 md:pr-24"
                : "items-center text-center";

    return (
        <motion.div
            style={{ opacity, y }}
            className={`absolute inset-0 z-10 flex flex-col justify-center pointer-events-none px-6 ${alignClass}`}
        >
            {/* Role title */}
            <h2
                className="font-black uppercase text-white leading-none tracking-tight"
                style={{
                    fontSize: "clamp(2rem, 6vw, 6rem)",
                    fontFamily: "var(--font-inter), Inter, sans-serif",
                    letterSpacing: "-0.02em",
                    textShadow: "0 4px 40px rgba(0,0,0,0.8)",
                }}
            >
                {title}
            </h2>

            {/* Golden accent line */}
            <div
                className={`h-px bg-gradient-to-r from-[#c8a96e] to-transparent mt-4 mb-4 ${align === "right"
                        ? "self-end w-24"
                        : align === "center"
                            ? "self-center w-24"
                            : "w-24"
                    }`}
            />

            {/* Tagline */}
            <p
                className="text-white/60 font-light max-w-md"
                style={{
                    fontSize: "clamp(0.85rem, 1.6vw, 1.1rem)",
                    letterSpacing: "0.04em",
                    lineHeight: 1.7,
                    textShadow: "0 2px 20px rgba(0,0,0,0.9)",
                }}
            >
                {tagline}
            </p>
        </motion.div>
    );
}

// ─── Main Overlay ─────────────────────────────────────────────────────────────
interface OverlayProps {
    containerRef: RefObject<HTMLDivElement | null>;
}

export default function Overlay({ containerRef }: OverlayProps) {
    const { scrollYProgress } = useScroll({ target: containerRef });

    const sections = [
        {
            start: 0,
            end: 0.28,
            align: "center" as const,
            title: "MOVIE\nEDITOR",
            tagline: "Cutting stories with rhythm, emotion, and cinematic flow.",
            parallaxDir: 1 as const,
        },
        {
            start: 0.22,
            end: 0.5,
            align: "left" as const,
            title: "GRAPHIC\nDESIGNER",
            tagline: "Designing visuals that speak before words do.",
            parallaxDir: -1 as const,
        },
        {
            start: 0.45,
            end: 0.72,
            align: "right" as const,
            title: "CINEMATOGRAPHER",
            tagline: "Framing light, movement, and mood into powerful imagery.",
            parallaxDir: 1 as const,
        },
        {
            start: 0.68,
            end: 1.0,
            align: "center" as const,
            title: "UX · AI · DI\nMOTION",
            tagline:
                "Bridging creativity, technology, and storytelling into immersive experiences.",
            parallaxDir: -1 as const,
        },
    ];

    return (
        /* Overlay sits absolutely over the 500vh scroll container */
        <div
            className="absolute inset-0 pointer-events-none"
            style={{ height: "500vh" }}
        >
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                {sections.map((s, i) => (
                    <TextSection
                        key={i}
                        scrollYProgress={scrollYProgress}
                        start={s.start}
                        end={s.end}
                        align={s.align}
                        title={s.title}
                        tagline={s.tagline}
                        parallaxDir={s.parallaxDir}
                    />
                ))}

                {/* Scroll indicator - fades out early */}
                <ScrollIndicator scrollYProgress={scrollYProgress} />
            </div>
        </div>
    );
}

function ScrollIndicator({
    scrollYProgress,
}: {
    scrollYProgress: MotionValue<number>;
}) {
    const opacity = useTransform(scrollYProgress, [0, 0.07], [1, 0]);
    return (
        <motion.div
            style={{ opacity }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
        >
            <span className="text-[9px] tracking-[0.35em] uppercase text-white/30">
                Scroll
            </span>
            <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent" />
        </motion.div>
    );
}
