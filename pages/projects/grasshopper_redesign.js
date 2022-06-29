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

const Next_Dashboard = () => {
    const theme = useTheme()

    return (
        <>
            <Layout
                config={config}
                themePreference={themePreference}
                crownLarge="Grasshopper UI Redesign"
                crownSmall="My attempt to bring Rhino Grasshopper's UI up-to-date in Figma!"
                metaTitle="Grasshopper UI Redesign"
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
                                <Text h3>Introduction to Grasshopper</Text>
                                <Text small type="secondary">
                                    Grasshopper is a graphical algorithm editor
                                    tightly integrated with Rhino’s 3-D modeling
                                    tools, allowing designers to build form
                                    generators from the simple to the
                                    awe-inspiring.
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

export default Next_Dashboard
