import React, { useState } from 'react';
import styled from 'styled-components';
import { SearchInput } from './SearchInput/SearchInput';
import { SearchButton } from './SearchButton/SearchButton';
import { GitHubAPI } from '../../api/api';
import { UserData } from '../../types/types';

const api = new GitHubAPI();

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 84px;
  width: 100%;
  box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.1);
`;

interface Props {
  onHandleSetUserData(data: UserData): void;
}

export const HeaderComponent: React.FC<Props> = props => {
  const [userName, setUserName] = useState<string>('');

  const handleInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(target.value);
  };

  const handleSearch = async () => {
    const data = await api.fetchUserData(userName);

    props.onHandleSetUserData(data);
  };

  return (
    <StyledHeader>
      <SearchInput onHandleInputChange={handleInputChange} />
      <SearchButton onHandleSearch={handleSearch} />
    </StyledHeader>
  );
};
