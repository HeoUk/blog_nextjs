'use client'

import {Box, Stack} from "@mui/material";
import {NavSectionVertical} from "@/shared-comps/nav-section";
import Scrollbar from "@/shared-comps/scrollbar";

export default function NavVertical() {
  //
  const navData = [
    // OVERVIEW
    // ----------------------------------------------------------------------
    {
      subheader: 'overview v5.3.0',
      items: [
        {title: 'one', path: '',},
        {title: 'two', path: ''},
        {
          title: 'three',
          path: '',
          // icon: ICONS.analytics,
        },
      ],
    },
  ]

  //
  return (
    <Box
      component="nav"
      sx={{
        paddingTop: '70px',
        flexShrink: {lg: 70},
        width: {lg: '70px'},
        // backgroundColor: theme.palette.background.default
      }}
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
          <NavSectionVertical
            data={navData}
          />

        </Scrollbar>
      </Stack>

    </Box>
  )
}