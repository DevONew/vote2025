import './globals.css';
import type { Metadata } from 'next';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import { MSWProvider } from './components/MSWProvider';

export const metadata = {
  title: '2025 대선 지도',
  description: '2025년 대한민국 대통령 선거를 위한 지도 시각화 프로젝트',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen flex flex-col">
        <MSWProvider>
          <Header/>
          <main>
            {children}
          </main>
          <Footer/>
        </MSWProvider>
      </body>
    </html>
  );
}