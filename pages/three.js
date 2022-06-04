import React, { useRef, useState, Suspense } from 'react'

// Components
import Helmet from '../components/Helmet'
import Header from '../components/header/Header'
import Footer from '../components/Footer'
import Badged from '../components/Badged'
import Room from '../components/three/Room'
import Soft from '../components/three/Soft'

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
            <Helmet title="THREE" />
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
                                height={'45rem'}
                                className="Justify"
                            >
                                <Card.Content>
                                    <Soft />
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

export default Three
