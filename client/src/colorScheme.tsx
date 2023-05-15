import {useState, useEffect} from 'react';
import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { PaletteMode } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { BrowserRouter } from "react-router-dom";

import App from './App';

import axios from 'axios';

const ColorModeContext = React.createContext({ toggleColorMode: () => {
    //do nothing
} });

export default function ToggleColorMode() {
  const [user, setUser] = useState<any>(null);
  const [mode, setMode] = React.useState('dark');

  useEffect(() => {
    axios.get("https://0l3iu0rscb.execute-api.us-west-1.amazonaws.com/dev/student/1")
    .then(res => res.data[0])
    .then(res => {
      setUser(res)
      return res;
    })
    .then(res => setMode(res.palette));
  },[]);

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
          mode: (mode) as PaletteMode
        },
      }),
    [mode],
  );

  if(!user) {
    return <div>Loading...</div>
  }

  return (
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
              <App theme={theme} colorMode={colorMode}
              palette={user.palette}
              student={user}/>
            </BrowserRouter>
        </ThemeProvider>
      </ColorModeContext.Provider>
  );
}