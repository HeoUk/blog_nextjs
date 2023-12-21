import Header from '@/layout/common/header';
import { Box } from '@mui/material';
import React from 'react';
import NavVertical from '@/layout/common/nav-vertical';

export default function Layout({ children }: { children: React.ReactNode }) {
  //
  return (
    <>
      <Header />
      <Box
        sx={{
          minHeight: 1,
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
        }}
      >
        <NavVertical />
        <Box
          sx={{
            flexGrow: 1,
            minHeight: 1,
            display: 'flex',
            flexDirection: 'column',
            paddingTop: '100px',
            paddingLeft: '130px',
            paddingRight: '30px',
          }}
        >
          {children}
        </Box>
      </Box>
    </>
  );
}
