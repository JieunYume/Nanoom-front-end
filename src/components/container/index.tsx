import { HTMLAttributes, ReactNode } from 'react';
import { CSSObject } from '@emotion/react';
import useContainerStyle from '@components/container/useContainerStyle';

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  direction?: 'row' | 'column';
  justify?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
  align?: 'stretch' | 'flex-start' | 'center' | 'flex-end';
  width?: string;
  height?: string;
  gap?: string;
  padding?: string;
  boxSizing?: 'border-box' | 'content-box';
  cssOverride?: CSSObject;
  css?: CSSObject;
  fixedMobileWidth?: boolean; // ✅ 추가
}

function Container({
  cssOverride, css, children, fixedMobileWidth, ...rest
}: ContainerProps) {
  const { containerStyle } = useContainerStyle(rest);
  const fixedStyle: CSSObject = fixedMobileWidth
    ? {
      maxWidth: '420px',
      width: '100%',
      margin: '0 auto',
    }
    : {};

  return (
    <div css={[containerStyle, fixedStyle, cssOverride, css]} {...rest}>
      {children}
    </div>
  );
}

export default Container;
