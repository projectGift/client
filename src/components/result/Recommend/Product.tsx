import styled from '@emotion/styled';
import React from 'react';
import { useSetRecoilState } from 'recoil';
import { useRouter } from 'next/router';
import { currentProductState } from '@src/state/currentProduct';
import { convertPrice } from '@src/utils/convertPrice';
import DefaultImg from '/public/assets/images/image_default.png';
import Image from 'next/image';

interface IProps {
  index: number;
  product: RecommendResult;
}

const Product = ({ product, index }: IProps) => {
  const router = useRouter();
  const setCurrentProduct = useSetRecoilState(currentProductState);

  const { id: productId, product_url: url, product_name, product_price, product_review_count, thumbnail } = product;

  const openIframe = () => {
    setCurrentProduct({ url, productId });
    router.push('/product');
  };

  return (
    <StProduct onClick={openIframe}>
      <StBadgeWrap>
        <StBadge index={index}>{index + 1}</StBadge>
      </StBadgeWrap>
      <StImgWrap>
        {thumbnail ? (
          <StImg src={thumbnail} alt={product_name} />
        ) : (
          <StDefault src={DefaultImg} alt={product_name} fill />
        )}
      </StImgWrap>
      <StDescription>
        <StName>{product_name}</StName>
        <StDetail>
          <span>
            리뷰 <StReview>{product_review_count}</StReview>
          </span>
          <span>
            <StPrice>{convertPrice(product_price)}</StPrice> 원
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

const StBadgeWrap = styled.div`
  position: absolute;
  top: -25px;
  left: -25px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius: 100%;
  background-color: white;
`;

const StBadge = styled.div<{ index: number }>`
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
  opacity: ${({ index }) => 1 - index / 5};
  z-index: 10;
`;

const StImgWrap = styled.div`
  position: relative;
  width: 100%;
  height: 250px;
  border-bottom: 2px solid ${({ theme }) => theme.color.gray};
  z-index: -10;
`;

const StImg = styled.img`
  width: 100%;
  height: 100%;
`;

const StDefault = styled(Image)`
  width: 100%;
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
