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
import Project from '../components/Project'

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
                <Card>
                    <Collapse.Group>
                        <Collapse
                            title="PROJECTS"
                            subtitle="Interesting projects I've been a part of..."
                            style={{ borderTop: 'none' }}
                        >
                            <Grid.Container my={2} gap={1}>
                                {config.projects.map((project) => (
                                    <Grid xs={24}>
                                        <Project
                                            key={project.name}
                                            project={project}
                                        />
                                    </Grid>
                                ))}
                            </Grid.Container>
                        </Collapse>
                        <Collapse
                            title="EXPERIENCES"
                            subtitle="My professional experiences..."
                            style={{ borderBottom: 'none' }}
                        >
                            <Grid.Container gap={1}>
                                {config.experiences.map((exp) => (
                                    <Grid xs={24}>
                                        <Card
                                            key={exp.title}
                                            width="100%"
                                            className="Justify Invert"
                                        >
                                            <Text h3>{exp.title}</Text>
                                            <Text small b>
                                                {exp.employer}, {exp.period}
                                            </Text>
                                            <br />
                                            <Text small>{exp.description}</Text>
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid.Container>
                        </Collapse>
                    </Collapse.Group>
                </Card>
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
