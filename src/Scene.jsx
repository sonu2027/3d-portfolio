import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import { Stars } from '@react-three/drei'

export default function Scene() {
    return (
        <Canvas camera={{ position: [0, 2, 10], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[0, 5, 5]} color="#f59e0b" intensity={1} />
            <spotLight position={[5, 5, 5]} angle={0.3} penumbra={1} intensity={1.5} />
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
            <OrbitControls />
            <AboutMe />
            {/* <Skills /> */}
            <Projects />
             <Education />
            <Achievements />
            <Contact />
        </Canvas>
    )
}
