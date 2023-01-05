import Socials from '../components/Socials'
import WorkCard from '../components/WorkCard'
import { useRouter } from 'next/router'

// Local Data
import Data from '../data/data.json'
import Container from '../components/Container'
import Link from 'next/link'

export default function Home() {
    const { locale = Data['defaultLocale'] } = useRouter()

    return (
        <Container
            title="Accretence"
            canonical="https://accretence.com"
            description="Personal Portfolio of Amirhossein Mohammadi"
            image="http://localhost:3000/_next/image?url=https%3A%2F%2Fexternal-content.duckduckgo.com%2Fiu%2F%3Fu%3Dhttp%253A%252F%252Fstatic1.squarespace.com%252Fstatic%252F5e1421011232b71c373a8668%252F5e3fa37d4b6b8940ee976e5e%252F6124fd3261af794b407e8eb1%252F1629922151158%252FScreenshot%252B2021-08-25%252Bat%252B12.23.07.png%253Fformat%253D1500w%26f%3D1%26nofb%3D1%26ipt%3D96bc090821c53ca8583497d7b8d1aa8153812f2e0240ab5014f413f87ec44699%26ipo%3Dimages&w=2048&q=75"
        >
            <div
                className={`mt-10 laptop:text-7xl mob:text-6xl tablet:text-6xl text-bold ${
                    locale == 'fa' && 'text-right'
                }`}
            >
                <h1 className={`mb-4 `}>{Data['headerTaglineOne'][locale]}</h1>
                <h1 className="mb-4">{Data['headerTaglineTwo'][locale]}</h1>
                <h1 className="mb-4">{Data['headerTaglineThree'][locale]}</h1>
                <h1 className="mb-4">{Data['headerTaglineFour'][locale]}</h1>
            </div>
            <Socials locale={locale} className="mt-10" />
            <h1
                className={`mt-12 mb-2 text-2xl text-bold ${
                    locale == 'fa' && 'text-right'
                }`}
            >
                {locale == 'fa' ? 'رزومه' : 'Resume.'}
            </h1>
            <Link href="/resume">
                <p
                    className={`${
                        locale == 'fa' && 'text-right'
                    } px-8 py-4 bg-neutral-100 dark:bg-neutral-900 rounded-md my-4 hover:bg-neutral-900 hover:text-white
                    hover:dark:bg-neutral-100 hover:dark:text-black
                    transition-all duration-300`}
                >
                    {locale == 'fa'
                        ? 'برای مشاهده روزمه در این قسمت کلیک کنید'
                        : 'Click here to view my resume / CV'}
                </p>
            </Link>
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
