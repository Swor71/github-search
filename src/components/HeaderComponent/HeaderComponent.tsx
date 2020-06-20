import React, { useState } from 'react';
import styled from 'styled-components';
import { SearchInput } from './SearchInput/SearchInput';
import { SearchButton } from './SearchButton/SearchButton';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 84px;
  width: 100%;
  box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.1);
`;

export const HeaderComponent: React.FC = () => {
  const [userName, setUserName] = useState<string>('');

  const handleInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(target.value);
  };

  return (
    <StyledHeader>
      <SearchInput onHandleInputChange={handleInputChange} />
      <SearchButton />
    </StyledHeader>
  );
};
