import Image from 'next/image'
import Link from 'next/link'

const WorkCard = ({ img, name, description, slug }) => {
    return (
        <Link href={`/projects/${slug}`}>
            <div class="w-full h-full bg-white border border-gray-200 rounded-lg dark:bg-black dark:border-neutral-700">
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
                <div class="p-5">
                    <p class="mb-1 font-normal text-sm text-gray-700 dark:text-gray-400">
                        21 December, 2022
                    </p>
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {name}
                    </h5>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {description}
                    </p>
                </div>
            </div>
        </Link>
    )
}

export default WorkCard
