import styled from '@emotion/styled';
import { selectedState } from '@src/state/selected';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import Headline from '../common/Headline';
import Slider from '../common/Slider';

const MbtiInfo = () => {
  const { mbti } = useRecoilValue(selectedState);
  const setSelectedState = useSetRecoilState(selectedState);
  const setMbti = (mbti: number) => {
    setSelectedState((selected) => {
      return { ...selected, mbti };
    });
  };

  return (
    <StMbtiInfo>
      <StHeader>
        <Headline text="상대방의 /MBTI/를 알고 있나요?" />
      </StHeader>
      <Slider options={MBTI_INFO} state={mbti} setState={setMbti} />
    </StMbtiInfo>
  );
};

const StMbtiInfo = styled.div`
  width: 100%;
`;

const StHeader = styled.div`
  width: 100%;
`;

const MBTI_INFO: IOption[] = [
  { key: 1, option: '모르겠어요' },
  { key: 2, option: 'INTJ' },
  { key: 3, option: 'INTP' },
  { key: 4, option: 'INFJ' },
  { key: 5, option: 'INFP' },
  { key: 6, option: 'ISTJ' },
  { key: 7, option: 'ISTP' },
  { key: 8, option: 'ISFJ' },
  { key: 9, option: 'ISFP' },
  { key: 10, option: 'ENTJ' },
  { key: 11, option: 'ENTP' },
  { key: 12, option: 'ENFJ' },
  { key: 13, option: 'ENFP' },
  { key: 14, option: 'ESTJ' },
  { key: 15, option: 'ESTP' },
  { key: 16, option: 'ESFJ' },
  { key: 17, option: 'ESFP' },
];

export default MbtiInfo;
