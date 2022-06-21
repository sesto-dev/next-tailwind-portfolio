import React from 'react'
import Link from 'next/link'
import { Layout } from '../geist-abstraction'

import { themePreference } from '../state/Context'
import config from '../main.config'
import Projects from '../components/Projects'

const Index = () => {
    return (
        <Layout
            config={config}
            themePreference={themePreference}
            crownLarge="WELCOME..."
            crownSmall="I'm Amirhossein Mohammadi. I'm a self-taught developer & an architecture student. In my spare time I try to work on open-source projects. Most of my open-source projects below 👇🏻 are focused on one thing; to make deploying production apps faster!"
        >
            <Projects />
        </Layout>
    )
}

export default Index
