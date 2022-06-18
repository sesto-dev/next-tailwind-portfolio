import React from 'react'
import Link from 'next/link'
import { useTheme, Grid, Card, Image, Text, Collapse } from '@geist-ui/core'
import {
    Badged,
    Banner,
    Footer,
    Header,
    Helmet,
    Wrapper,
} from '../geist-components'

import { themePreference } from '../state/Context'
import config from '../main.config'
import Projects from '../components/Projects'

const Index = () => {
    const theme = useTheme()

    return (
        <>
            <Helmet config={config} />
            <Header config={config} themePreference={themePreference} />
            <Banner
                header={'WELCOME! 👋'}
                small={`I'm an architecture 📐 student & a self-taught Full-Stack Developer 👨‍💻. My educational & early professional experience is in Architectural Engineering.`}
            />
            <Wrapper>
                <Projects />
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
