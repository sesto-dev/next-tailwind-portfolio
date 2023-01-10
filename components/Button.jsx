import React from 'react'
import { useTheme } from 'next-themes'

export default function Button({ children, type, onClick, classes }) {
    const { theme } = useTheme()
    if (type === 'primary') {
        return (
            <button
                onClick={onClick}
                type="button"
                className={`text-lg tablet:text-base rounded-lg ${
                    theme === 'dark'
                        ? 'bg-white text-black'
                        : 'bg-black text-white'
                } transition-all duration-300 ease-out first:ml-0 hover:scale-105 active:scale-100 link ${classes}`}
            >
                {children}
            </button>
        )
    }
    return (
        <button
            onClick={onClick}
            type="button"
            className={`text-lg tablet:text-base py-1 px-2 rounded-lg flex items-center transition-all ease-out duration-300 ${
                theme === 'dark'
                    ? 'hover:bg-slate-600 text-white'
                    : 'hover:bg-slate-100'
            } hover:scale-105 active:scale-100  tablet:first:ml-0 ${classes} link`}
        >
            {children}
        </button>
    )
}
