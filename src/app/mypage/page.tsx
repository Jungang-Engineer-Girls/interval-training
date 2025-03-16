'use client';

import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { Global } from '@emotion/react';
import { globalStyles } from '@/shared/styles/global';
import styled from '@emotion/styled';
import TrainingHeader from '@/shared/components/header/trainingHeader';
import prev from '@/shared/assets/icons/prev.svg';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

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

  const heightInMeters = height ? parseFloat(height) / 100 : 0;
  const weightInKg = weight ? parseFloat(weight) : 0;
  const bmi = heightInMeters > 0 ? (weightInKg / heightInMeters ** 2).toFixed(1) : '입력 필요';

  const getBmi = (bmi: string | number) => {
    const value = typeof bmi === 'string' ? parseFloat(bmi) : bmi;
    if (isNaN(value)) return '입력 필요';
    if (value < 18.5) return '저체중';
    if (value < 23) return '정상 체중';
    if (value < 25) return '과체중';
    return '비만';
  };

  const chartData: { series: ApexAxisChartSeries; options: ApexOptions } = {
    series: [
      {
        name: '체중 변화',
        data: [60, 61, 62, 64, 65, 67, 68, 70, 72], // 예제 데이터
      },
    ],
    options: {
      chart: {
        height: 350,
        type: 'line',
        zoom: { enabled: false },
      },
      dataLabels: { enabled: false },
      stroke: { curve: 'smooth' },
      title: { text: '체중 변화 그래프', align: 'left' },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'],
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: ['1주', '2주', '3주', '4주', '5주', '6주', '7주', '8주', '9주'],
      },
    },
  };
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Global styles={globalStyles} />
      <TrainingHeader icon={prev.src}>마이페이지</TrainingHeader>
      <Section>
        <Header>{nickname || '닉네임 입력'}님의 프로필</Header>
        <Text>키: {height ? `${height} cm` : '키 입력'}</Text>
        <Text>체중: {weight ? `${weight} kg` : '체중 입력'}</Text>
        <Text>
          bmi 지수:{bmi}({getBmi(bmi)})
        </Text>
        <Text>목표 체중: {goalWeight ? `${goalWeight} kg` : '목표 체중 입력'}</Text>
        <Text>체중 그래프</Text>
        <ReactApexChart options={chartData.options} series={chartData.series} type='line' height={350} />
      </Section>
    </HydrationBoundary>
  );
}

const Section = styled.section`
  box-sizing: border-box; 
  display: flex;
  flex-direction: column; 
  margin-top:20px;
  border:3px solid blue;
  border-radius: 10px;
  gap:15px;
  height: 100%;
  padding:20px;
`;

const Header = styled.h1`
font-size:18px;
`;

const Text = styled.p`
margin:0px 0px;

`;
