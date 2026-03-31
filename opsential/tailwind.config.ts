/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        page: '#09090b',
        surface: '#141416',
        'surface-h': '#1c1c1f',
        brd: '#1e1e22',
        accent: '#0EA5E9',
        'accent-h': '#0284C7',
        'accent-soft': 'rgba(14,165,233,0.10)',
        info: '#5b8def',
        ok: '#3ecf8e',
        danger: '#ef5350',
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}