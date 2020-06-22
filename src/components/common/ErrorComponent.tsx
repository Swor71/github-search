import React from 'react';
import styled from 'styled-components';

const StyledErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30%;
`;

const StyledErrorMessage = styled.span`
  font-size: 20px;
  margin-bottom: 20px;
`;

interface Props {
  error: Error;
}

export const ErrorComponent: React.FC<Props> = props => {
  return (
    <StyledErrorWrapper>
      <StyledErrorMessage>Oops.. something went wrong.. :(</StyledErrorMessage>
      <StyledErrorMessage>{props.error.message}</StyledErrorMessage>
    </StyledErrorWrapper>
  );
};
