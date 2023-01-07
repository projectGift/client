import { useState } from 'react';
import styled from '@emotion/styled';
import Headline from '../../common/Headline';
import PriceInput from './PriceInput';
import PriceOption from './PriceOption';
import PriceRange from './PriceRange';

const PriceInfo = () => {
  const [percent, setPercent] = useState<object>({
    left: 0,
    right: 0,
  });

  return (
    <StPriceInfo>
      <StHeader>
        <Headline text="/선물의 가격대/는 어느 정도가 좋은가요?" />
      </StHeader>
      <StContents>
        <PriceOption setPercent={setPercent} />
        <PriceRange percent={percent} setPercent={setPercent} />
        <PriceInput />
      </StContents>
    </StPriceInfo>
  );
};

const StPriceInfo = styled.div`
  width: 100%;
`;

const StHeader = styled.div`
  width: 100%;
`;

const StContents = styled.div`
  padding: 0 10px;
  width: 100%;
`;

export default PriceInfo;
