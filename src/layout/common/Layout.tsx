import Header from "@/layout/common/Header";
import {Box} from "@mui/system";
import React from "react";

export const Layout = ({children}: { children: React.ReactNode }) => {

  //
  return (
    <>
      <Header/>
      <Box
        sx={{
          minHeight: 1,
          display: 'flex',
          flexDirection: {xs: 'column', md: 'row'},
        }}
      >
        {children}
      </Box>
    </>
  )
}