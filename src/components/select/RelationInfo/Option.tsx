import styled from '@emotion/styled';
import React from 'react';

interface IProps {
  option?: string;
  isSelected: boolean;
  onClick: () => void;
}

const Option = ({ option, onClick, isSelected }: IProps) => {
  return (
    <StOption isSelected={isSelected} onClick={onClick}>
      {option}
    </StOption>
  );
};

const StOption = styled.button<{ isSelected: boolean }>`
  margin: 5px;
  padding: 9px 15px;
  padding-top: 11px;
  color: ${({ isSelected }) => (isSelected ? 'white' : 'black')};
  background: ${({ theme, isSelected }) => (isSelected ? theme.color.mainBlue : 'white')};
  border-radius: 5px;
  border: none;
  font-family: '에스코어드림Bold';
  font-size: 14px;
`;

export default Option;
