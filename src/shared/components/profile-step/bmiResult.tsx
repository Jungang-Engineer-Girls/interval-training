'use client';
import styled from '@emotion/styled';

import Button from '@/shared/components/buttons/button';
import { useEffect, useState } from 'react';

import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';

type StepProps = {
  onNext: () => void;
};

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function BmiResult({ onNext }: StepProps) {
  const [nickname, setNickname] = useState('');

  useEffect(() => {
    const storedNickname = localStorage.getItem('nickname');
    if (storedNickname) setNickname(storedNickname);
  }, []);
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
    <>
      <Header>
        <div>{nickname || '사용자'}님의 BMI 수치를 </div>
        <div>분석한 결과</div>
        <div>
          현재 <Bmi>저체중</Bmi>입니다
        </div>
      </Header>
      <div>체중 그래프</div>
      <ReactApexChart options={chartData.options} series={chartData.series} type='line' height={350} />

      <ButtonWrapper>
        <Button onClick={onNext} $width={100} $height={20} $fontSize={12} $variant='blue'>
          알겠어요
        </Button>
      </ButtonWrapper>
    </>
  );
}

const Header = styled.header`
  width: 100%;
  padding: 10px 0;
  font-size: 20px;
  font-weight: 600;
`;

const Bmi = styled.span`
color: blue;
`;

const ButtonWrapper = styled.div`
display: flex;
flex-direction: column;
gap:10px;
margin-top: auto;
margin-bottom: 20px; 
`;
