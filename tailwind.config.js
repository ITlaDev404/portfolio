/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        headersColor:'#E8E8E8',
        portfolioBackground: '#FCFCFC', //  couleur personnalisée pour le Backend 
        portfolioBackground2: '#F9F9F9',
        protfolioText: '#202020', //coleur personnalisée pour le texte
        protfolioText2: '#646464'
      }
    },
  },
  plugins: [],
}
