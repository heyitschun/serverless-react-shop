module.exports = {
  purge: {
    enabled: true,
    content: [
      "./src/**/*.html",
      "./src/**/*.jsx",
      "./src/**/*.js"
    ]
  },
  theme: {
    extend: {
      fontFamily: {
        comfortaa: ["Comfortaa", "Helvetica", "Arial", "sans-serif"],
        varela: ["Varela Round", "Verdana", "Calibri", "sans-serif"]
      },
      height: {
        lg: "400px",
        xl: "500px"
      }
    },
  },
  variants: {},
  plugins: [],
}
