import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import App from "./App";

const Main = () => (
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);

ReactDOM.render(<Main />, document.getElementById("root"));
