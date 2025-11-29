module.exports = {
  plugins: {
    // Use the PostCSS adapter package for Tailwind
    // This avoids the "use tailwindcss directly as a PostCSS plugin" error
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
};