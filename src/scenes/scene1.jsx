// Scene1.jsx

import { useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'
import { Decal, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'
import { store } from '../Store'


const Image = ({ position, image, scale, setIsHoveredG }) => {
    const [imageTexture] = useState(() => {
        const texture = new THREE.TextureLoader().load(image);
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.x = -1;
        texture.offset.x = 1;
        return texture;
    });

    const ref = useRef();
    const [isHovered, setIsHovered] = useState(false);

    scale = isHovered ? scale.map(value => value * 1.15) : scale;

    return (
        <Decal
            position={position}
            scale={scale}
            onPointerEnter={(event) => { setIsHovered(true); setIsHoveredG(true); }}
            onPointerLeave={() => { setIsHovered(false); setIsHoveredG(false); }}
            onClick={() => { store.image = image; }}
        >
            <meshBasicMaterial
                map={imageTexture}
                polygonOffset
                polygonOffsetFactor={isHovered ? -2 : -1}
            />
        </Decal>
    );
};


const Background = ({ position, scale }) => {


    return (
        <Decal

            position={position}
            scale={scale}
        >
            <meshBasicMaterial
                color={"white"}
                polygonOffset
                polygonOffsetFactor={3}
            />
        </Decal>
    );
};

const ImageBuilder = ({ setIsHoveredG }) => {
    const img = '/src/assets/'

    const positions1 = [
        [0, 0, 1.5], [0, 1.5, 0], [1.5, 0, 0], [0, 0, -1.5], [0, -1.5, 0],
        [-1.5, 0, 0], [-1.5, 0, 0], [1.5, 0, 1.5], [0, 1.5, 1.5], [-1.5, 0, 1.5],
        [0, -1.5, 1.5], [1.5, 0, -1.5], [0, 1.5, -1.5], [-1.5, 0, -1.5], [0, -1.5, -1.5],
        [1.5, 1.5, 0], [1.5, 1.5, 0], [-1.5, 1.5, 0], [1.5, -1.5, 0], [1.5, -1.5, 0],
        [-1.5, 1.5, 0], [-1.5, -1.5, 0], [-1.5, -1.5, 0]

    ];

    const positions2 = [
        [1, 1, 1], [-1, 1, 1], [1, -1, 1],
        [1, 1, -1], [-1, -1, 1], [1, -1, -1],
        [-1, 1, -1], [-1, -1, -1]
    ]

    const sc1 = 1.1
    const sc2 = 0.7
    const sc3 = 1.2
    const sc4 = 0.8

    const images1 = positions1.map((position, index) => (
        <Image setIsHoveredG={setIsHoveredG} key={`image-${index}`} scale={[sc1, sc1, sc1]} position={position} image={img + (index + 1).toString() + '.jpg'} />

    ));

    const images2 = positions2.map((position, index) => (
        <Image setIsHoveredG={setIsHoveredG} key={`image-${index + positions1.length}`} scale={[sc2, sc2, sc2]} position={position} image={img + (index  + positions1.length).toString() + '.jpg'} />
    ));

    let allImages = images1.concat(images2);

    const bgs1 = positions1.map((position, index) => (
        <Background key={`bg-${index}`} scale={[sc3, sc3, sc3]} position={position} />
    ));

    const bgs2 = positions2.map((position, index) => (
        <Background key={`bg-${index + positions1.length}`} scale={[sc4, sc4, sc4]} position={position} />
    ));

    allImages = allImages.concat(bgs1);
    allImages = allImages.concat(bgs2);

    return allImages;
}

const Sphere = () => {
    const ref = useRef()
    const [isHoveredG, setIsHoveredG] = useState(false)

    useFrame((state, delta) => {
        if (!isHoveredG) {
            ref.current.rotation.y += delta * 0.1
            ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1
        }
    })

    return (

        <mesh
            ref={ref}
        >
            <sphereGeometry args={[2]} />
            <meshNormalMaterial transparent opacity={isHoveredG ? 0.5 : 0.1} />
            <ImageBuilder setIsHoveredG={setIsHoveredG} />

        </mesh>

    )
}

const Scene1 = () => {

    const [isHoveredG, setIsHoveredG] = useState(false)

    return <Canvas className='scene1'  >
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <Sphere />
        
    </Canvas>
}

export default Scene1

