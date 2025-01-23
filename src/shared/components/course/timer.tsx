import { useEffect, useState } from 'react';
import styled from '@emotion/styled';

interface TimerProps {
  duration: number; 
  radius: number;
  thinStrokeWidth: number; // 기본 두께
  thickStrokeWidth: number; // 진행 중 두께 
  color?: string; 
  backgroundColor?: string;
}

export default function Timer({   duration,
  radius,
  thinStrokeWidth,
  thickStrokeWidth,
  color = "#87A7F8",
  backgroundColor = '#D9D9D9',}: TimerProps) {
   const [progress, setProgress] = useState(0); 

  useEffect(() => {
    const startTime = Date.now();

    const interval = setInterval(() => {
      const elapsedTime = (Date.now() - startTime) / 1000; 
      const newProgress = Math.min((elapsedTime / duration) * 100, 100); 
      setProgress(newProgress);

      if (elapsedTime >= duration) {
        clearInterval(interval);
      }
    }, 16); 

    return () => clearInterval(interval);
  }, [duration]);


  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  //점
  const angle = (progress / 100) * 360 - 90; 
  const radians = (angle * Math.PI) / 180;
  const knobX = radius + thickStrokeWidth / 2 + radius * Math.cos(radians);
  const knobY = radius + thickStrokeWidth / 2 + radius * Math.sin(radians);

  

  return (
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
            transform: 'rotate(-90deg)',//시작 시점
            transformOrigin: 'center',
            transition: 'stroke-dashoffset 0.1s linear',
          }}
        />
        {progress < 100 && (
          <circle
            cx={knobX}
            cy={knobY}
            r={6} //원 반지름 
            fill={color}
            style={{
              transition: 'cx 0.1s linear, cy 0.1s linear',
            }}
          />
        )}    
      </svg>
      <Time color={color} >{Math.ceil((1 - progress / 100) * duration)}</Time>
    </Container>
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

