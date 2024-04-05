import type { Config } from 'tailwindcss'
import { nextui } from "@nextui-org/react"

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx,json}',
    './components/**/*.{js,ts,jsx,tsx,mdx,json}',
    './app/**/*.{js,ts,jsx,tsx,mdx,json}',
    './lib/**/*.{js,ts,jsx,tsx,mdx,json}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx,json}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [nextui()],
  darkMode: 'class',
}
export default config
