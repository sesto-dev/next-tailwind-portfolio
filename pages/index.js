import Socials from '../components/Socials'
import WorkCard from '../components/WorkCard'
import { useRouter } from 'next/router'

// Local Data
import Data from '../data/portfolio.json'
import Container from '../components/Container'

export default function Home() {
    const { locale = Data['defaultLocale'] } = useRouter()

    return (
        <Container>
            <div className={`mt-10 ${locale == 'fa' && 'text-right'}`}>
                <h1 className={`mb-4 text-7xl text-bold`}>
                    {Data['headerTaglineOne'][locale]}
                </h1>
                <h1 className="mb-4 text-7xl text-bold ">
                    {Data['headerTaglineTwo'][locale]}
                </h1>
                <h1 className="mb-4 text-7xl text-bold ">
                    {Data['headerTaglineThree'][locale]}
                </h1>
                <h1 className="mb-4 text-7xl text-bold ">
                    {Data['headerTaglineFour'][locale]}
                </h1>
            </div>
            <Socials locale={locale} className="mt-10" />
            <div className="mt-10 laptop:mt-30">
                <h1
                    className={`text-2xl text-bold ${
                        locale == 'fa' && 'text-right'
                    }`}
                >
                    {locale == 'fa' ? 'پروژه ها' : 'Projects.'}
                </h1>
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
            <div className="mt-10 laptop:mt-30">
                <h1
                    className={`text-2xl text-bold ${
                        locale == 'fa' && 'text-right'
                    }`}
                >
                    {locale == 'fa' ? 'بلاگ ها' : 'Blogs.'}
                </h1>
                <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-4">
                    {Data.blogs.map((project) => (
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
        </Container>
    )
}
