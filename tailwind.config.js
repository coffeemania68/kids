/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./index.html",
     "./src/**/*.{js,jsx,ts,tsx}"
  ],
theme: {
    extend: {
      colors: {
        'royal-gold': '#D4AF37',
        'soft-gold': '#F2D584',
        'soft-navy': '#334B77',
        'light-bg': '#F0F6FF',
      },
    },
  },
  plugins: [],
}
