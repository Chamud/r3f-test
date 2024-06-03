import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

const Knot = () => {
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)

  return (
    <mesh
      onPointerEnter={(event) => { event.stopPropagation(); setIsHovered(true) }}
      onPointerLeave={() => setIsHovered(false)}
      onClick={() => { setIsClicked(!isClicked) }}
      scale={isClicked ? 1.5 : 1}
    >
      <torusKnotGeometry />
      <meshStandardMaterial color={isHovered ? "orange" : "red"} />
    </mesh>
  )
}


const Scene3 = () => {
  return <Canvas>
    <OrbitControls enableZoom={false} />
    <directionalLight position={[-5, -2, 4]} />
    <ambientLight intensity={0.1} />
    <Knot />
  </Canvas>
}

export default Scene3