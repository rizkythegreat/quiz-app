/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "monte-carlo": {
          50: "#f9fcfc",
          100: "#f3faf8",
          200: "#e1f2ee",
          300: "#cfeae3",
          400: "#abdbce",
          500: "#87cbb9",
          600: "#7ab7a7",
          700: "#65988b",
          800: "#517a6f",
          900: "#42635b",
        },
        "hippie-blue": {
          50: "#f7fafb",
          100: "#eef5f7",
          200: "#d5e7ea",
          300: "#bbd8dd",
          400: "#89bac4",
          500: "#569daa",
          600: "#4d8d99",
          700: "#417680",
          800: "#345e66",
          900: "#2a4d53",
        },
        "smalt-blue": {
          50: "#f7f9f9",
          100: "#eef2f3",
          200: "#d5dfe1",
          300: "#bccbcf",
          400: "#89a4aa",
          500: "#577d86",
          600: "#4e7179",
          700: "#415e65",
          800: "#344b50",
          900: "#2b3d42",
        },
      },
      padding: {
        "30px": "30px",
        "20px": "20px",
      },
    },
  },
  plugins: [],
};
