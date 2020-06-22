import React, { useState } from 'react';
import styled from 'styled-components';
import { HeaderComponent } from './HeaderComponent/HeaderComponent';
import { BodyComponent } from './BodyComponent/BodyComponent';
import { UserData, Repository } from '../types/types';

const StyledAppComponent = styled.div`
  max-width: 375px;
  max-height: 812px;
  height: 100%;
  width: 100%;
  background: #fbfcfd;
`;

export const AppComponent: React.FC = () => {
  const [userData, setUserData] = useState<UserData>();
  const [userRepos, setUserRepos] = useState<Repository[]>();

  const handleSetUserData = (data: UserData) => {
    setUserData(data);
  };

  const handleSetUserRepos = (repos: Repository[]) => {
    const threeTopReposWithMostStars = repos.slice(0, 3);

    setUserRepos(threeTopReposWithMostStars);
  };

  return (
    <StyledAppComponent>
      <HeaderComponent onHandleSetUserData={handleSetUserData} onHandleSetUserRepos={handleSetUserRepos} />
      {userData && userRepos && <BodyComponent userData={userData} userRepos={userRepos} />}
    </StyledAppComponent>
  );
};
