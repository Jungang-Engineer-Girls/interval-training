'use client';

import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { Global } from '@emotion/react';
import { globalStyles } from '@/shared/styles/global';
import styled from '@emotion/styled';
import Image from 'next/image';

import { useRouter } from 'next/navigation';

import Lottie from 'lottie-react';
import animationData from '@/shared/assets/icons/loading.json';
import kakao from '@/shared/assets/icons/kakao.svg';
import apple from '@/shared/assets/icons/apple.svg';

type LoadingProps = {
  style?: React.CSSProperties;
};

export default function ProfilePage({ style }: LoadingProps) {
  const router = useRouter();
  const queryClient = new QueryClient();

  const onKakaoLogin = () => {
    router.push('/kakao');
  };
  const onAppleLogin = () => {
    router.push('/apple');
  };

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Global styles={globalStyles} />
      <Section>
        <Lottie animationData={animationData} loop={true} style={{ width: '150px', ...style }} />
        <KakaoLogin onClick={onKakaoLogin}>
          <Image src={kakao.src} alt='카카오 로그인' width={20} height={20} />
          카카오로 로그인하기
        </KakaoLogin>
        <AppleLogin onClick={onAppleLogin}>
          <Image src={apple.src} alt='애플 로그인' width={18} height={18} />
          애플로 로그인하기기
        </AppleLogin>
      </Section>
    </HydrationBoundary>
  );
}

const Section = styled.section`
  box-sizing: border-box; 
  display: flex;
  flex-direction: column; 
  gap: 20px;
  height: 100%;
  padding:20px;
`;

const KakaoLogin = styled.button`
box-sizing: border-box;
width: 100%;
height: 38px;
background-color: #FFE61C;
border-radius: 10px;
font-weight: 600;
font-size: 15px;
`;
const AppleLogin = styled.button`
box-sizing: border-box;
width: 100%;
height: 38px;
background-color: #E1EAFF;
border-radius: 10px;
font-weight: 600;
font-size: 15px;
`;
