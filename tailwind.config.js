/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-off-white': '#f9f9f9',
        'brand-yellow': '#FFD700', // Example yellow, adjust to match
      },
      borderRadius: { // Add borderRadius
        'custom-curve': '50% 20% / 10% 40%', // Approximation of the curve
        '4xl': '2rem', // A larger standard radius
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}