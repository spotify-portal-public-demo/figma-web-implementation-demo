import type { Metadata } from 'next';
import '@backstage/ui/css/styles.css';
import './globals.css';

export const metadata: Metadata = {
  title: 'Figma implementation demo',
  description: 'A local BUI target for Portal Figma-to-code demonstrations',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
