import Head from 'next/head'
import Footer from './Footer'
import Header from './Header'

export default function Container({ title, children }) {
    return (
        <div className="container mx-auto max-w-screen-laptop px-6 laptop:px-0">
            <Head>
                <title>{title}</title>
            </Head>
            <Header />
            {children}
            <Footer />
        </div>
    )
}
