import React from 'react';
import styled from 'styled-components';

interface Props {
  repositoryLink: string;
  repositoryName: string;
  repositoryStars: number;
}

const RepositoryWrapper = styled.div`
  box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  width: 327px;
  height: 48px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 16px;
  background: #ffffff;
  transition: 0.3s;

  &:hover {
    transform: translateY(-2px);
  }
`;

const RespositoryLink = styled.a`
  font-size: 14px;
  letter-spacing: 0.4px;
  color: #2f80ed;
  text-decoration: none;
  height: 100%;
  width: 100%;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const RepositoryComponent: React.FC<Props> = props => {
  return (
    <RepositoryWrapper>
      <RespositoryLink href={props.repositoryLink} target='_blank' data-testid='link'>
        <div>{props.repositoryName}</div> <div>&#9733;{props.repositoryStars}</div>
      </RespositoryLink>
    </RepositoryWrapper>
  );
};
