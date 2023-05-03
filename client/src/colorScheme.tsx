import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import App from './App';

import { user } from './data/mock-data';
import { useState } from 'react';
const ColorModeContext = React.createContext({ toggleColorMode: () => {
    //do nothing
} });

export default function ToggleColorMode() {
  const [mode, setMode] = useState(user.palette);
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <App theme={theme} colorMode={colorMode}/>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}