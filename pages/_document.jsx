import GoogleAnalytics from '../components/GoogleAnalytics'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link href="/favicon.ico" rel="shortcut icon" />

                <meta content="#fff" name="theme-color" />
                <meta content="#fff" name="msapplication-TileColor" />
                <GoogleAnalytics />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
