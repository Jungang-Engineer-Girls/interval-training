'use client';
import styled from '@emotion/styled';

interface newCourseProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
   $height?: number;
   $radius?:number;
  children?: React.ReactNode;
}

export default function NewCourse({ $height,$radius, ...rest }: newCourseProps) {
  return (
    <>
      <ListBox $height={$height} $radius={$radius} {...rest}></ListBox>
    </>
  );
}

const ListBox = styled.button<newCourseProps>`
  cursor: pointer;
  box-sizing: border-box;
  width: 100%;
  height: height;
  padding: 12px 24px;
  border-radius: ${({ $radius }) => ($radius ? `${$radius}px` : '0px')};

  font-size: 14px;
  font-weight: 600;
  color:#87A7F8;

  border: 1px dashed #87A7F8;

 
`;
