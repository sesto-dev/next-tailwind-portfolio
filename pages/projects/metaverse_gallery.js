import { useState } from 'react'
import {
    Card,
    Display,
    Spacer,
    Text,
    Description,
    Grid,
    useTheme,
    Checkbox,
} from '@geist-ui/core'
import Layout from '../../next-dashboard/components/Layout'

import { themePreference } from '../../state/Context'
import config from '../../main.config'
import Scene from '../../components/three/Gallery'

export default function () {
    const theme = useTheme()
    const project = config.projects[3]

    return (
        <>
            <Layout
                config={config}
                themePreference={themePreference}
                crownLarge={project.title}
                crownSmall={project.description}
                metaTitle={project.title}
                metaDescription={project.description}
                metaImage={project.poster}
            >
                <Grid.Container gap={1}>
                    <Grid xs={24}>
                        <Card
                            style={{
                                backgroundColor: theme.palette.accents_1,
                            }}
                            shadow
                            width="100%"
                        >
                            <Spacer />
                            <Scene />
                        </Card>
                    </Grid>
                </Grid.Container>
            </Layout>
            <style jsx global>
                {`
                    .content {
                        height: 100% !important;
                    }
                    small {
                        text-align: justify;
                    }
                `}
            </style>
        </>
    )
}
