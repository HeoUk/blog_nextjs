import React from "react";
import {AppBar, IconButton, Toolbar, Typography} from "@mui/material";
import {Button} from "@mui/base";

export default function Header() {

  return (
    <AppBar position='static'>
      <Toolbar>
        <IconButton
          size='large'
          edge='start'
          color='inherit'
          aria-label='menu'
          sx={{mr: 2}}
        >
          {/*<MenuIcon/>*/}
        </IconButton>
        <Typography variant='h6' component='div' sx={{flexGrow: 1}}>
          블로그 레이아웃
        </Typography>
        <Button color='inherit'>Login</Button>
      </Toolbar>
    </AppBar>
  )
}