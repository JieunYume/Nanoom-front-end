import { Dispatch, SetStateAction, useState } from 'react';
import Container from '@components/container';
import Input from '@components/input';
import Select from '@components/select';
import useDebounce from '@hooks/useDebounce';
import type { DonationFilter } from '@/types/donation';

interface DonationFilterSectionProps {
  donationFilter: DonationFilter;
  setDonationFilter: Dispatch<SetStateAction<DonationFilter>>;
  setSearchKeyword: Dispatch<SetStateAction<string>>;
}

function DonationFilterSection({
  donationFilter,
  setDonationFilter,
  setSearchKeyword,
}: DonationFilterSectionProps) {
  const [inputValue, setInputValue] = useState('');

  useDebounce({
    func: () => setSearchKeyword(inputValue),
    delay: 500,
    deps: [inputValue, setSearchKeyword],
  });

  return (
    <Container gap="20px" justify="flex-end">
      <Select
        value={donationFilter}
        onChange={(e) => setDonationFilter(e.target.value as DonationFilter)}
        css={{ height: '35px', display: 'block' }}
      >
        <option value="all">전체</option>
        <option value="open">의류</option>
        <option value="closed">도서</option>
        <option value="closed">기타</option>
      </Select>
      <Input
        type="text"
        placeholder="나눔 물품을 검색해보세요!"
        css={{ fontSize: '12px', width: '200px' }}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </Container>
  );
}

export default DonationFilterSection;
