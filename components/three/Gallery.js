import * as THREE from 'three'
import { useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import {
    useCursor,
    MeshReflectorMaterial,
    Image,
    Text,
    Environment,
    Select,
} from '@react-three/drei'

const GOLDENRATIO = 1.61803398875

const pexel = (id) =>
    `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`
const images = [
    // Front
    { position: [0, 0, 1.5], rotation: [0, 0, 0], url: pexel(1103970) },
    // Left
    {
        position: [-1.75, 0, 0.25],
        rotation: [0, Math.PI / 2.5, 0],
        url: pexel(327482),
    },
    {
        position: [-2.15, 0, 1.5],
        rotation: [0, Math.PI / 2.5, 0],
        url: pexel(325185),
    },
    {
        position: [-2, 0, 2.75],
        rotation: [0, Math.PI / 2.5, 0],
        url: pexel(358574),
    },
    // Right
    {
        position: [1.75, 0, 0.25],
        rotation: [0, -Math.PI / 2.5, 0],
        url: pexel(227675),
    },
    {
        position: [2.15, 0, 1.5],
        rotation: [0, -Math.PI / 2.5, 0],
        url: pexel(911738),
    },
    {
        position: [2, 0, 2.75],
        rotation: [0, -Math.PI / 2.5, 0],
        url: pexel(1738986),
    },
]

export default function Scene() {
    return (
        <div style={{ width: '100%', height: '70vh' }}>
            <Canvas
                gl={{ alpha: false }}
                dpr={[1, 1.5]}
                camera={{ fov: 70, position: [0, 2, 15] }}
            >
                <color attach="background" args={['#111111']} />
                <fog attach="fog" args={['#111111', 0, 15]} />
                <Environment preset="city" />
                <group position={[0, -0.5, 0]}>
                    <Frames />
                    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
                        <planeGeometry args={[50, 50]} />
                        <MeshReflectorMaterial
                            blur={[300, 100]}
                            resolution={2048}
                            mixBlur={1}
                            mixStrength={40}
                            roughness={1}
                            depthScale={1.2}
                            minDepthThreshold={0.4}
                            maxDepthThreshold={1.4}
                            color="#101010"
                            metalness={0.5}
                        />
                    </mesh>
                </group>
            </Canvas>
        </div>
    )
}

function Frames({ q = new THREE.Quaternion(), p = new THREE.Vector3() }) {
    const ref = useRef()
    const [selected, setSelected] = useState([])
    const clicked = useRef()

    useEffect(() => {
        let current = clicked.current
        if (selected != []) current = selected[0]

        if (current) {
            current.parent.updateWorldMatrix(true, true)
            current.parent.localToWorld(p.set(0, GOLDENRATIO / 2, 1.25))
            current.parent.getWorldQuaternion(q)
        } else {
            p.set(0, 0, 5.5)
            q.identity()
        }
    })

    useFrame((state, dt) => {
        state.camera.position.lerp(p, 0.025)
        state.camera.quaternion.slerp(q, 0.025)
    })

    return (
        <group ref={ref}>
            <Select onChange={setSelected}>
                {images.map(
                    (props) => <Frame key={props.url} {...props} /> /* prettier-ignore */
                )}
            </Select>
        </group>
    )
}

function Frame({ url, c = new THREE.Color(), ...props }) {
    const [hovered, hover] = useState(false)
    const [rnd] = useState(() => Math.random())
    const image = useRef()
    const frame = useRef()

    useCursor(hovered)
    useFrame((state) => {
        image.current.material.zoom =
            2 + Math.sin(rnd * 10000 + state.clock.elapsedTime / 3) / 2
        image.current.scale.x = THREE.MathUtils.lerp(
            image.current.scale.x,
            0.85 * (hovered ? 0.85 : 1),
            0.1
        )
        image.current.scale.y = THREE.MathUtils.lerp(
            image.current.scale.y,
            0.9 * (hovered ? 0.905 : 1),
            0.1
        )
        frame.current.material.color.lerp(
            c.set(hovered ? 'orange' : 'white'),
            0.1
        )
    })

    return (
        <group {...props}>
            <mesh
                name={rnd}
                onPointerOver={(e) => (e.stopPropagation(), hover(true))}
                onPointerOut={() => hover(false)}
                scale={[1, GOLDENRATIO, 0.05]}
                position={[0, GOLDENRATIO / 2, 0]}
            >
                <boxGeometry />
                <meshStandardMaterial
                    color="#151515"
                    metalness={0.5}
                    roughness={0.5}
                    envMapIntensity={2}
                />
                <mesh
                    ref={frame}
                    raycast={() => null}
                    scale={[0.9, 0.93, 0.9]}
                    position={[0, 0, 0.2]}
                >
                    <boxGeometry />
                    <meshBasicMaterial toneMapped={false} fog={false} />
                </mesh>
                <Image
                    raycast={() => null}
                    ref={image}
                    position={[0, 0, 0.7]}
                    url={url}
                />
            </mesh>
            <Text
                maxWidth={0.1}
                anchorX="left"
                anchorY="top"
                position={[0.55, GOLDENRATIO, 0]}
                fontSize={0.025}
            >
                {name.split('-').join(' ')}
            </Text>
        </group>
    )
}
