import React from 'react'
import {
    useTheme,
    Display,
    Text,
    Card,
    Image,
    Grid,
    Spacer,
    Code,
} from '@geist-ui/core'
import { Layout } from '../../next-dashboard-abstraction'

import { themePreference } from '../../state/Context'
import config from '../../main.config'

const Geist = () => {
    const links = [
        'http://github.com/accretence/create-next-dashboard',
        'http://github.com/accretence/next-dashboard-boilerplate',
        'http://github.com/accretence/next-dashboard-abstraction',
    ]
    const theme = useTheme()

    return (
        <>
            <Layout
                config={config}
                themePreference={themePreference}
                crownLarge="Create-Next-Dashboard"
                crownSmall="1-Line script that sets in motion a barrage of tools and web-services to deploy a highly-customizable state-of-the-art website, like this one!"
                metaTitle="Create-Next-Dashboard"
            >
                <Grid.Container gap={1}>
                    <Grid xs={24}>
                        <Card
                            style={{
                                backgroundColor: `${theme.palette.accents_1}`,
                            }}
                            shadow
                            padding={2}
                            width="100%"
                        >
                            <Card.Content>
                                <Text h3>Introduction to NPX</Text>
                                <Text small type="secondary">
                                    npx is a tool intended to help round out the
                                    experience of using packages from the npm
                                    registry — the same way npm makes it super
                                    easy to install and manage dependencies
                                    hosted on the registry, npx makes it easy to
                                    use CLI tools and other executables hosted
                                    on the registry. It greatly simplifies a
                                    number of things that, until now, required a
                                    bit of ceremony to do with plain npm:
                                </Text>
                                <Spacer />
                                <Grid.Container gap={1}>
                                    {links.map((link) => (
                                        <Grid key={link} xs={24} md={8}>
                                            <a
                                                style={{ width: '100%' }}
                                                href={link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <Card hoverable>
                                                    <Text h4 my={0}>
                                                        🔗 Github
                                                    </Text>
                                                    <Text
                                                        small
                                                        type="secondary"
                                                        style={{
                                                            color: theme.palette
                                                                .accents_3,
                                                        }}
                                                    >
                                                        <Code>{link}</Code>
                                                    </Text>
                                                </Card>
                                            </a>
                                        </Grid>
                                    ))}
                                </Grid.Container>
                            </Card.Content>
                        </Card>
                    </Grid>
                </Grid.Container>
            </Layout>
            <style jsx global>
                {`
                    .content {
                        text-align: justify !important;
                    }
                `}
            </style>
        </>
    )
}

export default Geist
