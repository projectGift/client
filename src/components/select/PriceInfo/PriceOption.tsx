import { SetStateAction, Dispatch, useState } from 'react';
import styled from '@emotion/styled';
import { useRecoilState } from 'recoil';
import { priceState } from '@src/state/price';
import Option from '@src/components/common/Option';

interface IProps {
  setPercent: Dispatch<SetStateAction<object>>;
}

const PriceOption = ({ setPercent }: IProps) => {
  const [price, setPrice] = useRecoilState(priceState);
  const [selected, setSelected] = useState<string>('');

  const buttonHandler = (option: string) => {
    switch (option) {
      case '소소하게':
        return setPrice({ start: 0, end: 100000 }), setPercent({ left: 0, right: 66.6 });
      case '적당하게':
        return setPrice({ start: 100000, end: 200000 }), setPercent({ left: 33.3, right: 33.3 });
      default:
        return setPrice({ start: 200000, end: 300000 }), setPercent({ left: 66.6, right: 0 });
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
