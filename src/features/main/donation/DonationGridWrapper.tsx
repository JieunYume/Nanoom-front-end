// src/features/main/donation/DonationGridWrapper.tsx

import { useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { queryKeys } from '@constants/queryKeys';
import DonationGrid from './DonationGrid';
import DonationItem from './DonationItem';
import DonationSkeleton from './DonationItemSkeleton';
// import { searchDonations } from '@/api/donation'; // ← 나눔 API
import type {
  DonationFilter,
  DonationItem as DonationItemType,
} from '@/types/donation';

interface DonationPage {
  donation_list: DonationItemType[];
  has_next_page: boolean;
  current_page: number;
}

interface DonationGridWrapperProps {
  donationFilter: DonationFilter;
  searchKeyword: string;
}

function DonationGridWrapper({
  donationFilter,
  searchKeyword,
}: DonationGridWrapperProps) {
  // const fetchPage = async ({ pageParam = 0 }) => {
  //   return searchDonations({
  //     page: pageParam,
  //     size: 12,
  //     category: donationFilter === 'all' ? undefined : donationFilter,
  //     keyword: searchKeyword || undefined,
  //   });
  // };

  const fetchPage = async ({ pageParam = 0 }): Promise<DonationPage> => {
    // 🔧 임시로 하드코딩된 mock 데이터
    const mockData: DonationPage = {
      donation_list: Array.from({ length: 12 }).map((_, i) => ({
        id: pageParam * 12 + i,
        title: `테스트 나눔 ${pageParam * 12 + i + 1}`,
        image_url: 'https://mblogthumb-phinf.pstatic.net/MjAyNDAyMTFfNDkg/MDAxNzA3NjQwNjU4NjU4.8jqo5WY0NFcy-Wg5NFQS1fVNH-tb1UQ-kKuOGXt26I4g.snxXp9aSJ7aeM7VZWpi87-UC--gi4l4CQZirqpivPMQg.JPEG.imnupchi/KakaoTalk_20240209_164811559_13.jpg?type=w800',
        location: '서울시 강남구',
        created_at: '2025-07-31',
        like_count: Math.floor(Math.random() * 100),
        thumb_count: Math.floor(Math.random() * 50),
      })),
      has_next_page: pageParam < 2, // 2 페이지까지만 있는 것처럼
      current_page: pageParam,
    };

    // 비동기 흐름 유지
    return new Promise((resolve) => {
      setTimeout(() => resolve(mockData), 300); // 300ms 지연 후 반환
    });
  };

  const { ref, inView } = useInView({ threshold: 1 });

  const {
    data, isFetchingNextPage, fetchNextPage, refetch,
  } = useSuspenseInfiniteQuery({
    initialPageParam: 0,
    queryKey: [
      queryKeys.MAIN_SEARCH_DONATIONS,
      donationFilter,
      searchKeyword,
    ],
    queryFn: fetchPage,
    getNextPageParam: (lastPage) => (
      lastPage.has_next_page
        ? lastPage.current_page + 1
        : undefined
    ),
  });

  useEffect(() => {
    refetch();
  }, [donationFilter, searchKeyword, refetch]);

  useEffect(() => {
    if (inView) fetchNextPage();
  }, [inView, fetchNextPage]);

  return (
    <>
      <DonationGrid>
        {data.pages.map((page) => (
          <DonationItemContainer
            key={`donation-page-${page.current_page}`}
            items={page.donation_list}
          />
        ))}
        {isFetchingNextPage
          && [...Array(6)].map((_, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <DonationSkeleton key={`skeleton-${i}`} />
          ))}
      </DonationGrid>
      <div ref={ref} css={{ height: '30px' }} />
    </>
  );
}

interface DonationItemContainerProps {
  items: DonationItemType[];
}

function DonationItemContainer({ items }: DonationItemContainerProps) {
  return (
    <>
      {items.map((item) => (
        <DonationItem key={`donation-${item.id}`} item={item} />
      ))}
    </>
  );
}

export default DonationGridWrapper;
