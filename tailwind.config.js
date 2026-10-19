import flowbitePlugin from 'flowbite/plugin'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        // D-RODZ Car Maintenance theme: garage charcoal + orange accent
        garage: {
          950: "#0b0e13",
          900: "#12161d",
          800: "#1a2029",
          700: "#252d39",
          600: "#364051",
        },
        accent: {
          300: "#ffb27a",
          400: "#ff8a3d",
          500: "#ff6b1a",
          600: "#e65a0d",
        },
      },
    },
  },
  plugins: [
    flowbitePlugin,
  ],
};
