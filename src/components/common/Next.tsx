import React from 'react';
import styled from '@emotion/styled';
import { nextValidState } from '@src/state/selected';
import { useRecoilValue } from 'recoil';

interface Props {
  onClick: () => void;
  isLastPage: boolean;
  isOnboarding: boolean;
}

const Next = ({ onClick, isLastPage, isOnboarding }: Props) => {
  const nextValid = useRecoilValue(nextValidState);
  return (
    <>
      {isOnboarding ? (
        <StOnboardingNext onClick={onClick}>다음</StOnboardingNext>
      ) : (
        <StNext nextValid={nextValid} disabled={!nextValid} onClick={onClick}>
          {isLastPage ? '제출' : '다음'}
        </StNext>
      )}
    </>
  );
};

const StNext = styled.button<{ nextValid?: boolean }>`
  padding: 5px 10px;
  width: 80%;
  height: 50px;
  background-color: ${({ theme, nextValid }) => (nextValid ? theme.color.mainBlue : theme.color.lightGray)};
  color: ${({ theme, nextValid }) => (nextValid ? 'white' : theme.color.grayFont)};
  font-family: '에스코어드림Regular';
  font-size: 16px;
  border-radius: 50px;
  border: none;
  transition: all 0.1s;
`;

const StOnboardingNext = styled(StNext)`
  background-color: white;
  color: ${({ theme }) => theme.color.mainBlue};
`;

export default Next;
