import React from 'react'
import Link from 'next/link'
import { useTheme, Text, Card, Image, Grid } from '@geist-ui/core'
import { Layout } from '../../geist-abstraction'

import { themePreference } from '../../state/Context'
import config from '../../main.config'

const Contact = () => {
    const theme = useTheme()
    const { links } = config

    return (
        <>
            <Layout
                config={config}
                themePreference={themePreference}
                crownLarge="Contact"
                crownSmall="You can use my E-Mail to get in contact ..."
                metaTitle="Experiences"
            >
                <Grid.Container gap={1}>
                    <Grid xs={24}>
                        <Card width="100%">
                            <iframe
                                width="100%"
                                height="700pt"
                                src="https://miro.com/app/live-embed/uXjVOr855ig=/?moveToViewport=-1192,-669,2048,1200"
                                frameBorder="0"
                                scrolling="no"
                                allowFullScreen
                            />
                        </Card>
                    </Grid>
                </Grid.Container>
            </Layout>
            <style jsx global>
                {`
                    .justify .content {
                        text-align: justify;
                    }
                `}
            </style>
        </>
    )
}

export default Contact
