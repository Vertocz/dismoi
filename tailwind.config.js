// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2596be',
        pinky: '#ffb1be',
        mint: '#06e5a2',
        bgsoft: '#fef9f6'
      },
      fontFamily: {
        friendly: ['"Nunito"', 'ui-sans-serif', 'system-ui']
      }
    }
  },
  plugins: []
}
