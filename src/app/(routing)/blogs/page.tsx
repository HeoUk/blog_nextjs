import * as React from 'react';
import {findBlogCategories} from '@/components/blogs/actions';
import RecomendBlogsList from '@/components/blogs/recommend-blog-list/recomend-blogs-list';
import moment from 'moment';
import {findBlogByDate} from '@/components/blogs/recommend-blog-list/api/action';
import {Banner} from '@/types/banner';
import {findAllBanners} from '@/components/bar/horizen/banner/api/action';

function getSearchDate() {
  //str1.padStart(2, '0')
  const currnetDate: moment.Moment = moment();
  const dateList = [];

  const date = currnetDate.format('yyyyMM');
  dateList.push(date);
  for (let i = 0; i < 5; i++) {
    const date = currnetDate.subtract(1, 'M').format('yyyyMM');
    dateList.push(date);
  }

  return dateList;
}

export default async function Page({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  // pages에선 Server State만 관리
  // const cards = await findAll();
  const currnetDateList = getSearchDate();

  const blogs = await findBlogByDate(currnetDateList[0]);
  const blogCategories = await findBlogCategories();

  const banners: Banner[] = await findAllBanners();
  const randomNumber = Math.floor(Math.random() * (banners.length + 1));
  const banner = banners[randomNumber];

  return (
    <>
      <RecomendBlogsList
        cards={[]}
        currentDateList={currnetDateList}
        blogs={blogs}
        banner={banner}
        blogCategories={blogCategories}
      />
    </>
  );
}
