import React from 'react';
import ConfirmModal from './ConfirmModal';
import IframeModal from './IframeModal';
import ReviewModal from './ReviewModal';

interface IProps {
  type: string;
}

const Modal = ({ type }: IProps) => {
  const modal: any = {
    confirm: <ConfirmModal />,
    review: <ReviewModal />,
    Iframe: <IframeModal />,
  };

  return <>{modal[type]}</>;
};

export default Modal;
