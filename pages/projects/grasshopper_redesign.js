import { useTheme, Display, Text, Card, Image, Grid } from '@geist-ui/core'
import Layout from '../../next-dashboard/components/Layout'

import { themePreference } from '../../state/Context'
import config from '../../main.config'

export default function () {
    const theme = useTheme()
    const project = config.projects[6]

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
                                <Text h3>Introduction to Grasshopper</Text>
                                <Text small type="secondary">
                                    Grasshopper is a graphical algorithm editor
                                    tightly integrated with Rhino’s 3-D modeling
                                    tools. The program was created by David
                                    Rutten at Robert McNeel & Associates.
                                    Programs are created by dragging components
                                    onto a canvas. The outputs to these
                                    components are then connected to the inputs
                                    of subsequent components, allowing designers
                                    to build form generators from the simple to
                                    the awe-inspiring.
                                </Text>
                                <Display
                                    shadow
                                    caption="Grasshopper UI Representation"
                                >
                                    <Image
                                        width="500pt"
                                        src="https://i.imgur.com/FWdfcmV.png"
                                    />
                                </Display>
                                <Display shadow caption="My Design">
                                    <Image
                                        width="500pt"
                                        src="https://i.imgur.com/2LoQw9M.png"
                                    />
                                </Display>
                                <Text h3>Figma Presentation</Text>
                                <Text small type="secondary">
                                    You can visit the redesign here in the{' '}
                                    <a
                                        href="https://www.figma.com/community/file/1123880782486860570"
                                        target="_blank"
                                    >
                                        Figma Prototype
                                    </a>
                                    .
                                </Text>
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
