import { useState } from 'react'
import {
    Card,
    Display,
    Spacer,
    Text,
    Description,
    Grid,
    Link as GeistLink,
    useTheme,
    Checkbox,
} from '@geist-ui/core'
import { Layout } from '../../next-dashboard-abstraction'

import { themePreference } from '../../state/Context'
import config from '../../main.config'
import Scene from '../../components/three/BachelorsThesis'

const Thesis = () => {
    const theme = useTheme()
    const [visibilities, setVisibilities] = useState({
        floor: true,
        ceiling: true,
        piping: true,
        ducting: true,
        lighting: true,
        structure: true,
        curtain: true,
        panels: true,
        rooms: true,
    })

    let options = [
        'floor',
        'ceiling',
        'piping',
        'ducting',
        'lighting',
        'structure',
        'curtain',
        'panels',
        'rooms',
    ]

    const handler = (val) => {
        let temp = {}

        for (let i = 0; i < options.length; i++) {
            const element = options[i]
            temp[element] = false
        }

        for (let j = 0; j < val.length; j++) {
            const element = val[j]
            temp[element] = true
        }

        setVisibilities(temp)
    }

    return (
        <>
            <Layout
                config={config}
                themePreference={themePreference}
                crownLarge="Bachelor's Thesis: Transparent Architecture"
                crownSmall="June 2019 - Bachelor's of Architectural Engineering"
                metaTitle="Transparent Architecture"
                metaDescription="June 2019 - Bachelor's of Architectural Engineering Thesis"
                metaImage="https://i.imgur.com/BBmqRBv.jpg"
            >
                <Grid.Container gap={1}>
                    <Grid xs={24}>
                        <Card
                            style={{
                                backgroundColor: `${theme.palette.accents_1}`,
                            }}
                            shadow
                            width="100%"
                        >
                            <Text h4 py={0} my={0}>
                                INTERACTIVE 3D VIEW 🎮
                            </Text>
                            <Text small>
                                ... you can use your 🐭 or 👆 if you have a
                                touch screen device to orbit the model after it
                                loads.
                            </Text>
                            <Spacer />
                            <Scene visibilities={visibilities} />
                            <Display mt={0.5}>
                                <Text h4 mt={0} mb={2}>
                                    Turn Parts On/ Off ⚡🔌 in the model using
                                    this 👇 menu!
                                </Text>
                                <Checkbox.Group
                                    value={options}
                                    onChange={handler}
                                >
                                    <Grid.Container gap={1}>
                                        {options.map((option) => (
                                            <Grid
                                                key={option}
                                                xs={12}
                                                sm={8}
                                                md={6}
                                                my={1}
                                            >
                                                <Checkbox
                                                    type="secondary"
                                                    value={option}
                                                >
                                                    <Description
                                                        title="Geometry"
                                                        content={option.toUpperCase()}
                                                    />
                                                </Checkbox>
                                            </Grid>
                                        ))}
                                    </Grid.Container>
                                </Checkbox.Group>
                            </Display>
                        </Card>
                    </Grid>
                    <Grid xs={24}>
                        <Nav />
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

const Nav = () => {
    return (
        <GeistLink
            width="100%"
            target="_blank"
            href="https://drive.google.com/file/d/1L14SigVJXECHbRlG4yqt_H056ij_nsxV/view"
        >
            <Card hoverable width="100%">
                <Text h4 my={0}>
                    🔗 PDF
                </Text>
                <Text small>Read the full PDF Presentation!</Text>
            </Card>
        </GeistLink>
    )
}

export default Thesis
