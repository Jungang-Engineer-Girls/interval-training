'use client';

import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { Global } from '@emotion/react';
import { globalStyles } from '@/shared/styles/global';
import styled from '@emotion/styled';
import TrainingHeader from '@/shared/components/header/trainingHeader';
import prev from '@/shared/assets/icons/prev.svg';
import CourseList from '@/shared/components/course/courseList';
import NewCourse from '@/shared/components/course/newCourse';
import { useRouter } from 'next/navigation';

export default function MyCourse() {
  const router = useRouter();
  const queryClient = new QueryClient();

  const colors = ['mint_5', 'orange', 'pink', 'gray'];

  const onMaking = () => {
    router.push('/making');
  };

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Global styles={globalStyles} />
      <TrainingHeader icon={prev.src}>내 코스</TrainingHeader>
      <Section>
        <CourseList
          items={[
            { id: 3, title: '오여니 코스', time: '25분 소요' },
            { id: 4, title: '요이땅 코스', time: '30분 소요' },
          ].map((item, index) => ({
            ...item,
            $variant: colors[index % colors.length],
          }))}
          $fontSize={16}
        />
        <NewCourse onClick={onMaking} $height={80} $radius={20} $color='blue'>
          +
        </NewCourse>
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
