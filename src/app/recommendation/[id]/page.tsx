"use client";

import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { Global } from "@emotion/react";
import { globalStyles } from "@/shared/styles/global";
import styled from "@emotion/styled";
import Timer from "@/shared/components/course/timer";
//import ClientComponent from './ClientComponent';
import prev from "@/shared/assets/icons/prev.svg";
import Timeline from "@/shared/components/course/timeline";
import TrainingHeader from "@/shared/components/header/trainingHeader";
import { useState, useEffect } from "react";

const courseData: Record<
  string,
  { title: string; timeline: { text: string; duration: number }[] }
> = {
  "1": {
    title: "30일 만에 -10kg 코스",
    timeline: [
      { text: "빠르게 걷기 | 8분 | 속도6", duration: 480 },
      { text: "전력 질주 | 1분 | 속도 11", duration: 60 },
      { text: "빠르게 걷기 | 2분 | 속도6", duration: 120 },
      { text: "전력 질주 | 1분 | 속도 11", duration: 60 },
      { text: "빠르게 걷기 | 2분 | 속도6", duration: 120 },
      { text: "전력 질주 | 1분 | 속도 11", duration: 60 },
      { text: "천천히 걷기 | 5분 | 속도4", duration: 300 },
    ],
  },
  "2": {
    title: "극강의 유산소 코스",
    timeline: [
      { text: "빠르게 걷기 | 10분 | 속도7", duration: 600 },
      { text: "전력 질주 | 2분 | 속도 12", duration: 120 },
      { text: "빠르게 걷기 | 3분 | 속도7", duration: 180 },
      { text: "전력 질주 | 2분 | 속도 12", duration: 120 },
      { text: "천천히 걷기 | 5분 | 속도5", duration: 300 },
    ],
  },
};

export default function RecommendationDetailPage({ params }: any) {
  const queryClient = new QueryClient();
  const { id } = params;

  const course = courseData[id] || { title: "정보 없음", timeline: [] };

  const totalSeconds = course.timeline.reduce(
    (acc, item) => acc + item.duration,
    0
  );
  const [remainingTime, setRemainingTime] = useState(totalSeconds);

  useEffect(() => {
    // 클라이언트에서만 document를 사용할 수 있도록 함
    if (typeof document !== "undefined") {
      // document 관련 코드
    }
  }, []);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Global styles={globalStyles} />
      <TrainingHeader icon={prev.src}>{course.title}</TrainingHeader>
      <Section>
        <Timer
          onTimeUpdate={setRemainingTime}
          duration={21}
          radius={75}
          thinStrokeWidth={1}
          thickStrokeWidth={5}
          color="#87A7F8"
          backgroundColor="#D9D9D9"
        />
        <Timeline
          items={course.timeline}
          currentTime={totalSeconds - remainingTime}
        />
        {/* <ClientComponent id={id} /> */}
      </Section>
    </HydrationBoundary>
  );
}

const Section = styled.section`
  margin: 20px 0px;
  height: 100%;
`;
