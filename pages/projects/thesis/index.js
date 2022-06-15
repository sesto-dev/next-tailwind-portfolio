import { useState } from 'react'
import Link from 'next/link'
import { Card, Description, Text, Select } from '@geist-ui/core'
import {
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
            <Banner
                header="BACHELORS 3D INTERACTIVE"
                small="Bachelors Thesis - Bachelors of Architectural
                            Engineering - 2019"
            />
            <Wrapper>
                <Card width="100%">
                    <Link href="/projects/thesis/document">
                        <a style={{ width: '100%' }}>
                            <Card className="Invert" mb={1}>
                                <Text h4 my={0}>
                                    Project Document
                                </Text>
                                <Text small>Go to the project document!</Text>
                            </Card>
                        </a>
                    </Link>
                    <Card mb={1}>
                        <Description title="Options" mb={1} />
                        <Select
                            multiple
                            clearable={true}
                            initialValue={options}
                            onChange={handler}
                            width="100%"
                        >
                            <Select.Option value="floor">Floor</Select.Option>
                            <Select.Option value="ceiling">
                                Ceiling
                            </Select.Option>
                            <Select.Option value="piping">Piping</Select.Option>
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
                            <Select.Option value="rooms">Rooms</Select.Option>
                        </Select>
                    </Card>
                    <Model visibilities={visibilities} />
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
