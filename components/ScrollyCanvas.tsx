"use client";

import { useEffect, useRef, useCallback, RefObject } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

// ─── Config ──────────────────────────────────────────────────────────────────
const TOTAL_FRAMES = 290;
const FRAME_BASE = "/sequence/frame_";
const FRAME_SUFFIX = "_delay-0.047s.webp";

function getFramePath(index: number): string {
    const padded = String(index).padStart(3, "0");
    return `${FRAME_BASE}${padded}${FRAME_SUFFIX}`;
}

// ─── Component ───────────────────────────────────────────────────────────────
interface ScrollyCanvasProps {
    containerRef: RefObject<HTMLDivElement | null>;
}

export default function ScrollyCanvas({ containerRef }: ScrollyCanvasProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const framesRef = useRef<HTMLImageElement[]>([]);
    const currentFrameRef = useRef(0);
    const rafRef = useRef<number | null>(null);
    const loadedCountRef = useRef(0);

    // ── Preload all frames ────────────────────────────────────────────────────
    useEffect(() => {
        const images: HTMLImageElement[] = new Array(TOTAL_FRAMES);
        framesRef.current = images;

        // Draw frame 0 once it loads so canvas shows immediately
        const drawFirstFrame = () => {
            const canvas = canvasRef.current;
            if (!canvas || !images[0]?.naturalWidth) return;
            const ctx = canvas.getContext("2d");
            if (!ctx) return;
            drawCoverImage(ctx, images[0], canvas.width, canvas.height);
        };

        for (let i = 0; i < TOTAL_FRAMES; i++) {
            const img = new window.Image();
            img.src = getFramePath(i);
            img.onload = () => {
                loadedCountRef.current++;
                if (i === 0) drawFirstFrame();
            };
            images[i] = img;
        }
    }, []);

    // ── Canvas resize ─────────────────────────────────────────────────────────
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            // Redraw current frame after resize
            const ctx = canvas.getContext("2d");
            const img = framesRef.current[currentFrameRef.current];
            if (ctx && img?.naturalWidth) {
                drawCoverImage(ctx, img, canvas.width, canvas.height);
            }
        };

        resize();
        window.addEventListener("resize", resize, { passive: true });
        return () => window.removeEventListener("resize", resize);
    }, []);

    // ── Draw helper: object-fit: cover on canvas ──────────────────────────────
    const drawCoverImage = useCallback(
        (
            ctx: CanvasRenderingContext2D,
            img: HTMLImageElement,
            cw: number,
            ch: number
        ) => {
            if (!img.naturalWidth) return;
            const iw = img.naturalWidth;
            const ih = img.naturalHeight;
            const scale = Math.max(cw / iw, ch / ih);
            const sw = iw * scale;
            const sh = ih * scale;
            const ox = (cw - sw) / 2;
            const oy = (ch - sh) / 2;
            ctx.clearRect(0, 0, cw, ch);
            ctx.drawImage(img, ox, oy, sw, sh);
        },
        []
    );

    // ── Schedule frame draw ───────────────────────────────────────────────────
    const scheduleFrame = useCallback(
        (frameIndex: number) => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
            rafRef.current = requestAnimationFrame(() => {
                const canvas = canvasRef.current;
                const img = framesRef.current[frameIndex];
                if (!canvas || !img) return;
                const ctx = canvas.getContext("2d");
                if (!ctx) return;
                if (img.naturalWidth) {
                    drawCoverImage(ctx, img, canvas.width, canvas.height);
                } else {
                    img.onload = () =>
                        drawCoverImage(ctx, img, canvas.width, canvas.height);
                }
            });
        },
        [drawCoverImage]
    );

    // ── Scroll → frame mapping ────────────────────────────────────────────────
    const { scrollYProgress } = useScroll({ target: containerRef });

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const idx = Math.min(
            TOTAL_FRAMES - 1,
            Math.max(0, Math.round(latest * (TOTAL_FRAMES - 1)))
        );
        if (idx !== currentFrameRef.current) {
            currentFrameRef.current = idx;
            scheduleFrame(idx);
        }
    });

    // ── Cleanup ───────────────────────────────────────────────────────────────
    useEffect(() => {
        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, []);

    return (
        /* 500vh scroll container */
        <div className="relative" style={{ height: "500vh" }}>
            {/* Sticky viewport that stays fixed while scrolling */}
            <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#121212]">
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 w-full h-full"
                    style={{ display: "block" }}
                />
                {/* Subtle vignette for cinematic feel */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background:
                            "radial-gradient(ellipse at center, transparent 50%, rgba(12,12,12,0.65) 100%)",
                    }}
                />
            </div>
        </div>
    );
}
