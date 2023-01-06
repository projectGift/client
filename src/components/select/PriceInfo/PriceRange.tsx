import { SetStateAction, Dispatch } from 'react';
import styled from '@emotion/styled';
import { useRecoilState } from 'recoil';
import { priceState } from '@src/state/price';

interface IProps {
  percent: any;
  setPercent: Dispatch<SetStateAction<object>>;
}

const PriceRange = ({ percent, setPercent }: IProps) => {
  const [price, setPrice] = useRecoilState(priceState);
  const { start, end } = price;
  const { left, right } = percent;

  const priceHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPrice({ ...price, [name]: parseInt(value) });
  };

  const rangeHandler = () => {
    if (end - start < 1000) {
      setPrice((price: object) => {
        return { ...price, start: end - 1000, end: start + 1000 };
      });
    } else {
      setPercent((percent: object) => {
        return { ...percent, left: (start / 300000) * 100 };
      });
      setPercent((percent: object) => {
        return { ...percent, right: 100 - (end / 300000) * 100 };
      });
    }
  };

  return (
    <StPriceRange>
      <StRangeBar>
        <StSelectedRangeBar left={left} right={right} />
      </StRangeBar>
      <StRangeBox>
        <StMinRange
          name="start"
          type="range"
          min={0}
          max={300000}
          step="10000"
          value={start}
          onChange={(e) => {
            priceHandler(e);
            rangeHandler();
          }}
        />
        <StMaxRange
          type="range"
          name="end"
          min={0}
          max={300000}
          step="1000"
          value={end}
          onChange={(e) => {
            priceHandler(e);
            rangeHandler();
          }}
        />
      </StRangeBox>
    </StPriceRange>
  );
};

const StPriceRange = styled.div`
  margin-top: 40px;
  width: 100%;
`;

const StRangeBar = styled.div`
  position: relative;
  height: 3px;
  width: 100%;
  background: ${({ theme }) => theme.color.gray};
`;

const StSelectedRangeBar = styled.div<{ left: number; right: number }>`
  position: absolute;
  top: 0px;
  right: ${(props) => props.right}%;
  left: ${(props) => props.left}%;
  height: 5px;
  background: ${({ theme }) => theme.color.mainBlue};
`;

const StRangeBox = styled.div`
  position: relative;
  width: 100%;
`;

const StMinRange = styled.input`
  position: absolute;
  top: -4px;
  right: 1px;
  width: 100%;
  height: 7px;
  background: none;
  pointer-events: none;
  -webkit-appearance: none;

  &::-webkit-slider-thumb {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 4px solid ${({ theme }) => theme.color.mainBlue};
    background: white;
    pointer-events: auto;
    -webkit-appearance: none;
  }

  &::-moz-range-thumb {
    height: 20px;
    width: 20px;
    border: none;
    border-radius: 50%;
    background: ${({ theme }) => theme.color.mainBlue};
    pointer-events: auto;
    -moz-appearance: none;
  }
`;

const StMaxRange = styled(StMinRange)`
  right: -1px;
`;

export default PriceRange;
