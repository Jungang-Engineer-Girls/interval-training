import Lottie from "lottie-react";
import animationData from "@/shared/assets/icons/loading.json";

export default function Loading() {
  return (
    <Lottie
      animationData={animationData}
      loop={true}
      style={{ width: "150px" }}
    />
  );
}
