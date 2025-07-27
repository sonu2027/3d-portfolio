import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text } from '@react-three/drei'

export default function EduNeonBooks({ position = [-15, 0, 0] }) {
  const groupRef = useRef()

  useFrame(() => {
    groupRef.current.rotation.y += 0.001
  })

  return (
    <group ref={groupRef} position={position}>
      <mesh position={[0, 2, 0]}>
        <boxGeometry args={[6, 1, 3]} />
        <meshStandardMaterial color="#1e3a8a" emissive="#3b82f6" emissiveIntensity={0.7} />
        <Text
          position={[0, 0.6, 0]}
          fontSize={0.5}
          color="#93c5fd"
          anchorX="center"
          anchorY="middle"
        >
          Narula Institute of Tech{"\n"}B.Tech CSE | CGPA: 7.8{"\n"}2021 - 2025
        </Text>
      </mesh>

      <mesh position={[0, -2, 0]}>
        <boxGeometry args={[5.5, 1, 2.5]} />
        <meshStandardMaterial color="#164e63" emissive="#22d3ee" emissiveIntensity={0.5} />
        <Text
          position={[0, 0.6, 0]}
          fontSize={0.45}
          color="#67e8f9"
          anchorX="center"
          anchorY="middle"
        >
          Alipore Vidyapith{"\n"}PCM + Bio | 73%{"\n"}2019 - 2021
        </Text>
      </mesh>
    </group>
  )
}
