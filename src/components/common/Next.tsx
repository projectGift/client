import React from 'react';
import styled from '@emotion/styled';
import { nextValidState } from '@src/state/nextValid';
import { useRecoilValue } from 'recoil';

interface Props {
  handleClickNext: () => void;
}

const Next = ({ handleClickNext }: Props) => {
  const nextValid = useRecoilValue(nextValidState);
  return (
    <StNext nextValid={nextValid} disabled={!nextValid} onClick={handleClickNext}>
      다음
    </StNext>
  );
};

const StNext = styled.button<{ nextValid: boolean }>`
  padding: 5px 10px;
  width: 80%;
  height: 50px;
  background-color: ${({ theme, nextValid }) => (nextValid ? theme.color.mainBlue : theme.color.lightGray)};
  color: ${({ theme, nextValid }) => (nextValid ? 'white' : theme.color.grayFont)};
  font-family: '에스코어드림Regular';
  font-size: 16px;
  border-radius: 50px;
  border: none;
`;

export default Next;
