"use client";
import styled from "@emotion/styled";
import { useState, useEffect } from "react";

interface TimelineProps {
  items: { text: string; duration: number }[];
  currentTime: number;
}

export default function Timeline({ items, currentTime }: TimelineProps) {
  const [playing, setPlaying] = useState(0);

  useEffect(() => {
    let accumulatedTime = 0;

    for (let i = 0; i < items.length; i++) {
      accumulatedTime += items[i].duration;
      if (currentTime < accumulatedTime) {
        setPlaying(i);
        break;
      }
    }
  }, [currentTime, items]);

  return (
    <Container>
      {items.map((item, index) => (
        <ListBox key={index}>
          <CircleTime playing={index === playing} />
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

const CircleTime = styled.span<{ playing: boolean }>`
  box-sizing: border-box;
  width: 10px;
  height: 10px;
  background-color: ${({ playing }) => (playing ? "#87A7F8" : "#D9D9D9")};
  border-radius: 100%;
`;

const TimeText = styled.span`
  text-align: left;
  margin: 5px 10px;
  font-size: 10px;
  font-weight: 400;
`;
