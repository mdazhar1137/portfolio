"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    useEffect(() => {
        // Hide custom cursor on touch devices
        if (window.matchMedia("(pointer: coarse)").matches) {
            setIsTouchDevice(true);
            return;
        }

        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
            setIsVisible(true);

            const target = e.target as HTMLElement;
            const isInteractive = target.closest(
                "a, button, input, textarea, select, [role='button'], iframe"
            );
            setIsHovering(!!isInteractive);
        };

        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseleave", handleMouseLeave);
        document.addEventListener("mouseenter", handleMouseEnter);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseleave", handleMouseLeave);
            document.removeEventListener("mouseenter", handleMouseEnter);
        };
    }, []);

    if (isTouchDevice) return null;

    return (
        <>
            {/* Inner dot */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-[#c8a96e]"
                animate={{
                    x: position.x - (isHovering ? 20 : 4),
                    y: position.y - (isHovering ? 20 : 4),
                    width: isHovering ? 40 : 8,
                    height: isHovering ? 40 : 8,
                    opacity: isVisible ? 1 : 0,
                }}
                transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
                style={{ mixBlendMode: "difference" }}
            />
            {/* Outer ring */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full border border-[#c8a96e]/50"
                animate={{
                    x: position.x - (isHovering ? 30 : 20),
                    y: position.y - (isHovering ? 30 : 20),
                    width: isHovering ? 60 : 40,
                    height: isHovering ? 60 : 40,
                    opacity: isVisible ? 0.5 : 0,
                }}
                transition={{ type: "spring", stiffness: 250, damping: 20, mass: 0.8 }}
            />
        </>
    );
}
