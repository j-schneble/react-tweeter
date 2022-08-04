/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'twitter-blue':'#1DA1F2',
        'twitter-dark':'#657786',
        'twitter-light':'#AAB8C2',
        'twitter-extra':'#E1E8ED',
        'twitter-white':'#F5F8FA',
      }
    },
  },
  plugins: [],
}
