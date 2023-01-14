import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import 별로예요 from 'public/assets/icons/별로예요.png';
import 좋아요 from 'public/assets/icons/좋아요.png';
import 최고예요 from 'public/assets/icons/최고예요.png';
import 글쎄요 from 'public/assets/icons/글쎄요.png';
import { useResetRecoilState } from 'recoil';
import { evaluationToastState } from '@src/state/EvaluationToast';
import { keyframes } from '@emotion/react';

const EvaluationToast = () => {
  const [touched, setTouched] = useState<string>('');
  const [evaluation, setEvaluation] = useState<string>('');
  const [isMounting, setIsMounting] = useState<boolean>(true);
  const closeToast = useResetRecoilState(evaluationToastState);

  const evaluate = (e: React.MouseEvent<HTMLImageElement>) => {
    e.stopPropagation();
    const { alt } = e.target as HTMLImageElement;
    setEvaluation(alt);
  };

  const touchStartIcon = (e: React.TouchEvent<HTMLImageElement>) => {
    e.stopPropagation();
    const { alt } = e.target as HTMLImageElement;
    setTouched(alt);
  };

  const touchEndIcon = (e: React.TouchEvent<HTMLImageElement>) => {
    e.stopPropagation();
    const { alt } = e.target as HTMLImageElement;
    setTouched('');
    setEvaluation(alt);
  };

  useEffect(() => {
    if (evaluation.length !== 0) {
      setTimeout(() => setIsMounting(false), 2000);
      setTimeout(closeToast, 2500);
    }
  }, [evaluation]);

  return (
    <StToastWrap isMounting={isMounting}>
      <StToast>
        {evaluation.length === 0 ? (
          <>
            <StHeader>지금 보고 계신 선물에 대해 평가해주세요.</StHeader>
            <StBody>
              <StIconWrap touched={touched === '별로예요'}>
                <Image
                  src={별로예요}
                  alt="별로예요"
                  height={42}
                  width={42}
                  onTouchStart={touchStartIcon}
                  onTouchEnd={touchEndIcon}
                  onClick={evaluate}
                  priority={true}
                />
              </StIconWrap>
              <StIconWrap touched={touched === '글쎄요'}>
                <Image
                  src={글쎄요}
                  alt="글쎄요"
                  height={47}
                  width={42}
                  onTouchStart={touchStartIcon}
                  onTouchEnd={touchEndIcon}
                  onClick={evaluate}
                  priority={true}
                />
              </StIconWrap>
              <StIconWrap touched={touched === '좋아요'}>
                <Image
                  src={좋아요}
                  alt="좋아요"
                  height={42}
                  width={42}
                  onTouchStart={touchStartIcon}
                  onTouchEnd={touchEndIcon}
                  onClick={evaluate}
                  priority={true}
                />
              </StIconWrap>
              <StIconWrap touched={touched === '최고예요'}>
                <Image
                  src={최고예요}
                  alt="최고예요"
                  height={42}
                  width={42}
                  onTouchStart={touchStartIcon}
                  onTouchEnd={touchEndIcon}
                  onClick={evaluate}
                  priority={true}
                />
              </StIconWrap>
            </StBody>
          </>
        ) : (
          <StEvalutationComplete>
            <StHeader>평가해주셔서 감사합니다. </StHeader>
            <StHeader>더 많은 사람들에게 도움이 되었어요!</StHeader>
          </StEvalutationComplete>
        )}
      </StToast>
    </StToastWrap>
  );
};

const mountAnimation = keyframes`
  0% {
    transform: translateY(200px);
  }
  80% {
    transform: translateY(-15px);
  }
  100% {
    transform: translateY(0);
  }
`;

const unMountAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  80%{
    transform: translateY(200px);
  }
  100% {
    transform: translateY(200px);
  }
`;

const StToastWrap = styled.div<{ isMounting: boolean }>`
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 60px;
  width: 100%;
  height: 120px;
  animation: ${({ isMounting }) => (isMounting ? mountAnimation : unMountAnimation)} 0.5s ease-in-out;
`;

const StToast = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  height: 120px;
  padding: 25px 0;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.mainBlue};
`;

const StHeader = styled.p`
  font-family: '에스코어드림Regular';
  font-size: 16px;
  color: white;
`;

const StBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 15px;
  width: 213px;
`;

const StIconWrap = styled.div<{ touched: boolean }>`
  scale: ${({ touched }) => (touched ? 1.2 : null)};
  transition: scale 0.3s;
  &:hover {
    scale: 1.2;
  }
`;

const StEvalutationComplete = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export default EvaluationToast;
