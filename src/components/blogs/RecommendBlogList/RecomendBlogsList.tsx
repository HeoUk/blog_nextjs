import React from 'react';
import { CardType } from '@/components/blogs/actions';
import { Box, Grid, Tab, Tabs } from '@mui/material';
import { BlogListCards } from '@/components/blogs/index';
import { findBlogByDate } from './api/action';

export default async function RecomendBlogsList() {
  //
  const blogs = await findBlogByDate('202312');
  return <div>{JSON.stringify(blogs)}</div>;
}
