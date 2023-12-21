import {Stack, Theme} from "@mui/material";
import React from "react";
import Tooltip from "@mui/material/Tooltip";
import {SxProps} from "@mui/system";
import Iconify from "@/shared-comps/iconify";

export const IconText = ({
                           icon,
                           text,
                           typography = 'subtitle2',
                           required = false,
                           depth = 1,
                           tooltipTitle,
                           iconSize = "20px",
                           sx
                         }: {
  icon: string,
  text: string | number | React.ReactNode,
  typography?: string,
  required?: boolean,
  depth?: number,
  tooltipTitle?: string,
  sx?: SxProps<Theme> | undefined,
  iconSize?: string | number
}) => {
  // stack 안나누면 두면 drawer 줄일때 icon 작아짐
  return (
    <Stack
      direction={"row"}
      alignItems="center"
      spacing={0.5}
      sx={{typography, pl: `${depth * 20}px`, width: '100%', ...(sx || {})}}
    >
      <Stack>
        <Tooltip title={tooltipTitle}>
          <Iconify sx={{minWidth:iconSize, minHeight: iconSize, maxWidth: iconSize, maxHeight: iconSize}} icon={icon}/>
        </Tooltip>
      </Stack>
      <Stack sx={{overflow: 'hidden'}}>
        {text}
      </Stack>
      {required && <Stack color={'gray'}>*</Stack>}
    </Stack>
  )
}
