"use client";

import Lottie from "lottie-react";
import animationData from "@/shared/assets/icons/loading.json";

type LoadingProps = {
  style?: React.CSSProperties;
};

export default function Loading({ style }: LoadingProps) {
  return <Lottie animationData={animationData} loop={true} style={{ width: '150px', ...style }} />;
}
