import styled from '@emotion/styled';
import { modalState } from '@src/state/modal';
import React from 'react';
import { useSetRecoilState } from 'recoil';

const Product = () => {
  const setModal = useSetRecoilState(modalState);
  const openIframeModal = () => {
    setModal('Iframe');
  };
  return (
    <StProduct onClick={openIframeModal}>
      <StBadge>1</StBadge>
      <StImgWrap>
        <img src="" alt="" />
      </StImgWrap>
      <StDescription>
        <StName>가나다라마바사아자차카타파하아야어여오요우유으이</StName>
        <StDetail>
          <span>
            리뷰 <StReview>500</StReview>
          </span>
          <span>
            <StPrice>150,000</StPrice> 원
          </span>
        </StDetail>
      </StDescription>
    </StProduct>
  );
};

const StProduct = styled.div`
  position: relative;
  width: 250px;
  height: 330px;
  margin: 25px 0;
  border: 2px solid ${({ theme }) => theme.color.gray};
  border-radius: 5px;
  cursor: pointer;
`;

const StBadge = styled.div`
  position: absolute;
  top: -25px;
  left: -25px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.color.mainBlue};
  color: white;
  font-family: '에스코어드림Bold';
  font-size: 20px;
`;

const StImgWrap = styled.div`
  width: 100%;
  height: 250px;
  border-bottom: 2px solid ${({ theme }) => theme.color.gray};
`;

const StDescription = styled.div`
  width: 100%;
  height: 80px;
  padding: 15px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.color.blackFont};
`;

const StName = styled.p`
  width: 100%;
  font-family: '에스코어드림Regular';
  font-size: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-break: break-all;
`;

const StDetail = styled.p`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-family: '에스코어드림Regular';
  font-size: 14px;
`;

const StReview = styled.span`
  font-family: '에스코어드림Bold';
  color: ${({ theme }) => theme.color.mainBlue};
`;

const StPrice = styled.span`
  font-family: '에스코어드림Bold';
`;

export default Product;
