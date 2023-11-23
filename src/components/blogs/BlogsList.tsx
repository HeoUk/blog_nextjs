"use client"
import React, {useState} from 'react';
import {CardType} from '@/components/blogs/actions';
import {Box, Grid, Tab, Tabs} from "@mui/material";
import {BlogListCards} from "@/components/blogs/BlogsList.Cards";

export default function BlogsList({cards}: { cards: CardType[] }) {
  // api
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  //
  return (
    <Grid container spacing={3}>
      <Grid item md={12}>
        <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Item One" value={1}/>
            <Tab label="Item Two" value={2}/>
            <Tab label="Item Three" value={3}/>
          </Tabs>
        </Box>
      </Grid>
      {
        cards.map((card) => (
          <Grid key={card.id} item xs={12} md={2}>
            <BlogListCards card={card}/>
          </Grid>
        ))
      }
    </Grid>
  );
}
