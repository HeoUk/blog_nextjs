import React from "react";
import PrivateBlogLayout from "@/layout/private-blog/layout";

export default function MyBlogLayout({children}: { children: React.ReactNode }) {

  //
  return (
    <PrivateBlogLayout>{children}</PrivateBlogLayout>
  )
}