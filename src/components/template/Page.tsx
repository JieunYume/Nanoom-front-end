import Header from '@components/header';
import { ReactNode } from 'react';
import Container from '@components/container';
import { useTheme } from '@emotion/react';
import BottomNavBar from '@components/navigation/BottomNavBar';

interface PageProps {
  hideHeader?: boolean;
  children?: ReactNode;
}
function Page({ hideHeader, children }: PageProps) {
  const theme = useTheme();
  return (
    <div css={{ backgroundColor: theme.colors.background.main}}>
      { !hideHeader && (
        <Header />
      )}
      <Container direction="column" justify="flex-start" fixedMobileWidth>
        {children}
      </Container>
      <BottomNavBar />
    </div>
  );
}

export default Page;
