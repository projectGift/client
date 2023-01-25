import styled from '@emotion/styled';
import { selectedState } from '@src/state/selected';
import { useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import Headline from '../common/Headline';
import Slider from '../common/Slider';

const MbtiInfo = () => {
  const { mbti, receiver } = useRecoilValue(selectedState);
  const setSelectedState = useSetRecoilState(selectedState);
  const setMbti = (mbti: number) => {
    setSelectedState((selected) => {
      return { ...selected, mbti };
    });
  };
  const headLine = `${receiver === 1 ? '당신' : '상대방'}의 /MBTI/를 알고 있나요?`;

  useEffect(() => {
    if (2 <= mbti && mbti <= 9)
      setSelectedState((selected) => {
        return { ...selected, personality: 2 };
      });
    else if (10 <= mbti && mbti <= 17)
      setSelectedState((selected) => {
        return { ...selected, personality: 1 };
      });
    else if (mbti === 1)
      setSelectedState((selected) => {
        return { ...selected, personality: 0 };
      });
  }, [mbti]);

  return (
    <StMbtiInfo>
      <StHeader>
        <Headline text={headLine} />
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
