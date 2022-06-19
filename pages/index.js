import React from 'react'
import Link from 'next/link'
import { Layout } from '../geist-components'

import { themePreference } from '../state/Context'
import config from '../main.config'
import Projects from '../components/Projects'

const Index = () => {
    return (
        <Layout
            config={config}
            themePreference={themePreference}
            bannerLarge="Accretence"
            bannerSmall="I'm an architecture 📐 student & a self-taught Full-Stack Developer 👨‍💻. My educational & early professional experience is in Architectural Engineering."
        >
            <Projects />
        </Layout>
    )
}

export default Index
