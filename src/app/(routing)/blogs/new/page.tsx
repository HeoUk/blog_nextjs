import * as React from 'react';
import {RegisterBlog} from "@/components/blogs/register-blog/register-blog";

export default async function Page() {
  // pages에선 Server State만 관리
  // const cards = await findAll();

  return (
    <>
      <RegisterBlog/>
    </>
  );
}
