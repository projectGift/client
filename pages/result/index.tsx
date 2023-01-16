import React from 'react';
import styled from '@emotion/styled';
import Recommend from '@src/components/result/Recommend/Recommend';
import Modal from '@src/components/common/Modal/Modal';
import EvaluationToast from '@src/components/common/EvaluationToast';
import { modalState } from '@src/state/modal';
import { useRecoilValue } from 'recoil';
import { evaluationToastState } from '@src/state/evaluationToast';

const Result = () => {
  const typeOfModal = useRecoilValue(modalState);
  const isEvaluationToastPop = useRecoilValue(evaluationToastState);
  const isModalOpen = typeOfModal.length > 0;
  return (
    <StResult isIframeOpen={typeOfModal === 'Iframe' || typeOfModal === 'review'}>
      <Recommend />
      {isModalOpen && <Modal />}
      {isEvaluationToastPop && <EvaluationToast />}
    </StResult>
  );
};

//Loading -> Recommend 이런식으로..?

const StResult = styled.div<{ isIframeOpen: boolean }>`
  position: relative;
  width: 100%;
  min-height: 100vh;
  height: ${({ isIframeOpen }) => (isIframeOpen ? '100vh' : null)};
  overflow: ${({ isIframeOpen }) => (isIframeOpen ? 'hidden' : null)};
`;

export default Result;
