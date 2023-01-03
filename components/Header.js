import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Button from './Button'
// Local Data
import data from '../data/portfolio.json'
import Link from 'next/link'

const Header = () => {
    const router = useRouter()
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    const { name } = data

    useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <div
            className={`py-2 text-lg mt-2 items-center justify-between dark:text-white z-10 flex`}
        >
            <Link href="/" className="text-lg">
                {name}
            </Link>
            <div className="flex gap-4 mt-2">
                <Link href="/blog">Blog</Link>

                <Link href="/resume" classes="first:ml-1">
                    Resume
                </Link>

                <a href="mailto:accretence@gmail.com">Contact</a>

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
            </div>
        </div>
    )
}

export default Header
