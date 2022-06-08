import { useEffect, useState, useRef, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import {
    Select,
    useSelect,
    Sky,
    ContactShadows,
    Edges,
    Environment,
    OrbitControls,
    useCursor,
} from '@react-three/drei'
import { Panel, useControls } from '../../components/MultiLeva'
import * as d3 from 'd3'
import dynamic from 'next/dynamic'
import { useTheme, Card, Slider, Description, Grid } from '@geist-ui/core'

import Helmet from '../../components/Helmet'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Badged from '../../components/Badged'
import Room from '../../components/three/Room'
import Soft from '../../components/three/Soft'
import Banner from '../../components/Banner'
import Wrapper from '../../components/Wrapper'

const Thesis = () => {
    return (
        <>
            <Helmet title="THREE" />
            <Header />
            <Banner header="THREE" small="3 Dimensional." />
            <Wrapper>
                <Grid.Container gap={1}>
                    <Grid xs={24}>
                        <Card width={'100%'} height={'35rem'}>
                            <Scene />
                        </Card>
                    </Grid>
                </Grid.Container>
            </Wrapper>
            <Footer />
            <style jsx global>
                {`
                    .content {
                        height: 100% !important;
                    }
                    small {
                        text-align: justify;
                    }
                `}
            </style>
        </>
    )
}

export default Thesis

function Cube({
    color = 'white',
    thickness = 2,
    roughness = 0.65,
    envMapIntensity = 1,
    transmission = 0,
    metalness,
    ...props
}) {
    const [hovered, setHover] = useState(false)
    const selected = useSelect().map((sel) => sel.userData.store)
    const [store, materialProps] = useControls(selected, {
        color: { value: color },
        roughness: { value: roughness, min: 0, max: 1 },
        thickness: { value: thickness, min: -10, max: 10 },
        envMapIntensity: { value: envMapIntensity, min: 0, max: 10 },
        transmission: { value: transmission, min: 0, max: 1 },
        ...(metalness !== undefined && {
            metalness: { value: metalness, min: 0, max: 1 },
        }),
    })
    const isSelected = !!selected.find((sel) => sel === store)
    useCursor(hovered)
    return (
        <mesh
            {...props}
            userData={{ store }}
            onPointerOver={(e) => (e.stopPropagation(), setHover(true))}
            onPointerOut={(e) => setHover(false)}
        >
            <boxGeometry />
            <meshPhysicalMaterial {...materialProps} />
            <Edges visible={isSelected} scale={1.1} renderOrder={1000}>
                <meshBasicMaterial transparent color="#333" depthTest={false} />
            </Edges>
        </mesh>
    )
}

const Scene = () => {
    const theme = useTheme()
    const [selected, setSelected] = useState([])

    return (
        <>
            <Canvas
                dpr={[1, 2]}
                orthographic
                camera={{ position: [-10, 10, 10], zoom: 100 }}
            >
                <pointLight position={[10, 10, 10]} />
                <Suspense fallback={null}>
                    <Select multiple box onChange={setSelected}>
                        <Cube
                            scale={0.9}
                            position={[-1, 0, 0]}
                            color="orange"
                            transmission={1}
                            thickness={-2}
                            envMapIntensity={5}
                        />
                        <Cube
                            scale={0.9}
                            position={[0, 0, 0]}
                            color="#eb8686"
                            envMapIntensity={2}
                        />
                        <Cube
                            scale={0.9}
                            position={[0, 0, -1]}
                            color="hotpink"
                            transmission={1}
                            thickness={-2}
                            envMapIntensity={5}
                        />
                        <Cube
                            scale={[1, 0.9, 0.9]}
                            position={[0.05, 0, 1]}
                            color="aquamarine"
                            metalness={0}
                        />
                        <Cube
                            scale={[0.9, 0.9, 1.9]}
                            position={[1, 0, 0.5]}
                            color="aquamarine"
                            metalness={0}
                        />
                    </Select>
                    <Environment preset="city" />
                    <ContactShadows
                        frames={1}
                        position={[0, -0.5, 0]}
                        scale={10}
                        opacity={0.4}
                        far={1}
                        blur={2}
                    />
                </Suspense>
                <OrbitControls
                    makeDefault
                    rotateSpeed={2}
                    minPolarAngle={0}
                    maxPolarAngle={Math.PI / 2.5}
                />
                <Sky />
            </Canvas>
            <Panel selected={selected} />
        </>
    )
}
