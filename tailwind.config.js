/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        walletColor: "#fdc443",
        walletBg :"#131a2b",
        navbarColor: "#233151",
        cardText:"#5949b3",
        cardBg:"#181c29",
        arrowColor:"#f4d3dea3",
        ruleBox: "#edddd6",
        ruleBox2: "#f4d3de"
      }
    },
  },
  plugins: [],
}