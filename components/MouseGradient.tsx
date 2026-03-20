"use client";

import { useEffect, useState } from "react";

export default function MouseGradient() {
    const [position, setPosition] = useState({ x: 50, y: 50 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({
                x: (e.clientX / window.innerWidth) * 100,
                y: ((e.clientY + window.scrollY) / document.body.scrollHeight) * 100,
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div
            className="fixed inset-0 pointer-events-none z-[1] opacity-30 transition-opacity duration-500"
            style={{
                background: `radial-gradient(800px circle at ${position.x}% ${position.y}%, rgba(200, 169, 110, 0.12), transparent 60%)`,
            }}
        />
    );
}
