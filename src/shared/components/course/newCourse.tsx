'use client';
import styled from '@emotion/styled';


interface newCourseProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
   $height?: number;
   $radius?:number;
   $color?: string;
  children?: React.ReactNode;
}

export default function NewCourse({ $height,$radius,$color, ...rest }: newCourseProps) {
  return (
    <>
      <ListBox $height={$height} $radius={$radius} $color={$color} {...rest}>{rest.children}</ListBox>
    </>
  );
}

const ListBox = styled.button<newCourseProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-sizing: border-box;
  width: 100%;
  height: ${({ $height }) => ($height ? `${$height}px` : 'auto')};
  padding: 12px 24px;

  border: 1px dashed ${({ $color }) => ($color === 'grey_6' ? '#DEE2E6' : '#87A7F8')};
  border-radius: ${({ $radius }) => ($radius ? `${$radius}px` : '0px')};

  font-size: 14px;
  font-weight: 600;
  color:${({ $color }) => ($color === 'grey_6' ? '#DEE2E6' : '#87A7F8')};
`;