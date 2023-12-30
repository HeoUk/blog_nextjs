import * as React from 'react';
import { findBlogCategories } from '@/components/blogs/actions';
import RecomendBlogsList from '@/components/blogs/recommend-blog-list/recomend-blogs-list';
import { findBlogByDate } from '@/components/blogs/recommend-blog-list/api/action';
import { Banner } from '@/types/server/banner';

import { getSearchDate } from '@/utils/format-time';
import { findAllBanners } from '@/components/blogs/bar/horizen/banner/api/action';
import { useSession } from 'next-auth/react';
import { getServerSession } from 'next-auth';
import { authConfig, loginIsRequiredServer } from '@/lib/auth';

export default async function Page({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  await loginIsRequiredServer();

  // pages에선 Server State만 관리
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
