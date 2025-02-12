'use client';

import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { Global } from '@emotion/react';
import { globalStyles } from '@/shared/styles/global';
import styled from '@emotion/styled';
import TrainingHeader from '@/shared/components/header/trainingHeader';
import prev from '@/shared/assets/icons/prev.svg';
import CourseList from '@/shared/components/course/courseList';

export default function Recommendation() {
  const queryClient = new QueryClient();

  const colors = ['mint_5', 'orange', 'pink', 'gray'];

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Global styles={globalStyles} />
      <TrainingHeader icon={prev.src}>추천 코스</TrainingHeader>
      <Section>
        <CourseList
          items={[
            { id: 1, title: '30일 만에 -10kg 코스', time: '30분 소요' },
            { id: 2, title: '극강의 유산소 코스', time: '45분 소요' },
            { id: 2, title: '극강의 유산소 코스', time: '45분 소요' },
            { id: 2, title: '극강의 유산소 코스', time: '45분 소요' },
            { id: 2, title: '극강의 유산소 코스', time: '45분 소요' },
            { id: 2, title: '극강의 유산소 코스', time: '45분 소요' },
            { id: 2, title: '극강의 유산소 코스', time: '45분 소요' },
            { id: 2, title: '극강의 유산소 코스', time: '45분 소요' },
            { id: 2, title: '극강의 유산소 코스', time: '45분 소요' },
            { id: 2, title: '극강의 유산소 코스', time: '45분 소요' },
          ].map((item, index) => ({
            ...item,
            $variant: colors[index % colors.length],
          }))}
          $fontSize={16}
        />
      </Section>
    </HydrationBoundary>
  );
}

const Section = styled.section`
  box-sizing: border-box; 
  display: flex;
  flex-direction: column; 
  gap:10px;
  height: 100%;
  padding:20px;
`;
