'use client';

import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { Global } from '@emotion/react';
import { globalStyles } from '@/shared/styles/global';
import styled from '@emotion/styled';
import TrainingHeader from '@/shared/components/header/trainingHeader';
import prev from '@/shared/assets/icons/prev.svg';

export default function Recommendation() {
  const queryClient = new QueryClient();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Global styles={globalStyles} />
      <TrainingHeader icon={prev.src} iconSize={25}>
        추천 코스
      </TrainingHeader>
      <Section></Section>
    </HydrationBoundary>
  );
}

const Section = styled.section`
  box-sizing: border-box; 
  display: flex;
  flex-direction: column; 
  justify-content: space-between; 
  height: 100%;
  padding:20px;
`;
