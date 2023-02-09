import React from 'react';
import styled from '@emotion/styled';
import Recommend from '@src/components/result/Recommend/Recommend';
import Modal from '@src/components/common/Modal/Modal';
import { modalState } from '@src/state/modal';
import { useRecoilValue } from 'recoil';
import SEO from '@src/components/common/SEO';

const Result = () => {
  const typeOfModal = useRecoilValue(modalState);

  const isModalOpen = typeOfModal.length > 0;

  return (
    <>
      <SEO title="결과" />
      <StResult isModalOpen={isModalOpen}>
        <Recommend />
        {isModalOpen && <Modal />}
      </StResult>
    </>
  );
};

const StResult = styled.div<{ isModalOpen: boolean }>`
  position: relative;
  width: 100%;
  min-height: 100vh;
  height: ${({ isModalOpen }) => (isModalOpen ? '100vh' : null)};
  overflow: ${({ isModalOpen }) => (isModalOpen ? 'hidden' : null)};
`;

export default Result;
