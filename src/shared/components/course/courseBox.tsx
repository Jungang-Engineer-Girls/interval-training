'use client';
import styled from '@emotion/styled';

import theme from '@/shared/styles/theme';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  $width: number;
  $height: number;
  $fontSize: number;
  $variant: 'primary' | 'transparent' | 'white' | 'gray' | 'black' | 'mint' | 'pink' | 'red' | 'blue' | 'blue_2';
  icon?: string;
  iconBgColor?: string;
  iconSize?: number;
  children?: React.ReactNode;
}

export default function CourseBox({ $width, $height, $fontSize, $variant, icon, iconBgColor, iconSize = 24, children, ...rest }: Props) {
  return (
    <>
      <Box $width={$width} $height={$height} $fontSize={$fontSize} $variant={$variant} {...rest}>
        <ContentWrapper>
          {icon && (
            <IconWrapper $iconBgColor={iconBgColor} $iconSize={iconSize}>
              <img src={icon} alt='Icon' />
            </IconWrapper>
          )}
          <span>{children}</span>
        </ContentWrapper>
      </Box>
    </>
  );
}

const Box = styled.button<Props>`
  cursor: pointer;
  box-sizing: border-box;
  width: ${({ $width }) => `clamp(fit-content, $width, ${$width});`};
  height: height;
  padding: 12px 24px;
  border-radius:20px;

  font-family: NanumSquareNeo-Bold, sans-serif;
  font-size: ${({ $fontSize }) => `clamp(8px, ${$fontSize}px, ${$fontSize}px)`};
    font-weight: 600;

  border: none;

  ${({ $variant }) => {
    switch ($variant) {
      case 'primary': {
        return `
          background-color: ${theme.colors.grey_5};
          color: ${theme.colors.white};
        `;
      }
      case 'transparent': {
        return `
          background-color: transparent;
          color: ${theme.colors.grey_5};
          border: 2px solid ${theme.colors.grey_5};
        `;
      }
      case 'white': {
        return `
          background-color: white;
          color: ${theme.colors.grey_5};
          border: 1px solid ${theme.colors.grey_5};
        `;
      }
      case 'gray': {
        return `
          background-color: ${theme.colors.grey_2};
          color: ${theme.colors.white};
          border: 1px solid ${theme.colors.grey_2};
        `;
      }
      case 'black': {
        return `
          background-color: ${theme.colors.black};
          color: ${theme.colors.white};
          border: 1px solid ${theme.colors.black};
        `;
      }
      case 'mint': {
        return `
          background-color: ${theme.colors.mint_2};
          color: 'black';
          border: 1px solid ${theme.colors.mint_2};
        `;
      }
      case 'pink': {
        return `
          background-color: ${theme.colors.pink_2};
          color: ${theme.colors.grey_5};
          border: 1px solid ${theme.colors.pink_2};
        `;
      }
      case 'red': {
        return `
          background-color: ${theme.colors.warning};
          color: ${theme.colors.white};
          border: 1px solid ${theme.colors.warning};
        `;
      }
      case 'blue': {
        return `
          background-color: ${theme.colors.blue};
          color: ${theme.colors.white};
          border: 1px solid ${theme.colors.blue};
        `;
      }
      default: {
        return `
        `;
      }
    }
  }}
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center; 
`;

const IconWrapper = styled.span<{ $iconBgColor?: string; $iconSize?: number }>`
  width: ${({ $iconSize }) => `${$iconSize}px`};
  height: ${({ $iconSize }) => `${$iconSize}px`};
  border-radius: 50%; 
  background-color: ${({ $iconBgColor }) => $iconBgColor || 'white'}; 
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 70%; 
    height: 70%;
  }
`;
