import styled from '@emotion/styled';
import { useRecoilValue } from 'recoil';
import { selectedState } from '@src/state/selected';
import { convertPrice } from '@src/utils/convertPrice';

const PriceInput = () => {
  const { price } = useRecoilValue(selectedState);
  const { start, end } = price;

  return (
    <StPriceInput>
      <StPriceBox>{convertPrice(start.toString())} 원</StPriceBox>
      <StMiddleBox />
      <StPriceBox>{convertPrice(end.toString())} 원</StPriceBox>
    </StPriceInput>
  );
};

const StPriceInput = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  width: 100%;
`;

const StPriceBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3px 0 0 5px;
  width: 132px;
  height: 36px;
  border: 2px solid ${({ theme }) => theme.color.gray};
  border-radius: 5px;
`;

const StMiddleBox = styled.div`
  width: 10px;
  height: 3px;
  background: ${({ theme }) => theme.color.gray};
`;

export default PriceInput;
