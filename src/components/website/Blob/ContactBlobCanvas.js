"use client";
import React, { useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import ContactBlob from './ContactBlob.tsx'

export default function ContactBlobCanvas({
    position = [0, 0, 7],
    geometryArgs = [2.5, 25],
    scale = 2.0,
}) {
    const containerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);

    return (
    <div ref={containerRef} style={{ width: "100vw", height: "100vh", zIndex: -1 }}>
        <Canvas 
            camera={{ position: [...position] }}
            frameloop={isVisible ? "always" : "demand"}
            dpr={Math.min(1.5, window.devicePixelRatio)}
        >
          <ContactBlob geometryArgs={geometryArgs} scale={scale} />
        </Canvas>
      </div>
    );
}

