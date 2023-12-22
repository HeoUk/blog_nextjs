'use client'
// @mui
import Box from '@mui/material/Box';
import React from "react";
//

// ----------------------------------------------------------------------
export default function PrivateBlogLayout({children}: { children: React.ReactNode }) {

  //
  return (
    <>
      <Box
        sx={{
          minHeight: 1,
          display: 'flex',
          flexDirection: {xs: 'column', md: 'row'},
          padding: '5em'
        }}
      >
        {children}
      </Box>
    </>
  );
}
