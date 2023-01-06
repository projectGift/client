import styled from '@emotion/styled';
import Headline from '../common/Headline';

const AgeInfo = () => {
  return (
    <StAgeInfo>
      <StHeader>
        <Headline text="상대방의 /나이/는 어떻게 되나요?" />
      </StHeader>
    </StAgeInfo>
  );
};

const StAgeInfo = styled.div`
  width: 100%;
`;

const StHeader = styled.div`
  width: 100%;
`;

export default AgeInfo;
