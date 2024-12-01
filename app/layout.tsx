import type { Metadata } from 'next';
import { Press_Start_2P } from 'next/font/google';
import './globals.css';

const pressStart2P = Press_Start_2P({
  weight: ['400'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Slim Gabsi',
  description:
    'A portfolio showcasing Unity 3D and React web app demos, built by Slim Gabsi',
  keywords: 'Slim Gabsi, Unity, React, Web Development, Demos', // Keywords for search engines
  robots: 'index, follow', // Allows search engines to index the page
  openGraph: {
    images: ['/website.png'],
    title: 'Slim Gabsi - Unity & React Demos',
    description:
      'Explore some of the interactive demos with Unity and React by Slim Gabsi.',
    url: 'https://portfolio-kappa-blue-57.vercel.app/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Slim Gabsi - Unity & React Demos',
    description:
      'Explore some of the interactive demos with Unity and React by Slim Gabsi.',
    site: '@slim_gabsi1',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={pressStart2P.className}>{children}</body>
    </html>
  );
}
