'use client';

import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { Global } from '@emotion/react';
import { globalStyles } from '@/shared/styles/global';
import { useEffect } from 'react';

export default function Home() {
  const queryClient = new QueryClient();

  // 모바일 뷰포트 높이
  useEffect(() => {
    const setVh = () => {
      document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
    };

    setVh();
    window.addEventListener('resize', setVh);

    return () => {
      window.removeEventListener('resize', setVh);
    };
  }, []);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Global styles={globalStyles} />
      <main>메인 페이지 입니다</main>
    </HydrationBoundary>
  );
}
