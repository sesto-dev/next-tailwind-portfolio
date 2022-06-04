import React, { useState, useEffect, useContext } from 'react'
import {
    useToasts,
    Text,
    Button,
    Link as GeistLink,
    useTheme,
    Popover,
} from '@geist-ui/core'

import { themePreference } from '../../state/Context'

const HeaderOptions = () => {
    const theme = useTheme()
    const {
        toasts,
        setToast,
        removeAll,
        findToastOneByID,
        removeToastOneByID,
    } = useToasts()

    const [sticky, setSticky] = useState(false)

    // Global State
    const prefers = themePreference()

    useEffect(() => {
        const scrollHandler = () =>
            setSticky(document.documentElement.scrollTop > 54)
        document.addEventListener('scroll', scrollHandler)
        return () => document.removeEventListener('scroll', scrollHandler)
    }, [setSticky])

    return (
        <>
            <Button
                style={
                    sticky
                        ? {
                              top: '1.5px',
                              borderColor: `${theme.palette.accents_2}`,
                          }
                        : { borderColor: `${theme.palette.accents_2}` }
                }
                aria-label="Toggle Dark mode"
                ml={0.3}
                mr={0.5}
                px={1.4}
                scale={0.6}
                auto
                onClick={() =>
                    prefers.switchTheme(
                        theme.type === 'dark' ? 'light' : 'dark'
                    )
                }
            >
                <Text b>{theme.type === 'dark' ? 'LIGHT' : 'DARK'}</Text>
            </Button>

            <style jsx global>
                {`
                    .UserSettingsButton {
                        border: none;
                        background: none;
                        padding: 0;
                        margin: 0;
                        appearance: none;
                        cursor: pointer;
                    }
                `}
            </style>
        </>
    )
}

export default HeaderOptions
