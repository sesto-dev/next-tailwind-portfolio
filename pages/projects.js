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
import Projects from '../components/Projects'
import config from '../main.config'
import { Grid } from '@geist-ui/core'

const ProjectsIndex = () => {
    return (
        <>
            <Helmet config={config} title="PROJECTS" />
            <Header config={config} themePreference={themePreference} />
            <Banner
                header="PROJECTS"
                small="Interesting projects I've been a part of..."
            />
            <Wrapper>
                <Projects />
            </Wrapper>
            <Footer config={config} />
        </>
    )
}

export default ProjectsIndex
