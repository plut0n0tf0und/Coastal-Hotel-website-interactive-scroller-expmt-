/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Syne', 'sans-serif'],
        body: ['Urbanist', 'sans-serif'],
      },
      colors: {
        ocean: '#0f2c59', // Ocean blue
        sand: '#dac0a3', // Sandy neutral
        warmwhite: '#f8f0e5', // Warm white
        lushgreen: '#4ade80' // Lush green accent
      }
    },
  },
  plugins: [],
}
