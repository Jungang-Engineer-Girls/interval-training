'use client';

import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { Global } from '@emotion/react';
import { globalStyles } from '@/shared/styles/global';
import styled from '@emotion/styled';
import TrainingHeader from '@/shared/components/header/trainingHeader';
import prev from '@/shared/assets/icons/prev.svg';
import Button from '@/shared/components/buttons/button';
import NewCourse from '@/shared/components/course/newCourse';
import { useState } from 'react';

export default function Making() {
  const queryClient = new QueryClient();

  const [inputCourse, setInputCourse] = useState('');
  const [routines, setRoutines] = useState([{ time: '10', speed: '5' }]);

  const handleInputCourse = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputCourse(e.target.value);
  };

  const handleNewRoutine = () => {
    setRoutines([...routines, { time: '10', speed: '5' }]);
  };
  const handleRoutineChange = (index: number, field: 'time' | 'speed', value: string) => {
    const updatedRoutines = routines.map((routine, i) => (i === index ? { ...routine, [field]: value } : routine));
    setRoutines(updatedRoutines);
  };

  const handleCreateCourse = async () => {
    const courseData = {
      title: inputCourse,
      routines: routines.map((time, speed) => ({ time: Number(time), speed: Number(speed) })),
    };

    try {
      const response = await fetch('/api/course', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(courseData),
      });

      if (!response.ok) {
        throw new Error('error');
      }

      const result = await response.json();
      console.log('result', result);
      alert('코스 생성 성공');
    } catch (error) {
      console.error('error', error);
      alert('코스 생성 실패');
    }
  };

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Global styles={globalStyles} />
      <TrainingHeader icon={prev.src}>내 코스 만들기</TrainingHeader>
      <Section>
        <Title>코스 이름</Title>
        <Input type='text' value={inputCourse} onChange={handleInputCourse} />
        <Title>코스 루틴</Title>
        {routines.map((routine, index) => (
          <SelectWrapper key={index}>
            <SelectGroup>
              <Label>분</Label>
              <CustomSelect value={routine.time} onChange={(e) => handleRoutineChange(index, 'time', e.target.value)}>
                <option value='10'>10분</option>
                <option value='15'>15분</option>
                <option value='20'>20분</option>
                <option value='25'>25분</option>
                <option value='30'>30분</option>
              </CustomSelect>
            </SelectGroup>
            <SelectGroup>
              <Label>속도</Label>
              <CustomSelect value={routine.speed} onChange={(e) => handleRoutineChange(index, 'speed', e.target.value)}>
                <option value='5'>5</option>
                <option value='10'>10</option>
                <option value='15'>15</option>
                <option value='20'>20</option>
                <option value='25'>25</option>
              </CustomSelect>
            </SelectGroup>
          </SelectWrapper>
        ))}
        <NewCourse onClick={handleNewRoutine} $height={34} $radius={10} $color='grey_6'>
          +
        </NewCourse>

        <ButtonWrapper>
          <Button $width={100} $height={20} $fontSize={12} $variant='blue' onClick={handleCreateCourse} disabled={!inputCourse.trim()}>
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
