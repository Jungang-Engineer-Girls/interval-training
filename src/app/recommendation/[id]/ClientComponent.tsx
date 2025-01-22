'use client';

import { css, Global } from '@emotion/react';

interface ClientComponentProps {
  id: string;
}

export default function ClientComponent({ id }: ClientComponentProps) {
  return (
    <>
      <Global
        styles={css`
          body {
            font-family: Arial, sans-serif;
          }
        `}
      />
      <p>{id}</p>
    </>
  );
}