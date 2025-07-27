import { Cylinder, Html } from '@react-three/drei'

const experienceData = [
    {
        company: "Codetikki",
        role: "Full Stack Web Developer Intern",
        duration: "Feb 2025 - Apr 2025",
        tech: "React.js, Redux-toolkit, Node.js, Express.js, TailwindCSS, MongoDB, MySQL"
    }
]

export default function ExpTimelineRods({ position = [0, 15, 0] }) {
    return (
        <group position={position}>
            {experienceData.map((exp, i) => (
                <group key={i} position={[i * 4, 0, 0]}>
                    <Cylinder args={[0.3, 0.3, 5]} position={[0, 2.5, 0]}>
                        <meshStandardMaterial color="#14b8a6" emissive="#0d9488" emissiveIntensity={1} />
                    </Cylinder>
                    <Html
                        center
                        transform
                        zIndexRange={[100, 0]} 
                    >
                        <div style={{
                            background: "#0f172a",
                            color: "#fff",
                            padding: "12px",
                            borderRadius: "10px",
                            fontSize: "14px",
                            width: "250px",
                            textAlign: "center",
                            border: "1px solid #14b8a6"
                        }}>
                            <h3>{exp.company}</h3>
                            <p>{exp.role}</p>
                            <p>{exp.duration}</p>
                            <small>{exp.tech}</small>
                        </div>
                    </Html>
                </group>
            ))}
        </group>
    )
}
