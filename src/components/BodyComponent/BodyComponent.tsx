import React from 'react';
import styled from 'styled-components';
import { UserDetails } from './UserDetails/UserDetails';
import { UserRepositoryList } from './UserRepositoryList/UserRepositoryList';

const BodyComponentWrapper = styled.div`
  padding: 24px;
`;

export const BodyComponent: React.FC = () => {
  return (
    <BodyComponentWrapper>
      <UserDetails />
      <UserRepositoryList />
    </BodyComponentWrapper>
  );
};
