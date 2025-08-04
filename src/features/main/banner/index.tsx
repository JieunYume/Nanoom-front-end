import Container from '@components/container';
import bannerBackground from '@assets/banner-background.webp';
import { useTheme } from '@emotion/react';
import { Paragraph } from '@components/text';
import { PrimarySpan } from '@components/span';
import Button from '@components/button';
import { rootWidth } from '@styles/length';
import { useContext, useState } from 'react';
import { MemberInfoContext } from '@providers/MemberInfoProvider';
import LoginModal from '@features/modal/login/LoginModal';
import StudyCreationModal
  from '@features/modal/studyCreation/StudyCreationModal';

function Banner() {
  return (
    <Container
      height="200px"
      cssOverride={{
        backgroundImage: `url("${bannerBackground}")`,
        backgroundSize: 'cover',
        position: 'relative',
        backgroundPosition: 'center right',
        backgroundAttachment: 'fixed',
      }}
    >
      <Container cssOverride={{
        position: 'absolute',
        background: 'rgba(0,0,0,0.6)',
        zIndex: 3,
        height: '200px',
      }}
      >
        <Container
          justify="flex-start"
          height="200px"
          cssOverride={{
            maxWidth: rootWidth,
            position: 'absolute',
          }}
        >
          <LeftSection />
        </Container>
      </Container>
    </Container>
  );
}

function LeftSection() {
  const theme = useTheme();
  const { isLoggedIn } = useContext(MemberInfoContext);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isCreationModalOpen, setIsCreationModalOpen] = useState(false);
  const handleBannerButtonClick = () => {
    if (isLoggedIn) {
      setIsCreationModalOpen(true);
      return;
    }
    setIsLoginModalOpen(true);
  };
  return (
    <>
      <Container padding="0 0 0 200px" align="flex-start" direction="column">
        <h1 css={{ fontSize: '30px', fontWeight: 'bold', color: theme.colors.absolute.white }}>
          <PrimarySpan>NANOOM</PrimarySpan>
        </h1>
        <Paragraph variant="medium" color={theme.colors.absolute.white}>
          <PrimarySpan>NN</PrimarySpan>
          으로 NN해봐요
        </Paragraph>
        <Button css={{ marginTop: '16px' }} variant="primary" onClick={handleBannerButtonClick}>5초만에 시작하기</Button>
      </Container>
      {isLoginModalOpen && (
      <LoginModal
        onClose={() => setIsLoginModalOpen(false)}
        open={isLoginModalOpen}
      />
      )}
      {isCreationModalOpen && (
      <StudyCreationModal
        onClose={() => setIsCreationModalOpen(false)}
        open={isCreationModalOpen}
      />
      )}
    </>
  );
}

export default Banner;
