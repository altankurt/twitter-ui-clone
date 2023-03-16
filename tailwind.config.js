/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        brandColor: "#1DA1F2",
        brandHoverColor: "#1A91DA",
        bgColor: "#15202B",
        textColor: "#E1E8ED",
        borderColor: "#2F3336",
        lightGray: "#6E767D",
        darkGray: "#2D3741",
        iconHoverColor: "#162D40",
      },

      fontFamily: {
        mainFont: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
