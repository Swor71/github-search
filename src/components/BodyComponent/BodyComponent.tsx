import React from 'react';
import styled from 'styled-components';
import { UserData } from '../../types/types';
import { UserDetails } from './UserDetails/UserDetails';

interface Props {
  userData: UserData;
}

const BodyComponentWrapper = styled.div`
  padding: 24px;
`;

const Repos = styled.div``;

export const BodyComponent: React.FC<Props> = props => {
  return (
    <BodyComponentWrapper>
      <UserDetails userData={props.userData} />
      <Repos>REPOS</Repos>
    </BodyComponentWrapper>
  );
};
