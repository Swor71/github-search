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
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.1);
    transform: translateY(-1px);
  }
`;

interface Props {
  onHandleSearch(event: React.MouseEvent<HTMLButtonElement>): void;
}

export const SearchButton: React.FC<Props> = props => {
  return (
    <StyledSearchButton type='submit' onClick={props.onHandleSearch}>
      Search
    </StyledSearchButton>
  );
};
