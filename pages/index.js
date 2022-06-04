import React from 'react'
import {
    useTheme,
    Grid,
    Card,
    Image,
    Text,
    Display,
    Description,
} from '@geist-ui/core'

import Helmet from '../components/Helmet'
import Header from '../components/header/Header.js'
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
