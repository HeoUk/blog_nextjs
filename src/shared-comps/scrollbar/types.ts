import {Props} from 'simplebar-react';
// @mui
import {Theme, SxProps} from '@mui/material/styles';
import React from "react";

// ----------------------------------------------------------------------

export interface ScrollbarProps extends Props {
  children?: React.ReactNode;
  sx?: SxProps<Theme>;
}
