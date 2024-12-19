'use client';
import styled from '@emotion/styled';

import Button from '@/shared/components/buttons/button';
export default function Nickname() {
  return (
    <>
      <Header>
        <div>회원님의 </div>
        <div>닉네임을 알려주세요</div>
      </Header>
      <Input />

      <ButtonWrapper>
        <Button $width={100} $height={20} $fontSize={12} $variant='mint'>
          등록하기
        </Button>
        <Button $width={100} $height={20} $fontSize={12} $variant='mint'>
          건너뛰기
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

const Input = styled.input`
  margin-top: 10px;
  width:100%;
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
