import React, { useRef, useState } from 'react'

// Components
import Meta from '../components/meta'
import Header from '../components/header/Header'
import Footer from '../components/Footer'
import Badged from '../components/Badged'

import { OrbitControls, PresentationControls } from '@react-three/drei'
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
                        <Grid xs={24} md={12}>
                            <Card
                                width={'100%'}
                                height={'20rem'}
                                className="Justify"
                            >
                                <Card.Content>
                                    <ThreeSceneOne
                                        fov={fov}
                                        scale={scale}
                                        position={[0, 0, 0]}
                                    />
                                </Card.Content>
                            </Card>
                        </Grid>
                        <Grid xs={24} md={12}>
                            <Card
                                width={'100%'}
                                height={'20rem'}
                                className="Justify"
                            >
                                <Card.Content>
                                    <ThreeSceneTwo
                                        fov={fov}
                                        scale={scale}
                                        position={[0, 0, 0]}
                                    />
                                </Card.Content>
                            </Card>
                        </Grid>
                    </Grid.Container>

                    <Card mt={1} padding={1}>
                        <Description
                            title="Scale"
                            content={
                                <Slider
                                    mt={1}
                                    step={0.1}
                                    max={2.1}
                                    min={0.7}
                                    initialValue={scale}
                                    showMarkers
                                    width="50%"
                                    value={scale}
                                    onChange={scaleHandler}
                                />
                            }
                        />
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

const ThreeSceneOne = ({ fov, scale, position }) => {
    const theme = useTheme()

    return (
        <Canvas
            orthographic
            shadows
            dpr={[1, 2]}
            camera={{ position: [10, 10, 10], zoom: 50 }}
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
                intensity={3}
                position={[-50, 50, 40]}
                angle={0.25}
                penumbra={1}
                shadow-mapSize={[128, 128]}
                shadow-bias={0.00005}
            />

            <pointLight position={[-5, 25, 10]} />
            <Box scale={scale} position={position} />
            <OrbitControls
                makeDefault
                minAzimuthAngle={0}
                maxAzimuthAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 3}
                maxPolarAngle={Math.PI / 3}
            />
            <gridHelper
                args={[
                    10,
                    20,
                    theme.palette.accents_3,
                    theme.palette.accents_2,
                ]}
                position={[0, -0.5, 0]}
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

const ThreeSceneTwo = ({ fov, scale, position }) => {
    const theme = useTheme()

    return (
        <Canvas>
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
                intensity={3}
                position={[-50, 50, 40]}
                angle={0.25}
                penumbra={1}
                shadow-mapSize={[128, 128]}
                shadow-bias={0.00005}
            />
            <pointLight position={[-5, 25, 10]} />
            <PresentationControls
                global={false} // Spin globally or by dragging the model
                cursor={true} // Whether to toggle cursor style on drag
                snap={false} // Snap-back to center (can also be a spring config)
                speed={1} // Speed factor
                zoom={2} // Zoom factor when half the polar-max is reached
                rotation={[0, 0, 0]} // Default rotation
                polar={[0, Math.PI / 2]} // Vertical limits
                azimuth={[-Infinity, Infinity]} // Horizontal limits
                config={{ mass: 1, tension: 170, friction: 26 }} // Spring config
            >
                <Box scale={scale} position={position} />
            </PresentationControls>{' '}
        </Canvas>
    )
}

const Box = ({ scale, position }) => {
    const rotation = 0
    const mesh = useRef()

    useFrame((state, delta) => {
        mesh.current.rotation.x += rotation
        mesh.current.rotation.y += rotation
    })

    return (
        <mesh scale={scale} position={position} ref={mesh}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={'orange'} />
        </mesh>
    )
}

export default Three
