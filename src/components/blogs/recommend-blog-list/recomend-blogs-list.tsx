'use client';

import React, {useEffect, useState} from 'react';
import {BlogCategory, CardType} from '@/components/blogs/actions';
import BarHorizenMenu from '@/components/bar/horizen/menu/BarHorizenMenu';
import AdvertisementHorizenBar from '@/components/bar/horizen/banner/main-banner';
import {Blog, Posting} from '@/types/blog';
import {Banner} from '@/types/banner';
import RecommendBlog from './recomend-blog';
import RecommendBlogInfoBar from './recomment-blog-info-bar';
import PostingCard from '@/components/posting/posting-card';
import PostingCardHorizenList from '@/components/posting/posting-card-horizen-list';

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
  const [postingMap, setPostingMap] = useState(new Map());

  useEffect(() => {
    setSearchTab(blogCategories[0].id);
  }, []);

  useEffect(() => {
    //
    let tags: string[] = [];
    const postingMap = new Map<string, Posting[]>();

    blogs.map((blog) => {
      const postings = blog.postings;

      let postingTags: string[] = [];

      postings.map((posting) => {
        postingTags = [...postingTags, ...posting.tags];
        posting.tags.map((tag) => {
          const mapContent = postingMap.get(tag);
          if (mapContent) {
            postingMap.set(tag, [...mapContent, posting]);
          } else {
            postingMap.set(tag, [posting]);
          }
        });
      });

      tags = [...tags, ...postingTags];
    });

    setTags(Array.from(new Set(tags)));
    setPostingMap(postingMap);
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
            {postingMap.get(tag).map((posting: Posting) => {
              return (
                <PostingCard
                  title={posting.title}
                  blogImage={
                    blogs.filter(
                      (blog) => blog.id === posting.id.split('-')[0]
                    )[0].image64
                  }
                  postingImage={posting.image64}
                />
              );
            })}
          </PostingCardHorizenList>
        </>
      ))}
    </div>
  );
}
