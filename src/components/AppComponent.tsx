import React from 'react';
import styled from 'styled-components';

const StyledAppComponent = styled.div`
  max-width: 375px;
  max-height: 812px;
  height: 100%;
  width: 100%;
  background: #fbfcfd;
`;

export const AppComponent: React.FC = () => {
  return <StyledAppComponent />;
};
