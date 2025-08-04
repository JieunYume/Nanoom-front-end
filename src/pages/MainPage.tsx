import Page from '@components/template/Page';
import Banner from '@features/main/banner';
import Spacing from '@components/spacing';
import RankingSection from '@features/main/ranking/RankingSection';
import DonationListSection from '@features/main/donation/DonationListSection';

function MainPage() {
  return (
    <Page>
      <Banner />
      <RankingSection />
      <DonationListSection />
      <Spacing height={50} />
    </Page>
  );
}

export default MainPage;
