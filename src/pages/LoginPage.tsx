import Page from '@components/template/Page';
import LoginSection from '@features/auth/LoginSection';

function LoginPage() {
  return (
    <Page hideHeader>
      <LoginSection />
    </Page>
  );
}

export default LoginPage;
