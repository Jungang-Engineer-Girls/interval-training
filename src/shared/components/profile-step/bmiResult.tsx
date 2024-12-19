'use client';
import styled from '@emotion/styled';

import Button from '@/shared/components/buttons/button';
export default function BmiResult() {
  return (
    <>
      <Header>
        <div>오연님의 BMI 수치를 </div>
        <div>분석한 결과</div>
        <div>
          현재 <Bmi>저체중</Bmi>입니다
        </div>
      </Header>
      <div>체중 그래프</div>

      <ButtonWrapper>
        <Button $width={100} $height={20} $fontSize={12} $variant='mint'>
          알겠어요
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

const Bmi = styled.span`
color: blue;
`;

const ButtonWrapper = styled.div`
display: flex;
flex-direction: column;
gap:10px;
margin-top: auto;
margin-bottom: 20px; 
`;
