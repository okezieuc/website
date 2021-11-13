module.exports = {
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  plugins: [require("@tailwindcss/typography")],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Zilla Slab"'],
        body: ['"Nunito"'],
      },
      typography: {
        DEFAULT: {
          css: {
            h2: {
              fontFamily: ['"Zilla Slab"'],
            },
            h3: {
              fontFamily: ['"Zilla Slab"'],
            },
            h4: {
              fontFamily: ['"Zilla Slab"'],
            },
          },
        },
      },
    },
  },
};
