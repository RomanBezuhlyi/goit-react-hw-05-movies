import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Title = styled.h3`
  font-size: 16px;
  font-weight: bold;
  line-height: 1.5;
  text-align: center;
`;

export const MovieLink = styled(Link)`
  display: flex;

  color: inherit;
  text-decoration: none;

  &:hover,
  &:focus {
    color: #40f;
  }
`;
