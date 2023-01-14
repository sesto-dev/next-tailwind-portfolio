import React from 'react'

export default function Github({ href, title, description }) {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer">
            <div
                className="w-full border p-6 my-6 border-neutral-200 rounded-lg dark:border-neutral-700 dark:hover:border-white hover:border-black transition-all duration-300"
                style={{ direction: 'ltr' }}
            >
                <h2 className="text-xl mb-2">{title}</h2>
                <p className="text-neutral-600 dark:text-neutral-400">
                    {description}
                </p>
            </div>
        </a>
    )
}
