const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        screen: ["'Noto Sans'", ...defaultTheme.fontFamily.sans]
      },
      colors: {
        text: 'rgb(89, 89, 89)',
        primary: {
          100: 'rgb(229, 244, 255)',
          200: 'rgb(179, 223, 255)',
          300: 'rgb(128, 202, 255)',
          400: 'rgb(77, 180, 255)',
          500: 'rgb(26, 159, 255)',
          600: 'rgb(0, 133, 230)',
          700: 'rgb(0, 104, 179)',
          800: 'rgb(0, 74, 128)',
          900: 'rgb(0, 44, 77)',
        },
        secondary: {
          100: 'rgb(217, 217, 217)',
          200: 'rgb(191, 191, 191)',
          300: 'rgb(166, 166, 166)',
          400: 'rgb(140, 140, 140)',
          500: 'rgb(115, 115, 115)',
          600: 'rgb(89, 89, 89)',
          700: 'rgb(64, 64, 64)',
          800: 'rgb(38, 38, 38)',
          900: 'rgb(13, 13, 13)',
        },
        danger: {
          100: 'rgb(253, 232, 231)',
          200: 'rgb(250, 187, 183)',
          300: 'rgb(247, 142, 135)',
          400: 'rgb(244, 97, 87)',
          500: 'rgb(241, 52, 39)',
          600: 'rgb(216, 27, 14)',
          700: 'rgb(168, 21, 11)',
          800: 'rgb(120, 15, 8)',
          900: 'rgb(72, 9, 5)',
        }
      },
      transitionProperty: {
        'text-input': 'border-color, box-shadow'
      }
    },
  },
  plugins: []
}
