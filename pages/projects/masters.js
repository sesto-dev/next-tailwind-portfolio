import React, { useRef, useState, Suspense } from 'react'
import { useTheme, Card, Slider, Description, Grid } from '@geist-ui/core'
import {
    Badged,
    Banner,
    Footer,
    Header,
    Helmet,
    Wrapper,
} from '../../geist-components'

import { themePreference } from '../../state/Context'
import config from '../../main.config'

const Masters = () => {
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
            <Header config={config} themePreference={themePreference} />
            <Banner header="THREE" small="3 Dimensional." />
            <Wrapper>
                <Grid.Container gap={1}>
                    <Grid xs={24}>
                        <Card
                            width={'100%'}
                            height={'45rem'}
                            className="Justify"
                        >
                            <Card.Content></Card.Content>
                        </Card>
                    </Grid>
                    <Grid xs={24}>
                        <Card width="100%">
                            <Grid.Container gap={1}>
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
                    </Grid>
                </Grid.Container>
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

export default Masters
