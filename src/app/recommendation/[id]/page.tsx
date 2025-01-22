import ClientComponent from './ClientComponent';

interface RecommendationDetailPageProps {
  params: { id: string };
}

export default function RecommendationDetailPage({ params }: RecommendationDetailPageProps) {
  const { id } = params;

  return (
    <div>
      <h1>{id} 페이지</h1>
      <ClientComponent id={id} />
    </div>
  );
}