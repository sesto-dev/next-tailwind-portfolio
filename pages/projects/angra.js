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
    const project = config.projects[2]

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
                                <Text h3>Introduction to Nodemailer.js</Text>
                                <Text small type="secondary">
                                    Nodemailer is a module for Node.js
                                    applications to allow easy as cake email
                                    sending. The project got started back in
                                    2010 when there was no sane option to send
                                    email messages, today it is the solution
                                    most Node.js users turn to by default.
                                </Text>
                                <Display shadow>
                                    <Image width="500pt" src={project.poster} />
                                </Display>
                                <Text h3>Introduction to Angra</Text>
                                <Text small type="secondary">
                                    Angra is an{' '}
                                    <a
                                        href="https://www.npmjs.com/package/angra"
                                        target="_blank"
                                    >
                                        NPM Module
                                    </a>{' '}
                                    to send transactional emails using only SMTP
                                    credentials.
                                </Text>
                                <Display shadow caption="Angra Source-Code">
                                    <a
                                        href="http://github.com/accretence/angra"
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
                                                https://github.com/accretence/angra
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
