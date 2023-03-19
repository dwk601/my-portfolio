import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#736fe7",
    },
    secondary: {
      main: "#aaacec",
    },
    tertiary: {
      main: "#c1c1ec",
    },
    quaternary: {
      main: "#b5d3f3",
    },
    quinary: {
      main: "#FFFCF0",
    },
  },
  typography: {
    fontFamily: "Museo Sans Cyrl, sans-serif",
  },
});

export default theme;
