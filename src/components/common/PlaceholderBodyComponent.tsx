import React from 'react';
import styled from 'styled-components';

const StyledPlaceholderBodyComponent = styled.div`
  font-size: 24px;
  color: rgba(0, 0, 0, 0.1);
  margin-top: 30%;
  text-align: center;
  padding: 0 20px;
`;

export const PlaceholderBodyComponent: React.FC = () => {
  return <StyledPlaceholderBodyComponent>Look for users and their top starred repos!</StyledPlaceholderBodyComponent>;
};
