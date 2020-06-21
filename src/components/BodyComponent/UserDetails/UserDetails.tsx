import React from 'react';
import styled from 'styled-components';
import { UserData } from '../../../types/types';

interface Props {
  userData: UserData;
}

const UserDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledUserName = styled.h4`
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

export const UserDetails: React.FC<Props> = props => {
  const breakUserName = () => {
    const nameArray = props.userData.name.split(' ');

    return nameArray.map(name => <div key={name}>{name}</div>);
  };

  return (
    <UserDetailsWrapper>
      <AvatarAndNameWrapper>
        <StyledUserAvatar src={props.userData.avatar_url} alt='user' />
        <StyledUserName>{breakUserName()}</StyledUserName>
      </AvatarAndNameWrapper>
      <StyledUserDescription>{props.userData.bio}</StyledUserDescription>
    </UserDetailsWrapper>
  );
};
