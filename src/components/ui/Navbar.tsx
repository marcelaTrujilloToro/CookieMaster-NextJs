import React from 'react';
import NextLink from 'next/link';
import { AppBar, IconButton, Link, Toolbar, Typography } from '@mui/material';
import { MenuOutlined } from '@mui/icons-material';

export const Navbar = () => {
  return (
    <AppBar position='sticky'>
      <Toolbar>

        <IconButton
          size='large'
          edge='start'
        >
          <MenuOutlined />
        </IconButton>

        <NextLink href='/' passHref>
          <Link>
            <Typography variant='h6' color='white'>Cookie Master</Typography>
          </Link>
        </NextLink>

        <div style={{ flex: 1 }} />

        <NextLink href='/theme-changer' passHref>
          <Link>
            <Typography variant='h6' color='white'>Cambiar tema</Typography>
          </Link>
        </NextLink>



      </Toolbar>
    </AppBar>
  )
}
