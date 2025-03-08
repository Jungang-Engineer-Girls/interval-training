'use client';
import styled from '@emotion/styled';
import Button from '@/shared/components/buttons/button';
import { useState } from 'react';

type StepProps = {
  onNext: (weight: string) => void;
};

export default function GoalWeight({ onNext }: StepProps) {
  const [goalWeight, setGoalWeight] = useState('');

  const handleGoalWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) setGoalWeight(value);
  };

  return (
    <>
      <Header>
        <div>목표 체중을 </div>
        <div>입력해 주세요</div>
      </Header>
      <InputWrapper>
        <div>
          <Input type='number' value={goalWeight} onChange={handleGoalWeightChange} placeholder='목표 체중' />
          kg
        </div>
      </InputWrapper>

      <ButtonWrapper>
        <Button onClick={() => onNext(goalWeight)} $width={100} $height={20} $fontSize={12} $variant='blue'>
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
