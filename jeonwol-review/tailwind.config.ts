/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      "color-0": "#7286D3",
      "color-1": "#8EA7E9",
      "color-2": "#E5E0FF",
      "color-3": "#FFF2F2",
      "color-4": "#8D39E3",
      "color-5": "#CBD2EB", //fill
      "color-6": "#A44848",
      "color-7": "#5B6896",
    },
  },
  plugins: [],
};
