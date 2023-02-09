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
import SeasonInfo from '@src/components/select/SeasonInfo';
import EventInfo from '@src/components/select/EventInfo';
import { pageIdxState } from '@src/state/pageIdx';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { selectedState } from '@src/state/selected';
import { useMutation } from 'react-query';
import suggestAPI from '@src/api/suggest';
import { recommendResultState } from '@src/state/recommendResult';
import { currentPageState } from '@src/state/currentPage';
import { useEffect, useState } from 'react';

const Select = () => {
  const router = useRouter();
  const [pageIdx, setPageIdx] = useRecoilState(pageIdxState);
  const [currentPage, setCurrentPage] = useRecoilState(currentPageState);
  const selected = useRecoilValue(selectedState);
  const setResult = useSetRecoilState(recommendResultState);
  const { receiver, mbti } = selected;

  const { mutate: suggest } = useMutation((selected: Selected) => suggestAPI.postSelected(selected), {
    onSuccess: (data: any) => {
      setResult(data);
    },
  });

  const pages: { [key: string]: JSX.Element } = {
    receiverInfo: <ReceiverInfo key={0} />,
    genderInfo: <GenderInfo key={1} />,
    ageInfo: <AgeInfo key={2} />,
    mbtiInfo: <MbtiInfo key={3} />,
    personalityInfo: <PersonalityInfo key={4} />,
    priceInfo: <PriceInfo key={5} />,
    onboarding: <Onboarding key={6} />,
    relationInfo: <RelationInfo key={7} />,
    timeInfo: <TimeInfo key={8} />,
    hobbyInfo: <HobbyInfo key={9} />,
    seasonInfo: <SeasonInfo key={10} />,
    eventInfo: <EventInfo key={11} />,
  };

  const toMeOrTheOthers: { [key: number]: string[] } = {
    1: [
      'receiverInfo',
      'genderInfo',
      'ageInfo',
      'mbtiInfo',
      'personalityInfo',
      'priceInfo',
      'onboarding',
      'hobbyInfo',
      'seasonInfo',
      'eventInfo',
    ],
    2: [
      'receiverInfo',
      'genderInfo',
      'ageInfo',
      'mbtiInfo',
      'personalityInfo',
      'priceInfo',
      'onboarding',
      'relationInfo',
      'timeInfo',
      'hobbyInfo',
      'seasonInfo',
      'eventInfo',
    ],
  };

  const [selectedPages, setSelectedPages] = useState<string[]>(toMeOrTheOthers[2]);

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
    suggest(selected);
    router.push('/loading');
  };

  useEffect(() => {
    setSelectedPages(toMeOrTheOthers[receiver]);
  }, [receiver]);

  useEffect(() => {
    setCurrentPage(selectedPages[pageIdx]);
  }, [pageIdx]);

  useEffect(() => {
    if (mbti > 1)
      setSelectedPages((pages) => {
        return [...pages].filter((page) => page !== 'personalityInfo');
      });
    else if (mbti === 1) setSelectedPages(toMeOrTheOthers[receiver]);
  }, [mbti]);

  return (
    <>
      <SEO title="질문선택" />
      <StSelect isOnboarding={currentPage === 'onboarding'}>
        <StHeader>
          <StFlexBox>
            <Image src={BackIcon} alt="back" width={30} height={24} onClick={handleClickPrev} />
          </StFlexBox>
          {currentPage !== 'onboarding' && (
            <StProgressWrapper>
              <StAheadProgress width={((pageIdx + 1) / selectedPages?.length) * 100 + '%'} />
              <StProgress width={(pageIdx / selectedPages?.length) * 100 + '%'} />
            </StProgressWrapper>
          )}
        </StHeader>
        <StContents>{pages[currentPage]}</StContents>
        <StFooter>
          <Next
            onClick={pageIdx + 1 !== selectedPages?.length ? handleClickNext : handleClickSubmit}
            isLastPage={pageIdx + 1 === selectedPages?.length}
            isOnboarding={currentPage === 'onboarding'}
          />
        </StFooter>
      </StSelect>
    </>
  );
};

const StSelect = styled.div<{ isOnboarding: boolean }>`
  position: relative;
  width: 100%;
  height: 100vh;
  background: ${({ theme, isOnboarding }) => (isOnboarding ? theme.color.mainBlue : null)};
`;

const StHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const StProgressWrapper = styled.div`
  margin-left: 10px;
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
