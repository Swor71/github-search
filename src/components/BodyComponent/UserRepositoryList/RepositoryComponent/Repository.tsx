import React from 'react';
import styled from 'styled-components';

interface Props {
  repositoryLink: string;
}

const RepositoryWrapper = styled.div`
  box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  width: 327px;
  height: 48px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 16px;
  margin-bottom: 16px;
  background: #ffffff;
`;

const RespositoryLink = styled.a`
  font-size: 14px;
  letter-spacing: 0.4px;
  color: #2f80ed;
  text-decoration: none;
`;

export const RepositoryComponent: React.FC<Props> = props => {
  return (
    <RepositoryWrapper>
      <RespositoryLink href={props.repositoryLink} target='_blank'>
        {props.repositoryLink}
      </RespositoryLink>
    </RepositoryWrapper>
  );
};

export default RepositoryWrapper;
