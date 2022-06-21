import React from 'react'
import Link from 'next/link'
import { useTheme, Text, Card, Image, Grid } from '@geist-ui/core'
import { Layout } from '../geist-abstraction'

import { themePreference } from '../state/Context'
import config from '../main.config'

const Contact = () => {
    const theme = useTheme()
    const { links } = config

    return (
        <>
            <Layout
                config={config}
                themePreference={themePreference}
                crownLarge="Contact"
                crownSmall="You can use my EMAIL to get in touch..."
                metaTitle="Experiences"
            >
                <Grid.Container gap={1}>
                    {Object.keys(links).map((key, i) => {
                        let link = links[key]
                        if (link.includes('mailto:')) link = link.slice(7)
                        if (link.includes('https://')) link = link.slice(8)

                        return (
                            <Grid xs={24} xl={12}>
                                <a
                                    style={{ width: '100%' }}
                                    key={i}
                                    href={links[key]}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Card hoverable width="100%">
                                        <Text b mb={0}>
                                            {key.toUpperCase()}
                                        </Text>
                                        <br />
                                        <Text mt={0} small type="secondary">
                                            {link}
                                        </Text>
                                    </Card>
                                </a>
                            </Grid>
                        )
                    })}
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
