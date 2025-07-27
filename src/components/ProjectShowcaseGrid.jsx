import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Html } from '@react-three/drei'

const projects = [
  {
    title: "Engineering Resource Manager",
    stack: "React, Node, MongoDB, Tailwind, TypeScript",
    link: "https://github.com/sonu2027/engineering-resource-management-system"
  },
  {
    title: "Rapid Quizzer",
    stack: "React, Node, MongoDB, Tailwind",
    link: "https://github.com/sonu2027/Rapid-Quizzer"
  },
  {
    title: "Photo Gallery",
    stack: "React, Node, Multer, Nodemailer",
    link: "https://github.com/sonu2027/Photo-Gallery"
  },
  {
    title: "ZomEats",
    stack: "React, Express, MongoDB, Redux",
    link: "https://github.com/sonu2027/Zomato-Clone"
  },
  {
    title: "Finance Manager",
    stack: "React, Charts, TailwindCSS",
    link: "https://github.com/sonu2027/personal-nance-manager"
  }
]

export default function ProjectShowcaseGrid({ position = [0, -15, 0] }) {
  const groupRef = useRef()

  useFrame(() => {
    groupRef.current.rotation.y += 0.003
  })

  return (
    <group ref={groupRef} position={position}>
      {projects.map((proj, i) => (
        <group key={proj.title} position={[i * 4 - 8, 0, 0]}>
          <mesh>
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial color="#3b82f6" metalness={0.6} roughness={0.3} />
          </mesh>
          <Html transform distanceFactor={10} position={[0, 1.6, 0]}>
            <div style={{
              backdropFilter: 'blur(8px)',
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '10px',
              padding: '12px',
              width: '220px',
              color: '#fff',
              textAlign: 'center',
              fontFamily: 'sans-serif',
              fontSize: '14px'
            }}>
              <h3>{proj.title}</h3>
              <p>{proj.stack}</p>
              <a href={proj.link} target="_blank" style={{ color: '#60a5fa' }}>
                View Code 🔗
              </a>
            </div>
          </Html>
        </group>
      ))}
    </group>
  )
}
