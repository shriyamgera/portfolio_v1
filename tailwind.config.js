/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#64ffda',
        slate: "#495670",
        lightest_slate: "#a8b2d1",
        lightest_navy:"#233554",
        off_white:"#e6f1ff",
        light_navy:"#112240"
      },
      fontFamily: {
        mono: ['SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}