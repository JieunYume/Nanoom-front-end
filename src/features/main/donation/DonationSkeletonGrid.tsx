// src/features/main/donation/DonationSkeletonGrid.tsx

import DonationGrid from '@features/main/donation/DonationGrid';
import DonationItemSkeleton from '@features/main/donation/DonationItemSkeleton';

function DonationSkeletonGrid() {
  return (
    <DonationGrid>
      {[1, 2, 3, 4, 5, 6, 7, 8].map((value) => (
        <DonationItemSkeleton key={`donation-skeleton-${value}`} />
      ))}
    </DonationGrid>
  );
}

export default DonationSkeletonGrid;
