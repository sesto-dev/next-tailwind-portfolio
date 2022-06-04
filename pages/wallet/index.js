import React, { useState } from 'react'
import {
    useTheme,
    Text,
    Image,
    Link,
    Input,
    Button,
    Spacer,
    Card,
    Description,
    Grid,
} from '@geist-ui/core'

import Helmet from '../../components/Helmet'
import Header from '../../components/header/Header'
import Footer from '../../components/Footer'

const Wallet = () => {
    const theme = useTheme()
    const [value, setValue] = useState()
    const handler = (e) => {
        setValue(e.target.value)
    }

    return (
        <>
            <Helmet title="WALLET" />
            <Header />
            <div className="PageHeader">
                <div style={{ marginTop: '2rem', marginBottom: '2rem' }}>
                    <Text h2>WALLET</Text>
                    <Grid.Container gap={3}>
                        <Grid xs={24}>
                            <Text small>
                                Interesting projects I've been a part of.
                            </Text>
                        </Grid>
                    </Grid.Container>
                </div>
            </div>
            <Spacer />
            <div className="PageWrapper">
                <div className="PageContent">
                    <Card>
                        <Card.Content>
                            <div className="Flex">
                                <Input
                                    placeholder="Target Ethereum Address"
                                    height="3rem"
                                    width="100%"
                                    value={value}
                                    onChange={handler}
                                    mr={1}
                                />
                                <Link href={`/wallet/${value}`}>
                                    <Button
                                        disabled={value ? false : true}
                                        height="3rem"
                                        type="secondary"
                                    >
                                        Scan
                                    </Button>
                                </Link>
                            </div>
                        </Card.Content>
                    </Card>
                </div>
            </div>
            <Footer />
            <style jsx global>
                {`
                    .Flex {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                    }
                    small {
                        text-align: justify;
                    }
                    .Invert:hover {
                        filter: invert(1);
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

export default Wallet
