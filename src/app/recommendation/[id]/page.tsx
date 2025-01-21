'use client'

// interface RecommendationDetailPageProps {
//   params: {
//     id: string;
//   };
// }
export default async function RecommendationDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <div>
      <title>{id} 페이지</title>

    </div>
  );
}