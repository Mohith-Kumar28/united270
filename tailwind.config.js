/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cafeDeParis: "var(--font-cafeDeParis)",
        galaktis: "var(--font-galaktisRegular)",
      },
      colors: {
        "pri-pink": "#b38de7",
        // "pri-pink": "#bb88ed",
        "pri-green": "#6fe956",
        "light-orange": "#eae1cc",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
