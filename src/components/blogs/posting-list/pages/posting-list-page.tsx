'use client';

import { TagList } from '@/components/blogs/posting-list/tag-list';
import Grid from '@mui/material/Grid/Grid';

export const PostingListPage = () => {
  //
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} md={2}>
        <TagList />
      </Grid>
      <Grid item xs={12} md={8}>
        {/*Search Box */}
        {/*Posting List*/}
      </Grid>
      <Grid item xs={12} md={2}>
        {/*Index List*/}
      </Grid>
    </Grid>
  );
};
