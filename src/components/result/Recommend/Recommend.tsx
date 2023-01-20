import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import Product from './Product';
import Headline from '@src/components/common/Headline';
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import { relationStringState, selectedState } from '@src/state/selected';
import { modalState } from '@src/state/modal';
import { useRouter } from 'next/router';
import { pageIdxState } from '@src/state/pageIdx';
import { recommendResultState } from '@src/state/recommendResult';
import LocalStorage from '@src/utils/LocalStorage';

const Recommend = () => {
  const router = useRouter();

  const [isEvaluated, setIsEvaluated] = useState<boolean>(false);

  const resetPageIdx = useResetRecoilState(pageIdxState);

  const resetSelected = useResetRecoilState(selectedState);

  const relation = useRecoilValue(relationStringState);

  const [modal, setModal] = useRecoilState(modalState);

  useEffect(() => {
    LocalStorage.getItem('isEvaluated') === 'true' && setIsEvaluated(true);
  }, [modal]);
  const recommendResult = useRecoilValue(recommendResultState);

  const openReviewModal = () => {
    setModal('review');
  };

  const recommendAgain = () => {
    resetPageIdx();
    resetSelected();
    router.push('/select');
  };

  return (
    <StRecommend>
      <StHeader>
        <Headline text={`당신의 /${relation}/에게`} />
        이런 선물 3가지를 추천하고싶어요!
      </StHeader>
      <StProductsWrap>
        {recommendResult.map((product, index) => {
          return <Product key={product.id} index={index} product={product} />;
        })}
      </StProductsWrap>
      <StFooter>
        <StAgain
          onClick={() => {
            isEvaluated ? recommendAgain() : openReviewModal();
          }}>
          선물추천 다시 받기
        </StAgain>
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
