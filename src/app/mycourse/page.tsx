'use client';

import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { Global } from '@emotion/react';
import { globalStyles } from '@/shared/styles/global';
import styled from '@emotion/styled';
import TrainingHeader from '@/shared/components/header/trainingHeader';
import prev from '@/shared/assets/icons/prev.svg';
import CourseList from '@/shared/components/course/courseList';
import NewCourse from '@/shared/components/course/newCourse';

export default function MyCourse() {
  const queryClient = new QueryClient();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Global styles={globalStyles} />
      <TrainingHeader icon={prev.src} iconSize={25}>
        내 코스
      </TrainingHeader>
      <Section>
        <CourseList
          items={[
            { title: '오여니 코스', time: '25분 소요' },
            { title: '요이땅 코스', time: '30분 소요' },
          ]}
          $fontSize={16}
          $variant='mint_5'
        />
        <NewCourse>+</NewCourse>
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
