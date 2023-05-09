import { Routes, Route } from "react-router-dom";

import ResponsiveAppBar from './Appbar';
import Oauth from './components/Oauth';
import Footer from './Footer';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Dashboard from "./Dashboard";
import PageNotFound from "./PageNotFound";
import Login from "./Login";
import Register from "./Register";
import Payments from "./Payments";

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
              <Routes>
                <Route path="/" element={
                  <Dashboard
                  theme={props.theme}/>
                }/>

                <Route path="/login" element={
                  <Login
                  />
                }/>

                <Route path="/register" element={
                  <Register
                  />
                }/>

                <Route path="/payments" element={
                  <Payments
                  theme={props.theme}/>
                }/>

                <Route path="/landing" element={
                  'Landing Page!'
                }/>

                <Route path="*" element={
                  <PageNotFound
                  theme={props.theme}/>
                }/>
              </Routes>
          </main>
        </div>
        <Footer theme={props.theme}/>
      </>
    );
  }