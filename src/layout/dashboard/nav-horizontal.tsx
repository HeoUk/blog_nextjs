import { memo } from 'react';
// @mui
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
// theme
// hooks
// components
//
import { HEADER } from '../config-layout';
import { useNavData } from './config-navigation';
import { HeaderShadow } from '../_common';
import {NavSectionHorizontal} from "@/shared-comps/nav-section";
import {bgBlur} from "@/theme/css";

// ----------------------------------------------------------------------

function NavHorizontal() {
  const theme = useTheme();

  const navData = useNavData();

  return (
    <AppBar
      component="nav"
      sx={{
        top: HEADER.H_DESKTOP_OFFSET,
      }}
    >
      <Toolbar
        sx={{
          ...bgBlur({
            color: theme.palette.background.default,
          }),
        }}
      >
        <NavSectionHorizontal
          data={navData}
          config={{
            currentRole: /*user?.role ||*/ 'admin',
          }}
        />
      </Toolbar>

      <HeaderShadow />
    </AppBar>
  );
}

export default memo(NavHorizontal);
