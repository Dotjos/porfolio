import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Oladotun Joseph\'s Portfolio',
  description: 'Portfolio of Ibiwumi Joseph, a Frontend Engineer specializing in React, Next.js, and TypeScript, building fast and user-friendly web apps.',
  icons: {
    icon: '/img/icons8-j-50.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} bg-slate-100 text-lg dark:bg-slate-900 dark:text-slate-200 text-slate-800 font-sans antialiased lg:h-screen lg:overflow-hidden`}>
        {children}
      </body>
    </html>
  );
}
