/* eslint-disable camelcase */
import React, { useContext } from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';
import { RepositoryComponent } from './RepositoryComponent/Repository';
import { Repository } from '../../../types/types';
import { StoreContext } from '../../../store/store';

const RepositoryList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 32px;
`;

const RepositoryListHeader = styled.header`
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 16px;
  align-self: flex-start;
`;

export const UserRepositoryList: React.FC = observer(() => {
  const store = useContext(StoreContext);

  return (
    <RepositoryList>
      <RepositoryListHeader>Top repositories</RepositoryListHeader>
      {store.userRepositories?.map(({ html_url, name, stargazers_count, id }: Repository) => (
        <RepositoryComponent
          repositoryLink={html_url || ''}
          repositoryName={name || ''}
          repositoryStars={stargazers_count || 0}
          key={id || 0}
        />
      ))}
    </RepositoryList>
  );
});
