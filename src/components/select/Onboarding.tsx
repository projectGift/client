import styled from '@emotion/styled';
import Headline from '../common/Headline';

const Onboarding = (props: SetStateProps<boolean>) => {
  const { setNextValid } = props;

  return (
    <StOnboarding>
      <StHeader>
        <Headline text="자세한 추천을 위해 몇 가지 질문을 더 드릴게요." />
      </StHeader>
    </StOnboarding>
  );
};

const StOnboarding = styled.div`
  width: 100%;
`;

const StHeader = styled.div`
  width: 100%;
`;

export default Onboarding;
