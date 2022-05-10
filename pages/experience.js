import React from 'react'
import Link from 'next/link'

// Components
import Meta from '../components/meta'
import Header from '../components/header/Header'
import Footer from '../components/Footer'
import Badged from '../components/Badged'

// Libraries
import { useTheme, Text, Card, Spacer } from '@geist-ui/core'

const config = require('../config.json')

const CV = () => {
    const theme = useTheme()

    return (
        <>
            <Meta title="EXPERIENCE" />
            <Header />
            <div className="PageHeader">
                <Text h2>EXPERIENCE</Text>
                <Text small>My professional experience.</Text>
            </div>
            <Spacer />
            <div className="PageWrapper">
                <div className="PageContent">
                    {config.experiences.map((exp) => (
                        <Card key={exp.title} mt={1} className="Justify Invert">
                            <Text h3>{exp.title}</Text>
                            <Text small b>
                                {exp.employer}, {exp.period}
                            </Text>
                            <br />
                            <Text small>{exp.description}</Text>
                        </Card>
                    ))}
                </div>
            </div>
            <Footer />
            <style jsx global>
                {`
                    .Invert:hover {
                        filter: invert(1);
                    }
                    .PageHeader {
                        width: ${theme.layout.pageWidthWithMargin};
                        max-width: 100%;
                        margin: 2rem auto;
                        padding: 0 ${theme.layout.pageMargin};
                        box-sizing: border-box;
                    }
                    .PageWrapper {
                        background-color: ${theme.palette.accents_1};
                    }
                    .PageContent {
                        width: ${theme.layout.pageWidthWithMargin};
                        max-width: 100%;
                        margin: 0 auto;
                        padding: 0 ${theme.layout.pageMargin};
                        transform: translateY(-35px);
                        box-sizing: border-box;
                    }
                    .Justify .content {
                        text-align: justify;
                    }
                    .content small {
                        color: ${theme.palette.accents_6}!important;
                    }
                    #WikiHeader li::marker {
                        color: skyblue !important;
                        font-size: 0.8rem !important;
                    }
                `}
            </style>
        </>
    )
}

export default CV
