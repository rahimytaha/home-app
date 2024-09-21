/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        dark:"rgba(30, 27, 27, 0.92)",
        lightDark:"#242222",
        textColor:"rgba(136, 124, 124, 0.98)",
        textYellow:"rgba(188, 232, 34, 0.98)",
        blue:"rgba(83, 26, 210, 0.88)",
        red:"rgba(225, 22, 22, 0.88)",
      },
      boxShadow: {
        'innerShadow': 'inset 0 0px 10px 1px rgba(94, 158, 162, 0.24)',
        'innerShadow2': 'inset 0 0px 10px 1px rgba(30, 27, 27, 0.92)',
        'yellowShadow': '0 0px 10px 1px rgba(0, 232, 34, 0.20)',
      }
    },
  },
  plugins: [],
};
