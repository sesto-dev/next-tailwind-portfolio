import React, { useCallback, useEffect, useState } from 'react'

// Libraries
import { GeistProvider, CssBaseline } from '@geist-ui/core'

// Global State
import { ThemeContext, themes } from '../state/Context'

const config = require('../config.json')

export default function App({ Component, pageProps }) {
    // Local State
    const [themeType, setThemeType] = useState('dark')

    useEffect(() => {
        if (typeof window !== 'undefined' && window.localStorage) {
            // Get theme
            document.documentElement.removeAttribute('style')
            document.body.removeAttribute('style')

            const theme = window.localStorage.getItem('theme')
            if (themes.includes(theme)) setThemeType(theme)
        }
    }, [])

    const switchTheme = useCallback((theme) => {
        setThemeType(theme)
        if (typeof window !== 'undefined' && window.localStorage)
            window.localStorage.setItem('theme', theme)
    }, [])

    return (
        <GeistProvider themeType={themeType}>
            <CssBaseline />
            <ThemeContext.Provider value={{ themeType, switchTheme }}>
                <Component {...pageProps} />
            </ThemeContext.Provider>
        </GeistProvider>
    )
}
