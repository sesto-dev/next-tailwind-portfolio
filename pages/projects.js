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
import config from '../config'

const Projects = () => {
    return (
        <>
            <Helmet config={config} title="PROJECTS" />
            <Header config={config} themePreference={themePreference} />
            <Banner
                header="PROJECTS"
                small="Interesting projects I've been a part of."
            />
            <Wrapper>
                {config.projects.map((project) => (
                    <Project key={project.name} project={project} />
                ))}
            </Wrapper>
            <Footer config={config} />
        </>
    )
}

export default Projects
