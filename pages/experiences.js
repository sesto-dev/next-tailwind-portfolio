import React from 'react'
import { useTheme, Grid } from '@geist-ui/core'
import Layout from '../next-dashboard/components/Layout'

import { themePreference } from '../state/Context'
import config from '../main.config'
import Experience from '../components/Experience'

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
                        <Grid key={exp.title} xs={24} md={12}>
                            <Experience exp={exp} theme={theme} />
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
