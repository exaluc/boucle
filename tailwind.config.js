/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './_drafts/**/*.html',
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.md',
    './*.md',
    './*.html',
  ],
  options: {
    safelist: [
      // add the classes that might be added by the markdown here
      'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
    ],
  },
  darkMode: 'class', // or 'class'
  theme: {
    extend: {},
  },
  variants: {
    borderColor: ['responsive', 'hover', 'focus', 'dark'],
  },
  plugins: [],
}
