import { useTheme, Text, Card, Grid, Spacer, Code } from '@geist-ui/core'
import Layout from '../../next-dashboard/components/Layout'

import { themePreference } from '../../state/Context'
import config from '../../main.config'

export default function () {
    const links = ['http://github.com/accretence/create-next-dashboard']
    const theme = useTheme()
    const project = config.projects[0]

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
                                    bit of ceremony to do with plain npm.
                                    <Spacer />
                                    You can visit the{' '}
                                    <Code>create-next-dashboard</Code> ecosystem
                                    provided by the links below.
                                </Text>
                                <Spacer />
                                <Grid.Container gap={1}>
                                    {links.map((link) => (
                                        <Grid key={link} xs={24} md={12}>
                                            <a
                                                style={{ width: '100%' }}
                                                href={link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <Card hoverable>
                                                    <Text h4 my={0}>
                                                        🔗 GITHUB
                                                    </Text>
                                                    <Card.Footer>
                                                        <Code>{link}</Code>
                                                    </Card.Footer>
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
