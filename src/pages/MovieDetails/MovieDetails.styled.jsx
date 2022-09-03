import styled from '@emotion/styled';
import { NavLink, Link } from 'react-router-dom';
import { ReactComponent as IconArrow } from '../../icons/icon-arrow.svg';

export const AdditionalInfo = styled.div`
  margin-top: 12px;
  padding: 12px;
  background-color: #262626;
`;

export const AdditionalInfoDisplay = styled.div`
  padding: 0 12px;
`;

export const InfoLink = styled(NavLink)`
  display: block;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;

  &:hover,
  &:focus {
    color: #40f;
  }

  &.active {
    color: #40f;
  }
`;

export const Arrow = styled(IconArrow)`
  width: 16px;
  height: auto;
  margin-right: 4px;
  fill: currentColor;
`;

export const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  padding: 8px;
  margin-top: 12px;
  margin-left: 12px;
  font-size: 12px;
  font-weight: bold;
  text-decoration: none;
  color: inherit;
  background-color: #262626;
  color: #fff;
  border: none;
  border-radius: 4px;

  &:hover,
  &:focus {
    color: #40f;
  }
`;
