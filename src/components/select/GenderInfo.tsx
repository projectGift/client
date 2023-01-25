import styled from '@emotion/styled';
import { selectedState } from '@src/state/selected';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import Headline from '../common/Headline';
import Option from '../common/Option';

const GenderInfo = () => {
  const { gender, receiver } = useRecoilValue(selectedState);
  const setSelectedState = useSetRecoilState(selectedState);
  const setGender = (gender: number) => {
    setSelectedState((selected) => {
      return { ...selected, gender };
    });
  };

  const headLine = `${receiver === 1 ? '당신' : '상대방'}의 /성별/을 알려주세요.`;

  return (
    <StGenderInfo>
      <StHeader>
        <Headline text={headLine} />
      </StHeader>
      <StBody>
        {GENDER_INFO.map(({ key, option }) => (
          <Option key={key} selected={gender === key} text={option} onClick={() => setGender(key)} />
        ))}
      </StBody>
    </StGenderInfo>
  );
};

const StGenderInfo = styled.div`
  width: 100%;
`;

const StHeader = styled.div`
  width: 100%;
`;

const StBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px 0;
`;

const GENDER_INFO: IOption[] = [
  { key: 1, option: '남자' },
  { key: 2, option: '여자' },
  { key: 3, option: '둘다' },
];
export default GenderInfo;
