import React from 'react';
import { CardType } from '@/components/blogs/actions';
import { Box, Grid, Tab, Tabs } from '@mui/material';
import { BlogListCards } from '@/components/blogs/index';
import { findBlogByDate } from './api/action';
import Image from 'next/image';

export default async function RecomendBlogsList() {
  //
  const blogs = await findBlogByDate('202312');
  return (
    <div>
      <Image
        width={20}
        height={20}
        alt={''}
        src={blogs ? blogs[0].image64 : ''}
      ></Image>
      {JSON.stringify(blogs)}
    </div>
  );
}
