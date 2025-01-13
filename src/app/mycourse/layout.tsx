'use client';

import QueryProviders from '@/shared/providers/query-providers';
import { Global } from '@emotion/react';
import { globalStyles } from '@/shared/styles/global';
import styled from '@emotion/styled';

export default function MyCourseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <QueryProviders>
      <Wrapper>
        <Global styles={globalStyles} />
        <Content>{children}</Content>
      </Wrapper>
    </QueryProviders>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 320px;
  height: 100vh;
  margin: 0 auto;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

const Content = styled.main`
  flex: 1;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  overflow-y: auto;
`;
