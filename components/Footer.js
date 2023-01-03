import React from 'react'
import Socials from './Socials'
import { useRouter } from 'next/router'
import Data from '../data/portfolio.json'

export default function Footer() {
    const { locale = Data['defaultLocale'] } = useRouter()

    return (
        <div className="my-12">
            <hr class="my-8 h-px bg-gray-200 border-0 dark:bg-gray-700" />
            <Socials locale={locale} />
        </div>
    )
}
