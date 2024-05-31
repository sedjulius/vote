/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-color': 'linear-gradient(to left, #67acd7, #294150)',
      },
    },
  },
  plugins: [],
}