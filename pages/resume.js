import Socials from '../components/Socials'
import Data from '../data/portfolio.json'
import Container from '../components/Container'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function Page() {
    const { locale = Data['defaultLocale'] } = useRouter()
    const [experiences, setExperiences] = useState(Data.resume.experiences)

    useEffect(() => {
        setExperiences(Data.resume.experiences)
    }, [locale])

    return (
        <Container>
            <div
                className={`mt-6 w-full border border-neutral-200 py-20 px-12 laptop:px-32 rounded-lg dark:border-neutral-700 ${
                    locale == 'fa' && 'text-right'
                }`}
            >
                <h1 className="text-3xl">{Data['name'][locale]}</h1>
                <Socials className="mt-8" locale={locale} />
                <div className="mt-12">
                    <h1 className="text-2xl">
                        {locale == 'fa' ? 'تحصیلات' : 'Education'}
                    </h1>
                    <h2 className={`mt-2 ${locale == 'fa' && 'text-right'}`}>
                        {Data.resume.education.institution[locale]} -{' '}
                        {Data.resume.education.course[locale]} -{' '}
                        {Data.resume.education.years[locale]}
                    </h2>
                </div>
                <div className="mt-12">
                    <h1 className="text-2xl">
                        {locale == 'fa' ? 'تجربه های کاری' : 'Experience'}
                    </h1>
                </div>
                <Experiences experiences={experiences} locale={locale} />
            </div>
        </Container>
    )
}

function Experiences({ experiences, locale }) {
    return (
        <div className="mt-6">
            {experiences.map(
                ({
                    dates,
                    type,
                    position,
                    company,
                    companyURL,
                    description,
                }) => (
                    <div
                        key={Math.random()}
                        className="my-4 w-full h-full border border-neutral-200 rounded-lg dark:border-neutral-700"
                    >
                        <div
                            className={`p-5 ${locale == 'fa' && 'text-right'}`}
                        >
                            <p className="mb-1 font-normal text-sm text-gray-700 dark:text-gray-400">
                                {dates[locale]} - {type[locale]}
                            </p>
                            <h5
                                className={`mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white `}
                            >
                                <a
                                    className="text-slate-00"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href={companyURL}
                                >
                                    {company[locale]}
                                </a>{' '}
                                - {position[locale]}
                            </h5>
                            <p
                                className={`mb-3 font-normal text-gray-700 dark:text-gray-400 `}
                            >
                                {description[locale]}
                            </p>
                        </div>
                    </div>
                )
            )}
        </div>
    )
}
