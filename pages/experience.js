import React from 'react'
import Link from 'next/link'
import { useTheme, Text, Card, Spacer } from '@geist-ui/core'
import {
    Badged,
    Banner,
    Footer,
    Header,
    Helmet,
    Wrapper,
} from '../geist-components'

import { themePreference } from '../state/Context'
import config from '../config'

const CV = () => {
    const theme = useTheme()
    return (
        <>
            <Helmet config={config} title="EXPERIENCE" />
            <Header config={config} themePreference={themePreference} />
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
            <Footer config={config} />
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
