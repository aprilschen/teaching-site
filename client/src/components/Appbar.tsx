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

const settings = ['Account', 'Logout'];



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
              key={"Pay Tuition"}
              onClick={handleCloseNavMenu}>
                <Link href="https://buy.stripe.com/aEUg2pe2t16CgOk6oo" target="_blank">
                  <Typography textAlign={"center"}>
                    Pay Tuition
                  </Typography>
                </Link>
              </Button>

              <br></br>

              <Button
              key={"Open Repl"}
              onClick={handleCloseNavMenu}>
                <Link href={user.repl} target="_blank">
                  <Typography textAlign={"center"}>
                    Open Repl
                  </Typography>
                </Link>
              </Button>
              
              <br></br>
              <Button
              key={"Ask for help"}
              onClick={handleCloseNavMenu}>
                <Link href="https://vcard.link/card/DhbO" target="_blank">
                  <Typography textAlign={"center"}>
                  Ask for help
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
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

            <Button
            key={"Pay Tuition"}
            onClick={handleCloseNavMenu}
            sx={{ my: 2, color: 'white', display: 'block' }}>
              <Link href="https://buy.stripe.com/aEUg2pe2t16CgOk6oo" target="_blank" color="inherit">Pay Tuition</Link>
            </Button>

            <Button
              key={"Open Repl"}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}>
              <Link href={user.repl} target="_blank" color="inherit">Open Repl</Link>
            </Button>

            <Button
              key={"Ask for help"}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}>
              <Link href="https://vcard.link/card/DhbO" target="_blank" color="inherit">Ask for help</Link>
            </Button>
          </Box>

          <Box sx={{mr: 1}}>
            <Typography display={'inline'}>{theme.palette.mode} mode</Typography>
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