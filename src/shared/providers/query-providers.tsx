"use client";

import { type ReactNode } from "react";

import {
  isServer,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        // SSR을 사용하면 일반적으로 기본 staleTime을 설정
        // 클라이언트에서 즉시 다시 가져오는 것을 방지하려면 staleTime이 0보다 커야 함
        staleTime: 60 * 1000,
      },
    },
  });
}

let browserQueryClient: QueryClient | undefined = undefined;

function getQueryClient() {
  if (isServer) {
    // 서버: 항상 쿼리 클라이언트 만들기
    return makeQueryClient();
  } else {
    // 브라우저: 아직 클라이언트가 없으면 새 쿼리 클라이언트 만들기
    if (!browserQueryClient) browserQueryClient = makeQueryClient();

    return browserQueryClient;
  }
}

export default function Providers({ children }: { children: ReactNode }) {
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
