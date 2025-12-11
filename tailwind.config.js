/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        portfolioBackground: '#F0F0F0', // Votre couleur personnalisée
      }
    },
  },
  plugins: [],
}
