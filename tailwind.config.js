

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainColor : "#00252e",
        lightMainColor:"#216e82",
        veryLightMainColor:"#8dd1e2",
        Pink:" hsl(322, 100%, 66%)",
        LightPink:" hsl(321, 100%, 78%)",
        LightRed: "hsl(0, 100%, 63%)",
        VeryDarkCyan:" hsl(192, 100%, 9%)",
        VeryPaleBlue:"hsl(207, 100%, 98%)",
      },
      screens: {
        sm:"576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        '2xl': "1400px",
      },
      fontFamily:{
        'body':['"Open Sans"','serif'],
        'heading': ['"Poppins','serif']
      }
    },
  },
  plugins: [],
}


