import { useState } from 'react'
import Scene from '../../components/three/Thesis'
import Container from '../../components/Container'

export default function Page() {
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
            title="Accretence Portfolio Website"
            canonical="https://accretence.com"
            description="Personal Portfolio of Amirhossein Mohammadi"
            image="http://localhost:3000/_next/image?url=https%3A%2F%2Fexternal-content.duckduckgo.com%2Fiu%2F%3Fu%3Dhttp%253A%252F%252Fstatic1.squarespace.com%252Fstatic%252F5e1421011232b71c373a8668%252F5e3fa37d4b6b8940ee976e5e%252F6124fd3261af794b407e8eb1%252F1629922151158%252FScreenshot%252B2021-08-25%252Bat%252B12.23.07.png%253Fformat%253D1500w%26f%3D1%26nofb%3D1%26ipt%3D96bc090821c53ca8583497d7b8d1aa8153812f2e0240ab5014f413f87ec44699%26ipo%3Dimages&w=2048&q=75"
        >
            <div
                className="mt-10 rounded-lg bg-neutral-100 dark:bg-neutral-900"
                width="100%"
            >
                <Scene visibilities={visibilities} />
                <div className="p-12">
                    <p>
                        You can interact with the 3D Model above 👆 using your
                        mouse or touch-screen!
                        <br />
                        ... or turn parts On/ Off ⚡🔌 in the model using this
                        👇 menu!
                    </p>
                    <div className="my-6 grid grid-cols-3 gap-4">
                        {Object.keys(visibilities).map((option) => (
                            <label
                                key={option}
                                className="inline-flex relative items-center mr-5 cursor-pointer"
                            >
                                <input
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
                                <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-yellow-300 dark:peer-focus:ring-yellow-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-yellow-600" />
                                <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    {toTitleCase(option)}
                                </span>
                            </label>
                        ))}
                    </div>
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
