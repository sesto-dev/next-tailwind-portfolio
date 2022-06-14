import { useState } from 'react'
import Link from 'next/link'
import {
    useTheme,
    Card,
    Slider,
    Description,
    Grid,
    Text,
    Image,
    Select,
    Button,
    ButtonGroup,
    Checkbox,
} from '@geist-ui/core'
import {
    Badged,
    Banner,
    Footer,
    Header,
    Helmet,
    Wrapper,
} from '../../../geist-components'

import { themePreference } from '../../../state/Context'
import config from '../../../config'
import Model from '../../../components/three/ModelDraco'

const Thesis = () => {
    const [visibilities, setVisibilities] = useState({
        floor: true,
        ceiliing: true,
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
        let vis = {}

        for (let i = 0; i < options.length; i++) {
            const element = options[i]
            vis[element] = false
        }

        for (let j = 0; j < val.length; j++) {
            const element = val[j]
            vis[element] = true
        }

        setVisibilities(vis)
    }

    return (
        <>
            <Helmet config={config} title="THREE" />
            <Header config={config} themePreference={themePreference} />
            <Banner header="THREE" small="3 Dimensional." />
            <Wrapper>
                <Card width="100%">
                    <Link href="/projects/thesis/document">
                        <a style={{ width: '100%' }}>
                            <Card className="Invert" mb={2}>
                                <Text h4 my={0}>
                                    Project Document
                                </Text>
                                <Text small>Go to the project document!</Text>
                            </Card>
                        </a>
                    </Link>
                    <Model visibilities={visibilities} />
                    <Card mt={1} width="100%">
                        <Description title="Options" mb={1} />
                        <Checkbox.Group value={options} onChange={handler}>
                            <Checkbox value="floor">Floor</Checkbox>
                            <Checkbox value="ceiling">Ceiling</Checkbox>
                            <Checkbox value="piping">Piping</Checkbox>
                            <Checkbox value="ducting">Ducting</Checkbox>
                            <Checkbox value="lighting">Lighting</Checkbox>
                            <Checkbox value="structure">Structure</Checkbox>
                            <Checkbox value="curtain">Curtain Walls</Checkbox>
                            <Checkbox value="panels">Solar Panels</Checkbox>
                            <Checkbox value="rooms">Rooms</Checkbox>
                        </Checkbox.Group>
                    </Card>
                </Card>
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

export default Thesis
