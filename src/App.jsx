import { Canvas } from '@react-three/fiber'
import FloatingSkillSpheres from './components/FloatingSkillSpheres.jsx'
import EduNeonBooks from './components/EduNeonBooks.jsx'
import ExpTimelineRods from './components/ExpTimelineRods.jsx'
import ProjectShowcaseGrid from './components/ProjectShowcaseGrid.jsx'
import CertBadgeCarousel from './components/CertBadgeCarousel.jsx'
import ContactGlowBillboard from './components/ContactGlowBillboard.jsx'
import { Suspense } from 'react'
import { OrbitControls } from '@react-three/drei'
import {CameraFocus} from "./components/CameraFocus.jsx"


function App() {
  return (
    <div className='relative h-[600vh] w-full overflow-y-scroll scroll-smooth'>
      <Canvas camera={{ position: [0, 0, 70], fov: 75 }}>
        <color attach="background" args={['#0f172a']} />
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} />
        <CameraFocus />

        <Suspense fallback={null}>
          <FloatingSkillSpheres position={[0, 40, 0]} />
          <EduNeonBooks position={[0, 30, 0]} />
          <ExpTimelineRods position={[0, 20, 0]} />
          <ProjectShowcaseGrid position={[0, 10, 0]} />
          <CertBadgeCarousel position={[0, 0, 0]} />
          <ContactGlowBillboard position={[0, -10, 0]} />
        </Suspense>

        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
      </Canvas>
    </div>
  )
}

export default App