import * as THREE from 'three'
import { useEffect, useRef, useState, Suspense } from 'react'
import {
    OrbitControls,
    Bounds,
    BakeShadows,
    useGLTF,
    Clone,
    MeshDistortMaterial,
} from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'

import { useTheme } from '@geist-ui/core'

const Room = () => {
    const theme = useTheme()

    return (
        <>
            <Canvas
                orthographic
                shadows
                camera={{ position: [10, 10, 10], zoom: 10 }}
            >
                <color attach="background" args={[theme.palette.background]} />
                <ambientLight intensity={0.01} />
                <hemisphereLight
                    intensity={0.125}
                    color="#8040df"
                    groundColor="red"
                />
                <spotLight
                    castShadow
                    color="orange"
                    intensity={2}
                    position={[-50, 50, 40]}
                    angle={0.25}
                    penumbra={1}
                    shadow-mapSize={[128, 128]}
                    shadow-bias={0.00005}
                />
                <Suspense fallback={null}>
                    <Bounds fit clip observe margin={1}>
                        <Scene scale={0.1} />
                    </Bounds>
                    <BakeShadows />
                </Suspense>
                <OrbitControls
                    makeDefault
                    minAzimuthAngle={0}
                    maxAzimuthAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 3}
                    maxPolarAngle={Math.PI / 3}
                    enableZoom={true}
                    enablePan={true}
                    zoomSpeed={0.3}
                />
                <gridHelper
                    args={[1000, 200, '#151515', '#020202']}
                    position={[0, -4, 0]}
                />
                <mesh
                    scale={200}
                    rotation={[-Math.PI / 2, 0, 0]}
                    position={[0, -4, 0]}
                    receiveShadow
                >
                    <planeGeometry />
                    <shadowMaterial transparent opacity={0.3} />
                </mesh>
            </Canvas>
        </>
    )
}

function Scene({ ...props }) {
    const group = useRef()
    const { nodes } = useGLTF('../../scene-transformed.glb')
    return (
        <group ref={group} {...props} dispose={null}>
            <group name="_Chambre" rotation={[-Math.PI / 2, 0, 0]}>
                <Clone object={nodes.Lit_ORANGE} castShadow receiveShadow />
                <Clone object={nodes.Tele_NOIR}>
                    <Screen />
                </Clone>
                <Clone
                    object={Object.values(nodes).filter((n) =>
                        n.name.startsWith('Tapis_')
                    )}
                    receiveShadow
                />
                <Clone
                    object={[
                        nodes.Caisse_01_BLANC,
                        nodes.Caisse_02_BLANC,
                        nodes.Caisse_03_BLANC,
                    ]}
                    castShadow
                    receiveShadow
                />
                <Clone
                    object={nodes.Bac_fleurs_BLANC}
                    castShadow
                    receiveShadow
                    inject={(object) =>
                        object.name === 'Plante_VERT_VERT_0' && (
                            <MeshDistortMaterial
                                speed={2.5}
                                distort={0.25}
                                color={[0.086, 0.58, 0.12]}
                                roughness={0.3}
                            />
                        )
                    }
                />
                <Clone
                    object={nodes.Carres_muraux_GRIS}
                    castShadow
                    receiveShadow
                />
                <Clone object={nodes.Fenetres_VITRE_VITRE_0} />
                <Clone object={nodes.Stores_NOIR_NOIR_0} />
                <Clone object={nodes.Tablette_NOIR_NOIR_0} />
                <Clone object={nodes.Tasse_BLANC_BLANC_0} />
                <Clone
                    object={Object.values(nodes).filter((n) =>
                        n.name.startsWith('Vetement_')
                    )}
                />
                <Clone object={nodes.Tringle_METAL_METAL_0} />
            </group>
            <Clone object={nodes._Cuisine} castShadow receiveShadow />
            <Clone object={nodes._Base} castShadow receiveShadow />
            <Clone
                object={[
                    nodes._Boites,
                    nodes._Livres,
                    nodes._Post_it,
                    nodes._Ventilations,
                ]}
                castShadow
            />
            <Lights />
        </group>
    )
}

function Lights() {
    const ref = useRef()
    const light = useRef()
    const [color] = useState(() => new THREE.Color('white'))
    const { nodes } = useGLTF('../../scene-transformed.glb')
    useEffect(() => {
        const timeout = setInterval(
            () => color.setRGB(Math.random(), Math.random(), Math.random()),
            3000
        )
        return () => clearInterval(timeout)
    }, [])
    useFrame(() => {
        light.current.color.lerp(color, 0.01)
        ref.current.traverse(
            (obj) => obj.isMesh && obj.material.emissive.lerp(color, 0.01)
        )
    })
    return (
        <>
            <Clone ref={ref} object={nodes._Lumieres} />
            <group scale={10}>
                <spotLight
                    ref={light}
                    castShadow
                    color="orange"
                    intensity={1}
                    position={[50, 100, 0]}
                    angle={0.15}
                    penumbra={0.5}
                    shadow-mapSize={[64, 64]}
                    shadow-bias={-0.000001}
                    target-position={[0, 20, 0]}
                    onUpdate={(self) => self.target.updateMatrixWorld()}
                />
            </group>
        </>
    )
}

function Screen() {
    const ref = useRef()
    useFrame((state, delta) => {
        const sin =
            Math.sin(state.clock.elapsedTime) +
            Math.cos(state.clock.elapsedTime * 10)
        ref.current.intensity = (0.5 + Math.abs(sin / 10)) * 40
    })
    return (
        <spotLight
            ref={ref}
            color="lightblue"
            position={[0, 7, 15]}
            angle={1}
            penumbra={1}
            distance={8}
            target-position={[10, 5.5, -6.6]}
            onUpdate={(self) => self.target.updateMatrixWorld()}
        />
    )
}

useGLTF.preload('../../scene-transformed.glb')

export default Room
