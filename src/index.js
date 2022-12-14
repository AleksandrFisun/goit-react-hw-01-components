import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/app/App';
import './index.css';
import { ThemeProvider } from 'styled-components';

const theme = {
  color: {
    black: 'black',
    white: 'white',
    green: 'green',
    red: 'red',
  },
};
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
