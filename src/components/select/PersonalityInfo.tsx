import styled from '@emotion/styled';
import Headline from '../common/Headline';

const PersonalityInfo = () => {
  return (
    <StPersinalityInfo>
      <StHeader>
        <Headline text="그럼 평소의 성격은 어떤가요?" />
      </StHeader>
    </StPersinalityInfo>
  );
};

const StPersinalityInfo = styled.div`
  width: 100%;
`;

const StHeader = styled.div`
  width: 100%;
`;

export default PersonalityInfo;
