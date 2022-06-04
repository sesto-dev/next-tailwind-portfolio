import React from 'react'
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

import Helmet from '../components/Helmet'
import Header from '../components/header/Header'
import Footer from '../components/Footer'
import Badged from '../components/Badged'
import config from '../config'
import Banner from '../components/Banner'
import Wrapper from '../components/Wrapper'

const Tech = () => {
    const theme = useTheme()

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
                    <Card key={project.name} mt={1} className="Justify Invert">
                        <div className="Flex">
                            <Text h3>{project.name}</Text>
                            <div>
                                <Text mr={0.333} small b>
                                    {Object.keys(project.links).map((key) => (
                                        <Link
                                            mx={0.333}
                                            target="_blank"
                                            rel="noopener"
                                            href={project.links[key]}
                                        >
                                            {key}
                                        </Link>
                                    ))}
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
            </Wrapper>
            <Footer />
            <style jsx global>
                {`
                    .Flex {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                    }
                    small {
                        text-align: justify;
                    }
                    .Invert:hover {
                        filter: invert(1);
                    }
                `}
            </style>
        </>
    )
}

export default Tech
