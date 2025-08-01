import Container from '@components/container';
import { css, useTheme } from '@emotion/react';
import sampleImage from '@assets/sample-image.jpg'; // 임시 이미지

function DonationList() {
  const theme = useTheme();

  return (
    <Container
      cssOverride={{
        padding: '16px',
        maxWidth: '600px',
        margin: '0 auto',
      }}
    >
      <h2 css={{ fontSize: '20px', fontWeight: 600, marginBottom: '12px' }}>장전동</h2>

      <div
        css={css({
          display: 'flex',
          gap: '12px',
          alignItems: 'center',
          borderRadius: '12px',
          backgroundColor: '#fff',
          boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
          padding: '12px',
        })}
      >
        <img
          src={sampleImage}
          alt="레이어드 티셔츠"
          css={{
            width: '80px',
            height: '80px',
            borderRadius: '8px',
            objectFit: 'cover',
          }}
        />
        <div css={{ flex: 1 }}>
          <div css={{ fontWeight: 600, fontSize: '16px' }}>레이어드 티셔츠</div>
          <div css={{
            display: 'flex', alignItems: 'center', fontSize: '14px', color: '#666',
          }}
          >
            <IoIosPin style={{ marginRight: '4px' }} />
            1.5km · 3분 전
          </div>
          <div css={{
            display: 'flex', gap: '8px', marginTop: '4px', color: '#999', fontSize: '14px',
          }}
          >
            <div>
              <FaRegThumbsUp />
              {' '}
              2
            </div>
            <div>
              <FaHeart />
              {' '}
              3
            </div>
          </div>
        </div>
      </div>

      {/* 나눔하기 버튼 (하단 고정 버튼으로 따로 빼도 좋음) */}
      <div css={{ display: 'flex', justifyContent: 'flex-end', marginTop: '24px' }}>
        <button
          css={css({
            backgroundColor: '#47B455',
            color: '#fff',
            padding: '8px 16px',
            borderRadius: '999px',
            fontWeight: 'bold',
            border: 'none',
            cursor: 'pointer',
          })}
        >
          + 나눔하기
        </button>
      </div>
    </Container>
  );
}

export default DonationList;
