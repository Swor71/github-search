import React, { useState } from 'react';
import styled from 'styled-components';
import { SearchInput } from './SearchInput/SearchInput';
import { SearchButton } from './SearchButton/SearchButton';
import { GitHubApi } from '../../api/githubApi';
import { User, Repository } from '../../types/types';

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
  onHandleSetUserData(data: User): void;
  onHandleSetUserRepos(repos: Repository[]): void;
  onHandleError(error: Error | undefined): void;
}

export const HeaderComponent: React.FC<Props> = props => {
  const [userName, setUserName] = useState<string>('');

  const handleInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(target.value);
  };

  const handleSearch = async (event: React.SyntheticEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (userName.trim() === '') {
      return;
    }

    props.onHandleError(undefined);

    const data = await api.fetchUserData(userName.trim()).catch(error => props.onHandleError(error));
    const repos = await api.fetchUserRepositories(userName.trim()).catch(error => props.onHandleError(error));

    if (data && repos) {
      props.onHandleSetUserData(data);
      props.onHandleSetUserRepos(repos.items);
    }
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
