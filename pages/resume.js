import React, { useEffect, useState } from 'react'
import Socials from '../components/Socials'
import Button from '../components/Button'
import { useTheme } from 'next-themes'
import Data from '../data/portfolio.json'
import Container from '../components/Container'
import { useRouter } from 'next/router'

const Page = () => {
    const theme = useTheme()
    const [mount, setMount] = useState(false)
    const { resume, name } = Data

    const { locale = Data['defaultLocale'] } = useRouter()

    useEffect(() => {
        setMount(true)
    }, [])
    return (
        <Container>
            {mount && (
                <div
                    className={`mt-6 w-full border border-neutral-200 dark:bg-neutral-900 bg-neutral-100 py-20 px-12 laptop:px-32 rounded-lg dark:border-neutral-700`}
                >
                    <h1 className="text-3xl">{name[locale]}</h1>
                    <Socials
                        className="mt-4 text-neutral-400"
                        locale={locale}
                    />
                    <div className="mt-12">
                        <h1 className="text-2xl font-bold">Experience</h1>
                        <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-4">
                            {resume.experiences.map(
                                ({
                                    dates,
                                    type,
                                    position,
                                    company,
                                    companyURL,
                                    description,
                                }) => (
                                    <div className="w-full h-full border border-neutral-200 rounded-lg dark:border-neutral-700">
                                        <div
                                            className={`p-5 ${
                                                locale == 'fa' && 'text-right'
                                            }`}
                                        >
                                            <p className="mb-1 font-normal text-sm text-gray-700 dark:text-gray-400">
                                                {dates}
                                            </p>
                                            <h5
                                                className={`mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white `}
                                            >
                                                {company} - {position}
                                            </h5>
                                            <p
                                                className={`mb-3 font-normal text-gray-700 dark:text-gray-400 `}
                                            >
                                                {description}
                                            </p>
                                        </div>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                    <div className="mt-5">
                        <h1 className="text-2xl font-bold">Education</h1>
                        <div className="mt-2">
                            <h2 className="text-lg">
                                {resume.education.institution} -{' '}
                                {resume.education.course}
                            </h2>
                            <h3 className="text-sm opacity-75">
                                {resume.education.years}
                            </h3>
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
