import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import PostCard from '@/app/_components/post_card/PostCard';
import {findAll} from '@/app/_components/post_card/actions';

export default async function Page({
                                     params,
                                     searchParams,
                                   }: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  //
  const cards = await findAll();

  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{mr: 2}}
          >
            <MenuIcon/>
          </IconButton>
          <Typography variant='h6' component='div' sx={{flexGrow: 1}}>
            여러 블로거 포스팅 리스트 페이지
          </Typography>
          <Button color='inherit'>Login</Button>
        </Toolbar>
      </AppBar>
      {
        cards.map((card, index) => <PostCard key={index} card={card}></PostCard>)
      }
    </Box>
  );
}
