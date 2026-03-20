"use client";

import { useEffect, useState } from "react";

export default function MouseGradient() {
    const [position, setPosition] = useState({ x: 50, y: 50 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({
                x: e.clientX,
                y: e.clientY,
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div
            className="fixed inset-0 pointer-events-none z-[50]"
            style={{
                background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(200, 169, 110, 0.07), transparent 50%)`,
                mixBlendMode: "screen",
            }}
        />
    );
}
