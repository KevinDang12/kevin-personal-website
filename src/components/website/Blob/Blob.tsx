"use client";
import React, { useMemo, useRef } from "react";
import vertexShader from "./vertexShader";
import fragmentShader from "./fragmentShader";
import { useFrame } from "@react-three/fiber";
import { MathUtils, ShaderMaterial, Mesh } from "three";
import * as THREE from "three";

type Uniforms = {
  u_time: { value: number };
  u_intensity: { value: number };
  u_blur: { value: number };
};

export const Blob: React.FC = ( { 
  geometryArgs = [2.3, 12],
  scale = 1.5,
  fragmentShader: customFragmentShader,
  blur = 0.005
}: { 
  geometryArgs?: [number, number], 
  scale?: number,
  fragmentShader?: string,
  blur?: number
} ) => {
  const shaderToUse = customFragmentShader || fragmentShader;
  const mesh = useRef<Mesh<THREE.IcosahedronGeometry, ShaderMaterial>>(null);
  const hover = useRef(false);

  const uniforms = useMemo<Uniforms>(() => {
    return {
      u_time: { value: 0 },
      u_intensity: { value: 0.4 },
      u_blur: { value: blur },
    };
  }, [blur]);

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
      scale={scale}
      position={[0, 0, 0]}
      onPointerOver={() => (hover.current = true)}
      onPointerOut={() => (hover.current = false)}
    >
      <icosahedronGeometry args={geometryArgs} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={shaderToUse}
        uniforms={uniforms}
      />
    </mesh>
  );
};

export default Blob;
