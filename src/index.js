import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';
// import './index.css';
import { StyleSheetManager } from 'styled-components';

const theme = {
  colors: {
    black: '#212121',
    white: '#fff',
    accent: 'orangered',
  },
  radii: {
    xs: '2px',
    sm: '4px',
    md: '8px',
    lg: '16px',
  },
  icon: {
    xs: '15px',
    sm: '20px',
    md: '25px',
    lg: '30px',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StyleSheetManager shouldForwardProp={prop => prop !== 'active'}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </StyleSheetManager>
  </React.StrictMode>
);
