import Socials from '../components/Socials'
import WorkCard from '../components/WorkCard.jsx'
import { useRouter } from 'next/router'

// Local Data
import Data from '../data/data.json'
import Container from '../components/Container'
import Link from 'next/link'

export default function Home() {
    const { locale = Data['defaultLocale'] } = useRouter()

    return (
        <Container
            title="Amirhossein Mohammadi's Portfolio Website"
            canonical="https://accretence.com"
            description="Portfolio of a Designer & Developer based in Tehran, Iran."
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmiro.medium.com%2Fmax%2F4840%2F1*_eltQNfCM1xfi3MXK2rMJg.png&f=1&nofb=1&ipt=22209d08cb442adb015524f81b5f61e580ca9afcfa58cc21b568b48cddf5d7e3&ipo=images"
        >
            <div className="mt-10 laptop:text-7xl mob:text-3xl tablet:text-6xl text-bold">
                <h1 className={`mb-4 `}>{Data['headerTaglineOne'][locale]}</h1>
                <h1 className="mb-4">{Data['headerTaglineTwo'][locale]}</h1>
                <h1 className="mb-4">{Data['headerTaglineThree'][locale]}</h1>
                <h1 className="mb-4">{Data['headerTaglineFour'][locale]}</h1>
            </div>
            <Socials locale={locale} className="mt-10" />
            <h1 className="mt-12 mb-2 text-2xl text-bold">
                {locale == 'fa' ? 'رزومه' : 'Resume.'}
            </h1>
            <Link href="/resume">
                <p
                    className="px-8 py-4 bg-neutral-100 dark:bg-neutral-900 rounded-md my-4 hover:bg-neutral-900 hover:text-white
                    hover:dark:bg-neutral-100 hover:dark:text-black
                    transition-all duration-300"
                >
                    {locale == 'fa'
                        ? 'برای مشاهده روزمه در این قسمت کلیک کنید'
                        : 'Click here to view my resume / CV'}
                </p>
            </Link>
            <div className="mt-10 laptop:mt-30">
                <h1 className="text-2xl text-bold">
                    {locale == 'fa' ? 'پروژه ها' : 'Projects.'}
                </h1>
                <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-4">
                    {Data.projects.map((project) => (
                        <WorkCard
                            key={project.title}
                            category="projects"
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
                <h1 className="text-2xl text-bold">
                    {locale == 'fa' ? 'بلاگ ها' : 'Blogs.'}
                </h1>
                <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-4">
                    {Data.blogs.map((blog) => (
                        <WorkCard
                            key={blog.title}
                            category="blogs"
                            img={blog.imageSrc}
                            name={blog.title}
                            description={blog.description}
                            slug={blog.slug}
                            createdAt={blog.createdAt}
                        />
                    ))}
                </div>
            </div>
        </Container>
    )
}
