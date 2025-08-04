// src/components/BottomNavItem.tsx

import { css } from '@emotion/react';
import { Link, useLocation } from 'react-router-dom';
import { ReactNode } from 'react';

// 스타일
const navItemStyle = (isActive: boolean) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: ${isActive ? '#5A9C52' : '#999'};
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;

const iconWrapperStyle = () => css`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// 라벨 스타일
const labelStyle = () => css`
  font-size: 11px;
  font-weight: 500;
  padding-top: 6px;
  letter-spacing: -0.2px;
  transition: color 0.3s ease;
`;

interface BottomNavItemProps {
  to: string;
  label: string;
  icon: ReactNode;
}

function BottomNavItem({ to, label, icon }: BottomNavItemProps) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link to={to} css={navItemStyle(isActive)}>
      <div css={iconWrapperStyle}>{icon}</div>
      <span css={labelStyle}>{label}</span>
    </Link>
  );
}

export default BottomNavItem;
