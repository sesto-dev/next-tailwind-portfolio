import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Data from '../data/portfolio.json'

const WorkCard = ({ img, name, description, slug, createdAt }) => {
    const { locale = Data['defaultLocale'] } = useRouter()

    return (
        <Link href={`/projects/${slug}`}>
            <div className="w-full h-full bg-white border border-gray-200 rounded-lg dark:bg-black dark:border-neutral-700">
                <Image
                    className="rounded-t-lg"
                    src={img}
                    alt=""
                    style={{
                        objectFit: 'cover',
                        maxHeight: '300px',
                        minHeight: '300px',
                    }}
                    height="300"
                    width="1000"
                />
                <div className="p-5">
                    <p className="mb-1 font-normal text-sm text-gray-700 dark:text-gray-400">
                        {createdAt}
                    </p>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {name[locale]}
                    </h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {description[locale]}
                    </p>
                </div>
            </div>
        </Link>
    )
}

export default WorkCard
