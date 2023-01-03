import { useRef } from 'react'
import Socials from '../components/Socials'
import WorkCard from '../components/WorkCard'
import { useRouter } from 'next/router'

// Local Data
import Data from '../data/portfolio.json'
import Container from '../components/Container'

export default function Home() {
    // Ref
    const workRef = useRef()
    const aboutRef = useRef()
    const textOne = useRef()
    const textTwo = useRef()
    const textThree = useRef()
    const textFour = useRef()

    const { locale = Data['defaultLocale'] } = useRouter()

    return (
        <Container>
            <div className="laptop:mt-20 mt-10 ">
                <h1
                    ref={textOne}
                    className="text-7xl text-bold mob:w-full laptop:w-4/5"
                >
                    {Data['headerTaglineOne'][locale]}
                </h1>
                <h1
                    ref={textTwo}
                    className="text-7xl text-bold w-full laptop:w-4/5"
                >
                    {Data['headerTaglineTwo'][locale]}
                </h1>
                <h1
                    ref={textThree}
                    className="text-7xl text-bold w-full laptop:w-4/5"
                >
                    {Data['headerTaglineThree'][locale]}
                </h1>
                <h1
                    ref={textFour}
                    className="text-7xl text-bold w-full laptop:w-4/5"
                >
                    {Data['headerTaglineFour'][locale]}
                </h1>
            </div>
            <Socials locale={locale} className="mt-6" />
            <div className="mt-10 laptop:mt-30" ref={workRef}>
                <h1 className="text-2xl text-bold">Projects.</h1>
                <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-4">
                    {Data.projects.map((project) => (
                        <WorkCard
                            key={project.title}
                            img={project.imageSrc}
                            name={project.title}
                            description={project.description}
                            slug={project.slug}
                            createdAt={project.createdAt}
                        />
                    ))}
                </div>
            </div>
            <div className="mt-12" ref={aboutRef}>
                <h1 className="tablet:my-10 text-2xl text-bold">About.</h1>
                <p className="text-lg text-justify text-neutral-600 dark:text-neutral-300">
                    {Data.aboutpara}
                </p>
            </div>
        </Container>
    )
}
