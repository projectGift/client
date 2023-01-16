import styled from '@emotion/styled';
import React from 'react';
import Product from './Product';
import Headline from '@src/components/common/Headline';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { relationStringState } from '@src/state/relation';
import { modalState } from '@src/state/modal';

const arr = new Array(3).fill(0).map((_, i) => {
  return i;
});
const Recommend = () => {
  const relation = useRecoilValue(relationStringState);

  const setModal = useSetRecoilState(modalState);

  const openReviewModal = () => {
    setModal('review');
  };

  return (
    <StRecommend>
      <StHeader>
        <Headline text={`당신의 /${relation}/에게`} />
        이런 선물 3가지를 추천하고싶어요!
      </StHeader>
      <StProductsWrap>
        {arr.map((el, i) => {
          return <Product key={i} />;
        })}
      </StProductsWrap>
      <StFooter>
        <StAgain onClick={openReviewModal}>선물추천 다시 받기</StAgain>
      </StFooter>
    </StRecommend>
  );
};

const StRecommend = styled.div`
  width: 100%;
  padding: 30px 0;
`;

const StHeader = styled.div`
  margin: 25px 0;
  text-align: center;
  font-family: '에스코어드림Regular';
  font-size: 20px;
  line-height: 35px;
`;

const StProductsWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StFooter = styled.div`
  padding: 25px 0;
  text-align: center;
`;
const StAgain = styled.button`
  padding: 5px 10px;
  width: 80%;
  height: 50px;
  background-color: ${({ theme }) => theme.color.mainBlue};
  color: white;
  font-family: '에스코어드림Bold';
  font-size: 16px;
  border-radius: 50px;
  border: none;
  transition: all 0.1s;
`;

export default Recommend;
