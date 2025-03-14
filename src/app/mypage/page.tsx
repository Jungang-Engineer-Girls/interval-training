"use client";

import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { Global } from "@emotion/react";
import { globalStyles } from "@/shared/styles/global";
import styled from "@emotion/styled";
import TrainingHeader from "@/shared/components/header/trainingHeader";
import prev from "@/shared/assets/icons/prev.svg";
import { useEffect, useState } from "react";

export default function MyPage() {
  const queryClient = new QueryClient();

  const [nickname, setNickname] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [goalWeight, setGoalWeight] = useState("");

  useEffect(() => {
    const storedNickname = localStorage.getItem("nickname");
    const storedHeight = localStorage.getItem("height");
    const storedWeight = localStorage.getItem("weight");
    const storedGoalWeight = localStorage.getItem("goalWeight");

    if (storedNickname) setNickname(storedNickname);
    if (storedHeight) setHeight(storedHeight);
    if (storedWeight) setWeight(storedWeight);
    if (storedGoalWeight) setGoalWeight(storedGoalWeight);
  }, []);

  const heightInMeters = height ? parseFloat(height) / 100 : 0;
  const weightInKg = weight ? parseFloat(weight) : 0;
  const bmi =
    heightInMeters > 0
      ? (weightInKg / heightInMeters ** 2).toFixed(1)
      : "입력 필요";

  const getBmi = () => {
    const value = typeof bmi === "string" ? parseFloat(bmi) : bmi;
    if (isNaN(value)) return "입력 필요";
    if (value < 18.5) return "저체중";
    if (value < 23) return "정상 체중";
    if (value < 25) return "과체중";

    return "비만";
  };

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Global styles={globalStyles} />
      <TrainingHeader icon={prev.src}>마이페이지</TrainingHeader>
      <Section>
        <Header>{nickname || "닉네임 입력"}님의 프로필</Header>
        <Text>키: {height ? `${height} cm` : "키 입력"}</Text>
        <Text>체중: {weight ? `${weight} kg` : "체중 입력"}</Text>
        <Text>
          bmi 지수:{bmi}({getBmi()})
        </Text>
        <Text>
          목표 체중: {goalWeight ? `${goalWeight} kg` : "목표 체중 입력"}
        </Text>
        <Text>체중 그래프</Text>
      </Section>
    </HydrationBoundary>
  );
}

const Section = styled.section`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  border: 3px solid blue;
  border-radius: 10px;
  gap: 15px;
  height: 100%;
  padding: 20px;
`;

const Header = styled.h1`
  font-size: 18px;
`;

const Text = styled.p`
  margin: 0px 0px;
`;
