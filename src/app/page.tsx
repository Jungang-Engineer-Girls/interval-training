'use client';

import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { Global } from '@emotion/react';
import { globalStyles } from '@/shared/styles/global';
import { useEffect } from 'react';
import Button from '@/shared/components/buttons/button';
import { useRouter } from 'next/navigation';

export default function Home() {
  const queryClient = new QueryClient();
  const router = useRouter();

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

  const handleProfileButton = () => {
    router.push('/profile');
  };
  const handleLoginButton = () => {
    router.push('/login');
  };

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Global styles={globalStyles} />

      <main>
        메인 페이지 입니다
        <Button onClick={handleProfileButton} $width={100} $height={20} $fontSize={12} $variant='blue'>
          프로필 만들기
        </Button>
        <Button onClick={handleLoginButton} $width={100} $height={20} $fontSize={12} $variant='blue'>
          로그인 하기
        </Button>
      </main>
    </HydrationBoundary>
  );
}
