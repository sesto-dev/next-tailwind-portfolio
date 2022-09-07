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
import Layout from '../../next-dashboard/components/Layout'

import { themePreference } from '../../state/Context'
import config from '../../main.config'

export default function () {
    const theme = useTheme()
    const project = config.projects[1]

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
                                <Text h3>Introduction to Aryana</Text>
                                <Text small type="secondary">
                                    Aryana is a singular component UI library
                                    built upon geist-ui.
                                </Text>
                                <Display shadow>
                                    <Image width="500pt" src={project.poster} />
                                </Display>
                                <Text h3>Introduction to Aryana</Text>
                                <Text small type="secondary">
                                    Aryana is an{' '}
                                    <a
                                        href="https://www.npmjs.com/package/aryana"
                                        target="_blank"
                                    >
                                        NPM Module
                                    </a>{' '}
                                    to send transactional emails using only SMTP
                                    credentials.
                                </Text>
                                <Display shadow caption="Aryana Source-Code">
                                    <a
                                        href="http://github.com/accretence/aryana"
                                        target="_blank"
                                    >
                                        <Card hoverable width="500pt">
                                            <Text b font={1.1}>
                                                🔗 GITHUB
                                            </Text>
                                            <br />
                                            <Code
                                                style={{ fontSize: '0.8rem' }}
                                            >
                                                https://github.com/accretence/aryana
                                            </Code>
                                        </Card>
                                    </a>
                                </Display>
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
