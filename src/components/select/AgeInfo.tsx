import styled from '@emotion/styled';
import { useRecoilState } from 'recoil';
import { ageState } from '@src/state/age';
import Headline from '../common/Headline';
import Slider from '../common/Slider';

const AgeInfo = () => {
  const [age, setAge] = useRecoilState(ageState);
  return (
    <StAgeInfo>
      <StHeader>
        <Headline text="상대방의 /나이/는 어떻게 되나요?" />
      </StHeader>
      <Slider options={AGE_INFO} state={age} setState={setAge} />
    </StAgeInfo>
  );
};

const StAgeInfo = styled.div`
  width: 100%;
`;

const StHeader = styled.div`
  width: 100%;
`;

const AGE_INFO: IOption[] = [
  { key: 1, option: '상관없어요' },
  { key: 2, option: '반려동물' },
  { key: 3, option: '아기' },
  { key: 4, option: '어린이' },
  { key: 5, option: '초등학생' },
  { key: 6, option: '중학생' },
  { key: 7, option: '고등학생' },
  { key: 8, option: '대학생' },
  { key: 9, option: '20대 초중반' },
  { key: 10, option: '20대 후반' },
  { key: 11, option: '30대 초중반' },
  { key: 12, option: '30대 후반' },
  { key: 13, option: '40대 초중반' },
  { key: 14, option: '40대 후반' },
  { key: 15, option: '50대' },
  { key: 16, option: '60대' },
  { key: 17, option: '70대' },
  { key: 18, option: '어르신' },
];

export default AgeInfo;
