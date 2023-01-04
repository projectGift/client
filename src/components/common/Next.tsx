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
  background-color: ${({ nextValid }) => (nextValid ? '#456F87' : '#f0f0f0')};
  color: ${({ nextValid }) => (nextValid ? 'white' : 'black')};
  font-weight: 400;
  font-size: 16px;
  border-radius: 50px;
  border: none;
`;

export default Next;
