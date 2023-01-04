import styled from '@emotion/styled';
import Headline from '../common/Headline';

const MbtiInfo = () => {
  return (
    <StMbtiInfo>
      <StHeader>
        <Headline text="상대방의 /MBTI/를 알고 있나요?" />
      </StHeader>
    </StMbtiInfo>
  );
};

const StMbtiInfo = styled.div`
  width: 100%;
`;

const StHeader = styled.div`
  width: 100%;
`;

export default MbtiInfo;
