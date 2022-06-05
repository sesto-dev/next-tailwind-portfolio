import React, { useState } from 'react'
import {
    useTheme,
    Link as GeistLink,
    Input,
    Button,
    Card,
} from '@geist-ui/core'

import Helmet from '../../components/Helmet'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Banner from '../../components/Banner'
import Wrapper from '../../components/Wrapper'

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
            <Banner />
            <Wrapper>
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
                            <GeistLink href={`/wallet/${value}`}>
                                <Button
                                    disabled={value ? false : true}
                                    height="3rem"
                                    type="secondary"
                                >
                                    Scan
                                </Button>
                            </GeistLink>
                        </div>
                    </Card.Content>
                </Card>
            </Wrapper>
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
                `}
            </style>
        </>
    )
}

export default Wallet
