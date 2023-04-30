import ResponsiveAppBar from './components/Appbar';
import { Typography, Box, Divider } from '@mui/material';
import Repl from './components/Repl'
import Oauth from './components/Oauth';
import Homework from './components/Homework';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { user }  from './data/mock-data';

export default function App(props: any) {
    return (
      <>
        <ResponsiveAppBar theme={props.theme} colorMode={props.colorMode}/>

        <Box sx={{mx: 4}}>
          <Typography variant="h4">
            Welcome Back, {`${user.firstName}!`}
          </Typography>

          <Divider/>
          <Homework/>
          <Repl/>
          <Oauth/>
        </Box>

      </>
    );
  }