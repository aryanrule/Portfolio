/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        greenish: "#88BDBC",
        NavyBlue: "#254E58",
        DarkBlue: "#112D32",
        Bage: '#EAE7DC',
        sky:'#0078D4'
      },
      backgroundImage: {
        'gradient': "linear-gradient(to right , #feac5e , #c779d0 , #4bc0c8)",
      },
      screens: {
        'sm': '640px',
        'md': '850px', // Customized md breakpoint
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      }
    },
  },
  plugins: [],
}
