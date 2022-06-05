import React from 'react'
import Link from 'next/link'
import { useTheme, Grid, Card, Image, Text } from '@geist-ui/core'

import Helmet from '../components/Helmet'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Badged from '../components/Badged'
import Banner from '../components/Banner'
import Wrapper from '../components/Wrapper'

const Index = () => {
    const theme = useTheme()

    return (
        <>
            <Helmet />
            <Header />
            <Banner
                header={'Welcome! (◕‿◕)'}
                small={'This website is still very incomplete (Ｔ▽Ｔ)'}
            />
            <Wrapper>
                <Grid.Container mb={0} gap={1}>
                    <Grid xs={24}>
                        <Card className="Invert" style={{ width: '100%' }}>
                            <Image
                                src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/51860462915061.5f20864db1dcf.gif"
                                height="30vh"
                                width="100%"
                                style={{
                                    filter: `${
                                        theme.type == 'light'
                                            ? 'invert(1)'
                                            : 'invert(0)'
                                    }`,
                                    objectFit: 'cover',
                                }}
                                my={0}
                                py={0}
                                draggable={false}
                            />
                            <Text h4 my={0}>
                                I'm Accretence!
                            </Text>
                            <Text small>
                                I'm a self-taught <Badged c="Full-Stack Web" />{' '}
                                & <Badged c="Solidity" /> developer. My
                                educational & early professional experience is
                                in Architectural Engineering.
                            </Text>
                        </Card>
                    </Grid>
                    <Grid xs={12}>
                        <Link href="/projects">
                            <a style={{ width: '100%' }}>
                                <Card className="Invert">
                                    <Text h4 my={0}>
                                        PROJECTS
                                    </Text>
                                    <Text small>
                                        Interesting projects I've been a part
                                        of.
                                    </Text>
                                </Card>
                            </a>
                        </Link>
                    </Grid>
                    <Grid xs={12}>
                        <Link href="/experience">
                            <a style={{ width: '100%' }}>
                                <Card className="Invert">
                                    <Text h4 my={0}>
                                        EXPERIENCE
                                    </Text>
                                    <Text small>
                                        My professional experience.
                                    </Text>
                                </Card>
                            </a>
                        </Link>
                    </Grid>
                </Grid.Container>
            </Wrapper>
            <Footer />
            <style jsx global>
                {`
                    .Invert:hover {
                        filter: invert(1);
                    }
                    a {
                        color: ${theme.palette.foreground};
                    }
                `}
            </style>
        </>
    )
}

export default Index
