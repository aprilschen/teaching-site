import { Box, Button, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
export default function PageNotFound(props: any) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh'
      }}
    >
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid xs={6} textAlign={'center'}
          sx={{top:'50%', transform: 'translateY(20%)'}}>
            <Typography variant="h4"
            sx={(props.theme.palette.mode == 'dark' ?
            {color: '#DDDDDD'}:{})}>
              404: Page Not Found
            </Typography>
            <Typography variant="h6" 
            sx={(props.theme.palette.mode == 'dark' ?
            {color: '#DDDDDD'}:{})}>
              {`The page you're looking for doesn't exist`}
            </Typography>
            <Typography variant="h6" 
            sx={(props.theme.palette.mode == 'dark' ?
            {color: '#DDDDDD'}:{})}>
            {`૮꒰ ˶• ༝ •˶꒱ა ♡`}

            </Typography>
            <br></br>
            <Button variant="contained">
                <Link to="/" style={(props.theme.palette.mode == 'dark' ?
            {color: 'black', textDecoration: 'none'} :
            {color: 'white', textDecoration: 'none'})}>
                    Back To Home
                </Link>
            </Button>
          </Grid>
          <Grid xs={6}>
            <img
              src="https://gifdb.com/images/file/shiba-inu-hunting-dog-loading-fake-smile-jrnqgz1xt5xgmy3f.gif"
              alt=""
              style={{display: 'block', marginLeft: 'auto', marginRight: 'auto'}}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}