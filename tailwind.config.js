/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/**.{js,ts,jsx,tsx}", // Include all route files for expo-router
    "./component/**/*.{js,ts,jsx,tsx}", // Include all custom components
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
}
