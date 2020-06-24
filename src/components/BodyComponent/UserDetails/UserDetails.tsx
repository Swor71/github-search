/* eslint-disable camelcase */
import React, { useContext } from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';
import { StoreContext } from '../../../store/store';

const UserDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledUserName = styled.div`
  font-size: 18px;
  font-weight: 500;
  align-self: flex-end;
`;

const StyledUserAvatar = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 12px;
  margin-right: 16px;
`;

const AvatarAndNameWrapper = styled.div`
  display: flex;
  margin-bottom: 16px;
`;

const StyledUserDescription = styled.span`
  font-size: 14px;
  letter-spacing: 0.4px;
  line-height: 19px;
  color: #828282;
`;

export const UserDetails: React.FC = observer(() => {
  const store = useContext(StoreContext);

  const getUserName = () => {
    const nameArray = store.userData?.name?.split(' ');

    if (nameArray) {
      return nameArray.map(userName => (
        <div key={userName} data-testid='user-name'>
          {userName}
        </div>
      ));
    }

    return store.userData?.login;
  };

  return (
    <UserDetailsWrapper>
      <AvatarAndNameWrapper data-testid='avatar-name-wrapper'>
        <StyledUserAvatar src={store.userData?.avatar_url || undefined} alt='user' />
        <StyledUserName>{getUserName()}</StyledUserName>
      </AvatarAndNameWrapper>
      <StyledUserDescription>{store.userData?.bio}</StyledUserDescription>
    </UserDetailsWrapper>
  );
});
