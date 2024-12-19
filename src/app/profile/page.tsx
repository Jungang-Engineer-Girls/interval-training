'use client';

import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { Global } from '@emotion/react';
import { globalStyles } from '@/shared/styles/global';
import styled from '@emotion/styled';

import Nickname from '@/shared/components/profile-step/nickname';
export default function ProfilePage() {
  const queryClient = new QueryClient();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Global styles={globalStyles} />
      <Section>
        <Nickname />
      </Section>
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
