/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",           // Root HTML file
    "./src/**/*.{js,jsx,ts,tsx}"  // React JS/TS files
  ],
  theme: {
    extend: {
      colors: {
        // Optional: apne custom colors add kar sakte ho
        purplePrimary: "#8245ec",
        grayPrimary: "#050414",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
}
