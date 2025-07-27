import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text } from '@react-three/drei'

const certs = [
  {
    title: "LeetCode 50+ Day Streak",
    issuer: "LeetCode",
    year: "2023",
    link: "https://leetcode.com/medal/?showlmg=0&id=2805589"
  }
]

export default function CertBadgeCarousel({ position = [0, 0, 15] }) {
  const groupRef = useRef()

  useFrame((state) => {
    groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.25
  })

  return (
    <group ref={groupRef} position={position}>
      {certs.map((cert, i) => {
        const angle = (i / certs.length) * Math.PI * 2
        const radius = 5
        const x = Math.cos(angle) * radius
        const z = Math.sin(angle) * radius

        return (
          <group key={cert.title} position={[x, 0, z]}>
            <mesh>
              <torusGeometry args={[1, 0.3, 16, 100]} />
              <meshStandardMaterial color="#facc15" emissive="#fcd34d" emissiveIntensity={1.2} />
            </mesh>
            <Text
              position={[0, 1.4, 0]}
              fontSize={0.5}
              color="#fef3c7"
              anchorX="center"
              anchorY="middle"
            >
              🏅 {cert.title}
            </Text>
            <Text
              position={[0, -1.2, 0]}
              fontSize={0.35}
              color="#fde68a"
              anchorX="center"
              anchorY="middle"
            >
              {cert.issuer} • {cert.year}
            </Text>
          </group>
        )
      })}
    </group>
  )
}
