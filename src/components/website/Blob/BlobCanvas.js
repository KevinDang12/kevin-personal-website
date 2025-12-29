"use client";
import React, { useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Blob from './Blob.tsx'

export default function BlobCanvas({
    position = [0, 0, 7],
    backgroundColor = 'rgba(237, 237, 237, 0)',
    geometryArgs = [2.3, 20],
    scale = 1.5,
    fragmentShader,
    blur,
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

        const currentRef = containerRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return (
    <div ref={containerRef} style={{ width: "100%", height: "100vh", zIndex: -1 }}>
        <Canvas 
            camera={{ position: [...position] }}
            frameloop={isVisible ? "always" : "demand"}
            dpr={Math.min(1.5, window.devicePixelRatio)}
        >
          <Blob geometryArgs={geometryArgs} scale={scale} fragmentShader={fragmentShader} blur={blur} />
        </Canvas>
      </div>
    );
}