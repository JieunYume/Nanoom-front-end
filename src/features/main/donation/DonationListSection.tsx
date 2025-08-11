import { DefaultPaddedContainer } from '@components/container/variants';
import { useState } from 'react';
import Container from '@components/container';
import SuspenseErrorBoundary from '@components/boundary/SuspenseErrorBoundary';

import DonationFilterSection from '@features/main/donation/DonationFilterSection';
import DonationGridWrapper from '@features/main/donation/DonationGridWrapper';
import DonationSkeletonGrid from '@features/main/donation/DonationSkeletonGrid';
import type { DonationFilter } from '@/types/donation';
import {css} from "@emotion/react";
import theme from "@styles/theme";

function DonationListSection() {
  const [donationFilter, setDonationFilter] = useState<DonationFilter>('all');
  const [searchKeyword, setSearchKeyword] = useState('');
  // searchKeyword가 ''인 경우 undefined로 보내야 함.

  return (
    <DefaultPaddedContainer cssOverride={css`background-color: ${theme.colors.background.main}; minHeight: '100vh',`}>
      <DonationFilterSection
        donationFilter={donationFilter}
        setDonationFilter={setDonationFilter}
        setSearchKeyword={setSearchKeyword}
      />

      <Container fixedMobileWidth padding="16px 0 0 0" direction="column" gap="19px">
        <SuspenseErrorBoundary suspenseFallback={<DonationSkeletonGrid />}>
          <DonationGridWrapper
            donationFilter={donationFilter}
            searchKeyword={searchKeyword}
          />
        </SuspenseErrorBoundary>
      </Container>
    </DefaultPaddedContainer>
  );
}

export default DonationListSection;
