/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        midnight: '#030B1A',
        deep:     '#06182B',
        brand:    '#2563EB',
        sky:      '#38BDF8',
        cyan:     '#22D3EE',
        teal:     '#14B8A6',
        mint:     '#2DD4BF',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        display:    ['Anton', 'Montserrat', 'sans-serif'],
        script:     ['Yellowtail', 'cursive'],
        body:       ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #2563EB, #22D3EE, #2DD4BF)',
      },
    },
  },
  plugins: [],
};
