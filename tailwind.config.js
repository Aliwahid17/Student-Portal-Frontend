/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    animation:{
      'animation-bounce' : 'bounce 1s 15',
    }
  },
  variants: {
    extend: {
        fontSize: ["hover", "focus"],
        backgroundOpacity: ["active"],
        borderWidth: ["hover", "focus"],
        textColor: [
            "responsive",
            "dark",
            "group-hover",
            "focus-within",
            "hover",
            "focus",
        ],
    },
},
  plugins: [],
}
