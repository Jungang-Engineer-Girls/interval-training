"use client";

import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import PauseRoundedIcon from "@mui/icons-material/PauseRounded";
import ReplayRoundedIcon from "@mui/icons-material/ReplayRounded";

interface TimerProps {
  duration: number;
  radius: number;
  thinStrokeWidth: number;
  thickStrokeWidth: number;
  color?: string;
  backgroundColor?: string;
  onTimeUpdate?: (remainingTime: number) => void;
}

const formatTime = (seconds: number) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;

  return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
};

export default function Timer({
  duration,
  radius,
  thinStrokeWidth,
  thickStrokeWidth,
  color = "#87A7F8",
  backgroundColor = "#D9D9D9",
}: TimerProps) {
  const totalSeconds = duration * 60;
  const [remainingTime, setRemainingTime] = useState(totalSeconds);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    if (!play) return;

    const startTime = Date.now();

    const interval = setInterval(() => {
      const elapsedSeconds = Math.floor((Date.now() - startTime) / 1000);
      const newRemainingTime = Math.max(totalSeconds - elapsedSeconds, 0);
      setRemainingTime(newRemainingTime);

      if (newRemainingTime === 0) {
        clearInterval(interval);
        setPlay(false);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [play, totalSeconds]);

  const progress = ((totalSeconds - remainingTime) / totalSeconds) * 100;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  const onPlay = () => setPlay(!play);
  const onReset = () => {
    setPlay(false);
    setRemainingTime(totalSeconds);
  };

  return (
    <>
      <Container>
        <svg
          width={radius * 2 + thickStrokeWidth}
          height={radius * 2 + thickStrokeWidth}
          viewBox={`0 0 ${radius * 2 + thickStrokeWidth} ${radius * 2 + thickStrokeWidth}`}
        >
          <circle
            cx={radius + thickStrokeWidth / 2}
            cy={radius + thickStrokeWidth / 2}
            r={radius}
            stroke={backgroundColor}
            strokeWidth={thinStrokeWidth}
            fill="none"
          />
          <circle
            cx={radius + thickStrokeWidth / 2}
            cy={radius + thickStrokeWidth / 2}
            r={radius}
            stroke={color}
            strokeWidth={thickStrokeWidth}
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            style={{
              transform: "rotate(-90deg)",
              transformOrigin: "center",
              transition: "stroke-dashoffset 0.1s linear",
            }}
          />
        </svg>
        <Time color={color}>{formatTime(remainingTime)}</Time>
      </Container>
      <PlayerBox>
        <PlayerContainer onClick={onPlay}>
          {play ? (
            <PlayerTransparentCircle color={color}>
              <PauseRoundedIcon style={{ fontSize: "30px", color }} />
            </PlayerTransparentCircle>
          ) : (
            <PlayerCircle>
              <PlayArrowRoundedIcon style={{ fontSize: "30px", color }} />
            </PlayerCircle>
          )}
        </PlayerContainer>
        <PlayerContainer>
          <PlayerTransparentCircle onClick={onReset} color={color}>
            <ReplayRoundedIcon style={{ fontSize: "30px", color }} />
          </PlayerTransparentCircle>
        </PlayerContainer>
      </PlayerBox>
      <DashedLine />
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Time = styled.div<{ color: string }>`
  position: absolute;
  font-size: 40px;
  font-weight: 300;
  color: ${({ color }) => color};
`;

const PlayerBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const PlayerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 100%;
  position: relative;
`;

const PlayerCircle = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  background-color: #e1eaff;
  border-radius: 100%;
`;

const PlayerTransparentCircle = styled.span<{ color: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  border-radius: 100%;
  border: 1px solid ${({ color }) => color};
`;

const DashedLine = styled.div`
  width: 100%;
  border-bottom: 1px dashed #d9d9d9;
  margin: 20px 0;
`;
