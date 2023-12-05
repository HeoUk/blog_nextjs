'use client';

import React, { useEffect, useState } from 'react';
import { BlogCategory, CardType } from '@/components/blogs/actions';
import BarHorizenMenu from '@/components/bar/horizen/Menu/BarHorizenMenu';
import AdvertisementHorizenBar from '@/components/bar/horizen/Banner/MainBanner';
import BlogsList from '@/components/blogs/BlogsList';
import { Blog } from '../api/model/Blog';
import { Banner } from '@/components/bar/horizen/Banner/api/model/Banner';
import RecommendBlog from './RecomendBlog';

interface Props {
  cards: CardType[];
  currentDateList: string[];
  blogs: Blog[];
  banner: Banner;
  blogCategories: BlogCategory[];
}

export default function RecomendBlogsList(props: Props) {
  //
  const { cards, currentDateList, blogs, banner, blogCategories } = props;

  const [searchDate, setSearchDate] = useState(currentDateList[0]);
  const [searchTab, setSearchTab] = useState(0);

  useEffect(() => {
    setSearchTab(blogCategories[0].id);
  }, []);

  // BlogCategory
  return (
    <div>
      <BarHorizenMenu
        searchDate={searchDate}
        setSearchDate={setSearchDate}
        searchTab={searchTab}
        setSearchTab={setSearchTab}
        currnetDateList={currentDateList}
        blogCategories={blogCategories}
      />
      <AdvertisementHorizenBar banner={banner} />

      {JSON.stringify(blogs)}
      <RecommendBlog blogs={blogs} />
    </div>
  );
}
