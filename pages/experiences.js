import React from 'react'
import Link from 'next/link'
import { useTheme, Text, Card, Image, Grid } from '@geist-ui/core'
import { Layout } from '../geist-abstraction'

import { themePreference } from '../state/Context'
import config from '../main.config'

const Experiences = () => {
    const theme = useTheme()
    return (
        <>
            <Layout
                config={config}
                themePreference={themePreference}
                crownLarge="Experiences"
                crownSmall="My professional experiences..."
                metaTitle="Experiences"
            >
                <Grid.Container gap={1}>
                    {config.experiences.map((exp) => (
                        <Grid xs={24} md={12}>
                            <Card
                                hoverable
                                key={exp.title}
                                width="100%"
                                className="justify"
                            >
                                {exp.poster && (
                                    <Image
                                        mb={0.5}
                                        height="10rem"
                                        width="100%"
                                        src={exp.poster}
                                        style={{
                                            objectFit: 'cover',
                                        }}
                                    />
                                )}
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
            </Layout>
            <style jsx global>
                {`
                    .justify .content {
                        text-align: justify;
                    }
                    .content small {
                        color: ${theme.palette.accents_6}!important;
                    }
                `}
            </style>
        </>
    )
}

export default Experiences
