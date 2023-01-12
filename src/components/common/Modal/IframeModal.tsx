import React from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import CloseIcon from '../../../../public/assets/icons/icon_close.png';
import { useResetRecoilState } from 'recoil';
import { modalState } from '@src/state/modal';

const IframeModal = () => {
  const closeModal = useResetRecoilState(modalState);
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
  bottom: 0px;
  width: 100%;
  height: 95vh;
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
  height: 100%;
  background-color: white;
`;

const StIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;

export default IframeModal;
