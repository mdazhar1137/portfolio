"use client";
import React, { useRef, useState } from "react";

export default function SpotlightCard({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`relative overflow-hidden ${className}`}
        >
            {/* Spotlight glow overlay */}
            <div
                className="absolute inset-0 pointer-events-none z-10 rounded-2xl transition-opacity duration-300"
                style={{
                    opacity: isHovered ? 1 : 0,
                    background: `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, rgba(200, 169, 110, 0.1), transparent 60%)`,
                }}
            />
            {/* Border glow */}
            <div
                className="absolute inset-0 pointer-events-none z-10 rounded-2xl transition-opacity duration-300"
                style={{
                    opacity: isHovered ? 1 : 0,
                    background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(200, 169, 110, 0.25), transparent 60%)`,
                    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    maskComposite: "exclude",
                    WebkitMaskComposite: "xor",
                    padding: "1px",
                    borderRadius: "1rem",
                }}
            />
            {children}
        </div>
    );
}
