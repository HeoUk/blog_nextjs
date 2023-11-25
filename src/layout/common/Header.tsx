import React from "react";
import {AppBar, IconButton, Toolbar, Typography} from "@mui/material";

export default function Header() {

  return (
    <AppBar position="fixed" sx={{ backgroundColor: 'transparent' , height: '70px'}}>
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
        <Typography variant='h6' component='div' sx={{flexGrow: 1, color: 'primary.main'}}>
          블로그 레이아웃
        </Typography>
        {/*<Button color='inherit'>Login</Button>*/}
      </Toolbar>
    </AppBar>
  )
}