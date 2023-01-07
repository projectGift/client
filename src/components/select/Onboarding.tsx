import styled from '@emotion/styled';

const Onboarding = () => {
  return (
    <StOnboarding>
      <StHeader>
        <StText>
          자세한 추천을 위해 <br /> 몇 가지 질문을 더 드릴게요.
        </StText>
      </StHeader>
    </StOnboarding>
  );
};

const StOnboarding = styled.div`
  width: 100%;
`;

const StHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

const StText = styled.p`
  color: white;
  text-align: center;
  font-size: 20px;
  font-family: '에스코어드림Regular';
  line-height: 35px;
`;

export default Onboarding;
