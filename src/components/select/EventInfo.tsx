import styled from '@emotion/styled';
import { selectedState } from '@src/state/selected';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import Headline from '../common/Headline';
import Slider from '../common/Slider';

const EventInfo = () => {
  const { event } = useRecoilValue(selectedState);
  const setSelectedState = useSetRecoilState(selectedState);
  const setEvent = (event: number) => {
    setSelectedState((selected) => {
      return { ...selected, event };
    });
  };
  return (
    <StEventInfo>
      <StHeader>
        <Headline text={'/어떤 상황 · 기념일/에 선물 할건가요?'} />
      </StHeader>
      <Slider options={EVENT_INFO} state={event} setState={setEvent} />
    </StEventInfo>
  );
};

const StEventInfo = styled.div`
  width: 100%;
`;

const StHeader = styled.div`
  width: 100%;
`;

const EVENT_INFO: IOption[] = [
  { key: 1, option: '아무때나' },
  { key: 2, option: '100일' },
  { key: 3, option: '1주년' },
  { key: 4, option: '결혼기념일' },
  { key: 5, option: '생일' },
  { key: 6, option: '집들이' },
  { key: 7, option: '파티' },
  { key: 8, option: '병문안' },
  { key: 9, option: '입학/개학' },
  { key: 10, option: '졸업' },
  { key: 11, option: '수능' },
  { key: 12, option: '합격' },
  { key: 13, option: '출산' },
  { key: 14, option: '백일' },
  { key: 15, option: '돌잔치' },
  { key: 16, option: '새해' },
  { key: 17, option: '연말' },
  { key: 18, option: '명절' },
  { key: 19, option: '개업' },
  { key: 20, option: '구직/취직' },
  { key: 21, option: '승진' },
  { key: 22, option: '퇴직' },
  { key: 23, option: '이사' },
  { key: 24, option: '상견례' },
  { key: 25, option: '환갑' },
  { key: 26, option: '입대' },
  { key: 27, option: '전역' },
  { key: 28, option: '신차구입' },
  { key: 29, option: '초경' },
  { key: 30, option: '갱년기' },
  { key: 31, option: '마니또' },
  { key: 32, option: '발렌타인데이' },
  { key: 33, option: '화이트데이' },
  { key: 34, option: '만우절' },
  { key: 35, option: '부처님오신날' },
  { key: 36, option: '어린이날' },
  { key: 37, option: '어버이날' },
  { key: 38, option: '스승의날' },
  { key: 39, option: '부부의날' },
  { key: 40, option: '할로윈데이' },
  { key: 41, option: '빼빼로데이' },
  { key: 42, option: '크리스마스' },
];
export default EventInfo;
