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
    <StResult isIframeOpen={typeOfModal === 'Iframe'}>
      <Recommend />
      {isModalOpen && <Modal />}
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
