/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // CHANGE: Simplified to a single sans-serif font family for a modern look
        sans: ['Inter', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      // The lime green accent color from the video will be used directly in components.
    },
  },
  plugins: [],
}