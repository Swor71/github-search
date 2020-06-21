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
  margin-top: 16px;
`;

export const UserRepositoryList: React.FC<Props> = props => {
  return (
    <RepositoryList>
      {props.repositories?.map(repository => (
        <RepositoryComponent repositoryLink={repository.svn_url} key={repository.id} />
      ))}
    </RepositoryList>
  );
};
