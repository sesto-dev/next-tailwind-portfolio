import React from 'react'
import Button from './Button'
import Data from '../data/portfolio.json'
import Link from 'next/link'

export default function Socials({ locale, className }) {
    return (
        <div
            className={`${className} flex flex-wrap mob:flex-nowrap link gap-6 ${
                locale == 'fa' && 'justify-end'
            }`}
        >
            {Data.socials.map((social, index) => {
                const bool =
                    social.link.includes('http') ||
                    social.link.includes('mailto')

                return (
                    <Link
                        key={social.link}
                        href={social.link}
                        target={bool && '_blank'}
                        rel={bool && 'noopener noreferrer'}
                    >
                        {social.title[locale]}
                    </Link>
                )
            })}
        </div>
    )
}
