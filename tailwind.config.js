module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        softPrimaryLight: "rgba(221,160,221, 23%)",
        softPrimary: "rgb(221,160,221)",
        lightPrimary: "rgb(186,85,211)",
        meduimPrimary: "rgb(139,0,139)",
        darkPrimary: "rgb(75,0,130)",
        softSecondaryLight: "rgba(192,197,206, 10%)",
        lightGrey: "rgb(167,173,186)",
        dimGrey: "rgb(101,115,126)",
        meduimGrey: "rgb(79,91,102)",
        darkGrey: "rgb(52,61,70)",
        white: "rgb(255, 255, 255)",
        black: "rgb(0,0,0)",
        accent: "rgb(195, 39, 11)",
        accentLight: "rgba(255, 119, 91, 19%)",
      },
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui"],
        serif: ["ui-serif", "Georgia"],
        mono: ["ui-monospace", "SFMono-Regular"],
        display: ["Oswald"],
        body: ['"Open Sans"'],
        logo: ["blaka"],
      },
    },
  },
  plugins: [],
};
