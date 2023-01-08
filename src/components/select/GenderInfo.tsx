import styled from '@emotion/styled';
import { genderState } from '@src/state/gender';
import { useRecoilState } from 'recoil';
import Headline from '../common/Headline';
import Option from '../common/Option';

const GenderInfo = () => {
  const [gender, setGender] = useRecoilState(genderState);
  return (
    <StGenderInfo>
      <StHeader>
        <Headline text="상대방의 /성별/을 알려주세요." />
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
  { key: 3, option: '무응답' },
];
export default GenderInfo;
