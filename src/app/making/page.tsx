'use client';

import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { Global } from '@emotion/react';
import { globalStyles } from '@/shared/styles/global';
import styled from '@emotion/styled';
import TrainingHeader from '@/shared/components/header/trainingHeader';
import prev from '@/shared/assets/icons/prev.svg';
import Button from '@/shared/components/buttons/button';
import NewCourse from '@/shared/components/course/newCourse';

export default function Making() {
  const queryClient = new QueryClient();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Global styles={globalStyles} />
      <TrainingHeader icon={prev.src}>내 코스 만들기</TrainingHeader>
      <Section>
        <Title>코스 이름</Title>
        <Input />
        <Title>코스 루틴</Title>
        <SelectWrapper>
          <SelectGroup>
            <Label>분</Label>
            <CustomSelect>
              <option value='10'>10분</option>
              <option value='15'>15분</option>
              <option value='20'>20분</option>
              <option value='25'>25분</option>
              <option value='30'>30분</option>
            </CustomSelect>
          </SelectGroup>
          <SelectGroup>
            <Label>속도</Label>
            <CustomSelect>
              <option value='5'>5</option>
              <option value='10'>10</option>
              <option value='15'>15</option>
              <option value='20'>20</option>
              <option value='25'>25</option>
            </CustomSelect>
          </SelectGroup>
        </SelectWrapper>
        <NewCourse $height={34} $radius={10} $color='grey_6'>
          +
        </NewCourse>

        <ButtonWrapper>
          <Button $width={100} $height={20} $fontSize={12} $variant='blue'>
            만들기
          </Button>
        </ButtonWrapper>
      </Section>
    </HydrationBoundary>
  );
}

const Section = styled.section`
  box-sizing: border-box; 
  display: flex;
  flex-direction: column; 
  gap:10px;
  height: 100%;
  padding:20px;
`;

const Title = styled.div`
margin-top: 10px;
  font-size: 12px;
  font-weight: 600;
`;

const Input = styled.input`
  width:100%;
  min-height:34px;
  border:2px solid #DEE2E6;
  border-radius: 20px;
  background-color: #F8F9FA;
`;

const SelectWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  gap:10px;
`;

const SelectGroup = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1; 
`;

const Label = styled.label`
  font-size: 8px;
  font-weight: 400;
  margin-bottom: 5px;
  color: #495057;
`;

const CustomSelect = styled.select`
  width: 100%;
  height: 30px;
  padding: 0 12px;
  border: 2px solid #dee2e6;
  border-radius: 2px;
  background-color: #f8f9fa;
  font-size: 14px;
  color: #495057;
  outline: none;

  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 9 16" fill="none"><g transform="rotate(270, 4.5, 8)"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.78584 7.99997L8.67834 13.8925L7.50001 15.0708L1.01834 8.58914C0.862116 8.43286 0.774353 8.22094 0.774353 7.99997C0.774353 7.779 0.862116 7.56708 1.01834 7.4108L7.50001 0.929138L8.67834 2.10747L2.78584 7.99997Z" fill="black"/></g></svg>');
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 12px;
`;

const ButtonWrapper = styled.div`
display: flex;
flex-direction: column;
gap:10px;
margin-top: auto;
margin-bottom: 20px; 
`;
