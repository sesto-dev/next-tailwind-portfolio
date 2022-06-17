import { useState } from 'react'
import Link from 'next/link'
import { Card, Text, Select, Grid, Link as GeistLink } from '@geist-ui/core'
import {
    Banner,
    Footer,
    Header,
    Helmet,
    Wrapper,
} from '../../../geist-components'

import { themePreference } from '../../../state/Context'
import config from '../../../main.config'
import Model from '../../../components/three/BachelorsThesis'

const Index = () => {
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
            <Helmet config={config} title="THREE" />
            <Header config={config} themePreference={themePreference} />
            <Banner
                header="3D INTERACTIVE MODEL"
                small="You can use your 🐭 or 👆 if you have a touch screen device to orbit the model after it loads."
            />
            <Wrapper>
                <Grid.Container gap={1}>
                    <Grid xs={24}>
                        <Card width="100%">
                            <Text h4 py={0} my={0}>
                                Customize Model Parts
                            </Text>
                            <Text small>
                                Enable or disable model parts using this 👇
                                menu!
                            </Text>
                            <Select
                                multiple
                                clearable={true}
                                initialValue={options}
                                onChange={handler}
                                width="100%"
                                my={1}
                            >
                                <Select.Option value="floor">
                                    Floor
                                </Select.Option>
                                <Select.Option value="ceiling">
                                    Ceiling
                                </Select.Option>
                                <Select.Option value="piping">
                                    Piping
                                </Select.Option>
                                <Select.Option value="ducting">
                                    Ducting
                                </Select.Option>
                                <Select.Option value="lighting">
                                    Lighting
                                </Select.Option>
                                <Select.Option value="structure">
                                    Structure
                                </Select.Option>
                                <Select.Option value="curtain">
                                    Curtain Walls
                                </Select.Option>
                                <Select.Option value="panels">
                                    Solar Panels
                                </Select.Option>
                                <Select.Option value="rooms">
                                    Rooms
                                </Select.Option>
                            </Select>
                            <Model visibilities={visibilities} />
                        </Card>
                    </Grid>
                    <Nav />
                </Grid.Container>
            </Wrapper>
            <Footer config={config} />
            <style jsx global>
                {`
                    .Invert:hover {
                        filter: invert(1);
                    }
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
            <Grid xs={12}>
                <Link href="/projects/thesis/summary">
                    <a style={{ width: '100%' }}>
                        <Card className="Invert">
                            <Text h4 my={0}>
                                ▶ Summary
                            </Text>
                            <Text small>Read the project summary!</Text>
                        </Card>
                    </a>
                </Link>
            </Grid>
            <Grid xs={12}>
                <GeistLink
                    width="100%"
                    target="_blank"
                    rel="noopener"
                    href="https://drive.google.com/file/d/1L14SigVJXECHbRlG4yqt_H056ij_nsxV/view"
                >
                    <Card width="100%" className="Invert">
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

export default Index
