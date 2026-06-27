"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";
import { useRef } from "react";
import type { Mesh } from "three";

function Molar() {
  const ref = useRef<Mesh>(null);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.18;
  });
  return (
    <Float speed={1.2} rotationIntensity={0.25} floatIntensity={0.6}>
      <mesh ref={ref} castShadow receiveShadow>
        {/* Abstract ceramic capsule — not a literal tooth */}
        <capsuleGeometry args={[1.05, 0.9, 16, 32]} />
        <meshPhysicalMaterial
          color="#f6f1ea"
          roughness={0.32}
          metalness={0.05}
          clearcoat={0.5}
          clearcoatRoughness={0.4}
          sheen={0.5}
          sheenColor="#e9e0d2"
        />
      </mesh>
    </Float>
  );
}

export default function ToothCanvas3DLive({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <Canvas
        camera={{ position: [0, 0, 4.2], fov: 38 }}
        dpr={[1, 1.6]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.55} />
        <directionalLight position={[3, 4, 5]} intensity={1.1} />
        <directionalLight position={[-4, 2, -2]} intensity={0.5} color="#cfe0dc" />
        <Molar />
        <Environment preset="studio" />
      </Canvas>
    </div>
  );
}
