import Repl from './components/Repl'
import ResponsiveAppBar from './components/Appbar'
import { Button, Typography } from '@mui/material'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  return (
    <>
      <ResponsiveAppBar/>

      <Typography variant="h4">
        Welcome Back!
      </Typography>

      <Typography variant="h6">
        Test Font
      </Typography>

      <br></br>
      <Button
      variant="outlined"
      href="https://buy.stripe.com/aEUg2pe2t16CgOk6oo"
      target="_blank">
        Pay Tuition
      </Button>

       <Repl/>

    </>
  )
}

export default App
