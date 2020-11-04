// eslint-disable-next-line @typescript-eslint/no-var-requires
const purgecss = require("@fullhuman/postcss-purgecss")({
  content: ["./src/index.html"],
  defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
});

const plugins =
  process.env.NODE_ENV === "production"
    ? ["tailwindcss", "autoprefixer", purgecss]
    : ["tailwindcss"];

module.exports = { plugins };
