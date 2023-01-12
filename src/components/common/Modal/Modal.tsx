import React from 'react';
import ConfirmModal from './ConfirmModal';
import IframeModal from './IframeModal';
import ReviewModal from './ReviewModal';
import styled from '@emotion/styled';
import { useRecoilValue } from 'recoil';
import { modalState } from '@src/state/modal';

const Modal = () => {
  const type = useRecoilValue(modalState);
  const modal: any = {
    confirm: <ConfirmModal />,
    review: <ReviewModal />,
    Iframe: <IframeModal />,
  };

  return <StBackground>{modal[type]}</StBackground>;
};

const StBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export default Modal;
