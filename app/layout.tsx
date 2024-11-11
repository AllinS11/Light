import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Aurora Borealis Forecast - Northern Lights Viewing Calculator',
  description: 'Plan your perfect Northern Lights viewing experience with our Aurora Borealis forecast and calculator. Find the best locations and hotels for aurora viewing.',
  keywords: 'aurora borealis forecast, northern lights, aurora calculator, aurora viewing, northern lights hotels',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://auroraborealisforecast.com" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Aurora Borealis Forecast - Northern Lights Viewing Calculator" />
        <meta property="og:description" content="Plan your perfect Northern Lights viewing experience with our Aurora Borealis forecast and calculator." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://auroraborealisforecast.com" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navigation />
          {children}
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}