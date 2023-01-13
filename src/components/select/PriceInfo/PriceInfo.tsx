import { useState } from 'react';
import styled from '@emotion/styled';
import Headline from '../../common/Headline';
import PriceInput from './PriceInput';
import PriceOption from './PriceOption';
import PriceRange from './PriceRange';

const PriceInfo = () => {
  const [selected, setSelected] = useState<string>('');

  return (
    <StPriceInfo>
      <StHeader>
        <Headline text="/선물의 가격대/는 어느 정도가 좋은가요?" />
      </StHeader>
      <StContents>
        <PriceOption selected={selected} setSelected={setSelected} />
        <PriceRange selected={selected} setSelected={setSelected} />
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
