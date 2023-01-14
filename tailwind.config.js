/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "first-image" : "url('./src/components/images/splash.png')"
      },
      opacity: {
        '2': '0.03',
        '3': '0.04',
        '200': '3'
      }
    },
  },
  plugins: [],
}