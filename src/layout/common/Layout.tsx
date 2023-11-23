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
          flexGrow: 1,
          minHeight: 1,
          display: 'flex',
          flexDirection: 'column',
          padding: '100px'
        }}
      >
        {children}
      </Box>
    </>
  )
}