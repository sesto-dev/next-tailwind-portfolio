import Head from 'next/head'
import Footer from './Footer'
import Header from './Header'
import { NextSeo } from 'next-seo'
import Data from '../data/data.json'

const { handle } = Data

export default function Container({
    title,
    description,
    canonical,
    image,
    children,
}) {
    return (
        <div className="container mx-auto max-w-screen-laptop px-6 laptop:px-0">
            <Head>
                <title>{title}</title>
                <NextSeo
                    title={title}
                    description={description}
                    canonical={canonical}
                    openGraph={{
                        url: canonical,
                        title,
                        description,
                        images: [
                            {
                                url: image,
                                width: 800,
                                height: 600,
                                alt: 'Og Image Alt',
                                type: 'image/jpeg',
                            },
                        ],
                        siteName: 'SiteName',
                    }}
                    twitter={{
                        handle,
                        site: handle,
                        cardType: 'summary_large_image',
                    }}
                />
            </Head>
            <Header />
            {children}
            <Footer />
        </div>
    )
}
