"use client";
import React, { useMemo, useRef } from "react";
import contactVertexShader from "./contactVertexShader";
import contactFragmentShader from "./contactFragmentShader";
import { useFrame } from "@react-three/fiber";
import { MathUtils, ShaderMaterial, Mesh } from "three";
import * as THREE from "three";

type Uniforms = {
  u_time: { value: number };
  u_intensity: { value: number };
  u_blur: { value: number };
};

export const ContactBlob: React.FC = ( { 
  geometryArgs = [2.0, 25], 
  scale = 2.0
}: { 
  geometryArgs?: [number, number], 
  scale?: number
} ) => {
  const mesh = useRef<Mesh<THREE.IcosahedronGeometry, ShaderMaterial>>(null);
  const hover = useRef(false);

  const uniforms = useMemo<Uniforms>(() => {
    return {
      u_time: { value: 0 },
      u_intensity: { value: 0.3 }, // Softer intensity for contact page
      u_blur: { value: 0.005 },
    };
  }, []);

  useFrame(({ clock }) => {
    if (mesh.current) {
      const material = mesh.current.material as ShaderMaterial & {
        uniforms: Uniforms;
      };

      // Slower, gentler animation for contact page
      material.uniforms.u_time.value = 0.15 * clock.getElapsedTime();
      material.uniforms.u_intensity.value = MathUtils.lerp(
        material.uniforms.u_intensity.value,
        0.35,
        0.015
      );
    }
  });

  return (
    <mesh
      ref={mesh}
      scale={scale}
      position={[0, 0, 0]}
      onPointerOver={() => (hover.current = true)}
      onPointerOut={() => (hover.current = false)}
    >
      <icosahedronGeometry args={geometryArgs} />
      <shaderMaterial
        vertexShader={contactVertexShader}
        fragmentShader={contactFragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
};

export default ContactBlob;

