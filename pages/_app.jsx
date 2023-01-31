import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'

export default function App({ Component, pageProps }) {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            disableTransitionOnChange
        >
            <Component {...pageProps} />
        </ThemeProvider>
    )
}
