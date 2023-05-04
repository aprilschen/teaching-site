import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import CodeIcon from '@mui/icons-material/Code';

import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

import { user }  from '../data/mock-data';
import { Link } from '@mui/material';

import SettingsModal from './Settings';

const settings = ['Logout'];

export default function ResponsiveAppBar(props: any) {
  const theme = props.theme;
  const colorMode = props.colorMode;

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <AppBar position="static" sx={{mb:3}}>
      <Container maxWidth={false} sx={{mx:1}}>
        <Toolbar disableGutters>
          <CodeIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Class Portal
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none'},
              }}
              >
              <Button
              key={"Class Link"}
              onClick={handleCloseNavMenu}>
                <Link sx={{textDecoration: 'none'}} href={user.meets} target="_blank">
                  <Typography>
                    Class Link
                  </Typography>
                </Link>
              </Button>

              <br></br>

              <Button
              key={"Pay Tuition"}
              onClick={handleCloseNavMenu}>
                <Link sx={{textDecoration: 'none'}} href="https://buy.stripe.com/aEUg2pe2t16CgOk6oo" target="_blank">
                  <Typography>
                    Pay Tuition
                  </Typography>
                </Link>
              </Button>

              <br></br>

              <Button
              key={"Open Repl"}
              onClick={handleCloseNavMenu}>
                <Link sx={{textDecoration: 'none'}} href={user.repl} target="_blank">
                  <Typography>
                    Open Repl
                  </Typography>
                </Link>
              </Button>
              
              <br></br>

              <Button
              key={"Message me"}
              onClick={handleCloseNavMenu}>
                <Link sx={{textDecoration: 'none'}} href="https://vcard.link/card/DhbO" target="_blank">
                  <Typography>
                  Message me
                  </Typography>
                </Link>
              </Button>

              <br></br>

              <Button
              key={"Absence Form"}
              onClick={handleCloseNavMenu}>
                <Link sx={{textDecoration: 'none'}} href="https://forms.gle/5h1nL47DXepW2k8YA" target="_blank">
                  <Typography>
                    Absence Form
                  </Typography>
                </Link>
              </Button>
            </Menu>
          </Box>

          <CodeIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, ml:9}} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Class Portal
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }}}>
            <Button
              key={"Class Link"}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block'}}>
              <Link sx={{textDecoration: 'none'}} href={user.meets} target="_blank" color="inherit">Class Link</Link>
            </Button>

            <Button
            key={"Pay Tuition"}
            onClick={handleCloseNavMenu}
            sx={{ my: 2, color: 'white', display: 'block' }}>
              <Link sx={{textDecoration: 'none'}} href="https://buy.stripe.com/aEUg2pe2t16CgOk6oo" target="_blank" color="inherit">Pay Tuition</Link>
            </Button>

            <Button
              key={"Open Repl"}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}>
              <Link sx={{textDecoration: 'none'}} href={user.repl} target="_blank" color="inherit">Open Repl</Link>
            </Button>

            <Button
              key={"Message me"}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}>
              <Link sx={{textDecoration: 'none'}} href="https://vcard.link/card/DhbO" target="_blank" color="inherit">Message me</Link>
            </Button>

            <Button
              key={"Absence Form"}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}>
              <Link sx={{textDecoration: 'none'}} href="https://forms.gle/5h1nL47DXepW2k8YA" target="_blank" color="inherit">Absence Form</Link>
            </Button>
          </Box>

          <Box sx={{mr: 1}}>
            <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
                {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp"/>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem key={"temp"} onClick={handleCloseUserMenu}>
                <SettingsModal theme={props.theme}/>
              </MenuItem>

              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </>

  );
}