/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        upwork: '#14a800',
        upworkDark: '#118a00'
      }
    },
  },
  plugins: [],
}
