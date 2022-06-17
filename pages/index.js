import React from 'react'
import Link from 'next/link'
import { useTheme, Grid, Card, Image, Text } from '@geist-ui/core'
import {
    Badged,
    Banner,
    Footer,
    Header,
    Helmet,
    Wrapper,
} from '../geist-components'

import { themePreference } from '../state/Context'
import config from '../config'

const Index = () => {
    const theme = useTheme()

    return (
        <>
            <Helmet config={config} />
            <Header config={config} themePreference={themePreference} />
            <Banner
                header={'WELCOME!'}
                small={`I'm a self-taught Full-Stack Web & Solidity developer. My educational & early professional experience is in Architectural Engineering.`}
            />
            <Wrapper>
                <Grid.Container gap={1}>
                    <Grid xs={12}>
                        <Link href="/projects">
                            <a style={{ width: '100%' }}>
                                <Card className="Invert">
                                    <Text h4 my={0}>
                                        PROJECTS
                                    </Text>
                                    <Text small>
                                        Interesting projects I've been a part
                                        of.
                                    </Text>
                                </Card>
                            </a>
                        </Link>
                    </Grid>
                    <Grid xs={12}>
                        <Link href="/experience">
                            <a style={{ width: '100%' }}>
                                <Card className="Invert">
                                    <Text h4 my={0}>
                                        EXPERIENCE
                                    </Text>
                                    <Text small>
                                        My professional experience.
                                    </Text>
                                </Card>
                            </a>
                        </Link>
                    </Grid>
                </Grid.Container>
            </Wrapper>
            <Footer config={config} />
            <style jsx global>
                {`
                    .Invert:hover {
                        filter: invert(1);
                    }
                    a {
                        color: ${theme.palette.foreground};
                    }
                `}
            </style>
        </>
    )
}

export default Index
