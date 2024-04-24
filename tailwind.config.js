/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        Outfit : ['Outfit', 'sans-serif'],
        DmSans : 'DM Sans'
      },
      colors : {
        primary : '#FF131D',
        secondary : '#020E28'
      } 

    },
  },
  plugins: [],
}