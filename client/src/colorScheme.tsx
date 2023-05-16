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

import Login from './Login';
import Register from './Register';
import PageNotFound from './PageNotFound';
import { Route, Routes } from 'react-router-dom';
const ColorModeContext = React.createContext({ toggleColorMode: () => {
    //do nothing
} });

export default function ToggleColorMode() {
  const [user, setUser] = useState<any>(null);
  const [mode, setMode] = React.useState('dark');

  useEffect(() => {
    if(localStorage.getItem('studentPortalToken') == null) {
      console.log('You need to login!')
    } else {
      // @ts-ignore
      const [header, payload, signature] = localStorage.getItem('studentPortalToken').split('.');
      const decodedPayload = JSON.parse(atob(payload));
      axios.get(
        `https://0l3iu0rscb.execute-api.us-west-1.amazonaws.com/dev/student/${decodedPayload.studentID}`, {
        headers: {Authorization: `Bearer ${localStorage.getItem('studentPortalToken')}`}})
      .then(res => res.data[0])
      .then(res => {
        setUser(res)
        return res;
      })
      .then(res => setMode(res.palette));
    }

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
    return (
    <>
      <BrowserRouter>
        <main>
                <Routes>
                  <Route path="/" element={
                    <Login
                    />
                  }/>

                  <Route path="/register" element={
                    <Register
                    />
                  }/>

                  <Route path="*" element={
                    <PageNotFound
                    theme={theme}/>
                  }/>
                </Routes>
            </main>
      </BrowserRouter>
    </>
    );
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