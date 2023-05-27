const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "border-gradient-to-r": "linear-gradient(to right, white, transparent)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      fontFamily: {
        pilat: ["var(--pilat-font)", ...fontFamily.sans],
        redhat: ["var(--redhat-font)", ...fontFamily.serif],
      },
      colors: {
        background: "#060606",
      },
    },
  },

  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".border-gradient-right": {
          border: "double 1px transparent",
          backgroundImage: "var(--tw-gradient)",
          backgroundOrigin: "border-box",
          backgroundClip: "content-box, border-box",
          boxDecorationBreak: "clone",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
