import React from 'react'

import Helmet from '../components/Helmet'
import Header from '../components/header/Header'
import Footer from '../components/Footer'
import config from '../config'
import Banner from '../components/Banner'
import Wrapper from '../components/Wrapper'
import Project from '../components/Project'

const Tech = () => {
    return (
        <>
            <Helmet title="PROJECTS" />
            <Header />
            <Banner
                header="PROJECTS"
                small="Interesting projects I've been a part of."
            />
            <Wrapper>
                {config.projects.map((project) => (
                    <Project project={project} />
                ))}
            </Wrapper>
            <Footer />
        </>
    )
}

export default Tech
