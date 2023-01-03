import React, { useEffect, useState } from 'react'
import ProjectResume from '../components/ProjectResume'
import Socials from '../components/Socials'
import Button from '../components/Button'
import { useTheme } from 'next-themes'
import Portfolio from '../data/portfolio.json'
import Container from '../components/Container'

const Page = () => {
    const theme = useTheme()
    const [mount, setMount] = useState(false)
    const { resume, name } = Portfolio

    useEffect(() => {
        setMount(true)
    }, [])
    return (
        <Container>
            {mount && (
                <div
                    className={`mt-6 w-full ${
                        mount && theme.theme === 'dark'
                            ? 'bg-slate-800'
                            : 'bg-gray-50'
                    } py-20 px-32 rounded-lg shadow-sm`}
                >
                    <h1 className="text-3xl font-bold">{name}</h1>
                    <h2 className="text-xl mt-5">{resume.tagline}</h2>
                    <h2 className="w-4/5 text-xl mt-5 opacity-50">
                        {resume.description}
                    </h2>
                    <div className="mt-2">
                        <Socials />
                    </div>
                    <div className="mt-5">
                        <h1 className="text-2xl font-bold">Experience</h1>

                        {resume.experiences.map(
                            ({ id, dates, type, position, bullets }) => (
                                <ProjectResume
                                    key={id}
                                    dates={dates}
                                    type={type}
                                    position={position}
                                    bullets={bullets}
                                />
                            )
                        )}
                    </div>
                    <div className="mt-5">
                        <h1 className="text-2xl font-bold">Education</h1>
                        <div className="mt-2">
                            <h2 className="text-lg">
                                {resume.education.universityName}
                            </h2>
                            <h3 className="text-sm opacity-75">
                                {resume.education.universityDate}
                            </h3>
                            <p className="text-sm mt-2 opacity-50">
                                {resume.education.universityPara}
                            </p>
                        </div>
                    </div>
                    <div className="mt-5">
                        <h1 className="text-2xl font-bold">Skills</h1>
                        <div className="flex mob:flex-col desktop:flex-row justify-between">
                            {resume.languages && (
                                <div className="mt-2 mob:mt-5">
                                    <h2 className="text-lg">Languages</h2>
                                    <ul className="list-disc">
                                        {resume.languages.map(
                                            (language, index) => (
                                                <li
                                                    key={index}
                                                    className="ml-5 py-2"
                                                >
                                                    {language}
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>
                            )}

                            {resume.frameworks && (
                                <div className="mt-2 mob:mt-5">
                                    <h2 className="text-lg">Frameworks</h2>
                                    <ul className="list-disc">
                                        {resume.frameworks.map(
                                            (framework, index) => (
                                                <li
                                                    key={index}
                                                    className="ml-5 py-2"
                                                >
                                                    {framework}
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>
                            )}

                            {resume.others && (
                                <div className="mt-2 mob:mt-5">
                                    <h2 className="text-lg">Others</h2>
                                    <ul className="list-disc">
                                        {resume.others.map((other, index) => (
                                            <li
                                                key={index}
                                                className="ml-5 py-2"
                                            >
                                                {other}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </Container>
    )
}

export default Page
