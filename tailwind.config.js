// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.tsx",
    "./app/**/*.jsx",
    "./app/**/*.js",
    "./app/**/*.ts",
  ],
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Lato", ...defaultTheme.fontFamily.sans],
      },
    },
  },
};
