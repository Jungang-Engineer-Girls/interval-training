'use client';


interface ClientComponentProps {
  id: string;
}

export default function ClientComponent({ id }: ClientComponentProps) {
  return (
    <>
      <p>{id}</p>
    </>
  );
}