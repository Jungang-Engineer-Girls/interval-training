'use client';

import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { Global } from '@emotion/react';
import { globalStyles } from '@/shared/styles/global';
import styled from '@emotion/styled';
import TrainingHeader from '@/shared/components/header/trainingHeader';
import prev from '@/shared/assets/icons/prev.svg';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function MyPage() {
  const router = useRouter();
  const queryClient = new QueryClient();

  const [nickname, setNickname] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [goalWeight, setGoalWeight] = useState('');

  useEffect(() => {
    const storedNickname = localStorage.getItem('nickname');
    const storedHeight = localStorage.getItem('height');
    const storedWeight = localStorage.getItem('weight');
    const storedGoalWeight = localStorage.getItem('goalWeight');

    if (storedNickname) setNickname(storedNickname);
    if (storedHeight) setHeight(storedHeight);
    if (storedWeight) setWeight(storedWeight);
    if (storedGoalWeight) setGoalWeight(storedGoalWeight);
  }, []);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Global styles={globalStyles} />
      <TrainingHeader icon={prev.src}>마이페이지</TrainingHeader>
      <Section>
        <Text>닉네임: {nickname || '닉네임 입력'}</Text>
        <Text>키: {height ? `${height} cm` : '키 입력'}</Text>
        <Text>체중: {weight ? `${weight} kg` : '체중 입력'}</Text>
        <Text>목표 체중: {goalWeight ? `${goalWeight} kg` : '목표 체중 입력'}</Text>
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

const Text = styled.p`

`;
