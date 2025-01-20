'use client';
import styled from '@emotion/styled';

import theme from '@/shared/styles/theme';
import { useRouter } from 'next/navigation';

interface CourseListProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  items: {id:number; title: string; time: string}[];

  $fontSize: number;
  $variant: 'primary' | 'transparent' | 'white' | 'gray' | 'black' | 'mint' | 'mint_5' | 'pink' | 'red' | 'blue' | 'blue_2';
  children?: React.ReactNode;
}

export default function CourseList({ items, $fontSize, $variant }: CourseListProps) {
  const router = useRouter();
  return (
    <>
      {items.map((item, index) => (
        <ListBox $fontSize={$fontSize} $variant={$variant} key={index} onClick={() => router.push(`/recommendation/${item.id}`)}>

            <ListItem>
            <ListTitle>{item.title}</ListTitle>
            <Time>{item.time}</Time>
          </ListItem>

     
        </ListBox>
      ))}
    </>
  );
}

const ListBox = styled.button<CourseListProps>`
  cursor: pointer;
  box-sizing: border-box;
  width: 100%;
  height: 80px;
  padding: 12px 24px;
  border-radius:20px;
  text-align: left;
  font-size: 16px;
  font-weight: 600;

  border: none;

  ${({ $variant }) => {
    switch ($variant) {
      case 'primary': {
        return `
          background-color: ${theme.colors.grey_5};
          color: ${theme.colors.white};
        `;
      }
      case 'transparent': {
        return `
          background-color: transparent;
          color: ${theme.colors.grey_5};
          border: 2px solid ${theme.colors.grey_5};
        `;
      }
      case 'white': {
        return `
          background-color: white;
          color: ${theme.colors.grey_5};
          border: 1px solid ${theme.colors.grey_5};
        `;
      }
      case 'gray': {
        return `
          background-color: ${theme.colors.grey_2};
          color: ${theme.colors.white};
          border: 1px solid ${theme.colors.grey_2};
        `;
      }
      case 'black': {
        return `
          background-color: ${theme.colors.black};
          color: ${theme.colors.white};
          border: 1px solid ${theme.colors.black};
        `;
      }
      case 'mint': {
        return `
          background-color: ${theme.colors.mint_2};
          color: 'black';
          border: 1px solid ${theme.colors.mint_2};
        `;
      }
           case 'mint_5': { 
        return `
          background-color: ${theme.colors.mint_5};
          color: black;
          border: 1px solid ${theme.colors.mint_5};
        `;
      }
      case 'pink': {
        return `
          background-color: ${theme.colors.pink_2};
          color: ${theme.colors.grey_5};
          border: 1px solid ${theme.colors.pink_2};
        `;
      }
      case 'red': {
        return `
          background-color: ${theme.colors.warning};
          color: ${theme.colors.white};
          border: 1px solid ${theme.colors.warning};
        `;
      }
      case 'blue': {
        return `
          background-color: ${theme.colors.blue};
          color: ${theme.colors.white};
          border: 1px solid ${theme.colors.blue};
        `;
      }
      default: {
        return `
        `;
      }
    }
  }}
`;

const ListItem = styled.div`
  margin-bottom: 12px;
`;
const ListTitle = styled.div`
  justify-content: left;
  font-size: 16px; 
  font-weight: 600;
  `;
const Time = styled.div`
  justify-content: left;
  font-size: 12px;
  font-weight :400 ;
  color: #87A7F8;
  margin-top: 4px; 
`;
