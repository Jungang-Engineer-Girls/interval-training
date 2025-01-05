'use client';
import styled from '@emotion/styled';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: string;
  iconSize?: number;
  children?: React.ReactNode;
}

export default function TrainingHeader({ icon, iconSize, children }: Props) {
  return (
    <Header>
      {icon && (
        <IconWrapper $iconSize={iconSize}>
          <img src={icon} alt='prev' />
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
const IconWrapper = styled.div<{ $iconSize?: number }>`
  position: absolute;
  left: 16px; 
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ $iconSize }) => `${$iconSize}px`};
  height: ${({ $iconSize }) => `${$iconSize}px`};

  img {
    width: 100%;
    height: 100%;
  }
`;

const Title = styled.span`
  font-size: 18px; 
  font-weight: bold;
  text-align: center; 
`;
