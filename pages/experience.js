import React from 'react'
import Link from 'next/link'
import { useTheme, Text, Card, Spacer } from '@geist-ui/core'

import Helmet from '../components/Helmet'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Badged from '../components/Badged'
import config from '../config'
import Banner from '../components/Banner'
import Wrapper from '../components/Wrapper'

const CV = () => {
    const theme = useTheme()

    return (
        <>
            <Helmet title="EXPERIENCE" />
            <Header />
            <Banner header="EXPERIENCES" small="My professional experience" />
            <Wrapper>
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
            </Wrapper>
            <Footer />
            <style jsx global>
                {`
                    .Invert:hover {
                        filter: invert(1);
                    }
                    .Justify .content {
                        text-align: justify;
                    }
                    .content small {
                        color: ${theme.palette.accents_6}!important;
                    }
                `}
            </style>
        </>
    )
}

export default CV
