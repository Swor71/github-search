import React, { useState } from 'react';
import styled from 'styled-components';
import { HeaderComponent } from './HeaderComponent/HeaderComponent';
import { BodyComponent } from './BodyComponent/BodyComponent';
import { UserData } from '../types/types';

const StyledAppComponent = styled.div`
  max-width: 375px;
  max-height: 812px;
  height: 100%;
  width: 100%;
  background: #fbfcfd;
`;

export const AppComponent: React.FC = () => {
  const [userData, setUserData] = useState<UserData>();

  const handleSetUserData = (data: UserData) => {
    setUserData(data);
  };

  return (
    <StyledAppComponent>
      <HeaderComponent onHandleSetUserData={handleSetUserData} />
      {userData && <BodyComponent userData={userData} />}
    </StyledAppComponent>
  );
};
