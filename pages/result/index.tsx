import React from 'react';
import styled from '@emotion/styled';
import Recommend from '@src/components/result/Recommend/Recommend';

const Result = () => {
  return (
    <StResult>
      <Recommend />
    </StResult>
  );
};

//Loading -> Recommend 이런식으로..?

const StResult = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
`;

export default Result;
