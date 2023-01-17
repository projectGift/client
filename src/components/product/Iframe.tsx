import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import CloseIcon from 'public/assets/icons/icon_close.png';
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil';
import { evaluationToastState } from '@src/state/evaluationToast';
import { useRouter } from 'next/router';
import { currentProductState } from '@src/state/currentProduct';

const Iframe = () => {
  const router = useRouter();
  const setEvaluationToast = useSetRecoilState(evaluationToastState);
  const { url, productId } = useRecoilValue(currentProductState);
  const resetProduct = useResetRecoilState(currentProductState);

  const evaluationRecord = JSON.parse(localStorage.getItem('evaluationRecord') || '[]');

  const closeIframe = () => {
    resetProduct();
    router.push('/result');
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!evaluationRecord.includes(productId)) setEvaluationToast(true);
    }, 4000);
    return () => {
      clearTimeout(timer);
      setEvaluationToast(false);
    };
  }, []);

  return (
    <StModal>
      <StModalHeader>
        <StIconWrap onClick={closeIframe}>
          <Image src={CloseIcon} alt="close" width={20} height={20} />
        </StIconWrap>
      </StModalHeader>
      <StIframeWrap>
        <StIframe src={url}></StIframe>
      </StIframeWrap>
    </StModal>
  );
};

const StModal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
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

export default Iframe;
