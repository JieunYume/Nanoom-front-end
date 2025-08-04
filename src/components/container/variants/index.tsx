import Container, { ContainerProps } from '@components/container';
import { css } from '@emotion/react';

interface DefaultPaddedContainerProps extends ContainerProps {
}

// eslint-disable-next-line import/prefer-default-export
export function DefaultPaddedContainer(
  { children, cssOverride, ...rest }: DefaultPaddedContainerProps,
) {
  const paddedContainerStyle = css`
    box-sizing: border-box;
    flex-direction: column;
    align-items: center;
    padding: 0 20px;
    max-width: 420px;
    width: 100%;
    margin: 0 auto; // 가운데 정렬
  `;

  return (
    <Container cssOverride={css([paddedContainerStyle, cssOverride])} {...rest}>
      {children}
    </Container>
  );
}
