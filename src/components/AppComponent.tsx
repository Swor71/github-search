import React, { useState } from 'react';
import styled from 'styled-components';
import { HeaderComponent } from './HeaderComponent/HeaderComponent';
import { BodyComponent } from './BodyComponent/BodyComponent';
import { Repository, User } from '../types/types';
import { ErrorComponent } from './common/ErrorComponent';
import { PlaceholderBodyComponent } from './common/PlaceholderBodyComponent';

const StyledAppComponent = styled.div`
  max-width: 375px;
  max-height: 812px;
  height: 100%;
  width: 100%;
  background: #fbfcfd;
`;

export const AppComponent: React.FC = () => {
  const [userData, setUserData] = useState<User>();
  const [userRepos, setUserRepos] = useState<Repository[]>();
  const [error, setError] = useState<Error>();

  const handleSetUserData = (data: User) => {
    setUserData(data);
  };

  const handleSetUserRepos = (repos: Repository[]) => {
    const threeTopReposWithMostStars = repos?.slice(0, 3);

    setUserRepos(threeTopReposWithMostStars);
  };

  const handleError = (err: Error | undefined) => {
    if (err === undefined) {
      setUserData(undefined);
      setUserRepos(undefined);
    }

    setError(err);
  };

  let content = <PlaceholderBodyComponent />;

  if (userData && userRepos && !error) {
    content = <BodyComponent userData={userData} userRepos={userRepos} />;
  }

  if (error) {
    content = <ErrorComponent error={error} />;
  }

  return (
    <StyledAppComponent>
      <HeaderComponent
        onHandleSetUserData={handleSetUserData}
        onHandleSetUserRepos={handleSetUserRepos}
        onHandleError={handleError}
      />
      {content}
    </StyledAppComponent>
  );
};
