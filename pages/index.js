import React from 'react'
import { Layout } from '../next-dashboard-abstraction'
import { Code, useTheme, Grid } from '@geist-ui/core'
import { themePreference } from '../state/Context'
import config from '../main.config'
import Project from '../components/Project'

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
            <Grid.Container gap={1}>
                {config.projects.map((project) => (
                    <Grid key={project.name} sm={24} md={12} xl={8}>
                        <Project
                            key={project.name}
                            theme={theme}
                            project={project}
                        />
                    </Grid>
                ))}
            </Grid.Container>
        </Layout>
    )
}

export default Index
