import React, { useState } from 'react';
import styled from 'styled-components';
import { SearchInput } from './SearchInput/SearchInput';
import { SearchButton } from './SearchButton/SearchButton';
import { GitHubApi } from '../../api/githubApi';
import { UserData, Repository } from '../../types/types';

const api = new GitHubApi();

const StyledHeader = styled.header`
  height: 84px;
  width: 100%;
  box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.1);
  background: #ffffff;
`;

const StyledForm = styled.form`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100%;
`;

interface Props {
  onHandleSetUserData(data: UserData): void;
  onHandleSetUserRepos(repos: Repository[]): void;
}

export const HeaderComponent: React.FC<Props> = props => {
  const [userName, setUserName] = useState<string>('');

  const handleInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(target.value);
  };

  const handleSearch = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const data = await api.fetchUserData(userName);
    const repos = await api.fetchUserRepositories(userName);

    props.onHandleSetUserData(data);
    props.onHandleSetUserRepos(repos.items);
  };

  return (
    <StyledHeader>
      <StyledForm>
        <SearchInput onHandleInputChange={handleInputChange} />
        <SearchButton onHandleSearch={handleSearch} />
      </StyledForm>
    </StyledHeader>
  );
};
