'use client';
import styled from '@emotion/styled';

import Button from '@/shared/components/buttons/button';
export default function GoalWeight() {
  return (
    <>
      <Header>
        <div>목표 체중을 </div>
        <div>입력해 주세요</div>
      </Header>
      <InputWrapper>
        <div>
          <Input />
          kg
        </div>
      </InputWrapper>

      <ButtonWrapper>
        <Button $width={100} $height={20} $fontSize={12} $variant='mint'>
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
