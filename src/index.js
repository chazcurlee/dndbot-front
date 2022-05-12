import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import { useState, useMemo } from 'react';
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import * as color from '@mui/material/colors'


const theme = createTheme({
  palette: {
    primary: {
      main: color.grey[900],
      light: '#484848',
      dark: '#000000',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#c62b29',
      light: '#ff5131',
      dark: '#9b0000',
      text: {
        primary: color.grey[700]
      },
      contrastText: color.grey[700],
    },
    text: {
      primary: color.red[500],
      menu: color.grey[900]
    },
    background: {
      default: color.grey[900],
      menu: color.grey[500]
    },
    paper: {
      default: '#c62b29'
    }
  },
  root: {
    flexGrow: 1
  },
})




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <CssBaseline enableColorScheme />
    <ThemeProvider theme={theme}>
      <Router>
          <App />
      </Router>
    </ThemeProvider>
  </React.StrictMode>
);


