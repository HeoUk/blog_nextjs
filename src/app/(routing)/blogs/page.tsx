import * as React from 'react';
import BlogsList from '@/components/blogs/BlogsList';
import { findAll } from '@/components/blogs/actions';
import BarHorizenMenu from '@/components/bar/horizen/Menu/BarHorizenMenu';
import AdvertisementHorizenBar from '@/components/bar/horizen/Banner/MainBanner';
import RecomendBlogsList from '@/components/blogs/RecommendBlogList/RecomendBlogsList';

export default async function Page({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  // pages에선 Server State만 관리
  const cards = await findAll();

  //
  return (
    <>
      <BarHorizenMenu />
      <AdvertisementHorizenBar />
      <RecomendBlogsList />
      <BlogsList cards={cards} />
    </>
  );
}
