import React from 'react'
import { useTheme } from 'next-themes'

export default function Button({ children, onClick }) {
    const { theme } = useTheme()
    return (
        <button
            onClick={onClick}
            type="button"
            className={`text-lg tablet:text-base rounded-lg  transition-all duration-300 ease-out first:ml-0 hover:scale-105 active:scale-100 link`}
        >
            {children}
        </button>
    )
}
