import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    template: '%s | viem-error-parser',
    default: 'viem-error-parser — Decode Viem & Wagmi Errors',
  },
  description:
    'Decode Viem and Wagmi errors into clean, human-readable messages — including custom revert reasons from your own ABIs.',
  keywords: ['viem', 'wagmi', 'error parser', 'ethereum', 'solidity', 'revert', 'typescript'],
  authors: [{ name: 'Hanif Maulana (Isaac Newton)', url: 'https://github.com/isaacnewton123' }],
  openGraph: {
    type: 'website',
    title: 'viem-error-parser',
    description:
      'Decode Viem and Wagmi errors into clean, human-readable messages — including custom revert reasons from your own ABIs.',
    url: 'https://viem-error-parser.vercel.app',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'viem-error-parser',
    description:
      'Decode Viem and Wagmi errors into clean, human-readable messages — including custom revert reasons from your own ABIs.',
  },
  appleWebApp: {
    title: 'viem-error-parser',
  },
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
