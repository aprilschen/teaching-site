import * as React from 'react';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';

import ResponsiveAppBar from './components/Appbar';
import { Typography, Container } from '@mui/material';
import Repl from './components/Repl'
import Oauth from './components/Oauth';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { user }  from './data/mock-data';

const ColorModeContext = React.createContext({ toggleColorMode: () => {
    //do nothing
} });

function App() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <>
      <ResponsiveAppBar theme={theme} colorMode={colorMode}/>

      <br></br>

      <Container sx={{mx:1}}>
        <Typography variant="h4">
          Welcome Back, {`${user.firstName}!`}
        </Typography>

        <Repl/>

        <Oauth/>
      </Container>



    </>
  );
}

export default function ToggleColorMode() {
  const [mode, setMode] = React.useState<'light' | 'dark'>('light');
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
        <App />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}