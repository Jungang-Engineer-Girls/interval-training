'use client';

import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { Global } from '@emotion/react';
import { globalStyles } from '@/shared/styles/global';
import styled from '@emotion/styled';

import Loading from '@/shared/components/loading/loading';
import Nickname from '@/shared/components/profile-step/nickname';
import BodyInfo from '@/shared/components/profile-step/bodyInfo';
import BmiResult from '@/shared/components/profile-step/bmiResult';
import GoalWeight from '@/shared/components/profile-step/goalWeight';
import Start from '@/shared/components/profile-step/start';
import { useState } from 'react';

const steps = ['Nickname', 'BodyInfo', 'BmiResult', 'GoalWeight', 'Start'];

export default function ProfilePage() {
  const queryClient = new QueryClient();
  //const [registerData, setRegisterData] = useState()
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);

  const onNext = () => {
    setStep((prev) => (prev + 1 < steps.length ? prev + 1 : prev));
  };

  // const onPrev = () => {
  //   setStep((prev) => prev - 1);
  // };
  const handleGoalWeightNext = async (data: any) => {
    try {
      setLoading(true);
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to register. Please try again.');
      }

      onNext(); // 다음 단계로 이동
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Global styles={globalStyles} />
      <Section>
        {steps[step] === 'Nickname' && <Nickname onNext={onNext} />}
        {steps[step] === 'BodyInfo' && <BodyInfo onNext={onNext} />}
        {steps[step] === 'BmiResult' && <BmiResult onNext={onNext} />}
        {steps[step] === 'GoalWeight' && (
          <GoalWeight
            onNext={(data: any) => handleGoalWeightNext(data)} // API 호출
          />
        )}
        {steps[step] === 'Start' && <Start onNext={onNext} />}

        {loading && <Loading />}
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
