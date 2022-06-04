import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Text, useTheme } from '@geist-ui/core'

// Components
import Submenu from './Submenu'
import HeaderOptions from './HeaderOptions'
import config from '../../config'

const Header = () => {
    const theme = useTheme()

    const title = config.meta.title
    const uppercaseTitle = title.toUpperCase()

    return (
        <>
            <nav className="MenuNavigation">
                <Text mt={1.5} className="MenuNavigationTitle">
                    <Link className="MenuNavigationTitle" href="/">
                        {uppercaseTitle}
                    </Link>
                </Text>
                <div>
                    <HeaderOptions />
                </div>
            </nav>
            <Submenu />
            <style jsx global>
                {`
                    .MenuNavigation {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        width: ${theme.layout.pageWidthWithMargin};
                        max-width: 100%;
                        margin: 0 auto;
                        padding: 0 ${theme.layout.pageMargin};
                        background-color: ${theme.palette.background};
                        font-size: 16px;
                        height: 54px;
                        box-sizing: border-box;
                    }
                    .MenuNavigationTitle a {
                        color: ${theme.palette.foreground}!important;
                        font-size: 1.65rem;
                        font-weight: 450;
                        letter-spacing: 0.3rem;
                    }
                    .MenuNavigation > div {
                        display: flex;
                        align-items: center;
                    }
                `}
            </style>
        </>
    )
}

export default Header
