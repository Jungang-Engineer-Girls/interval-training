'use client';
import styled from '@emotion/styled';

import Button from '@/shared/components/buttons/button';
import { useState } from 'react';

type StepProps = {
  onNext: (height: string, weight: string) => void;
};

export default function BodyInfo({ onNext }: StepProps) {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const handleHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) setHeight(value);
  };

  const handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) setWeight(value);
  };

  return (
    <>
      <Header>
        <div>현재 신체 정보를 </div>
        <div>입력해 주세요</div>
      </Header>
      <InputWrapper>
        <div>
          <Input type='number' value={height} onChange={handleHeightChange} placeholder='키' />
          cm
        </div>
        <div>
          <Input type='number' value={weight} onChange={handleWeightChange} placeholder='몸무게' />
          kg
        </div>
      </InputWrapper>
      <ButtonWrapper>
        <Button onClick={() => onNext(height, weight)} $width={100} $height={20} $fontSize={12} $variant='blue'>
          등록하기
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

const InputWrapper = styled.div`
display: flex;
flex-direction: column;
gap:10px;

`;

const Input = styled.input`
  margin-top: 10px;
  width:40%;
  min-height:34px;
  border:2px solid #DEE2E6;
  border-radius: 20px;
  background-color: #F8F9FA;
`;

const ButtonWrapper = styled.div`
display: flex;
flex-direction: column;
gap:10px;
margin-top: auto;
margin-bottom: 20px; 
`;
