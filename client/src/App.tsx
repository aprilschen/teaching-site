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
      <div style={
        (props.theme.palette.mode === 'dark' ? 
        {backgroundColor: '#313338', minHeight: '100vh'}:
        {minHeight: '100vh'})
      }>
        <ResponsiveAppBar theme={props.theme} colorMode={props.colorMode}/>
        <Oauth/>
        <Box sx={{mx: 4}}>
          <Typography variant="h4" 
          sx={(props.theme.palette.mode == 'dark' ?
          {color: '#FFFFFF', mb:1}:{mb:1})}>
            Welcome Back, {`${user.firstName}!`}
          </Typography>

          <Divider sx={(props.theme.palette.mode == 'dark' ?
          {backgroundColor: '#FFFFFF'}:{})}/>

          <Homework theme={props.theme}/>

          <Divider sx={(props.theme.palette.mode == 'dark' ?
          {backgroundColor: '#FFFFFF'}:{})}/>

          <Repl/>

        </Box>
      </div>
    );
  }