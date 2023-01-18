import { useRouter } from 'next/router';
import { useEffect } from 'react';
import styled from '@emotion/styled';
import axios from 'axios';
import Lottie from 'react-lottie';
import animationData from '../../src/lib/lotties/64058-playsit-gift-for-quiz.json';

// 나중에 api 나오면 적용
// export async function getStaticProps() {
//   const res = await axios('https://dummyjson.com/todos/1');
//   const data = await res.data;

//   return { props: { data } };
// }

const Loading = ({ data }: any) => {
  const router = useRouter();

  const moveToResult = () => {
    setTimeout(() => {
      router.push('/result');
    }, 4000);
  };

  useEffect(moveToResult, []);

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <StLoading>
      <StHeader>모든 질문이 끝났어요!</StHeader>
      <StContents>
        <Lottie options={defaultOptions} height={400} width={400} />
      </StContents>
      <StFooter>
        당신에게 추천하고 싶은 <br /> 000번째 선물을 살펴보는중...
      </StFooter>
    </StLoading>
  );
};

const StLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.color.mainBlue};
`;

const StHeader = styled.p`
  color: white;
  text-align: center;
  font-size: 20px;
  font-family: '에스코어드림Regular';
`;

const StContents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 45vh;
`;

const StFooter = styled(StHeader)`
  line-height: 35px;
`;

export default Loading;