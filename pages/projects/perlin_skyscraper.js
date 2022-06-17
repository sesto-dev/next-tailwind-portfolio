import React, { useRef, useState, Suspense } from 'react'
import {
    useTheme,
    Card,
    Slider,
    Description,
    Grid,
    Text,
    Link as GeistLink,
} from '@geist-ui/core'
import {
    Badged,
    Banner,
    Footer,
    Header,
    Helmet,
    Wrapper,
    YouTube,
} from '../../geist-components'

import { themePreference } from '../../state/Context'
import config from '../../main.config'

const Masters = () => {
    const theme = useTheme()

    return (
        <>
            <Helmet config={config} title="THREE" />
            <Header config={config} themePreference={themePreference} />
            <Banner header="THREE" small="3 Dimensional." />
            <Wrapper>
                <Grid.Container gap={1}>
                    <Grid xs={24}>
                        <YouTube embedId="qIsABW5UTys" />
                    </Grid>
                    <Grid xs={24}>
                        <GeistLink
                            width="100%"
                            target="_blank"
                            rel="noopener"
                            href="https://drive.google.com/file/d/1FIGE4zIfGLg-_Imsc_dsi3qJVl8UFSnS/view?usp=sharing"
                        >
                            <Card width="100%" className="Invert">
                                <Text h4 my={0}>
                                    🔗 PDF
                                </Text>
                                <Text small>
                                    Read the full PDF Presentation!
                                </Text>
                            </Card>
                        </GeistLink>
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
