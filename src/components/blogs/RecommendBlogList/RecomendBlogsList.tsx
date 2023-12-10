'use client';

import React, { useEffect, useState } from 'react';
import { BlogCategory, CardType } from '@/components/blogs/actions';
import BarHorizenMenu from '@/components/bar/horizen/Menu/BarHorizenMenu';
import AdvertisementHorizenBar from '@/components/bar/horizen/Banner/MainBanner';
import BlogsList from '@/components/blogs/BlogsList';
import { Blog } from '../api/model/Blog';
import { Banner } from '@/components/bar/horizen/Banner/api/model/Banner';
import RecommendBlog from './RecomendBlog';
import RecommendBlogInfoBar from './RecommentBlogInfoBar';
import PostingCard from '@/components/posting/PostingCard';
import PostingCardHorizenList from '@/components/posting/PostingCardHorizenList';

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
  const [tags, setTags] = useState([] as string[]);

  useEffect(() => {
    setSearchTab(blogCategories[0].id);
  }, []);

  useEffect(() => {
    //
    let tags: string[] = [];

    blogs.map((blog) => {
      const postings = blog.postings;

      let postingTags: string[] = [];
      postings.map((posting) => {
        postingTags = [...postingTags, ...posting.tags];
      });

      tags = [...tags, ...postingTags];
    });

    setTags(Array.from(new Set(tags)));
  }, [blogs]);

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
      {tags.map((tag) => (
        <>
          <RecommendBlogInfoBar tag={tag} />
          <RecommendBlog tag={tag} blogs={blogs} />
          <PostingCardHorizenList>
            {[
              <PostingCard
                title={blogs[0].postings[0].title}
                blogImage={blogs[0].image64}
                postingImage={blogs[0].postings[0].image64}
              />,
            ]}
          </PostingCardHorizenList>
        </>
      ))}
    </div>
  );
}
