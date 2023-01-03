import React from 'react'
import Button from './Button'

import Portfolio from '../data/portfolio.json'

const Socials = ({ locale, className }) => {
    return (
        <div
            className={`${className} flex flex-wrap mob:flex-nowrap link gap-4`}
        >
            {Portfolio.socials.map((social, index) => (
                <Button key={index} onClick={() => window.open(social.link)}>
                    {social.title[locale]}
                </Button>
            ))}
        </div>
    )
}

export default Socials
