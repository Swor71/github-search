import React from 'react';
import styled from 'styled-components';
import { UserData } from '../../types/types';

interface Props {
  userData: UserData;
}

const UserDescription = styled.div``;
const Repos = styled.div``;

export const BodyComponent: React.FC<Props> = props => {
  return (
    <div>
      <UserDescription>{props.userData.bio}</UserDescription>
      <Repos>REPOS</Repos>
    </div>
  );
};
