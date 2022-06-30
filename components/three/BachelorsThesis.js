import React, { Suspense, useRef } from 'react'
import {
    Environment,
    OrbitControls,
    useGLTF,
    Html,
    MeshReflectorMaterial,
} from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import {
    getPhongMaterial,
    getPhysicalMaterial,
} from '../../functions/getMaterial'

const Scene = ({ visibilities }) => {
    return (
        <div style={{ width: '100%', height: '60vh' }}>
            <Canvas
                camera={{
                    position: [100, 100, 100],
                    zoom: 9,
                    far: 900,
                }}
            >
                <Suspense fallback={<Loader />}>
                    <Model visibilities={visibilities} />
                    <Environment preset="sunset" />
                    <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                        <planeGeometry args={[70, 50]} />
                        <MeshReflectorMaterial
                            blur={[400, 100]}
                            resolution={512}
                            mixBlur={1}
                            mixStrength={15}
                            depthScale={1}
                            minDepthThreshold={0.85}
                            color="#151515"
                            metalness={0.6}
                            roughness={1}
                        />
                    </mesh>
                </Suspense>
                <OrbitControls
                    autoRotate
                    autoRotateSpeed={1}
                    setPolarAngle={Math.PI / 2.5}
                    enablePan={false}
                    minPolarAngle={Math.PI / 4}
                    maxPolarAngle={Math.PI / 2.1}
                />
            </Canvas>
        </div>
    )
}

function Model({ visibilities }) {
    const group = useRef()
    const { nodes, materials } = useGLTF(
        '../../assets/models/BachelorsThesis.glb'
    )

    const {
        floor,
        ceiling,
        piping,
        ducting,
        lighting,
        structure,
        curtain,
        panels,
        rooms,
    } = visibilities || true

    const metalMat = getPhysicalMaterial('White', 0.5)
    const glassMat = getPhongMaterial('Red', 0.5, true)
    const woodMat = getPhysicalMaterial('#BA8C63', 0.3)
    const rubberMat = getPhysicalMaterial('White', 0.7)
    const copperMat = getPhysicalMaterial('#7f4330', 0.2)

    return (
        <group ref={group} dispose={null}>
            {structure && (
                <>
                    <mesh
                        geometry={nodes.Columns.geometry}
                        material={metalMat}
                        position={[0.06, 2.74, -0.23]}
                    />
                    <mesh
                        geometry={nodes.Beams.geometry}
                        material={metalMat}
                        position={[0.05, 5.98, -0.23]}
                    />
                    <mesh
                        geometry={nodes.Sub.geometry}
                        material={metalMat}
                        position={[0.07, 6.18, -0.23]}
                    />
                </>
            )}
            {floor && (
                <>
                    <mesh
                        geometry={nodes.Floor.geometry}
                        material={woodMat}
                        position={[0.05, 1.46, -0.23]}
                    />
                    <group position={[3.98, 1.76, 4.8]}>
                        <mesh
                            geometry={nodes.Railing_Geo.geometry}
                            material={metalMat}
                        />
                        <mesh
                            geometry={nodes.Railing_Geo_1.geometry}
                            material={glassMat}
                        />
                    </group>
                    <group position={[0.47, 3.94, 9.1]}>
                        <mesh
                            geometry={nodes.Vertical_Geo.geometry}
                            material={metalMat}
                        />
                        <mesh
                            geometry={nodes.Vertical_Geo_1.geometry}
                            material={woodMat}
                        />
                    </group>
                </>
            )}
            {panels && (
                <group position={[-7.89, 8.73, -10.81]}>
                    <mesh
                        geometry={nodes.Panel_Geo.geometry}
                        material={metalMat}
                    />
                    <mesh
                        geometry={nodes.Panel_Geo_1.geometry}
                        material={glassMat}
                    />
                </group>
            )}
            {curtain && (
                <>
                    <group position={[2.09, 3.64, -0.23]}>
                        <mesh
                            geometry={nodes.Curtain_Geo.geometry}
                            material={metalMat}
                        />
                        <mesh
                            geometry={nodes.Curtain_Geo_1.geometry}
                            material={glassMat}
                        />
                    </group>
                    <group position={[0.06, 3.55, -0.22]}>
                        <mesh
                            geometry={nodes.Doors_Geo.geometry}
                            material={glassMat}
                        />
                        <mesh
                            geometry={nodes.Doors_Geo_1.geometry}
                            material={metalMat}
                        />
                    </group>
                </>
            )}
            {ceiling && (
                <mesh
                    geometry={nodes.Ceiling.geometry}
                    material={metalMat}
                    position={[0.06, 6.69, -0.23]}
                />
            )}
            {lighting && (
                <mesh
                    geometry={nodes.Lights.geometry}
                    material={copperMat}
                    position={[0.78, 5.01, -0.73]}
                />
            )}
            {rooms && (
                <>
                    <mesh
                        geometry={nodes.Compound.geometry}
                        material={rubberMat}
                        position={[-9.08, 3.04, 0.52]}
                    />
                    <group position={[-10.9, 2.85, 4.1]}>
                        <mesh
                            geometry={nodes.Window_Geo.geometry}
                            material={metalMat}
                        />
                        <mesh
                            geometry={nodes.Window_Geo_1.geometry}
                            material={glassMat}
                        />
                    </group>
                </>
            )}
            {piping && (
                <>
                    <group position={[-16.23, 0.35, -2.58]}>
                        <mesh
                            geometry={nodes.Piping_Geo.geometry}
                            material={copperMat}
                        />
                        <mesh
                            geometry={nodes.Piping_Geo_1.geometry}
                            material={metalMat}
                        />
                    </group>
                    <mesh
                        geometry={nodes.Toilet.geometry}
                        material={copperMat}
                        position={[-8.58, 2.23, -5.07]}
                    />
                </>
            )}
            {ducting && (
                <>
                    <mesh
                        geometry={nodes.Ducting.geometry}
                        material={copperMat}
                        position={[4.9, 5.15, 4.27]}
                    />
                    <group
                        position={[-13.13, 7.03, -6.52]}
                        rotation={[0, Math.PI / 2, 0]}
                        scale={1.4}
                    >
                        <mesh
                            geometry={nodes.AC_Geo.geometry}
                            material={rubberMat}
                        />
                        <mesh
                            geometry={nodes.AC_Geo_1.geometry}
                            material={metalMat}
                        />
                    </group>
                </>
            )}
        </group>
    )
}

function Loader() {
    return (
        <Html center>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20vh"
                height="20vh"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid"
            >
                <path
                    d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50"
                    fill="#dfdfdf"
                    stroke="none"
                >
                    <animateTransform
                        attributeName="transform"
                        type="rotate"
                        dur="1s"
                        repeatCount="indefinite"
                        keyTimes="0;1"
                        values="0 50 51;360 50 51"
                    ></animateTransform>
                </path>
            </svg>
        </Html>
    )
}

export default Scene
