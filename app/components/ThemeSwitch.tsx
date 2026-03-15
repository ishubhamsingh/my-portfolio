'use client'

import { FiSun, FiMoon, FiLoader } from 'react-icons/fi'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function ThemeSwitch() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => setMounted(true), [])


    if (!mounted) return <button aria-label="Toggle theme"><FiLoader className="w-6 h-6 text-slate-400"/></button>

    if(theme === 'dark') {
        return <button onClick={() => setTheme('light')} aria-label="Switch to light theme"><FiSun className="w-6 h-6 text-amber-500"/></button>
    }

    if(theme === 'light') {
        return <button onClick={() => setTheme('dark')} aria-label="Switch to dark theme"><FiMoon className="w-6 h-6 text-slate-900"/></button>
    }

}