/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/**.{js,ts,jsx,tsx}", // Include all route files for expo-router
    "./components/**/*.{js,ts,jsx,tsx}", // Include all custom components
  ],
  presets: [require("nativewind/preset")],
   theme: {
    extend: {
      colors: {
        primary: '#030014',
        secondary: '#151312',
        user: '#343541',         // User message background (ChatGPT style)
        light: {
          100: '#D6C6FF',
          200: '#A8B5DB',
          300: '#9CA4AB',
        },
        dark: {
          100: '#221f3d',
          200: '#0f0d23',
        },
        accent: '#AB8BFF'
      }
    },
  },
  plugins: [],
}
