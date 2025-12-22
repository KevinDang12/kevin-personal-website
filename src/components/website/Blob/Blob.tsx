"use client";
import React, { useMemo, useRef } from "react";
import vertexShader from "./vertexShader";
import fragmentShader from "./fragmentShader";
import { Canvas, useFrame } from "@react-three/fiber";
import { MathUtils, ShaderMaterial, Mesh } from "three";
import * as THREE from "three";

type Uniforms = {
  u_time: { value: number };
  u_intensity: { value: number };
  u_blur: { value: number };
};

const Blob: React.FC = () => {
  const mesh = useRef<Mesh<THREE.IcosahedronGeometry, ShaderMaterial>>(null);
  const hover = useRef(false);

  const uniforms = useMemo<Uniforms>(() => {
    return {
      u_time: { value: 0 },
      u_intensity: { value: 0.4 },
      u_blur: { value: 0.005 },
    };
  }, []);

  useFrame(({ clock }) => {
    if (mesh.current) {
      const material = mesh.current.material as ShaderMaterial & {
        uniforms: Uniforms;
      };

      material.uniforms.u_time.value = 0.2 * clock.getElapsedTime();
      material.uniforms.u_intensity.value = MathUtils.lerp(
        material.uniforms.u_intensity.value,
        0.5,
        0.02
      );
    }
  });

  return (
    <mesh
      ref={mesh}
      scale={1.5}
      position={[0, 0, 0]}
      onPointerOver={() => (hover.current = true)}
      onPointerOut={() => (hover.current = false)}
    >
      <icosahedronGeometry args={[2, 20]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
};

export default function BlobCanvas() {
  return (
    <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, zIndex: -1 }}>
      <Canvas camera={{ position: [0, 0, 7] }}>
        <Blob />
      </Canvas>
      <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
        <div style={{ width: '100vw', height: '100vh', backgroundColor: 'rgba(237, 237, 237, 0)' }}></div>
      </div>
    </div>
  );
}
