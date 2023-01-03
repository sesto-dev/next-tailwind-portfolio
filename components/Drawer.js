import { useTheme } from 'next-themes'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function Drawer({ showDrawer, setShowDrawer }) {
    const router = useRouter()
    const { resolvedTheme, setTheme } = useTheme()

    const [loading, setLoading] = useState(false)
    const [loginModalVisibility, setLoginModalVisibility] = useState(false)

    return (
        <>
            <div
                className={`${
                    showDrawer ? 'translate-x-0' : '-translate-x-full'
                } fixed top-0 right-0 z-10 h-full w-full transition duration-300`}
                onClick={() => setShowDrawer(false)}
            >
                <div className="top-0 left-0 z-20 flex h-full w-[70vw] flex-col gap-2 bg-neutral-100 p-10 shadow-2xl dark:bg-neutral-900">
                    <button
                        aria-label="Toggle Dark Mode"
                        type="button"
                        className="flex h-14 w-full items-center justify-center rounded-lg border border-neutral-400 bg-gray-200 ring-gray-300 transition-all  hover:ring-2 dark:border-neutral-500 dark:bg-gray-700"
                        onClick={() =>
                            setTheme(
                                resolvedTheme === 'dark' ? 'light' : 'dark'
                            )
                        }
                    >
                        {resolvedTheme === 'dark' ? (
                            <SunIcon className="h-5 w-5" />
                        ) : (
                            <MoonIcon className="h-5 w-5" />
                        )}
                    </button>
                </div>
            </div>
        </>
    )
}
