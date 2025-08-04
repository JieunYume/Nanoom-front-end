// src/features/main/donation/DonationGrid.tsx

import Grid from '@components/grid';
import { ReactNode } from 'react';

interface DonationGridProps {
  children?: ReactNode;
}

function DonationGrid({ children }: DonationGridProps) {
  return (
    <Grid
      columns={2}
      gap={19}
    >
      {children}
    </Grid>
  );
}

export default DonationGrid;
