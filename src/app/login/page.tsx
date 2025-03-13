"use client";

import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { Global } from "@emotion/react";
import { globalStyles } from "@/shared/styles/global";
import styled from "@emotion/styled";
import Image from "next/image";
import { supabase } from "@/supabase/client";
import { useRouter } from "next/navigation";

import Lottie from "lottie-react";
import animationData from "@/shared/assets/icons/loading.json";
import kakao from "@/shared/assets/icons/kakao.svg";
import apple from "@/shared/assets/icons/apple.svg";

type LoadingProps = {
  style?: React.CSSProperties;
};

export default function ProfilePage({ style }: LoadingProps) {
  const router = useRouter();
  const queryClient = new QueryClient();

  const onKakaoLogin = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "kakao",
      options: {
        redirectTo: `https://whladkmzmbkzbdhjlhvc.supabase.co/auth/v1/callback`,
      },
    });
    console.log(data);
    console.error(error);
  };
  const onAppleLogin = () => {
    router.push("/apple");
  };

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Global styles={globalStyles} />
      <Section>
        <Lottie
          animationData={animationData}
          loop={true}
          style={{ width: "150px", ...style }}
        />
        <KakaoLogin onClick={onKakaoLogin}>
          <Image src={kakao.src} alt="카카오 로그인" width={18} height={15} />
          카카오로 로그인하기
        </KakaoLogin>
        <AppleLogin onClick={onAppleLogin}>
          <Image src={apple.src} alt="애플 로그인" width={18} height={15} />
          애플로 로그인하기
        </AppleLogin>
      </Section>
    </HydrationBoundary>
  );
}

const Section = styled.section`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  height: 100vh;
  padding: 20px;
`;

const KakaoLogin = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  box-sizing: border-box;
  width: 100%;
  height: 38px;
  background-color: #ffe61c;
  border-radius: 10px;
  font-weight: 600;
  font-size: 15px;
`;
const AppleLogin = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  box-sizing: border-box;
  width: 100%;
  height: 38px;
  background-color: #e1eaff;
  border-radius: 10px;
  font-weight: 600;
  font-size: 15px;
`;
