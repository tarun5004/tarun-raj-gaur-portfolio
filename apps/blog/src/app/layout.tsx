import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Field Notes | Tarun Raj Gaur',
  description: 'Technical notes about AI systems, backend architecture, and shipping software.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}