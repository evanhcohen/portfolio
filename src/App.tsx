import React from 'react';
import './App.css';
import InfoCard from './components/InfoCard/InfoCard';
import { ThemeProvider, createTheme } from '@mui/material';

function App() {
  const theme = createTheme({
    palette: {},
    typography: {
      fontFamily: "Outfit",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <InfoCard />
      </div>
    </ThemeProvider>
  );
}

export default App;
