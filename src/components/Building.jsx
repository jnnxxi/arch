import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Float,
  MeshDistortMaterial,
} from "@react-three/drei";

import { useRef } from "react";

function Structure() {
  const group = useRef();

  useFrame((state, delta) => {
    group.current.rotation.y += delta * 0.15;
  });

  return (
    <group ref={group}>

      {/* BASE PLATFORM */}
      <mesh position={[0, -1.8, 0]} receiveShadow>
        <cylinderGeometry args={[4, 4, 0.4, 64]} />
        <meshStandardMaterial
          color="#111111"
          metalness={0.8}
          roughness={0.3}
        />
      </mesh>

      {/* CENTER TOWER */}
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.4}>
        <mesh castShadow position={[0, 0, 0]}>
          <boxGeometry args={[2, 5, 2]} />

          <meshStandardMaterial
            color="#facc15"
            metalness={1}
            roughness={0.15}
          />
        </mesh>
      </Float>

      {/* WIREFRAME OUTER */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[3.2, 6.2, 3.2]} />

        <meshStandardMaterial
          color="#facc15"
          wireframe
          transparent
          opacity={0.35}
        />
      </mesh>

      {/* FLOATING FLOOR PANELS */}
      {[...Array(5)].map((_, i) => (
        <Float
          key={i}
          speed={2 + i}
          rotationIntensity={0.3}
          floatIntensity={0.5}
        >
          <mesh
            position={[
              0,
              -1 + i * 1.2,
              0
            ]}
          >
            <boxGeometry args={[4, 0.08, 4]} />

            <meshStandardMaterial
              color="#ffffff"
              metalness={0.6}
              roughness={0.2}
              transparent
              opacity={0.08}
            />
          </mesh>
        </Float>
      ))}

      {/* GLOW SPHERE */}
      {/* <Float speed={2}>
        <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 3.8, 0]}>
          <torusGeometry args={[1, 0.08, 32, 100]} />

          <meshStandardMaterial
            color="#facc15"
            emissive="#facc15"
            emissiveIntensity={2}
            metalness={1}
            roughness={0.2}
          />
        </mesh>
      </Float> */}
    </group>
  );
}

export default function Building() {
  return (
    <div className="h-full w-full">
      <Canvas
        shadows
        camera={{ position: [7, 4, 8], fov: 45 }}
      >
        {/* LIGHTING */}
        <ambientLight intensity={0.5} />

        <directionalLight
          position={[5, 10, 5]}
          intensity={2}
          castShadow
        />

        <pointLight
          position={[0, 4, 0]}
          intensity={3}
          color="#facc15"
        />

        {/* FOG */}
        <fog attach="fog" args={["#000000", 10, 22]} />

        {/* MODEL */}
        <Structure />

        {/* CONTROLS */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.8}
        />
      </Canvas>
    </div>
  );
}