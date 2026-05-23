"use client";

import { Canvas } from "@react-three/fiber";

export function ImmersiveStage() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 42 }} dpr={[1, 1.6]}>
      <ambientLight intensity={0.6} />
      <mesh rotation={[0.4, 0.2, 0]}>
        <torusKnotGeometry args={[1.1, 0.18, 160, 16]} />
        <meshStandardMaterial color="#31f7ff" emissive="#163a3f" metalness={0.7} roughness={0.25} />
      </mesh>
    </Canvas>
  );
}
