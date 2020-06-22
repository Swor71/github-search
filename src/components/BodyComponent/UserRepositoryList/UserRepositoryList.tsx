import React from 'react';
import styled from 'styled-components';
import { RepositoryComponent } from './RepositoryComponent/Repository';
import { Repository } from '../../../types/types';

interface Props {
  repositories?: Repository[];
}

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

export const UserRepositoryList: React.FC<Props> = props => {
  return (
    <RepositoryList>
      <RepositoryListHeader>Top repositories</RepositoryListHeader>
      {props.repositories?.map(repository => (
        <RepositoryComponent
          repositoryLink={repository.html_url}
          repositoryName={repository.name}
          key={repository.id}
        />
      ))}
    </RepositoryList>
  );
};
