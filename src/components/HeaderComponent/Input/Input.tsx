import React, { useState } from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  width: 246px;
  height: 36px;
  border-radius: 8px;
  background: #e5e5e5;
  border: none;
  padding-left: 32px;
`;

export const Input: React.FC = () => {
  const [userName, setUserName] = useState<string>('');

  const handleInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(target.value);
  };

  return <StyledInput onChange={handleInputChange} placeholder='Search for users' />;
};
