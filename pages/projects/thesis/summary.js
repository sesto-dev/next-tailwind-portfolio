import Link from 'next/link'
import {
    Card,
    Grid,
    Text,
    Image,
    Link as GeistLink,
    Spacer,
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

const Summary = () => {
    return (
        <>
            <Helmet config={config} title="THREE" />
            <Header config={config} themePreference={themePreference} />
            <Banner
                header="BACHELORS PROJECT DOCUMENT"
                small="Bachelors Thesis - Bachelors of Architectural
                            Engineering - 2019"
            />
            <Wrapper>
                <Grid.Container gap={1}>
                    <Nav />
                    <Grid xs={24}>
                        <Card width="100%">
                            <Card.Content>
                                <Image
                                    mt={1}
                                    src="https://i.imgur.com/9Ch09Iz.png"
                                />
                                <Text h3 mb={0.1}>
                                    Designing a Center for Community Based
                                    Organizations (CBOs)
                                </Text>
                                <Text h4 mt={0.1} mb={0.1}>
                                    Emphasizing on the concept of Transparency
                                    in Urban Infrastructures
                                </Text>
                                <Text mb={2}>
                                    Bachelors Thesis - Bachelors of
                                    Architectural Engineering - 2019
                                </Text>
                                <Image
                                    mb={2}
                                    src="https://i.imgur.com/BBmqRBv.jpg"
                                />
                                <Text small>
                                    There is an inherent need for communities to
                                    be organized about a center for its own
                                    political and social welfare and expression.
                                    To peer into its own mind and life, to
                                    discover its own social needs and then to
                                    meet them, whether they concern communal
                                    decision making, health, recreation,
                                    education or industry; such community
                                    organization is necessary if a society is to
                                    flourish. This thesis tries to create an
                                    architectural design methodology to help
                                    answer these needs and to help rebuild the
                                    compromised, depleted and dilapidated urban,
                                    societal and ecological infrastructures in
                                    our cities. A Design Methodology to
                                    transpire a transparent relationship between
                                    the communities (and their representative
                                    community based organizations) and their
                                    urban and ecological infrastructures.
                                </Text>
                                <GeistLink
                                    target="_blank"
                                    rel="noopener"
                                    href="https://i.imgur.com/eLMache.jpg"
                                >
                                    <Image
                                        my={2}
                                        width="100%"
                                        src="https://i.imgur.com/Y0gaKrX.jpg"
                                    />
                                </GeistLink>
                                <Text h3>Problem Statement</Text>
                                <Text small>
                                    A Growing number of ecological dangers are
                                    threatening our communities and cities. A
                                    disconnect between our communities and the
                                    knowledge of countless immense
                                    infrastructures implemented to make modern
                                    living possible is making these threats all
                                    the more real.
                                </Text>
                                <Image
                                    my={2}
                                    src="https://i.imgur.com/dvvjs3x.png"
                                />
                                <Text h3>Necessity</Text>
                                <Text small>
                                    With the continuously growing threat of
                                    global warming, elimination of natural
                                    resources and systematic vulnerability of
                                    sustainable food production, localized and
                                    decentralized solutions of education, energy
                                    production, recycling and industry seem to
                                    be increasingly imperative.
                                </Text>
                                <Image
                                    my={2}
                                    width="100%"
                                    src="https://i.imgur.com/7nEHF2M.png"
                                />
                                <Text h3>Objective</Text>
                                <Text small>
                                    This thesis tries to create a design
                                    methodology to answer these needs and to
                                    help rebuild the compromised, depleted and
                                    dilapidated urban, societal and ecological
                                    infrastructures in our cities. A Design
                                    Methodology to transpire a transparent
                                    relationship between the communities (and
                                    their representative community based
                                    organizations) and their urban and
                                    ecological infrastructures.
                                </Text>
                                <Image
                                    my={2}
                                    src="https://i.imgur.com/bfqGDma.jpg"
                                />
                                <Text h3>Conclusion</Text>
                                <Text small>
                                    Based on presented information, there is a
                                    need for center in neighbourhoods and
                                    communities to enable them to gather about a
                                    center for them to flourish. The Quality and
                                    properties of the building should reflect
                                    this concept and enable it’s community to
                                    connect and learn.
                                </Text>
                                <Image
                                    mt={2}
                                    src="https://i.imgur.com/LJuAQo0.jpg"
                                />
                                <GeistLink
                                    target="_blank"
                                    rel="noopener"
                                    href="https://i.imgur.com/pxzP9sr.jpg"
                                >
                                    <Image
                                        mb={1}
                                        src="https://i.imgur.com/WYdDKKq.jpg"
                                    />
                                </GeistLink>
                                <Spacer />
                            </Card.Content>
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
                <Link href="/projects/thesis">
                    <a style={{ width: '100%' }}>
                        <Card className="Invert">
                            <Text h4 my={0}>
                                ◀ Back to 3D
                            </Text>
                            <Text small>Go back to the 3D View!</Text>
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

export default Summary
