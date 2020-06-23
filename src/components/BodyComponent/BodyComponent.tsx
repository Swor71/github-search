import React from 'react';
import styled from 'styled-components';
import { UserData, Repository } from '../../types/types';
import { UserDetails } from './UserDetails/UserDetails';
import { UserRepositoryList } from './UserRepositoryList/UserRepositoryList';

interface Props {
  userData: UserData;
  userRepos: Repository[];
}

const BodyComponentWrapper = styled.div`
  padding: 24px;
`;

export const BodyComponent: React.FC<Props> = props => {
  return (
    <BodyComponentWrapper>
      <UserDetails userData={props.userData} />
      <UserRepositoryList repositories={props.userRepos} />
    </BodyComponentWrapper>
  );
};
