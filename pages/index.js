import React from 'react'
import Link from 'next/link'
import { Layout } from '../geist-abstraction'
import { Code, useTheme } from '@geist-ui/core'
import { themePreference } from '../state/Context'
import config from '../main.config'
import Projects from '../components/Projects'

const Index = () => {
    const theme = useTheme()

    return (
        <Layout
            config={config}
            themePreference={themePreference}
            crownLarge="WELCOME..."
            crownSmall={
                <>
                    I'm Amirhossein Mohammadi, a{' '}
                    <Code>Self-Taught Developer</Code> and an{' '}
                    <Code>Architecture Graduate</Code>. I work at the
                    intersection of programming and design. In my spare time I
                    try to work on open-source projects. Most of my open-source
                    projects below 👇🏻 are focused on one thing; make deploying
                    practical production apps faster & more efficient!
                </>
            }
        >
            <Projects />
        </Layout>
    )
}

export default Index
