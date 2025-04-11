import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'KIA FAQ',
  description: 'KIA FAQ',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <div className="layout">{children}</div>
      </body>
    </html>
  );
}
