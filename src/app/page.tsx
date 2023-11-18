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
      <div id='home1'>
        <iframe
          id='home2'
          loading='lazy'
          src='https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAF0f1bUOqU&#x2F;view?embed'
          allowFullScreen
        ></iframe>
      </div>

      <style jsx>{`
        #home1 {
          position: relative;
          width: 100%;
          height: 0;
          padding-top: 56.2225%;
          padding-bottom: 0;
          box-shadow: 0 2px 8px 0 rgba(63, 69, 81, 0.16);
          margin-top: 1.6em;
          margin-bottom: 0.9em;
          overflow: hidden;
          border-radius: 8px;
          will-change: transform;
        }
        #home2 {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          border: none;
          padding: 0;
          margin: 0;
        }
      `}</style>
    </div>
  );
}
