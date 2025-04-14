import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';

const inter = localFont({
  src: [
    {
      path: '../public/fonts/Inter-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Inter-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-inter',
  display: 'swap',
});

const bungeeSpice = localFont({
  src: '../public/fonts/BungeeSpice-Regular.ttf',
  variable: '--font-bungee-spice',
  display: 'swap',
});

const frameMetadata = {
  version: "next",
  imageUrl: "https://steventhelawnmoaner.vercel.app/original3x2.png",
  button: {
    title: "Click & Check your Lawn Points",
    action: {
      type: "launch_frame",
      url: "https://steventhelawnmoaner.vercel.app",
      name: "Steven the Lawn Moaner"
    }
  }
};

export const metadata: Metadata = {
  title: 'Lawn Points Leaderboard',
  description: 'Check your Lawn Points balance and see who\'s leading the pack!',
  openGraph: {
    title: 'Lawn Points Leaderboard',
    description: 'Check your Lawn Points balance and see who\'s leading the pack!',
    images: ['/steventhelawn.jpeg'],
  },
  other: {
    'fc:frame': JSON.stringify(frameMetadata),
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${bungeeSpice.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}