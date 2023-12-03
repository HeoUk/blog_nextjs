'use client';

import React, { useState } from 'react';
import moment from 'moment';
import { MenuItem, Select, Tab, Tabs } from '@mui/material';
import Grid from '@mui/material/Grid/Grid';

function getSearchDate() {
  //str1.padStart(2, '0')
  const currnetDate: moment.Moment = moment();
  const dateList = [];

  for (let i = 0; i < 5; i++) {
    const date = currnetDate.subtract(1, 'M').format('yyyyMM');
    dateList.push(date);
  }

  return dateList;
}

function formatKor(value: string) {
  return value.substring(0, 4) + '년 ' + value.substring(4) + '월';
}

export default function BarHorizenMenu() {
  //
  const currnetDateList = getSearchDate();
  const [searchDate, setSearchDate] = useState(currnetDateList[0]);
  const [searchTab, setSearchTab] = useState('Web');

  const handleChangeCurrentDate = (event: { target: { value: string } }) => {
    setSearchDate(event.target.value);
  };

  const handleChangeTabs = (event: React.SyntheticEvent, newValue: string) => {
    setSearchTab(newValue);
  };

  return (
    <Grid container spacing={1}>
      <Select
        labelId='currentDateSelect-label'
        id='currentDateSelect'
        value={searchDate}
        label='Date'
        onChange={handleChangeCurrentDate}
      >
        {currnetDateList.map((date) => (
          <MenuItem value={date}>{formatKor(date)}</MenuItem>
        ))}
      </Select>
      <Grid item xs={8}>
        <Tabs
          value={searchTab}
          onChange={handleChangeTabs}
          aria-label='basic tabs example'
        >
          <Tab label='Web' value='Web' />
          <Tab label='Database' value='Database' />
          <Tab label='Kotlin' value='Kotlin' />
          <Tab label='C++/C#' value='C++/C#' />
        </Tabs>
      </Grid>
      <Grid item xs={4}></Grid>
      <Grid item xs={4}></Grid>
    </Grid>
  );
}
