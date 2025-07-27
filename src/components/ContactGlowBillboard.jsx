import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text, Billboard } from '@react-three/drei'

export default function ContactGlowBillboard({ position = [0, 0, -15] }) {
  const groupRef = useRef()

  useFrame(() => {
    groupRef.current.rotation.y += 0.002
  })

  return (
    <group ref={groupRef} position={position}>
      <mesh>
        <planeGeometry args={[8, 4]} />
        <meshStandardMaterial
          color="#881337"
          emissive="#ec4899"
          emissiveIntensity={1.5}
          transparent
          opacity={0.9}
        />
      </mesh>
      <Text
        position={[0, 0.8, 0.1]}
        fontSize={0.45}
        color="#f9a8d4"
        anchorX="center"
        anchorY="middle"
      >
        📧 sonu.mondal.2027@gmail.com
      </Text>
      <Text
        position={[0, 0.2, 0.1]}
        fontSize={0.4}
        color="#f9a8d4"
        anchorX="center"
        anchorY="middle"
      >
        📱 8620862136
      </Text>
      <Text
        position={[0, -0.4, 0.1]}
        fontSize={0.38}
        color="#f472b6"
        anchorX="center"
        anchorY="middle"
      >
        🌐 sonumondal.vercel.app
      </Text>
    </group>
  )
}
