import React from 'react'
import { useTheme } from './theme-provider'
import { Moon, Sun } from 'lucide-react'

const ThemeButton = () => {
  const { theme, setTheme } = useTheme()

  const isDark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark')
  }

  return (
    <button onClick={toggleTheme}>
      {isDark ? <Sun /> : <Moon />}
    </button>
  )
}

export default ThemeButton
