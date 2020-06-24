import React, { useContext } from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';
import { HeaderComponent } from './HeaderComponent/HeaderComponent';
import { BodyComponent } from './BodyComponent/BodyComponent';
import { Repository, User } from '../types/types';
import { ErrorComponent } from './common/ErrorComponent';
import { PlaceholderBodyComponent } from './common/PlaceholderBodyComponent';
import { StoreContext } from '../store/store';

const StyledAppComponent = styled.div`
  max-width: 375px;
  max-height: 812px;
  height: 100%;
  width: 100%;
  background: #fbfcfd;
`;

export const AppComponent: React.FC = observer(() => {
  const store = useContext(StoreContext);

  const handleSetUserData = (data: User) => {
    store.userData = data;
  };

  const handleSetUserRepos = (repos: Repository[]) => {
    const threeTopReposWithMostStars = repos?.slice(0, 3);

    store.userRepositories = threeTopReposWithMostStars;
  };

  const handleError = (err: Error | undefined) => {
    if (err === undefined) {
      store.userData = undefined;
      store.userRepositories = undefined;
    }

    store.error = err;
  };

  let content = <PlaceholderBodyComponent />;

  if (store.userData && store.userRepositories && !store.error) {
    content = <BodyComponent />;
  }

  if (store.error) {
    content = <ErrorComponent error={store.error} />;
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
});
