'use client';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { Global } from '@emotion/react';
import { globalStyles } from '@/shared/styles/global';
import CourseBox from '@/shared/components/course/courseBox';

export default function TrainingStart() {
  const queryClient = new QueryClient();
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Global styles={globalStyles} />
      <CourseBox $width={263} $height={121} $fontSize={20} $variant='blue'>
        인터벌트레이닝 바로 시작하기
      </CourseBox>
    </HydrationBoundary>
  );
}
