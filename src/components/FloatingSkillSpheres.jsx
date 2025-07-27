import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { MeshDistortMaterial, Text } from '@react-three/drei'

const skills = [
  "React.js", "Node.js", "Tailwind CSS", "MongoDB",
  "Redux-toolkit", "Express.js", "TypeScript", "MySQL",
  "C++", "HTML", "CSS", "JavaScript"
]

export default function FloatingSkillSpheres({ position = [0, 0, 0] }) {
  const groupRef = useRef()

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    groupRef.current.rotation.y = t * 0.2
  })

  return (
    <group ref={groupRef} position={position}>
      {skills.map((skill, i) => {
        const angle = (i / skills.length) * Math.PI * 2
        const x = Math.cos(angle) * 6
        const z = Math.sin(angle) * 6
        return (
          <group key={skill} position={[x, Math.sin(angle * 2) * 2, z]}>
            <mesh>
              <sphereGeometry args={[0.8, 32, 32]} />
              <MeshDistortMaterial color="#60a5fa" distort={0.4} speed={2} />
            </mesh>
            <Text
              position={[0, 1.2, 0]}
              fontSize={0.6}
              color="#fff"
              anchorX="center"
              anchorY="middle"
            >
              {skill}
            </Text>
          </group>
        )
      })}
    </group>
  )
}
