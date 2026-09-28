import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Tarun Raj Gaur | Systems, AI, and the work between them',
  description: 'Portfolio and technical field notes by Tarun Raj Gaur.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}