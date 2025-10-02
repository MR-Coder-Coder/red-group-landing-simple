"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Sphere, MeshDistortMaterial, Float } from "@react-three/drei"
import { useRef, useEffect, useState } from "react"
import type { Mesh } from "three"

function AnimatedSphere({
  position,
  scale,
  color,
  speed,
}: { position: [number, number, number]; scale: number; color: string; speed: number }) {
  const meshRef = useRef<Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * speed * 0.2
      meshRef.current.rotation.y = state.clock.getElapsedTime() * speed * 0.3
    }
  })

  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={0.5}>
      <Sphere args={[1, 100, 200]} scale={scale} position={position} ref={meshRef}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.6}
          speed={speed}
          roughness={0.1}
          metalness={0.9}
          emissive={color}
          emissiveIntensity={0.3}
        />
      </Sphere>
    </Float>
  )
}

export function Background3D() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return (
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute inset-0 bg-gradient-to-br from-red-950/40 via-red-900/20 to-transparent" />
      </div>
    )
  }

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 bg-gradient-to-br from-red-950/40 via-red-900/20 to-transparent" />
      <div className="w-full h-full opacity-80">
        <Canvas 
          camera={{ position: [0, 0, 8], fov: 75 }}
          style={{ width: '100%', height: '100%' }}
          gl={{ alpha: true, antialias: true }}
        >
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#dc2626" />
          <pointLight position={[0, 0, 0]} intensity={1} color="#dc2626" />

          <AnimatedSphere position={[0, 0, 0]} scale={3} color="#dc2626" speed={1} />
          <AnimatedSphere position={[4, 2, -2]} scale={1.5} color="#ef4444" speed={0.8} />
          <AnimatedSphere position={[-4, -2, -3]} scale={2} color="#b91c1c" speed={1.2} />
          <AnimatedSphere position={[3, -3, -1]} scale={1.2} color="#dc2626" speed={0.6} />
          <AnimatedSphere position={[-3, 3, -4]} scale={1.8} color="#991b1b" speed={0.9} />

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 1.5}
          />
        </Canvas>
      </div>
    </div>
  )
}
