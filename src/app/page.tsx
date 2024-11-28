"use client";

import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { Global } from "@emotion/react";
import { globalStyles } from "@/shared/styles/global";

export default function Home() {
  const queryClient = new QueryClient();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Global styles={globalStyles} />
      <main>메인 페이지 입니다</main>
    </HydrationBoundary>
  );
}
