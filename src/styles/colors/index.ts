import { Colors } from '@/styles';

const colorTheme: Colors = {
  primary: {
    main: '#5A9C52',
    lighten: '#9DC79C', // 연한 세이지 톤
    darken: '#3D6B36', // 깊이 있는 포레스트 그린
    passive: 'rgba(90, 156, 82, 0.12)', // main의 soft 버전
  },
  accent: {
    main: '#F7D9A4', // 포인트 베이지 (햇살 느낌)
    darken: '#E3BD80', // 눌렀을 때 색상
    lighten: '#FBEED9', // 배경/버튼 hover
    soft: 'rgba(247, 217, 164, 0.15)', // 포인트용 배경에 사용
  },
  text: {
    prominent: '#191B1C',
    moderate: '#71787F',
    subtle: '#B2B6BB',
  },
  background: {
    main: '#F7F9F4',
    lighten: '#FFFFFF',
    darken: '#f6f6f6',
  },
  border: {
    subtle: '#ECEDEE',
    prominent: '#DFE1E3',
  },
  absolute: {
    black: '#191B1C',
    white: '#FFFFFF',
  },
  other: {
    link: '#3C89FF',
    success: '#45C768',
    warn: '#FFBF44',
    error: '#FC4F4F',
  },
  brand: {
    background: '#131415',
    text: '#FFFFFF',
    primary: '#FF7900',
  },
};

export default colorTheme;
