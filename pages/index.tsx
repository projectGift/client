import React from 'react';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import SEO from '@src/components/common/SEO';

const Home = () => {
  const router = useRouter();

  return (
    <>
      <SEO title="@@" />
      <StHome>
        {/* <StHeader>로고</StHeader> */}
        <StFooter>
          <StWithoutLoginBtn
            onClick={() => {
              router.push(`/select`);
            }}>
            로그인 없이 이용하기
          </StWithoutLoginBtn>
          {/* <StLoginBox>
            {SOCIAL_LOGIN_TYPE.map(({ id, type }) => (
              <StLoginBtn key={id}>{type}</StLoginBtn>
            ))}
          </StLoginBox> */}
        </StFooter>
      </StHome>
    </>
  );
};

const SOCIAL_LOGIN_TYPE = [
  { id: 0, type: '카카오' },
  { id: 1, type: '구글' },
  { id: 2, type: '애플' },
];

const StHome = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.mainBlue};
`;

const StHeader = styled.h1`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const StFooter = styled.div`
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 80%;
  height: 120px;
`;

const StWithoutLoginBtn = styled.button`
  width: 100%;
  height: 50px;
  border-radius: 50px;
  border: none;
  background-color: white;
  color: ${({ theme }) => theme.color.mainBlue};
  font-family: '에스코어드림Bold';
  font-size: 16px;
`;

const StLoginBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 50px;
`;

const StLoginBtn = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50px;
`;

export default Home;
