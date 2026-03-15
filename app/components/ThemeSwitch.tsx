'use client'

import { FiSun, FiMoon, FiLoader } from 'react-icons/fi'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function ThemeSwitch() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => setMounted(true), [])


    if (!mounted) return <FiLoader className="w-6 h-6 text-slate-400" role="img" aria-label="Loading theme"/>

    if(theme === 'dark') {
        return <FiSun onClick={() => setTheme('light')} className="w-6 h-6 text-amber-500 cursor-pointer" role="button" aria-label="Switch to light theme" tabIndex={0} onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setTheme('light')}/>
    }

    if(theme === 'light') {
        return <FiMoon onClick={() => setTheme('dark')} className="w-6 h-6 text-slate-900 cursor-pointer" role="button" aria-label="Switch to dark theme" tabIndex={0} onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setTheme('dark')}/>
    }

}