/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#09090b',
        surface: '#121214',
        'surface-elevated': '#18181b',
        border: '#27272a',
        'border-subtle': '#1f1f23',
        muted: '#a1a1aa',
        accent: {
          DEFAULT: '#10b981', // clean emerald accent
          light: '#34d399',
          dark: '#059669',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        editorial: ['Cabinet Grotesk', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        widest: '0.15em',
      }
    },
  },
  plugins: [],
}
