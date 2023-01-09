import { useRouter } from 'next/router';
import Image from 'next/image';
import styled from '@emotion/styled';
import SEO from '@src/components/common/SEO';
import BackIcon from '../../public/assets/icons/icons_back.png';
import ReceiverInfo from '@src/components/select/ReceiverInfo';
import GenderInfo from '@src/components/select/GenderInfo';
import AgeInfo from '@src/components/select/AgeInfo';
import MbtiInfo from '@src/components/select/MbtiInfo';
import PersonalityInfo from '@src/components/select/PersonalityInfo';
import PriceInfo from '@src/components/select/PriceInfo/PriceInfo';
import Onboarding from '@src/components/select/Onboarding';
import RelationInfo from '@src/components/select/RelationInfo/RelationInfo';
import TimeInfo from '@src/components/select/TimeInfo';
import Next from '@src/components/common/Next';
import HobbyInfo from '@src/components/select/HobbyInfo';
import EventInfo from '@src/components/select/EventInfo';
import { pageIdxState } from '@src/state/pageIdx';
import { useRecoilState } from 'recoil';

const Select = () => {
  const router = useRouter();
  const [pageIdx, setPageIdx] = useRecoilState(pageIdxState);

  const pages = [
    <ReceiverInfo key={0} />,
    <GenderInfo key={1} />,
    <AgeInfo key={2} />,
    <MbtiInfo key={3} />,
    <PersonalityInfo key={4} />,
    <PriceInfo key={5} />,
    <Onboarding key={6} />,
    <RelationInfo key={7} />,
    <TimeInfo key={8} />,
    <HobbyInfo key={9} />,
    <EventInfo key={11} />,
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
          <StFlexBox>
            <Image src={BackIcon} alt="back" width={12} height={20} onClick={handleClickPrev} />
          </StFlexBox>
          <StProgressWrapper>
            <StAheadProgress width={((pageIdx + 1) / pages.length) * 100 + '%'} />
            <StProgress width={(pageIdx / pages.length) * 100 + '%'} />
          </StProgressWrapper>
        </StHeader>
        <StContents>{pages[pageIdx]}</StContents>
        <StFooter>
          <Next
            onClick={pageIdx + 1 !== pages.length ? handleClickNext : handleClickSubmit}
            isLastPage={pageIdx + 1 === pages.length}
          />
        </StFooter>
      </StSelect>
    </>
  );
};

const StSelect = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;

const StHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const StProgressWrapper = styled.div`
  margin-right: 30px;
  position: relative;
  width: 100%;
  height: 3px;
  background: #f0f0f0;
`;

const StAheadProgress = styled.div<{ width: string }>`
  position: absolute;
  top: 0;
  width: ${(props) => props.width};
  height: 3px;
  background: #9bbed2;
`;

const StProgress = styled.div<{ width: string }>`
  position: absolute;
  top: 0;
  width: ${(props) => props.width};
  height: 3px;
  background: #456f87;
  transition: width 0.5s;
`;

const StFlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  width: 15%;
`;

const StContents = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 20px;
  width: 100%;
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
