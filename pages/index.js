import React from 'react'

// Components
import Helmet from '../components/Helmet'
import Header from '../components/header/Header.js'
import Footer from '../components/Footer'
import Badged from '../components/Badged'

// Libraries
import {
    useTheme,
    Grid,
    Card,
    Image,
    Text,
    Display,
    Description,
} from '@geist-ui/core'

const Index = () => {
    const theme = useTheme()

    return (
        <>
            <Helmet />
            <Header />
            <div className="PageHeader">
                <div style={{ marginTop: '2rem', marginBottom: '3rem' }}>
                    <Text h2 mb={1}>
                        Welcome! (◕‿◕)
                    </Text>
                    <Text small>
                        This website is still very incomplete (Ｔ▽Ｔ)
                    </Text>
                </div>
            </div>
            <div className="PageWrapper">
                <div className="PageContent">
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
                                    I'm a self-taught{' '}
                                    <Badged c="Full-Stack Web" /> &{' '}
                                    <Badged c="Solidity" /> developer. My
                                    educational & early professional experience
                                    is in Architectural Engineering.
                                </Text>
                            </Card>
                        </Grid>
                    </Grid.Container>
                </div>
            </div>
            <Footer />
            <style jsx global>
                {`
                    .Invert:hover {
                        filter: invert(1);
                    }
                    a {
                        color: ${theme.palette.foreground};
                    }
                    .collapse {
                        border: none !important;
                        padding: 0 0 !important;
                    }
                    .PageHeader {
                        width: ${theme.layout.pageWidthWithMargin};
                        max-width: 100%;
                        margin: 0 auto;
                        padding: 0 ${theme.layout.pageMargin};
                        box-sizing: border-box;
                    }
                    .PageWrapper {
                        background-color: ${theme.palette.accents_1};
                    }
                    .PageContent {
                        width: ${theme.layout.pageWidthWithMargin};
                        max-width: 100%;
                        margin: 0 auto;
                        padding: 0 ${theme.layout.pageMargin};
                        transform: translateY(-35px);
                        box-sizing: border-box;
                    }
                `}
            </style>
        </>
    )
}

export default Index
