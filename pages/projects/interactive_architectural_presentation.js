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

    let options = [
        'floor',
        'ceiling',
        'piping',
        'ducting',
        'lighting',
        'structure',
        'walls',
        'panels',
        'rooms',
    ]

    const handler = (val) => {
        let temp = {}

        for (let i = 0; i < options.length; i++) {
            const element = options[i]
            temp[element] = false
        }

        for (let j = 0; j < val.length; j++) {
            const element = val[j]
            temp[element] = true
        }

        setVisibilities(temp)
    }

    return (
        <Container>
            <div
                className="mt-10 rounded-lg bg-neutral-50 dark:bg-neutral-900"
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
                        {options.map((option) => (
                            <label
                                key={option}
                                className="inline-flex relative items-center mr-5 cursor-pointer"
                            >
                                <input
                                    type="checkbox"
                                    value=""
                                    className="sr-only peer"
                                    checked
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
