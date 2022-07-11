// import * as React from 'react';
import Link from 'next/link';

import { useRouter } from 'next/router'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

import React, { useContext } from 'react'
import { AuthContext } from 'src/contexts/AuthContext';

const Appbar = () => {
  const router = useRouter()
  const { loggedInUser, setLoggedInUser }: any = useContext(AuthContext)

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    if (!Object.keys(loggedInUser).length) {
      router.push('/auth')
      return
    }
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handelLogout = () => {
    setLoggedInUser({})
    router.push('/')
    handleClose()
  }

  const handelCollection = () => {
    router.push('/collection')
    handleClose()
  }


  return (
    <Box>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link href="/" >GAME WEBSITE</Link>

          </Typography>
          <div>
            <Button color="inherit" onClick={handleMenu} >
              {loggedInUser?.userName ? loggedInUser.userName : 'Login'}
            </Button>

            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handelCollection}>Collection</MenuItem>
              <MenuItem onClick={handelLogout}>Logout</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Appbar;
