import React from 'react'

export default function InlineCode({ children }) {
    return (
        <span className="py-0.5 px-2 mx-2 rounded-md bg-white dark:bg-black whitespace-pre-wrap">
            <code>{children}</code>
        </span>
    )
}
