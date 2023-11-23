'use client'

import {Box, Stack} from "@mui/material";
import Scrollbar from "@/shared/scrollbar";

export default function NavVertical() {

  //
  return (
    <Box
      component="nav"
      // sx={{
      //   flexShrink: {lg: 70},
      //   width: {lg: '70px'},
      //   backgroundColor: theme.palette.background.default
      // }}
    >
      <Stack
        sx={{
          height: 1,
          position: 'fixed',
          // width: "100px",
          borderRight: () => `dashed 1px gray`,
        }}
      >
        <Scrollbar
          sx={{
            height: 1,
            '& .simplebar-content': {
              height: 1,
              display: 'flex',
              flexDirection: 'column',
            },
          }}
        >

        </Scrollbar>
      </Stack>

    </Box>
  )
}