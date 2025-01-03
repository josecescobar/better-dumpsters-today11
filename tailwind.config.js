/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0044cc',
          dark: '#003399',
        },
        accent: '#55efc4',
      },
    },
  },
  plugins: [],
}