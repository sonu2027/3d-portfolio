import { useThree, useFrame } from '@react-three/fiber'

export function CameraFocus() {
  const { camera } = useThree()
  useFrame(() => {
    camera.lookAt(0, 0, 0)
  })
  return null
}
