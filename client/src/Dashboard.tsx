import { Box, Divider, Typography } from "@mui/material";

import Repl from './components/Repl'
import Homework from './components/Homework';
import Resources from './components/Resources';
import PastHomework from './components/PastHomework';
import TuitionAlert from './components/TuitionAlert';

export default function Dashboard(props: any) {
  const tuitions = props.payments

    const user = props.student;
    function tuitionIsLate() {
        tuitions.forEach((session:any) => {
          if ((new Date()) > session.dateDue) {
            return true;
          }
        });
        return false;
      }

    return (
        <Box sx={{mx: 4}}>
            <Typography variant="h4"
            sx={(props.theme.palette.mode == 'dark' ?
            {color: '#FFFFFF', mb:1}:{mb:1})}>
            Welcome Back, {`${user.firstName}!`}
            {tuitionIsLate() ? <></> : 
            <TuitionAlert theme={props.theme}/>}
            </Typography>

            <Divider/>

            <Homework theme={props.theme}/>

            <Divider/>

            <Repl/>

            <Divider/>

            <Resources theme={props.theme}/>

            <Divider/>

            <PastHomework theme={props.theme}/>
        </Box>
    );
}