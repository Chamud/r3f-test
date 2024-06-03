import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

const Cube = ({ position, size }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)

  return (
    <mesh
      position={position}
      onPointerEnter={(event) => { event.stopPropagation(); setIsHovered(true) }}
      onPointerLeave={() => setIsHovered(false)}
      onClick={() => { setIsClicked(!isClicked) }}
      scale={isClicked ? 1.5 : 1}
    >
      <boxGeometry args={size} />
      <meshStandardMaterial color={isHovered ? "orange" : "red"} />
    </mesh>
  )
}


const Scene2 = () => {
  return <Canvas>
    <OrbitControls enableZoom={false} />
    <directionalLight position={[-5, -2, 4]} />
    <ambientLight intensity={0.1} />
    <Cube />
  </Canvas>
}

export default Scene2