'use client';
import styled from '@emotion/styled';

export default function Timeline() {
  return (
    <>
      <ListBox>
        <CircleTime />
        <TimeText> 빠르게 걷기 | 8분 | 속도6</TimeText>
      </ListBox>
    </>
  );
}

const ListBox = styled.div`
  display: flex;
  justify-content: center;

`;

const CircleTime = styled.span`
  box-sizing: border-box;
  width:10px;
  height: 10px;
  background-color: #D9D9D9;
  border-radius: 100%;
`;

const TimeText = styled.span`
margin:0 10px;
  font-size: 10px;
  font-weight: 400;
`;
