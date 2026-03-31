"use client";

import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere, Float, Stars } from "@react-three/drei";
import styles from "./Canvas3D.module.css";

export default function Canvas3D() {
  return (
    <div className={styles.canvasContainer}>
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={2} color="#00f0ff" />
        <directionalLight position={[-10, -10, -10]} intensity={1} color="#ff003c" />
        <directionalLight position={[0, -10, 0]} intensity={1} color="#ab00ff" />
        
        <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />

        <Float speed={2} rotationIntensity={1.5} floatIntensity={1.5}>
          <Sphere args={[2, 64, 64]} position={[0, 0, 0]}>
            <MeshDistortMaterial
              color="#111111"
              attach="material"
              distort={0.4}
              speed={2}
              roughness={0.2}
              metalness={0.8}
            />
          </Sphere>
        </Float>
      </Canvas>
    </div>
  );
}
