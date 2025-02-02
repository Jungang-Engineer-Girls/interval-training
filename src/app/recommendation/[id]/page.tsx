'use client';
import Timer from '@/shared/components/course/timer';
import ClientComponent from './ClientComponent';
import Timeline from '@/shared/components/course/timeline';

interface RecommendationDetailPageProps {
  params: { id: string };
}

export default function RecommendationDetailPage({ params }: RecommendationDetailPageProps) {
  const { id } = params;

  const timelineItems = [
    { text: '빠르게 걷기 | 8분 | 속도6' },
    { text: '전력 질주 | 1분 | 속도 11' },
    { text: '빠르게 걷기 | 2분 | 속도6' },
    { text: '전력 질주 | 1분 | 속도 11' },
    { text: '빠르게 걷기 | 2분 | 속도6' },
    { text: '전력 질주 | 1분 | 속도 11' },
    { text: '천천히 걷기 | 5분 | 속도4' },
  ];

  return (
    <div>
      <Timer duration={10} radius={75} thinStrokeWidth={1} thickStrokeWidth={5} color='#87A7F8' backgroundColor='#D9D9D9' />
      <Timeline items={timelineItems} />
      {/* <ClientComponent id={id} /> */}
    </div>
  );
}
