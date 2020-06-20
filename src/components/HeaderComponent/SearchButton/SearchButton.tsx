import React from 'react';
import styled from 'styled-components';

const StyledSearchButton = styled.button`
  background: #452cdc;
  border-radius: 8px;
  width: 64px;
  height: 36px;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  border: none;
`;

export const SearchButton: React.FC = () => {
  return <StyledSearchButton type='button'>Search</StyledSearchButton>;
};
