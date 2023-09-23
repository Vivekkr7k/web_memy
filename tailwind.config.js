const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors:{
      darkback:"#111827",
      lightback:"#1f2937",
      dark:"#1F2937",
      light: "#F9FAFB",
      blue:"#3B71CA",
    }
  },
  plugins: [],
});