import { useState } from 'react'
import Link from 'next/link'
import {
    Card,
    Spacer,
    Text,
    Select,
    Grid,
    Link as GeistLink,
} from '@geist-ui/core'
import { Layout } from '../../geist-abstraction'

import { themePreference } from '../../state/Context'
import config from '../../main.config'
import Scene from '../../components/three/BachelorsThesis'

const Thesis = () => {
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
                        <Card hoverable width="100%">
                            <Text h4 py={0} my={0}>
                                Turn Parts On/ Off ⚡🔌
                            </Text>
                            <Text small>... using this 👇 menu!</Text>
                            <Select
                                multiple
                                clearable={true}
                                initialValue={options}
                                onChange={handler}
                                width="100%"
                                my={1}
                            >
                                {options.map((option) => (
                                    <Select.Option key={option} value={option}>
                                        {option}
                                    </Select.Option>
                                ))}
                            </Select>
                        </Card>
                    </Grid>
                    <Grid xs={24}>
                        <Card hoverable width="100%">
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
                        </Card>
                    </Grid>
                    <Nav />
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
        <>
            <Grid xs={24}>
                <GeistLink
                    width="100%"
                    target="_blank"
                    rel="noopener"
                    href="https://drive.google.com/file/d/1L14SigVJXECHbRlG4yqt_H056ij_nsxV/view"
                >
                    <Card hoverable width="100%">
                        <Text h4 my={0}>
                            🔗 PDF
                        </Text>
                        <Text small>Read the full PDF Presentation!</Text>
                    </Card>
                </GeistLink>
            </Grid>
        </>
    )
}

export default Thesis
