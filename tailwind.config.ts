import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./utils/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // colors: {
    //   primary: "#00BDBB",
    //   secondary: "#FB9A94",
    //   accent: "#00A0A2",
    //   neutral: "#FCCDC0",
    //   "base-100": "#ff00ff",
    //   info: "#0000ff",
    //   success: "#00BDBB",
    //   warning: "#F08A00",
    //   error: "#FF290E",
    //   white: "#ffffff",
    //   "bg-primary": "#000000",
    //   "bg-neutral": "#000000",
    //   "text-primary": "#00BDBB",
    // },
    // colors: {
    //   extend: {
    //     white: "#ffffff",
    //     secondary: "#FB9A94",
    //     accent: "#00A0A2",
    //     neutral: "#FCCDC0",
    //     "base-100": "#ff00ff",
    //     info: "#0000ff",
    //     success: "#00BDBB",
    //     warning: "#F08A00",
    //     error: "#FF290E",
    //     "bg-primary": "#000000",
    //     primary: "#00BDBB",
    //   },
    // },
    extend: {
      // typography: {
      //   DEFAULT: {
      //     css: {
      //       a: {
      //         fontFamily: "neulis-neue, sans-serif",
      //       },
      //       h2: {
      //         fontFamily: "neulis-neue, sans-serif",
      //       },
      //     },
      //   },
      // },
      background: {
        "white-gradient-overlay": `linear-gradient(white 20%, transparent 100%); opacity: 1; transition: 0.3s; z-index: 1`,
      },
      button: {
        "btn-error": {
          background: "#FF290E",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "landing-hero": `  radial-gradient(
        circle,
        #ff0000 0%,
        #ff7f00 20%,
        #ffff00 40%,
        #00ff00 60%,
        #0000ff 80%,
        #4b0082 100%
      )`,
        // "gradient-conic":
        //   "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-pattern": "url('/images/hero-bg.svg')",
      },
      textShadow: {
        pink: "2px 2px 0 #FB9A94",
      },
      fontFamily: {
        display: "neulis-neue, sans-serif",
        sans: "neulis-neue, sans-serif",
        // Adds a new `font-display` class
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          secondary: "#FB9A94",
          accent: "#00A0A2",
          neutral: "#FCCDC0",
          "base-100": "#ff00ff",
          info: "#0000ff",
          success: "#00BDBB",
          warning: "#F08A00",
          error: "#FF290E",
          white: "#ffffff",
          "bg-primary": "#000000",
          "text-primary": "#00BDBB",
          primary: "#00BDBB",
        },
      },
    ],
    base: false,
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui"),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
    // function ({ addComponents }) {
    //   addComponents({
    //     ".btn-error": {
    //       fontWeight: "400",
    //       cursor: "pointer",
    //       transition: "background-color 0.3s, transform 0.2s",
    //       backgroundColor: "#FF290E",
    //     },
    //   });
    // },
  ],
};
export default config;
