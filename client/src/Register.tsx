import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { Link as LinkRoute } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';

function Copyright(props: any) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://main.d6noil1xf37ql.amplifyapp.com/" target="_blank">
          April Chen
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

export default function Register() {
  const [complete, setComplete] = useState(false);  // set to false in production
  const [email, setEmail] = useState("");
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        //@ts-ignore
        setEmail(data.get('email'));
        axios.post("https://0l3iu0rscb.execute-api.us-west-1.amazonaws.com/dev/student/", {
          firstName: data.get('firstName'),
          lastName: data.get('lastName'),
          email: data.get('email'),
          password: data.get('password'),
          confirmPassword: data.get('confirmPassword'),
          phoneNumber: data.get('phoneNumber'),
          parentNumber: data.get('parentNumber'),
          parentEmail: data.get('parentEmail'),
        })
        .then(res => console.log(res))
        .then(() => setComplete(true));
      };

    if(complete) {
      return (
      <>
      <Box sx={{mt: 25, mx:3}} textAlign={'center'}>
      <Typography variant={'h4'}>
            Thanks for signing up!
          </Typography>

          <br></br>

        <Typography>
            an confirmation email should have been sent to {email}
           , with the login credentials inside.
        </Typography>

        <br></br>

        <LinkRoute to="/" style={{textDecoration: 'none'}}>
            <Button>
              Login
            </Button>
        </LinkRoute>
      </Box>
      </>)
    }

    return (
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  id="confirmPassword"
                  autoComplete="new-password"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="phoneNumber"
                  label="Phone Number"
                  type="tel"
                  id="phoneNumber"
                  autoComplete="phone-number"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="parentNumber"
                  label="Parent Phone Number"
                  type="tel"
                  id="parentNumber"
                  autoComplete="phone-number"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="parentEmail"
                  label="Parent Email Address"
                  name="parentEmail"
                  autoComplete="email"
                />
                </Grid>
              <Grid item xs={12}>
                <Typography>
                  <FormControlLabel
                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                    label=''
                    required/>
                  I agree to the student policy, as defined <Link>here</Link>.
                </Typography>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>

            <Grid container justifyContent="flex-end">
              <Grid item>
                <LinkRoute to="/" style={{textDecoration: 'none'}}>
                  <Link href="#" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </LinkRoute>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5, pb:10}} />
      </Container>
    );
}