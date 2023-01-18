import { Dispatch, SetStateAction } from 'react';
import styled from '@emotion/styled';
import { useSetRecoilState } from 'recoil';
import Option from '@src/components/common/Option';
import { selectedState } from '@src/state/selected';

interface IProps {
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
}

const PriceOption = ({ selected, setSelected }: IProps) => {
  const setSelectedState = useSetRecoilState(selectedState);
  const setPrice = (price: Iprice) => {
    setSelectedState((selected) => {
      return { ...selected, price };
    });
  };

  const buttonHandler = (option: string) => {
    switch (option) {
      case '소소하게':
        return setPrice({ start: 10000, end: 40000 });
      case '적당하게':
        return setPrice({ start: 50000, end: 120000 });
      default:
        return setPrice({ start: 130000, end: 300000 });
    }
  };

  return (
    <StPriceOption>
      {OPTION.map(({ key, option }) => (
        <Option
          key={key}
          text={option}
          selected={option === selected}
          onClick={() => {
            setSelected(option);
            buttonHandler(option);
          }}
        />
      ))}
    </StPriceOption>
  );
};

const OPTION: IOption[] = [
  { key: 0, option: '소소하게' },
  { key: 1, option: '적당하게' },
  { key: 2, option: '넉넉하게' },
];

const StPriceOption = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0;
  width: 100%;
`;

export default PriceOption;
