import { useState } from 'react'
import Scene from '../../components/three/Thesis'
import Container from '../../components/Container'
import { useRouter } from 'next/router'
import Data from '../../data/data.json'

export default function Page() {
    const { locale = Data['defaultLocale'] } = useRouter()
    const [visibilities, setVisibilities] = useState({
        floor: true,
        ceiling: true,
        piping: true,
        ducting: true,
        lighting: true,
        structure: true,
        walls: true,
        panels: true,
        rooms: true,
    })

    return (
        <Container
            title="Interactive Architectural Presentation"
            canonical="https://iqoror.com/projects/interactive_architectural_presentation"
            description="Personal Portfolio of Homayoun Barooji"
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmiro.medium.com%2Fmax%2F4840%2F1*_eltQNfCM1xfi3MXK2rMJg.png&f=1&nofb=1&ipt=22209d08cb442adb015524f81b5f61e580ca9afcfa58cc21b568b48cddf5d7e3&ipo=images"
        >
            <div
                className="mt-10 rounded-lg bg-neutral-100 dark:bg-neutral-900"
                width="100%"
            >
                <Scene visibilities={visibilities} />
                <div className="mob:px-12 tablet:px-24 laptop:px-40 py-12">
                    <h1 className="mb-6 text-2xl text-bold">
                        {locale == 'fa'
                            ? 'ارائه تعاملی معماری در بستر وب'
                            : 'Interactive Architectural Presentation'}
                    </h1>
                    <p>
                        {locale == 'fa'
                            ? 'مدل بالا 👆 کاملا تعاملی بوده و میتوانید مانند یک مدل در نرم افزار 3 بعدی با آن تعامل داشته باشید. همچنین میتوانید با استفاده از منوی پایین 👇 قسمت های مختلف سازه را پنهان کنید تا زیرساخت سازه قابل مشاهده باشد.'
                            : 'You can interact with the 3D Model above 👆 using your mouse or touch-screen! ... or turn parts On/ Off ⚡🔌 in the model using this 👇 menu!'}
                    </p>
                    <div className="my-8 grid laptop:grid-cols-3 mob:grid-cols-1 tablet:grid-cols-2 gap-4">
                        {Object.keys(visibilities).map((option) => (
                            <label
                                style={{ direction: 'ltr' }}
                                key={option}
                                className="inline-flex relative items-center mr-5 cursor-pointer"
                            >
                                <input
                                    style={{ direction: 'ltr' }}
                                    type="checkbox"
                                    className="sr-only peer"
                                    checked={visibilities[option]}
                                    onChange={() =>
                                        setVisibilities({
                                            ...visibilities,
                                            [option]: !visibilities[option],
                                        })
                                    }
                                />
                                <div
                                    style={{ direction: 'ltr' }}
                                    className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-yellow-300 dark:peer-focus:ring-yellow-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-yellow-600"
                                />
                                <span
                                    style={{ direction: 'ltr' }}
                                    className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >
                                    {toTitleCase(option)}
                                </span>
                            </label>
                        ))}
                    </div>
                    {locale == 'fa' ? (
                        <p type="secondary">
                            میتوانید مستندات کامل این پروژه را در{' '}
                            <a
                                className="text-yellow-500"
                                href="https://drive.google.com/file/d/1L14SigVJXECHbRlG4yqt_H056ij_nsxV/view"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                این لینک
                            </a>{' '}
                            مشاهده کنید.
                        </p>
                    ) : (
                        <p type="secondary">
                            You can read the full presentation documentation{' '}
                            <a
                                className="text-yellow-500"
                                href="https://drive.google.com/file/d/1L14SigVJXECHbRlG4yqt_H056ij_nsxV/view"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                here.
                            </a>
                        </p>
                    )}
                </div>
            </div>
        </Container>
    )
}

function toTitleCase(str) {
    return str
        .toLowerCase()
        .split(' ')
        .map(function (word) {
            return word.charAt(0).toUpperCase() + word.slice(1)
        })
        .join(' ')
}
