import { Dispatch, SetStateAction } from 'react';
import styled from '@emotion/styled';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { percentState, selectedState } from '@src/state/selected';

interface IProps {
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
}

const PriceRange = ({ selected, setSelected }: IProps) => {
  const percent = useRecoilValue(percentState);
  const { price } = useRecoilValue(selectedState);
  const { start, end } = price;
  const setSelectedState = useSetRecoilState(selectedState);

  const setPrice = (price: Iprice) => {
    setSelectedState((selected) => {
      return { ...selected, price };
    });
  };

  const priceHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPrice({ ...price, [name]: parseInt(value) });
  };

  const rangeHandler = () => {
    setSelected('');

    if (start === 10000) {
      return;
    }

    if (end - start < 1000) {
      setPrice({ start: end - 1000, end: start + 1000 });
    }
  };

  return (
    <StPriceRange>
      <StRangeBar>
        <StSelectedRangeBar percent={percent} />
      </StRangeBar>
      <StRangeBox>
        <StMinRange
          name="start"
          type="range"
          min={10000}
          max={300000}
          step="1000"
          value={start}
          onChange={(e) => {
            priceHandler(e);
            rangeHandler();
          }}
        />
        <StMaxRange
          type="range"
          name="end"
          min={10000}
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

const StSelectedRangeBar = styled.div<{ percent: Iprice }>`
  position: absolute;
  top: 0px;
  right: ${({ percent }) => percent.start}%;
  left: ${({ percent }) => percent.end}%;
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
