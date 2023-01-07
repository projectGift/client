import { SetStateAction, Dispatch, useState } from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import DownIcon from '../../../../public/assets/icons/icons_down.png';
import Option from './Option';
import { useRecoilState } from 'recoil';
import { relationState } from '@src/state/relation';

interface IProps {
  category: string;
  option: any;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
}

const Category = ({ category, option, open, setOpen, selected, setSelected }: IProps) => {
  const [relation, setRelation] = useRecoilState<number>(relationState);

  const isValid = selected === category && open;

  return (
    <StCategory>
      <StCategoryBox
        onClick={() => {
          setSelected(category);
          setOpen(true);
        }}>
        <StCategoryText>{category}</StCategoryText>
        <Image className="Image" src={DownIcon} alt="다운아이콘" />
      </StCategoryBox>
      {isValid && (
        <StOptionBox>
          {option.map(({ key, option }: any) => (
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

  .Image {
    width: 15px;
    height: 9px;
  }
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
`;

export default Category;
