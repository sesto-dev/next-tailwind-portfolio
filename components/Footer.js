import React from 'react'
import Socials from './Socials'
import { useRouter } from 'next/router'
import Data from '../data/portfolio.json'

const Footer = () => {
    const { locale = Data['defaultLocale'] } = useRouter()

    return (
        <div className="mt-12 laptop:p-0">
            <h1 className="text-6xl text-bold">LET&apos;S WORK</h1>
            <h1 className="text-6xl text-bold">TOGETHER</h1>
            <div className="mt-10 mb-6">
                <Socials locale={locale} />
            </div>
        </div>
    )
}

export default Footer
