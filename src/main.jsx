import React from 'react';
import { createRoot } from 'react-dom';
import App from './App';
import theme from './theme';
import { ThemeProvider } from '@mui/material/styles';

const rootElement = document.getElementById('root');
createRoot(rootElement).render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);


ReactDOM.render(<Main />, document.getElementById("root"));
