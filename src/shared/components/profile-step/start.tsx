'use client';
import styled from '@emotion/styled';

import Button from '@/shared/components/buttons/button';

import { DotLottieReact } from '@lottiefiles/dotlottie-react';

type StepProps = {
  onNext: () => void;
};

export default function Start({ onNext }: StepProps) {
  return (
    <>
      <Header>
        <div>자 이제 운동을 </div>
        <div>시작해볼까요?</div>
      </Header>
      <DotLottieReact src='https://lottie.host/d68bf360-518c-4159-affc-21fe973cfd73/1Jq4dn6dE2.lottie' loop autoplay />

      <ButtonWrapper>
        <Button onClick={onNext} $width={100} $height={20} $fontSize={12} $variant='mint'>
          시작하기
        </Button>
      </ButtonWrapper>
    </>
  );
}

const Header = styled.header`
  width: 100%;
  padding: 10px 0;
  font-size: 20px;
  font-weight: 600;
`;

const ButtonWrapper = styled.div`
display: flex;
flex-direction: column;
gap:10px;
margin-top: auto;
margin-bottom: 20px; 
`;
