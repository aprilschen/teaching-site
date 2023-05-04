import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Radio, RadioGroup, FormControlLabel, Grid, Paper, Switch } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function SettingsModal(props: any) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Typography onClick={handleOpen}>Settings</Typography>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" 
          variant="h6" component="h2"
          textAlign={'center'}
          sx={(props.theme.palette.mode == 'dark' ?
          {color: '#FFFFFF'}:{})}>
            Settings
          </Typography>

          <Paper sx={(props.theme.palette.mode == 'dark' ?
              {color: '#FFFFFF', mt: 2, py: 2}:{mt: 2, py:2})}>
                <Typography textAlign={'center'}>
                  Default Theme
                </Typography>
            <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            >
              <Grid container >
                <Grid item xs={4} textAlign={'center'}>
                  <FormControlLabel value="female" control={<Radio />} label="Light" />
                </Grid>

                <Grid item xs={4} textAlign={'center'}>
                  <FormControlLabel value="male" control={<Radio />} label="Dark" />
                </Grid>

                <Grid item xs={4} textAlign={'center'}>
                  <FormControlLabel value="other" control={<Radio />} label="System" />
                </Grid>
            </Grid>
            </RadioGroup>
          </Paper>

          <Paper sx={(props.theme.palette.mode == 'dark' ?
              {color: '#FFFFFF', mt: 2, py: 2}:{mt: 2, py:2})}>
            <Grid container >
              <Grid item xs={10}>
                <Typography sx={{ml:3, mt:1}}>
                  Show Homework Tags
                </Typography>
              </Grid>

              <Grid item xs={2}>
               <Switch defaultChecked/>

              </Grid>
            </Grid>
          </Paper>

          <Paper sx={(props.theme.palette.mode == 'dark' ?
              {color: '#FFFFFF', mt: 2, py: 2}:{mt: 2, py:2})}>
            <Grid container >
              <Grid item xs={10}>
                <Typography sx={{ml:3, mt:1}}>
                  Hide Completed Modules
                </Typography>
              </Grid>

              <Grid item xs={2}>
               <Switch defaultChecked/>

              </Grid>
            </Grid>
          </Paper>

        </Box>
      </Modal>
    </>
  );
}