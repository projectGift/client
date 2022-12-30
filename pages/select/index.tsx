import { useState } from 'react';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import SEO from '@src/components/common/SEO';
import FirstQuestion from '@src/components/select/FirstQuestion';
import SecondQuestion from '@src/components/select/SecondQuestion';
import ThirdQuestion from '@src/components/select/ThirdQuestion';

const Select = () => {
  const router = useRouter();
  const [pageIdx, setPageIdx] = useState<number>(0);
  const [nextValid, setNextValid] = useState<boolean>(false);

  const pages = [
    <FirstQuestion key={0} setNextValid={setNextValid} />,
    <SecondQuestion key={1} setNextValid={setNextValid} />,
    <ThirdQuestion key={2} setNextValid={setNextValid} />,
  ];

  const handleClickPrev = () => {
    if (pageIdx === 0) {
      router.push('/');
      return;
    }
    setPageIdx((prev) => prev - 1);
  };

  const handleClickNext = () => {
    setPageIdx((prev) => prev + 1);
  };

  const handleClickSubmit = () => {
    router.push('/result');
  };

  return (
    <>
      <SEO title="질문 선택" />
      <StSelect>
        <StHeader>
          <button onClick={handleClickPrev}>뒤로가기</button>
          <p>
            {pageIdx + 1} / {pages.length}
          </p>
        </StHeader>
        <StContents>{pages[pageIdx]}</StContents>
        <StFooter>
          {pageIdx + 1 !== pages.length ? (
            <StNextBtn onClick={handleClickNext}>다음</StNextBtn>
          ) : (
            <StNextBtn onClick={handleClickSubmit}>제출</StNextBtn>
          )}
        </StFooter>
      </StSelect>
    </>
  );
};

const StSelect = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  padding: 20px;
`;

const StHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const StContents = styled.div`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 70vh;
  overflow: auto;
  border: 1px solid black;
`;

const StFooter = styled.div`
  position: absolute;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const StNextBtn = styled.button`
  width: 80%;
  height: 50px;
`;

export default Select;
