import './globals.css';
import type { Metadata } from 'next';
import { Outfit, Quicksand } from 'next/font/google';
import { CatThemeProvider } from '@/components/cat-theme-provider';
import { Toaster } from 'sonner';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import CustomCursor from '@/components/custom-cursor';
import PageTransition from '@/components/page-transition';
import ParallaxBackground from '@/components/parallax-background';

// Font configuration with variable support for better performance
const outfit = Outfit({ 
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-quicksand',
  display: 'swap',
});

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
    <html lang="en" suppressHydrationWarning className={`${outfit.variable} ${quicksand.variable}`}>
      <head>
        <link rel="canonical" href="https://tonmoyiv.com" />
      </head>
      <body className="font-sans">
        <CatThemeProvider
          attribute="class"
          defaultFlavor="mocha"
          enableSystem
          disableTransitionOnChange
        >
          <CustomCursor color="lavender" trailEffect={true} />
          <ParallaxBackground />
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <PageTransition>
              <main className="flex-1">{children}</main>
            </PageTransition>
            <Footer />
          </div>
          <Toaster 
            position="top-right"
            toastOptions={{
              style: {
                background: 'var(--background)',
                color: 'var(--foreground)',
                border: '1px solid var(--border)',
              },
              className: 'glass',
            }}
          />
        </CatThemeProvider>
      </body>
    </html>
  );
}