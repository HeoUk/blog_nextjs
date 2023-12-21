import * as React from 'react';
import {RegisterPosting} from "@/components/blogs/register-posting/register-posting";

export default async function Page() {
  // pages에선 Server State만 관리
  // const cards = await findAll();

  return (
    <>
      <RegisterPosting/>
    </>
  );
}
