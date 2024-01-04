'use client'

import {TAG_LIST} from "@/_mock/_blog";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {BorderLine} from "@/shared-comps/border-line/border-line";
import Label from "@/shared-comps/label";

export const TagList = () => {

  //
  return (
    <Box key={'tag-list'}>
      <Typography variant={'h4'}>
        태그 목록
      </Typography>

      <BorderLine/>

      {
        TAG_LIST.map(value => (
          <Typography variant={'subtitle2'} sx={{padding: '0.3em'}}>
            <Label>
              {value.label}
            </Label>
            {value.id}
          </Typography>
        ))
      }

    </Box>
  )
}