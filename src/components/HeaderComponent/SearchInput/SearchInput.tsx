/* eslint-disable global-require */
import React, { useState } from 'react';
import styled from 'styled-components';

import searchIcon from '../../../assets/icons/search-icon.png';

const StyledInputWrapper = styled.div`
  position: relative;

  &::before {
    content: url(${searchIcon});
    position: absolute;
    left: 8px;
    top: 10px;
  }
`;

const StyledInput = styled.input`
  width: 246px;
  height: 36px;
  border-radius: 8px;
  background: #e5e5e5;
  border: none;
  padding-left: 32px;

  &:focus {
    outline: none;
  }
`;

export const SearchInput: React.FC = () => {
  const [userName, setUserName] = useState<string>('');

  const handleInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(target.value);
  };

  return (
    <StyledInputWrapper>
      <StyledInput onChange={handleInputChange} placeholder='Search for users' />
    </StyledInputWrapper>
  );
};
