import { css, keyframes } from '@emotion/react';
import Container from '@components/container';

function DonationItemSkeleton() {
  const shimmer = keyframes`
    0% {
      background-position: -200% 0;
    }
    100% {
      background-position: 200% 0;
    }
  `;

  const skeletonStyle = css`
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    animation: ${shimmer} 1.5s infinite;
    border-radius: 8px;
  `;

  return (
    <Container
      direction="column"
      gap="8px"
      cssOverride={{
        width: '100%',
        height: '100%',
        padding: '16px',
        border: '1px solid #eee',
        borderRadius: '10px',
        backgroundColor: '#fff',
      }}
    >
      {/* 이미지 영역 */}
      <div css={[skeletonStyle, { width: '100%', height: '120px' }]} />

      {/* 제목 영역 */}
      <div css={[skeletonStyle, { width: '80%', height: '16px' }]} />

      {/* 위치 + 날짜 */}
      <div css={[skeletonStyle, { width: '60%', height: '12px' }]} />

      {/* 좋아요 + 업 수 */}
      <div css={[skeletonStyle, { width: '40%', height: '12px' }]} />
    </Container>
  );
}

export default DonationItemSkeleton;
