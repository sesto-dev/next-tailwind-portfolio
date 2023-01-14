import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Data from '../data/data.json'

export default function WorkCard({
    category,
    img,
    name,
    description,
    slug,
    createdAt,
}) {
    const { locale = Data['defaultLocale'] } = useRouter()

    return (
        <Link href={`/${category}/${slug}`}>
            <div className="w-full h-full border border-neutral-200 rounded-lg  dark:border-neutral-700 dark:hover:border-white hover:border-black transition-all duration-300">
                <Image
                    className="rounded-t-lg"
                    src={img}
                    alt={name + description}
                    style={{
                        objectFit: 'cover',
                        maxHeight: '300px',
                        minHeight: '300px',
                    }}
                    height="300"
                    width="1000"
                />
                <div className={`p-5 ${locale == 'fa' && 'text-right'}`}>
                    <p className="mb-1 font-normal text-sm text-gray-700 dark:text-gray-400">
                        {new Date(createdAt).toLocaleDateString(
                            locale == 'fa' ? 'fa-ir' : 'en-us',
                            {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                            }
                        )}
                    </p>
                    <h5
                        className={`mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white `}
                    >
                        {name[locale]}
                    </h5>
                    <p
                        className={`mb-3 font-normal text-gray-700 dark:text-gray-400 `}
                    >
                        {description[locale]}
                    </p>
                </div>
            </div>
        </Link>
    )
}
