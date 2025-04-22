import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://tonmoyiv.com'),
  title: {
    default: 'Tonmoy Infrastructure & Vision',
    template: '%s | Tonmoy Infrastructure & Vision'
  },
  description: 'Leading provider of cloud infrastructure, cybersecurity, and DevOps solutions. We engineer, secure, and streamline the future of infrastructure.',
  keywords: ['cloud infrastructure', 'cybersecurity', 'DevOps', 'CI/CD', 'infrastructure automation', 'digital transformation'],
  authors: [{ name: 'Tonmoy Infrastructure & Vision' }],
  creator: 'Tonmoy Infrastructure & Vision',
  publisher: 'Tonmoy Infrastructure & Vision',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://tonmoyiv.com',
    siteName: 'Tonmoy Infrastructure & Vision',
    title: 'Tonmoy Infrastructure & Vision',
    description: 'Leading provider of cloud infrastructure, cybersecurity, and DevOps solutions. We engineer, secure, and streamline the future of infrastructure.',
    images: [
      {
        url: 'https://tonmoyiv.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Tonmoy Infrastructure & Vision',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tonmoy Infrastructure & Vision',
    description: 'Leading provider of cloud infrastructure, cybersecurity, and DevOps solutions. We engineer, secure, and streamline the future of infrastructure.',
    images: ['https://tonmoyiv.com/twitter-image.jpg'],
    creator: '@tonmoyiv',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://tonmoyiv.com" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}