import React from 'react'

// Components
import Meta from '../components/meta'
import Header from '../components/header/Header'
import Footer from '../components/Footer'
import Badged from '../components/Badged'

// Additional Libraries
import {
    useTheme,
    Text,
    Image,
    Link,
    Spacer,
    Card,
    Description,
    Grid,
} from '@geist-ui/core'

const config = require('../config.json')

const Tech = () => {
    const theme = useTheme()

    return (
        <>
            <Meta title="PROJECTS" />
            <Header />
            <div className="PageHeader">
                <div style={{ marginTop: '2rem', marginBottom: '2rem' }}>
                    <Text h2>PROJECTS</Text>
                    <Grid.Container gap={3}>
                        <Grid xs={24}>
                            <Text small>
                                Interesting projects I've been a part of.
                            </Text>
                        </Grid>
                    </Grid.Container>
                </div>
            </div>
            <Spacer />
            <div className="PageWrapper">
                <div className="PageContent">
                    {config.projects.map((project) => (
                        <Card key={project.name} mt={1} className="WikiContent">
                            <div className="ProjectHeader">
                                <Text h3>{project.name}</Text>
                                <div>
                                    <Text mr={0.333} small b>
                                        <Link
                                            target="_blank"
                                            rel="noopener"
                                            href={project.website}
                                        >
                                            WEB
                                        </Link>
                                    </Text>
                                    <Text small b>
                                        <Link
                                            target="_blank"
                                            rel="noopener"
                                            href={project.twitter}
                                        >
                                            TWITTER
                                        </Link>
                                    </Text>
                                </div>
                            </div>
                            <Text small b>
                                {project.position}, {project.period}
                            </Text>
                            <br />
                            <Text small>{project.description}</Text>
                        </Card>
                    ))}
                </div>
            </div>
            <Footer />
            <style jsx global>
                {`
                    .ProjectHeader {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                    }
                    small {
                        text-align: justify;
                    }
                    .card:hover {
                        filter: invert(1);
                    }
                    .PageHeader {
                        width: ${theme.layout.pageWidthWithMargin};
                        max-width: 100%;
                        margin: 0 auto;
                        padding: 0 ${theme.layout.pageMargin};
                        box-sizing: border-box;
                    }
                    .PageWrapper {
                        background-color: ${theme.palette.accents_1};
                    }
                    .PageContent {
                        width: ${theme.layout.pageWidthWithMargin};
                        max-width: 100%;
                        margin: 0 auto;
                        padding: 0 ${theme.layout.pageMargin};
                        transform: translateY(-35px);
                        box-sizing: border-box;
                    }
                `}
            </style>
        </>
    )
}

export default Tech
