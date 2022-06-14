import Link from 'next/link'
import {
    useTheme,
    Card,
    Slider,
    Description,
    Grid,
    Text,
    Image,
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

const Thesis = () => {
    return (
        <>
            <Helmet config={config} title="THREE" />
            <Header config={config} themePreference={themePreference} />
            <Banner header="THREE" small="3 Dimensional." />
            <Wrapper>
                <Card width={'100%'}>
                    <Card.Content>
                        <Link href="/projects/thesis">
                            <a style={{ width: '100%' }}>
                                <Card className="Invert" mb={1}>
                                    <Text h4 my={0}>
                                        Back to 3D
                                    </Text>
                                    <Text small>Go back to the 3D View!</Text>
                                </Card>
                            </a>
                        </Link>
                        <Image src="https://i.imgur.com/9Ch09Iz.png" />
                        <Text h2>Community Center</Text>
                        <Text small>
                            Bachelors Thesis - Bachelors of Architectural
                            Engineering - 2019
                        </Text>
                        <Image src="https://i.imgur.com/BBmqRBv.jpg" />
                    </Card.Content>
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
