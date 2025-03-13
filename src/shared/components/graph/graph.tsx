'use client';
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';

//SSR 방지
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function ApexChart() {
  const [chartData, setChartData] = useState<{
    series: { name: string; data: number[] }[];
    options: ApexOptions;
  }>({
    series: [
      {
        name: '체중 변화',
        data: [60, 61, 62, 64, 65, 67, 68, 70, 72],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: 'line', // ✅ 문자열 대신 "line"을 정확한 타입으로 지정
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },
      title: {
        text: '체중 변화 그래프',
        align: 'left',
      },
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
  });

  return (
    <div>
      <ReactApexChart options={chartData.options} series={chartData.series} type='line' height={350} />
    </div>
  );
}
