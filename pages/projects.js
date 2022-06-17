import React from 'react'
import {
    Badged,
    Banner,
    Footer,
    Header,
    Helmet,
    Wrapper,
} from '../geist-components'

import { themePreference } from '../state/Context'
import Project from '../components/Project'
import config from '../main.config'
import { Grid } from '@geist-ui/core'

const Projects = () => {
    return (
        <>
            <Helmet config={config} title="PROJECTS" />
            <Header config={config} themePreference={themePreference} />
            <Banner
                header="PROJECTS"
                small="Interesting projects I've been a part of..."
            />
            <Wrapper>
                <Grid.Container gap={1}>
                    {config.projects.map((project) => (
                        <Grid key={project.name} xs={24}>
                            <Project key={project.name} project={project} />
                        </Grid>
                    ))}
                </Grid.Container>
            </Wrapper>
            <Footer config={config} />
        </>
    )
}

export default Projects
