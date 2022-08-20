/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "body": "#12141D",
        "primary": "#3ccf91",
        "secondary": "#6c757d"
      },
    },
  },
  plugins: [],
}
