'use client';
import styled from '@emotion/styled';

interface newCourseProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export default function NewCourse({ ...rest }: newCourseProps) {
  return (
    <>
      <ListBox {...rest}></ListBox>
    </>
  );
}

const ListBox = styled.button<newCourseProps>`
  cursor: pointer;
  box-sizing: border-box;
  width: 100%;
  height: 80px;
  padding: 12px 24px;
  border-radius:20px;

  font-size: 14px;
  font-weight: 600;
  color:#87A7F8;

  border: 1px dashed #87A7F8;

 
`;
