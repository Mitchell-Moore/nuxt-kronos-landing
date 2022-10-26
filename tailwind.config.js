/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      animation: {
        'fade-in-heading': 'fadeInDown 1s forwards',
        slideDown: 'slideDown 1s ease-in-out',
      },
      keyframes: {
        'fade-in-heading': {
          '0%': { scale: 0, opacity: 0 },
          '100%': { scale: 1, opacity: 1 },
        },
        slideDown: {
          '0%': { transform: 'translateY(-70px)', opacity: 0 },
          '100%': { transform: 'translateY(0px)', opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
