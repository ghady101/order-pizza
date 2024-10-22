/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Roboto Mono, monospace",
    },
    extend: {
      colors: { pizza: "#123456" },
      height: {
        screen: "100dvh",
      },
    },
  },
  plugins: [],
};

// if you want to override a class do it outside the extends, so all default will be overridden, if you wan to add some of your classes to what exists in do it inside extends
// if you name a class same as existing one even in the extend it will be it be overriden
