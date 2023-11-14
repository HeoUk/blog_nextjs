'use client';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Button from '@mui/material/Button';

export default function Home() {
  return (
    <div>
      <h1>블로그 서비스 소개 메인 페이지(이미지)</h1>
      <Button variant='contained'>Hello world</Button>
      <Link href={`/blogs`}>GO</Link>
    </div>
  );
}
