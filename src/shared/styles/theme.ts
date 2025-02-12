const colors = {
  white: '#ffffff',
  black: '#000000',
  grey_1: '#f0f0f0',
  grey_2: '#eaebeb',
  grey_3: '#c1c3c2',
  grey_4: '#838685',
  grey_5: '#313634',
  grey_6: '#DEE2E6',
  mint_1: '#eef8f8',
  mint_2: '#c6e6e8',
  mint_3: '#8bd2d7',
  mint_4: '#496e79',
  mint_5: '#E1EAFF',
  mint_gradient: 'linear-gradient(270deg, #EEF8F8 0%, #C6E6E8 100%)',
  pink_1: '#fcf4f7',
  pink_2: '#f6d9e3',
  pink_3: '#f7b6cc',
  pink_gradient: 'linear-gradient(270deg, #FCF4F7 0%, #F6D9E3 100%)',
  yellow_1: '#fef6e4',
  yellow_2: '#f9cb67',
  yellow_gradient: 'linear-gradient(270deg, #FEF6E4 0%, #FDE1A5 100%)',
  warning: '#fa6b6b',
  blue: '#87A7F8',
  blue_2: '#4A6DBF',
  orange: '#FFE8B5',
};

const fontFamily = {
  heavy: 'NanumSquareNeo-Heavy, sans-serif',
  extraBold: 'NanumSquareNeo-ExtraBold, sans-serif',
  bold: 'NanumSquareNeo-Bold, sans-serif',
  regular: 'NanumSquareNeo-Regular, sans-serif',
};

const fontSize = {
  title: '42px',
  titleMobile: '32px',
  subTitle: '32px',
  subTitleMobile: '24px',
  text: '18px',
  textMobile: '14px',
};

const fontWeight = {
  title: 700,
  subTitle: 700,
  text: 500,
};

const lineHeight = {
  title: '58px',
  titleMobile: '40px',
  subTitle: '44px',
  subTitleMobile: '32px',
  text: '24px',
  textMobile: '18px',
};

const fontStyle = {
  title: {
    fontSize: fontSize.title,
    fontFamily: fontFamily.heavy,
    fontWeight: fontWeight.title,
    lineHeight: lineHeight.title,
  },
  titleMobile: {
    fontSize: fontSize.titleMobile,
    fontFamily: fontFamily.heavy,
    fontWeight: fontWeight.title,
    lineHeight: lineHeight.titleMobile,
  },
  subTitle: {
    fontSize: fontSize.subTitle,
    fontFamily: fontFamily.extraBold,
    fontWeight: fontWeight.subTitle,
    lineHeight: lineHeight.subTitle,
  },
  subTitleMobile: {
    fontSize: fontSize.subTitleMobile,
    fontFamily: fontFamily.extraBold,
    fontWeight: fontWeight.subTitle,
    lineHeight: lineHeight.subTitleMobile,
  },
  text: {
    fontSize: fontSize.text,
    fontFamily: fontFamily.bold,
    fontWeight: fontWeight.text,
    lineHeight: lineHeight.text,
  },
  textMobile: {
    fontSize: fontSize.textMobile,
    fontFamily: fontFamily.bold,
    fontWeight: fontWeight.text,
    lineHeight: lineHeight.textMobile,
  },
};

const zIndex = {
  belowBackground: -10,
  belowDefault: -1,
  default: 0,
  aboveDefault: 1,
  belowFixed: 99,
  fixed: 100,
  aboveFixed: 101,
  backdrop: 900,
  modal: 999,
  toast: 2000,
  header: 800,
  banner: 700,
  footer: 45,
  above: (n: number) => n + 1,
  below: (n: number) => n - 1,
} as const;

const size = {
  mobileHeaderHeight: 64,
  headerHeight: 100,
  footerHeight: 100,
  topSectionHeight: 400,
  mainSectionMargin: 148,
  mobileMainSectionMargin: 56,
  mobileFooterHeight: 630,
};

const deviceSizes = {
  small: 320,
};

const device = {
  small: `screen and (max-width: ${deviceSizes.small}px)`,
};

const calculatePcVw = (width: number) => {
  return `${(width / window.innerWidth) * 100}vw`;
};

const calculateMoVw = (width: number) => {
  return `${(width / 390) * 100}vw`;
};

const theme = {
  colors,
  device,
  deviceSizes,
  fontSize,
  fontFamily,
  lineHeight,
  fontStyle,
  zIndex,
  size,
  calculatePcVw,
  calculateMoVw,
};

export default theme;

export type Theme = typeof theme;
