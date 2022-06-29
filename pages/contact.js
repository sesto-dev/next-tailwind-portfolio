import React from 'react'
import { useTheme, Text, Card, Grid, Code } from '@geist-ui/core'
import { Layout } from '../next-dashboard-abstraction'

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
                crownSmall="These are all the ways we can can get in contact. ;-) E-Mail is easiest and fastest."
                metaTitle="Contact"
            >
                <Grid.Container gap={1}>
                    {Object.keys(links).map((key, i) => {
                        let link = links[key]
                        if (link.includes('mailto:')) link = link.slice(7)
                        if (link.includes('https://')) link = link.slice(8)

                        return (
                            <Grid key={i} xs={24} xl={12}>
                                <a
                                    style={{ width: '100%' }}
                                    href={links[key]}
                                    target="_blank"
                                >
                                    <Card hoverable width="100%">
                                        <Text b mb={0}>
                                            {key.toUpperCase()}
                                        </Text>
                                        <br />
                                        <Code style={{ fontSize: '0.8rem' }}>
                                            {link}
                                        </Code>
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
