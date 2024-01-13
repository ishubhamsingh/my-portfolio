'use client'

import { FiSun, FiMoon, FiLoader } from 'react-icons/fi'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function ThemeSwitch() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => setMounted(true), [])


    if (!mounted) return <FiLoader className="w-6 h-6 text-slate-400"/>

    if(theme === 'dark') {
        return <FiSun onClick={() => setTheme('light')} className="w-6 h-6 text-amber-500"/>
    }

    if(theme === 'light') {
        return <FiMoon onClick={() => setTheme('dark')} className="w-6 h-6 text-slate-900"/>
    }

}