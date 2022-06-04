import React, { useRef, useState, Suspense } from 'react'

// Components
import Meta from '../components/meta'
import Header from '../components/header/Header'
import Footer from '../components/Footer'
import Badged from '../components/Badged'
import { Room } from '../components/three/Room'

import {
    OrbitControls,
    PresentationControls,
    Bounds,
    BakeShadows,
} from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'

// Additional Libraries
import {
    useTheme,
    Text,
    Image,
    Link,
    Spacer,
    Card,
    Slider,
    Description,
    Grid,
} from '@geist-ui/core'

const config = require('../config.json')

const Three = () => {
    const theme = useTheme()

    const [scale, setScale] = useState(1)
    const scaleHandler = (val) => {
        setScale(val)
    }

    const [fov, setFOV] = useState(100)
    const fovHandler = (val) => {
        setFOV(val)
    }

    return (
        <>
            <Meta title="THREE" />
            <Header />
            <div className="PageHeader">
                <div style={{ marginTop: '2rem', marginBottom: '2rem' }}>
                    <Text h2>THREE</Text>
                    <Grid.Container gap={3}>
                        <Grid xs={24}>
                            <Text small>Three.js Experiments</Text>
                        </Grid>
                    </Grid.Container>
                </div>
            </div>
            <Spacer />
            <div className="PageWrapper">
                <div className="PageContent">
                    <Grid.Container mt={1} gap={1}>
                        <Grid xs={24}>
                            <Card
                                width={'100%'}
                                height={'50rem'}
                                className="Justify"
                            >
                                <Card.Content>
                                    <ThreeSceneOne />
                                </Card.Content>
                            </Card>
                        </Grid>
                    </Grid.Container>

                    <Card mt={1} padding={1}>
                        <Grid.Container mt={1} gap={1}>
                            <Grid width="100%" xs={24} sm={12}>
                                <Description
                                    width="100%"
                                    title="Scale"
                                    content={
                                        <Slider
                                            mt={1}
                                            step={0.1}
                                            max={2.1}
                                            min={0.7}
                                            initialValue={scale}
                                            showMarkers
                                            width="100%"
                                            value={scale}
                                            onChange={scaleHandler}
                                        />
                                    }
                                />
                            </Grid>
                        </Grid.Container>
                    </Card>
                </div>
            </div>
            <Footer />
            <style jsx global>
                {`
                    .content {
                        height: 100% !important;
                    }
                    small {
                        text-align: justify;
                    }
                    .PageHeader {
                        width: ${theme.layout.pageWidthWithMargin};
                        max-width: 100%;
                        margin: 0 auto;
                        padding: 0 ${theme.layout.pageMargin};
                        box-sizing: border-box;
                    }
                    .PageWrapper {
                        background-color: ${theme.palette.accents_1};
                    }
                    .PageContent {
                        width: ${theme.layout.pageWidthWithMargin};
                        max-width: 100%;
                        margin: 0 auto;
                        padding: 0 ${theme.layout.pageMargin};
                        transform: translateY(-35px);
                        box-sizing: border-box;
                    }
                `}
            </style>
        </>
    )
}

const ThreeSceneOne = () => {
    const theme = useTheme()

    return (
        <Canvas
            orthographic
            shadows
            dpr={[1, 2]}
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
                    <Room scale={0.1} />
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
    )
}

export default Three
