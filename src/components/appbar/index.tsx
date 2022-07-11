// import * as React from 'react';
import Link from 'next/link';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import React, { useContext } from 'react'
import { AuthContext } from 'src/contexts/AuthContext';

const Appbar = () => {
  const { loggedInUser }: any = useContext(AuthContext)
  console.log(loggedInUser)
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
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link href="/" >GAME WEBSITE</Link>

          </Typography>
          <Button color="inherit">
            <Link href="/auth" >{loggedInUser?.userName ? loggedInUser.userName : 'Login'}</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Appbar;
