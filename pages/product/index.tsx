import React from 'react';
import EvaluationToast from '@src/components/product/EvaluationToast';
import { useRecoilValue } from 'recoil';
import { evaluationToastState } from '@src/state/evaluationToast';
import Iframe from '@src/components/product/Iframe';
import { isMobile } from 'react-device-detect';
import styled from '@emotion/styled';

const Product = () => {
  console.log(isMobile);
  const isEvaluationToastPop = useRecoilValue(evaluationToastState);
  return (
    <StProduct>
      <Iframe />
      {isEvaluationToastPop && <EvaluationToast />}
    </StProduct>
  );
};

const StProduct = styled.div`
  width: 100vw;
  height: 100vh;
`;

export default Product;
