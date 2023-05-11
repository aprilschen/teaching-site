
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Container, Link, Grid, IconButton, Paper, Tooltip, Typography } from '@mui/material';
import { tuitions } from '../data/mock-data';
import AlarmIcon from '@mui/icons-material/Alarm';
import VerifiedIcon from '@mui/icons-material/Verified';
import { useState } from 'react';
export default function TuitionDropdown(props: any) {
  const [filter, setFilter] = useState('Unfiltered');

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const updateFilter = (option:string) => {
    setFilter(option)
    handleClose();
  }

  function arrangeSessions() {
    if (filter=='Unfiltered') {
      return tuitions.sort((a, b) => {
        if (a.tuitionID < b.tuitionID) {
          return -1;
        } return 1;
      });
    }

    if (filter=='Overdue') {
      return tuitions.filter(session => (
          (new Date()) > session.dateDue && !session.fulfilled
      ));
    }

    else if (filter=='Newest') {
      return tuitions.sort((a, b) => {
        if (a.classTime < b.classTime) {
          return 1;
        } return -1;
      });
    }

    else if (filter == 'Oldest') {
      return tuitions.sort((a, b) => {
        if (a.classTime < b.classTime) {
          return -1;
        } return 1;
      });
    }

    else if (filter == 'Unpaid') {
      return  tuitions.filter(session => !(session.fulfilled))
    }
  }

  return (
    <>
      <Container sx={{mt: 3, mb : 1, mx: -4}}>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Filters
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
        <MenuItem onClick={() => updateFilter('Unfiltered')}>Unfiltered</MenuItem>
        <MenuItem onClick={() => updateFilter('Unpaid')}>Unpaid</MenuItem>
        <MenuItem onClick={() => updateFilter('Overdue')}>Overdue</MenuItem>
        <MenuItem onClick={() => updateFilter('Oldest')}>Oldest</MenuItem>
        <MenuItem onClick={() => updateFilter('Newest')}>Newest</MenuItem>
      </Menu>

      <Button>
        <Link href='https://buy.stripe.com/aEUg2pe2t16CgOk6oo' target='_blank'
        sx={{textDecoration: 'none'}}>
            Pay Tuition
        </Link>
      </Button>
    </Container>

      <Typography sx={(props.theme.palette.mode == 'dark' ?
            {color: '#FFFFFF', mb:2}:{mb:2})}>
          Filtered by: {filter}
      </Typography>


    <Grid container spacing={2}> {
        // @ts-ignore
        (arrangeSessions().map((session: any) => (
          <Grid item xs={3}>
              <Paper sx={{p:2, minHeight: '15vh'}}>
                  <Typography>
                      ID: {session.tuitionID}
                      {session.fulfilled ? (
                        <Tooltip title="Fulfilled" sx={{ml:1, mb:0.5}}>
                        <IconButton>
                          <VerifiedIcon />
                        </IconButton>
                      </Tooltip>
                      ) : (<></>)}
                      {!session.fulfilled && new Date() > session.dateDue ? (
                      <Tooltip title="Overdue" sx={{ml:1, mb:0.5}}>
                        <IconButton>
                          <AlarmIcon />
                        </IconButton>
                      </Tooltip>) : (<></>)}
                  </Typography>
                  <Typography>
                      Class Date: {session.classTime.toLocaleDateString('en-US')}
                  </Typography>
                  <Typography>
                      Cost: {session.cost}
                  </Typography>
                  <Typography>
                      Date Due: {session.dateDue.toLocaleDateString('en-US').toString()}
                  </Typography>
              </Paper>
            </Grid>
        )))
      }

      </Grid>
    </>
  );
}
