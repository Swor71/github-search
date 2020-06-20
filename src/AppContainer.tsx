import React from 'react';
import styled from 'styled-components';
import { AppComponent } from './components/AppComponent';

const StyledAppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #e5e5e5;
`;

const AppContainer: React.FC = () => (
  <StyledAppContainer>
    <AppComponent />
  </StyledAppContainer>
);

export default AppContainer;
