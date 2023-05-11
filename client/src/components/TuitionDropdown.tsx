import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Container, Link } from '@mui/material';

export default function TuitionDropdown() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container sx={{my: 3, mx: -4}}>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Filter
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Unpaid</MenuItem>
        <MenuItem onClick={handleClose}>Oldest</MenuItem>
        <MenuItem onClick={handleClose}>Newest</MenuItem>
      </Menu>

      <Button>
        <Link href='https://buy.stripe.com/aEUg2pe2t16CgOk6oo' target='_blank'
        sx={{textDecoration: 'none'}}>
            Pay Tuition
        </Link>
      </Button>
    </Container>
  );
}
