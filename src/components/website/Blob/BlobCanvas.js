"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";
import Blob from './Blob.tsx'

export default function BlobCanvas({
    position = [0, 0, 7],
    backgroundColor = 'rgba(237, 237, 237, 0)',
    geometryArgs = [2.3, 20],
    scale = 1.5,
}) {
    return (
    <div style={{ width: "100vw", height: "100vh", zIndex: -1 }}>
        <Canvas camera={{ position: [...position] }}>
          <Blob geometryArgs={geometryArgs} scale={scale} />
        </Canvas>
      </div>
    );
}