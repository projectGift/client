import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import CloseIcon from '../../../../public/assets/icons/icon_close.png';
import { useResetRecoilState, useSetRecoilState } from 'recoil';
import { modalState } from '@src/state/modal';
import { evaluationToastState } from '@src/state/evaluationToast';

const IframeModal = () => {
  const closeModal = useResetRecoilState(modalState);
  const setEvaluationToast = useSetRecoilState(evaluationToastState);

  useEffect(() => {
    const timer = setTimeout(() => {
      setEvaluationToast(true);
    }, 4000);
    return () => {
      clearTimeout(timer);
      setEvaluationToast(false);
    };
  }, []);
  return (
    <StModal>
      <StModalHeader>
        <StIconWrap onClick={closeModal}>
          <Image src={CloseIcon} alt="close" width={20} height={20} />
        </StIconWrap>
      </StModalHeader>
      <StIframeWrap>
        <StIframe src="https://smartstore.naver.com/patori/products/7111777409"></StIframe>
      </StIframeWrap>
    </StModal>
  );
};

const StModal = styled.div`
  position: absolute;
  top: 0px;
  width: 100%;
  height: 100vh;
  border-radius: 5px;
  overflow: hidden;
`;

const StModalHeader = styled.div`
  position: relative;
  width: 100%;
  height: 50px;
  background-color: white;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray};
`;

const StIconWrap = styled.div`
  position: absolute;
  top: 15px;
  left: 15px;
  cursor: pointer;
`;

const StIframeWrap = styled.div`
  width: 100%;
  height: 95vh;
  background-color: white;
`;

const StIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;

export default IframeModal;
