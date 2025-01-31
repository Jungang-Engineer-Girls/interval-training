'use client';
import Timer from '@/shared/components/course/timer';
import ClientComponent from './ClientComponent';
import Timeline from '@/shared/components/course/timeline';

interface RecommendationDetailPageProps {
  params: { id: string };
}

export default function RecommendationDetailPage({ params }: RecommendationDetailPageProps) {
  const { id } = params;

  return (
    <div>
      <Timer duration={10} radius={75} thinStrokeWidth={1} thickStrokeWidth={5} color='#87A7F8' backgroundColor='#D9D9D9' />
      <Timeline />
      <ClientComponent id={id} />
    </div>
  );
}
