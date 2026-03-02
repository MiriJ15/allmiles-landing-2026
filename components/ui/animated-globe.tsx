"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import type { Group, Mesh } from "three";
import { AdditiveBlending } from "three";

function GlobeMesh() {
  const groupRef = useRef<Group>(null);
  const ringRefs = useRef<Mesh[]>([]);

  const satellites = useMemo(() => {
    return Array.from({ length: 24 }, (_, index) => {
      const phi = Math.acos(-1 + (2 * index) / 24);
      const theta = Math.sqrt(24 * Math.PI) * phi;
      const radius = 1.35;

      return {
        x: radius * Math.cos(theta) * Math.sin(phi),
        y: radius * Math.sin(theta) * Math.sin(phi),
        z: radius * Math.cos(phi)
      };
    });
  }, []);

  useFrame((state, delta) => {
    if (!groupRef.current) {
      return;
    }

    groupRef.current.rotation.y += delta * 0.16;
    groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.25) * 0.12;

    ringRefs.current.forEach((ring, index) => {
      ring.rotation.z += delta * (0.12 + index * 0.02);
    });
  });

  return (
    <group ref={groupRef}>
      <mesh>
        <icosahedronGeometry args={[1.22, 6]} />
        <meshStandardMaterial
          color="#8fd3ff"
          wireframe
          transparent
          opacity={0.28}
          emissive="#22d3ee"
          emissiveIntensity={0.18}
        />
      </mesh>

      {[0, 1, 2].map((idx) => (
        <mesh
          key={idx}
          ref={(node) => {
            if (node) {
              ringRefs.current[idx] = node;
            }
          }}
          rotation={[Math.PI / 2 + idx * 0.44, idx * 0.38, 0]}
        >
          <torusGeometry args={[1.86 + idx * 0.05, 0.015, 18, 160]} />
          <meshBasicMaterial
            color={idx === 2 ? "#34d399" : "#38bdf8"}
            transparent
            opacity={0.28}
            blending={AdditiveBlending}
          />
        </mesh>
      ))}

      {satellites.map((dot, idx) => (
        <mesh key={idx} position={[dot.x, dot.y, dot.z]}>
          <sphereGeometry args={[0.018, 10, 10]} />
          <meshBasicMaterial color={idx % 2 ? "#a5f3fc" : "#5eead4"} />
        </mesh>
      ))}
    </group>
  );
}

export function AnimatedGlobe() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 opacity-70">
      <Canvas
        dpr={[1, 1.7]}
        camera={{ position: [0, 0, 4.4], fov: 44 }}
        gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      >
        <ambientLight intensity={0.8} />
        <pointLight position={[2.2, 2.4, 2.6]} color="#7dd3fc" intensity={32} />
        <pointLight position={[-2.5, -1.8, -2]} color="#34d399" intensity={14} />
        <GlobeMesh />
      </Canvas>
    </div>
  );
}
