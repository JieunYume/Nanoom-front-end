// src/components/BottomNavBar.tsx

import { css } from '@emotion/react';
import BottomNavItem from 'components/navigation/BottonNavItem';
import HomeIcon from '@assets/icons/home.svg?react';
import CategoryIcon from '@assets/icons/category.svg?react';
import TreeIcon from '@assets/icons/tree.svg?react';
import UserIcon from '@assets/icons/user.svg?react';
import theme from "@styles/theme";

const navBarStyle = css`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 420px;
  left: 50%;
  transform: translateX(-50%);
  height: 80px;
  background-color: ${theme.colors.background.main};
  border-top: 1px solid #eee;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 1000;
`;

function BottomNavBar() {
  return (
    <div css={navBarStyle}>
      <BottomNavItem to="/" label="홈" icon={<HomeIcon />} />
      <BottomNavItem to="/category" label="카테고리" icon={<CategoryIcon />} />
      <BottomNavItem to="/tree" label="나무밭" icon={<TreeIcon />} />
      <BottomNavItem to="/mypage" label="마이페이지" icon={<UserIcon />} />
    </div>
  );
}

export default BottomNavBar;
