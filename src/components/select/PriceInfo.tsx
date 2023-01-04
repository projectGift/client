import styled from '@emotion/styled';
import Headline from '../common/Headline';

const PriceInfo = () => {
  return (
    <StPriceInfo>
      <StHeader>
        <Headline text="선물의 가격대는 어느 정도가 좋은가요?" />
      </StHeader>
    </StPriceInfo>
  );
};

const StPriceInfo = styled.div`
  width: 100%;
`;

const StHeader = styled.div`
  width: 100%;
`;

export default PriceInfo;
