import { SunIcon, MoonIcon, LanguageIcon } from '@heroicons/react/24/solid'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Button from './Button'
// Local Data
import Data from '../data/data.json'
import Link from 'next/link'

export default function Header() {
    const router = useRouter()
    const {
        locale = Data['defaultLocale'],
        locales,
        pathname,
        asPath,
        query,
    } = useRouter()
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    function loopLanguages() {
        router.push({ pathname, query }, asPath, {
            locale: locales[(locales.indexOf(locale) + 1) % locales.length],
        })
    }

    useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <div
            className={`py-2 text-lg mt-2 items-center justify-between dark:text-white z-10 flex`}
        >
            <Link href="/" className="text-lg">
                {Data['name'][locale]}
            </Link>
            <div className="flex gap-4 mt-2 text-base">
                {mounted && theme && (
                    <Button
                        onClick={() =>
                            setTheme(theme === 'dark' ? 'light' : 'dark')
                        }
                    >
                        {theme === 'dark' ? (
                            <SunIcon className="h-5 w-5" />
                        ) : (
                            <MoonIcon className="h-5 w-5" />
                        )}
                    </Button>
                )}

                <Button onClick={loopLanguages}>
                    <LanguageIcon className="h-5 w-5" />
                </Button>
            </div>
        </div>
    )
}
