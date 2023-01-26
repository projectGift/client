import { useRouter } from 'next/router';
import { useEffect } from 'react';
import styled from '@emotion/styled';
import loadingAPI from '@src/api/loading';
import Image from 'next/image';
import GiftImg from 'public/assets/images/image_giftBox.png';
import LoadingBg from 'public/assets/images/image_loadingBg.png';

export async function getStaticProps() {
  const response = await loadingAPI.getProductCount();

  return {
    props: {
      counts: response,
    },
  };
}

const Loading = ({ counts }: any) => {
  const router = useRouter();

  const moveToResult = () => {
    setTimeout(() => {
      router.push('/result');
    }, 2000);
  };

  useEffect(moveToResult, []);

  return (
    <StLoading LoadingBg={LoadingBg}>
      <StHeader>모든 질문이 끝났어요!</StHeader>
      <StContents>
        <Image src={GiftImg} alt="선물이미지" width={300} height={270} />
      </StContents>
      <StFooter>
        당신에게 추천하고 싶은 <br /> {counts}번째 선물을 살펴보는중...
      </StFooter>
    </StLoading>
  );
};

const StLoading = styled.div<{ LoadingBg: any }>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-image: url(${(props) => props.LoadingBg.src});
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
`;

const StHeader = styled.p`
  color: white;
  text-align: center;
  font-size: 20px;
  font-family: '에스코어드림Regular';
`;

const StContents = styled.div`
  position: absolute;
  top: 50%;
  left: 58%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 45vh;
  /* border: 1px solid black; */
`;

const StFooter = styled(StHeader)`
  margin-top: 300px;
  line-height: 35px;
`;

export default Loading;
