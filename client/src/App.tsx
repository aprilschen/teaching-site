import ResponsiveAppBar from './components/Appbar';
import { Typography, Box, Divider } from '@mui/material';
import Repl from './components/Repl'
import Oauth from './components/Oauth';
import Homework from './components/Homework';
import Resources from './components/Resources';
import PastHomework from './components/PastHomework';
import Footer from './components/Footer';
import TuitionAlert from './components/TuitionAlert';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { user }  from './data/mock-data';
import { tuition } from './data/mock-data';

export default function App(props: any) {
  function tuitionIsLate() {
    tuition.forEach(session => {
      if ((new Date()) > session.dateDue) {
        return true;
      }
    });
    return false;
  }

    return (
      <>
          <div style={
          (props.theme.palette.mode === 'dark' ? 
          {backgroundColor: '#313338', minHeight: '100vh'}:
          {minHeight: '100vh'})
          }>
          <ResponsiveAppBar theme={props.theme} colorMode={props.colorMode}
          palette={props.palette}/>
          <Oauth/>

          <main>
            <Box sx={{mx: 4}}>
              <Typography variant="h4"
              sx={(props.theme.palette.mode == 'dark' ?
              {color: '#FFFFFF', mb:1}:{mb:1})}>
                Welcome Back, {`${user.firstName}!`}
                {tuitionIsLate() ? <></> : 
                <TuitionAlert theme={props.theme}/>}
              </Typography>

              <Divider sx={(props.theme.palette.mode == 'dark' ?
              {backgroundColor: '#FFFFFF'}:{})}/>

              <Homework theme={props.theme}/>

              <Divider sx={(props.theme.palette.mode == 'dark' ?
              {backgroundColor: '#FFFFFF'}:{})}/>

              <Repl/>

              <Divider sx={(props.theme.palette.mode == 'dark' ?
              {backgroundColor: '#FFFFFF'}:{})}/>

              <Resources theme={props.theme}/>

              <Divider sx={(props.theme.palette.mode == 'dark' ?
              {backgroundColor: '#FFFFFF'}:{})}/>

              <PastHomework theme={props.theme}/>
            </Box>
          </main>
        </div>
        <Footer theme={props.theme}/>
      </>
    );
  }