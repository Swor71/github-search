import React, { useContext } from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';
import { StoreContext } from '../../store/store';

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

export const ErrorComponent: React.FC = observer(() => {
  const store = useContext(StoreContext);

  return (
    <StyledErrorWrapper>
      <StyledErrorMessage>Oops.. something went wrong.. :(</StyledErrorMessage>
      <StyledErrorMessage>{store.error?.message}</StyledErrorMessage>
    </StyledErrorWrapper>
  );
});
