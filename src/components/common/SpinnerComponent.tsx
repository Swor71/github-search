import React from 'react';
import styled, { keyframes } from 'styled-components';

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border-top: 3px solid rgba(0, 0, 0, 0.4);
  animation: ${spin} infinite ease-in-out 1s;
  margin-top: 30%;
`;

const SpinnerText = styled.div`
  color: rgba(0, 0, 0, 0.4);
  margin-top: 20px;
  font-size: 22px;
  font-style: italic;
`;

export const SpinnerComponent: React.FC = () => {
  return (
    <SpinnerWrapper>
      <Spinner />
      <SpinnerText>Loading...</SpinnerText>
    </SpinnerWrapper>
  );
};
