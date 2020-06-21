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

interface Props {
  onHandleSearch(): void;
}

export const SearchButton: React.FC<Props> = props => {
  return (
    <StyledSearchButton type='button' onClick={props.onHandleSearch}>
      Search
    </StyledSearchButton>
  );
};
