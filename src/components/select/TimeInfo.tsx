import styled from '@emotion/styled';
import { timeState } from '@src/state/time';
import { useRecoilState } from 'recoil';
import Headline from '../common/Headline';
import Slider from '../common/Slider';

const TimeInfo = () => {
  const [time, setTime] = useRecoilState(timeState);

  return (
    <StTimeInfo>
      <StHeader>
        <Headline text={'상대방과 /알고지낸 기간/은 얼마나 되나요?'} />
      </StHeader>
      <Slider options={TIME_INFO} state={time} setState={setTime} />
    </StTimeInfo>
  );
};

const StTimeInfo = styled.div`
  width: 100%;
`;

const StHeader = styled.div`
  width: 100%;
`;

const TIME_INFO: IOption[] = [
  { key: 1, option: '일주일' },
  { key: 2, option: '1개월' },
  { key: 3, option: '3개월' },
  { key: 4, option: '6개월' },
  { key: 5, option: '1년' },
  { key: 6, option: '2년' },
  { key: 7, option: '3년' },
  { key: 8, option: '5년' },
  { key: 9, option: '7년' },
  { key: 10, option: '10년 이상' },
];
export default TimeInfo;
