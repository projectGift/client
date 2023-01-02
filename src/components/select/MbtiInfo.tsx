import styled from '@emotion/styled';
import Headline from '../common/Headline';

const MbtiInfo = (props: SetStateProps<boolean>) => {
  const { setNextValid } = props;

  return (
    <StMbtiInfo>
      <StHeader>
        <Headline text="상대방의 MBTI를 알고 있나요?" />
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
