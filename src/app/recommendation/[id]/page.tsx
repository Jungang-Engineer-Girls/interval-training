'use client'

interface RecommendationDetailPageProps {
  params: {
    id: string;
  };
}

export default function RecommendationDeatailPage({ params }: RecommendationDetailPageProps) {
 const { id } = params;
  return (
    <div>
      <title>{id} 페이지</title>

    </div>
  );
}