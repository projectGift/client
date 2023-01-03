import styled from '@emotion/styled';
import Headline from '../common/Headline';

const GenderInfo = () => {
  return (
    <StGenderInfo>
      <StHeader>
        <Headline text="상대방의 성별을 알려주세요." />
      </StHeader>
    </StGenderInfo>
  );
};

const StGenderInfo = styled.div`
  width: 100%;
`;

const StHeader = styled.div`
  width: 100%;
`;

export default GenderInfo;
