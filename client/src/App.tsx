import { BrowserRouter, Routes, Route } from "react-router-dom";

import ResponsiveAppBar from './Appbar';
import Oauth from './components/Oauth';

import Footer from './Footer';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Dashboard from "./Dashboard";

export default function App(props: any) {
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
            <BrowserRouter>
              <Routes>
                <Route path="/" element={
                  <Dashboard
                  theme={props.theme}
                  />
                }/>

                <Route path="/login" element={
                  'Login Page!'
                }/>


                <Route path="/payments" element={
                  'Payments Page!'
                }/>
              </Routes>
            </BrowserRouter>
          </main>
        </div>
        <Footer theme={props.theme}/>
      </>
    );
  }