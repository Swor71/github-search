import React from 'react';
import styled from 'styled-components';
import { User, Repository } from '../../types/types';
import { UserDetails } from './UserDetails/UserDetails';
import { UserRepositoryList } from './UserRepositoryList/UserRepositoryList';

interface Props {
  userData: User;
  userRepos: Repository[];
}

const BodyComponentWrapper = styled.div`
  padding: 24px;
`;

export const BodyComponent: React.FC<Props> = props => {
  const { userData, userRepos } = props;

  return (
    <BodyComponentWrapper>
      <UserDetails userData={userData} />
      <UserRepositoryList repositories={userRepos} />
    </BodyComponentWrapper>
  );
};
