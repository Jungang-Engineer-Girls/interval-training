"use client";
import Image from "next/image";
import styled from "@emotion/styled";
import { useRouter } from "next/navigation";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: string;
  children?: React.ReactNode;
}

export default function TrainingHeader({ icon, children }: Props) {
  const router = useRouter();

  const onPrev = () => {
    router.back();
  };

  return (
    <Header>
      {icon && (
        <IconWrapper onClick={onPrev}>
          <Image src={icon} alt="prev" width={100} height={100} />
        </IconWrapper>
      )}
      <Title>{children}</Title>
    </Header>
  );
}

const Header = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 20px;
  box-sizing: border-box;
`;
const IconWrapper = styled.div`
  position: absolute;
  left: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10px;
  height: 20px;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
  }
`;

const Title = styled.span`
  font-size: 12px;
  font-weight: bold;
  text-align: center;
`;
