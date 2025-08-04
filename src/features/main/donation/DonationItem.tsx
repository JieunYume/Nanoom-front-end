import Container from '@components/container';
import { Paragraph } from '@components/text';
import { CSSObject, useTheme } from '@emotion/react';
import { useNavigate } from 'react-router-dom';
import HeartIcon from '@assets/icons/heart.svg?react';
import ThumbIcon from '@assets/icons/thumb.svg?react';
import { DonationItem as DonationItemType } from '@/types/donation';

interface DonationItemProps {
  item: DonationItemType;
}

function DonationItem({ item }: DonationItemProps) {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/donation/${item.id}`);
  };

  const titleStyle: CSSObject = {
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    fontWeight: 'bold',
    fontSize: '16px',
  };

  const contentStyle: CSSObject = {
    color: theme.colors.text.moderate,
    fontSize: '13px',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
  };

  const iconStyle: CSSObject = {
    width: '14px',
    height: '14px',
  };

  return (
    <Container
      direction="column"
      padding="12px"
      gap="8px"
      onClick={handleClick}
      cssOverride={{
        borderRadius: '12px',
        backgroundColor: '#fff',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
        cursor: 'pointer',
      }}
    >
      <img
        src={item.image_url}
        alt={item.title}
        css={{
          width: '100%',
          height: '160px',
          borderRadius: '8px',
          objectFit: 'cover',
        }}
      />

      <Paragraph css={titleStyle}>{item.title}</Paragraph>

      <Paragraph css={contentStyle}>
        {`${item.location} · ${item.created_at}`}
      </Paragraph>

      <Container justify="flex-start" gap="12px">
        <Paragraph css={contentStyle}>
          <ThumbIcon css={iconStyle} stroke={theme.colors.text.subtle} />
          {item.thumb_count}
        </Paragraph>
        <Paragraph css={contentStyle}>
          <HeartIcon css={iconStyle} stroke={theme.colors.text.subtle} />
          {item.like_count}
        </Paragraph>
      </Container>
    </Container>
  );
}

export default DonationItem;
