/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        headersColor: '#f72d2dff',
        portfolioBackground: '#FCFCFC',
        portfolioBackground2: '#F9F9F9',
        portfolioText: '#202020',
        portfolioText2: '#646464',
      },
    },
  },
  plugins: [],
}
