import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      {/* NEXT.js 13 버전에서 link 태그는 축약식이 아닌 닫는 태그를 꼭 위치해야 함 */}
      {/* <link rel='preconnect' href='https://fonts.googleapis.com'></link>
      <link
        rel='preconnect'
        href='https://fonts.gstatic.com'
        crossOrigin='anonymous'
      ></link>
      <link
        rel='stylesheet'
        href='https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap'
      ></link>
      <link
        rel='stylesheet'
        href='https://fonts.googleapis.com/icon?family=Material+Icons'
      ></link> */}
      <body className={inter.className}>{children}</body>
    </html>
  );
}
