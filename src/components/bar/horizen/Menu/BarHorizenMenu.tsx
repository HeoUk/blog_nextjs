'use client';

import React from 'react';
import { Box, MenuItem, Select, Tab, Tabs } from '@mui/material';
import Grid from '@mui/material/Grid/Grid';
import { BlogCategory } from '@/components/blogs/actions';

interface Props {
  searchDate: string;
  setSearchDate: React.Dispatch<React.SetStateAction<string>>;
  searchTab: number;
  setSearchTab: React.Dispatch<React.SetStateAction<number>>;
  currnetDateList: string[];
  blogCategories: BlogCategory[];
}

function formatKor(value: string) {
  return value.substring(0, 4) + '년 ' + value.substring(4) + '월';
}

export default function BarHorizenMenu(props: Props) {
  //
  const {
    searchDate,
    setSearchDate,
    searchTab,
    setSearchTab,
    currnetDateList,
    blogCategories,
  } = props;

  const handleChangeCurrentDate = (event: { target: { value: string } }) => {
    setSearchDate(event.target.value);
  };

  const handleChangeTabs = (event: React.SyntheticEvent, newValue: number) => {
    setSearchTab(newValue);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          mt: 1,
          width: '100%',
          height: 'fit',
          padding: '8px',
        },
      }}
    >
      <Grid container spacing={1}>
        <Select
          labelId='currentDateSelect-label'
          id='currentDateSelect'
          value={searchDate}
          label='Date'
          onChange={handleChangeCurrentDate}
        >
          {currnetDateList.map((date, idx) => (
            <MenuItem key={idx} value={date}>
              {formatKor(date)}
            </MenuItem>
          ))}
        </Select>
        <Grid item xs={8}>
          <Tabs
            value={searchTab}
            onChange={handleChangeTabs}
            aria-label='basic tabs example'
          >
            {blogCategories.map((blogCategory, idx) => (
              <Tab
                key={idx}
                label={blogCategory.name}
                value={blogCategory.id}
              />
            ))}
          </Tabs>
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}></Grid>
      </Grid>
    </Box>
  );
}
