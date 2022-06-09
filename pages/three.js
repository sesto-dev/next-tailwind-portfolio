import React, { useRef, useState, Suspense } from 'react'
import { useTheme, Card, Slider, Description, Grid } from '@geist-ui/core'
import {
    Badged,
    Banner,
    Footer,
    Header,
    Helmet,
    Wrapper,
} from '../geist-components'

import Room from '../components/three/Room'
import Soft from '../components/three/Soft'

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
            <Helmet config={config} title="THREE" />
            <Header config={config} />
            <Banner header="THREE" small="3 Dimensional." />
            <Wrapper>
                <>
                    <Grid.Container gap={1}>
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
                    <Card padding={1}>
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
                </>
            </Wrapper>
            <Footer config={config} />
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

export default Three
