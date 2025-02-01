'use client';
import styled from '@emotion/styled';

interface TimelineProps {
  items: { text: string }[];
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <Container>
      {items.map((item, index) => (
        <ListBox key={index}>
          <CircleTime />
          <TimeText>{item.text}</TimeText>
        </ListBox>
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ListBox = styled.div`
  margin-left: 5px;
  display: flex;
  align-items: center;
`;

const CircleTime = styled.span`
  box-sizing: border-box;
  width: 10px;
  height: 10px;
  background-color: #D9D9D9;
  border-radius: 100%;
`;

const TimeText = styled.span`
  text-align: left;
  margin: 5px 10px;
  font-size: 10px;
  font-weight: 400;
`;
