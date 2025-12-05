'use client';

import { useEffect, useState } from 'react';

export function MSWProvider({ children }: { children: React.ReactNode }) {
  const [mswReady, setMswReady] = useState(false);

  useEffect(() => {
    const init = async () => {
      // 개발 환경에서만 MSW 활성화
      if (process.env.NODE_ENV === 'development') {
        const { worker } = await import('@/mocks/browser');
        await worker.start({
          onUnhandledRequest: 'bypass', // Mock되지 않은 요청은 그대로 통과
        });
        console.log('[MSW] Mock Service Worker 시작됨');
      }
      setMswReady(true);
    };

    init();
  }, []);

  // MSW가 준비될 때까지 로딩 표시 (개발 환경)
  if (process.env.NODE_ENV === 'development' && !mswReady) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
}
