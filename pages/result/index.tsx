import React from 'react';
import styled from '@emotion/styled';
import Recommend from '@src/components/result/Recommend/Recommend';
import Modal from '@src/components/common/Modal/Modal';
import { modalState } from '@src/state/modal';
import { useRecoilValue } from 'recoil';

const Result = () => {
  const typeOfModal = useRecoilValue(modalState);

  const isModalOpen = typeOfModal.length > 0;

  return (
    <StResult isReviewOpen={typeOfModal === 'review'}>
      <Recommend />
      {isModalOpen && <Modal />}
    </StResult>
  );
};

const StResult = styled.div<{ isReviewOpen: boolean }>`
  position: relative;
  width: 100%;
  min-height: 100vh;
  height: ${({ isReviewOpen }) => (isReviewOpen ? '100vh' : null)};
  overflow: ${({ isReviewOpen }) => (isReviewOpen ? 'hidden' : null)};
`;

export default Result;
