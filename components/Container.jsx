import Head from 'next/head'
import Footer from './Footer'
import Header from './Header'
import { NextSeo } from 'next-seo'
import Data from '../data/data.json'
import { useRouter } from 'next/router'

const { handle } = Data

export default function Container({
    title,
    description,
    canonical,
    image,
    children,
}) {
    const { locale = Data['defaultLocale'] } = useRouter()

    return (
        <div className="container mx-auto max-w-screen-laptop px-6 laptop:px-0">
            <Head>
                <title>{title}</title>
                <NextSeo
                    title={title}
                    defaultTitle="Homayoun Barooji's Website"
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
                        siteName: 'Iqoror',
                        article: {
                            tags: [
                                'blog',
                                'developer',
                                'blockchain',
                                'bitcoin',
                            ],
                        },
                    }}
                    twitter={{
                        handle,
                        site: handle,
                        cardType: 'summary_large_image',
                    }}
                />
            </Head>
            <Header />
            <div className={`${locale == 'fa' && 'rtl'}`}>{children}</div>
            <Footer />
        </div>
    )
}
