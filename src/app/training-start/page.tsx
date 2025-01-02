'use client';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { Global } from '@emotion/react';
import styled from '@emotion/styled';
import { globalStyles } from '@/shared/styles/global';
import CourseBox from '@/shared/components/course/courseBox';
import running from '@/shared/assets/icons/running.svg';

export default function TrainingStart() {
  const queryClient = new QueryClient();
  console.log('running', running);
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Global styles={globalStyles} />
      <Container>
        <CourseBox $width={263} $height={121} $fontSize={20} $variant='blue' icon={<img src={running.src} alt='Running Icon' style={{ width: '24px', height: '24px' }} />}>
          인터벌트레이닝 바로 시작하기
        </CourseBox>
        <BoxWrapper>
          <CourseBox $width={125} $height={148} $fontSize={20} $variant='mint'>
            추천 코스
          </CourseBox>
          <CourseBox $width={125} $height={148} $fontSize={20} $variant='mint'>
            내 코스
          </CourseBox>
        </BoxWrapper>
      </Container>
    </HydrationBoundary>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7px; 
  width: 100%;
  padding: 16px;
`;

const BoxWrapper = styled.div`
  display: flex;
  justify-content: space-between; 
  gap: 7px; 
  width: 100%;
`;
