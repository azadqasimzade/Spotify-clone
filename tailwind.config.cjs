/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js}"],
  theme: {
    extend: {
      colors:{
        backdrop: '#121212',
        primary: '#1db954',
        active: '#282828',
        link: '#b3b3b3',
        footer: '#181818',
        linkColor: '#333'
      },
      boxShadow:{
        spotify: '0 2px 4px 0 rgb(0 0 0 / 20%)',
        musicShadow:'0 8px 24px rgb(0 0 0 / 50%)'
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
