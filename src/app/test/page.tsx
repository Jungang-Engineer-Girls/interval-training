// 테스트용 페이지
"use client";

import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import Button from "@/shared/components/buttons/button";
export default function TestPage() {
  const queryClient = new QueryClient();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <section>
        <div>test page</div>
        <Button $width={100} $height={20} $fontSize={12} $variant="primary">
          버튼
        </Button>
      </section>
    </HydrationBoundary>
  );
}
