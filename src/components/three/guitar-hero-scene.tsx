"use client";

import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import type { Group, Points } from "three";
import { AdditiveBlending, BufferAttribute, BufferGeometry, Color, MathUtils } from "three";

function GuitarPlaceholder() {
  const group = useRef<Group>(null);
  const { pointer } = useThree();

  useFrame((state) => {
    if (!group.current) return;

    group.current.rotation.y = MathUtils.lerp(group.current.rotation.y, pointer.x * 0.22, 0.05);
    group.current.rotation.x = MathUtils.lerp(group.current.rotation.x, -pointer.y * 0.14, 0.05);
    group.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.08;
  });

  return (
    <group ref={group} rotation={[0.05, -0.3, -0.18]} position={[0.25, -0.05, 0]}>
      <mesh position={[-0.42, -0.42, 0]}>
        <sphereGeometry args={[0.78, 48, 48]} />
        <meshStandardMaterial
          color="#111827"
          emissive="#082f49"
          emissiveIntensity={0.35}
          metalness={0.55}
          roughness={0.28}
        />
      </mesh>
      <mesh position={[0.12, 0.02, 0]}>
        <sphereGeometry args={[0.58, 48, 48]} />
        <meshStandardMaterial
          color="#0f172a"
          emissive="#2e1065"
          emissiveIntensity={0.28}
          metalness={0.62}
          roughness={0.22}
        />
      </mesh>
      <mesh position={[0.86, 0.58, 0]} rotation={[0, 0, -0.72]}>
        <boxGeometry args={[2.65, 0.16, 0.12]} />
        <meshStandardMaterial color="#111827" emissive="#22d3ee" emissiveIntensity={0.18} />
      </mesh>
      <mesh position={[1.98, 1.32, 0]} rotation={[0, 0, -0.72]}>
        <boxGeometry args={[0.58, 0.36, 0.14]} />
        <meshStandardMaterial color="#020617" emissive="#a78bfa" emissiveIntensity={0.32} />
      </mesh>
      {[-0.06, -0.02, 0.02, 0.06].map((offset) => (
        <mesh key={offset} position={[0.86, 0.58 + offset, 0.1]} rotation={[0, 0, -0.72]}>
          <boxGeometry args={[2.72, 0.008, 0.008]} />
          <meshBasicMaterial color="#67e8f9" />
        </mesh>
      ))}
      <mesh position={[-0.16, -0.15, 0.13]}>
        <torusGeometry args={[0.22, 0.018, 18, 56]} />
        <meshBasicMaterial color="#31f7ff" />
      </mesh>
    </group>
  );
}

function ParticleField() {
  const points = useRef<Points>(null);
  const geometry = useMemo(() => {
    const particleCount = 520;
    const positions = new Float32Array(particleCount * 3);

    for (let index = 0; index < particleCount; index += 1) {
      positions[index * 3] = (Math.random() - 0.5) * 9;
      positions[index * 3 + 1] = (Math.random() - 0.5) * 5.2;
      positions[index * 3 + 2] = (Math.random() - 0.5) * 5;
    }

    const nextGeometry = new BufferGeometry();
    nextGeometry.setAttribute("position", new BufferAttribute(positions, 3));
    return nextGeometry;
  }, []);

  useFrame((state) => {
    if (!points.current) return;
    points.current.rotation.y = state.clock.elapsedTime * 0.025;
    points.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.18) * 0.04;
  });

  return (
    <points ref={points} geometry={geometry}>
      <pointsMaterial
        color={new Color("#67e8f9")}
        size={0.018}
        transparent
        opacity={0.58}
        blending={AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

function Scene() {
  return (
    <>
      <color attach="background" args={["#020617"]} />
      <fog attach="fog" args={["#020617", 4.2, 8]} />
      <ambientLight intensity={0.55} />
      <pointLight position={[-3, 2.5, 3]} color="#31f7ff" intensity={24} />
      <pointLight position={[3, -1.5, 2]} color="#a78bfa" intensity={12} />
      <ParticleField />
      <GuitarPlaceholder />
    </>
  );
}

export function GuitarHeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 4.8], fov: 42 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, powerPreference: "high-performance" }}
    >
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  );
}
