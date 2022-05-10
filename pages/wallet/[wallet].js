import React from 'react'
import { useRouter } from 'next/router'
import useSWR from 'swr'

// Components
import Meta from '../../components/meta'
import Header from '../../components/header/Header'
import Footer from '../../components/Footer'

// Additional Libraries
import {
    useTheme,
    Text,
    Image,
    Link,
    Spacer,
    Card,
    Description,
    Grid,
} from '@geist-ui/core'

const config = require('../../config.json')

const Wallet = () => {
    const theme = useTheme()

    const router = useRouter()
    const { wallet } = router.query

    const fetcher = (url) => fetch(url).then((res) => res.json())

    const { data, error } = useSWR(
        [
            `https://api.opensea.io/api/v1/assets?owner=${wallet}&order_direction=desc&limit=100&include_orders=true`,
            {
                Accept: 'application/json',
                'X-API-KEY': process.env.NEXT_PUBLIC_OPENSEA_KEY,
            },
        ],
        fetcher
    )

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>

    const { assets } = data

    console.log(assets)

    return (
        <>
            <Meta
                title={wallet}
                image={`https://accretence-og.vercel.app/${wallet}`}
            />
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
                    <Grid.Container gap={1}>
                        {assets.map((asset) => (
                            <Grid key={asset.id} xs={12} sm={8} md={6} lg={6}>
                                <Card width="100%">
                                    <Image
                                        src={asset.image_preview_url}
                                        height="20rem"
                                        width="100%"
                                        draggable={false}
                                        style={{ objectFit: 'contain' }}
                                    />

                                    <Card.Body>
                                        <Text h3>{asset.name}</Text>

                                        <Text small>
                                            {asset.collection.name}
                                        </Text>
                                        <br />
                                        <Text small>
                                            {asset.collection.description}
                                        </Text>
                                        <br />
                                        <Text mr={0.333} small b>
                                            <Link
                                                target="_blank"
                                                rel="noopener"
                                                href={asset.permalink}
                                            >
                                                OpenSea
                                            </Link>
                                        </Text>
                                    </Card.Body>
                                </Card>
                            </Grid>
                        ))}
                    </Grid.Container>
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
