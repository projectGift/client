import { SetStateAction, Dispatch } from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import DownIcon from '../../../../public/assets/icons/icons_down.png';
import Option from './Option';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { selectedState } from '@src/state/selected';

interface IProps {
  category: string;
  option: any;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
}

const Category = ({ category, option, open, setOpen, selected, setSelected }: IProps) => {
  const { relation } = useRecoilValue(selectedState);
  const setSelectedState = useSetRecoilState(selectedState);
  const setRelation = (relation: number) => {
    setSelectedState((selected) => {
      return { ...selected, relation };
    });
  };

  const isValid = selected === category && open;

  const openDropdown = () => {
    setSelected(category);
    setOpen(true);
  };

  return (
    <StCategory>
      <StCategoryBox onClick={openDropdown}>
        <StCategoryText>{category}</StCategoryText>
        <Image src={DownIcon} alt="다운아이콘" width={16.5} height={10} />
      </StCategoryBox>
      {isValid && (
        <StOptionBox>
          {option.map(({ key, option }: IOption) => (
            <Option
              key={key}
              option={option}
              isSelected={key === relation}
              onClick={() => {
                setRelation(key);
              }}
            />
          ))}
        </StOptionBox>
      )}
    </StCategory>
  );
};

const StCategory = styled.div`
  width: 100%;
`;

const StCategoryBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  padding: 0 20px;
  padding-top: 3px;
  width: 100%;
  height: 50px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.color.gray};
`;

const StCategoryText = styled.p`
  font-family: '에스코어드림Bold';
  font-size: 16px;
`;

const StOptionBox = styled.div`
  padding: 10px;
  width: 100%;
  background: ${({ theme }) => theme.color.lightGray};
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;

  @keyframes dropdown {
    0% {
      transform: translateY(-30%);
    }
    100% {
      transform: translateY(0%);
    }
  }
  animation: dropdown 0.2s ease;
`;

export default Category;
