import styled from '@emotion/styled';

const Onboarding = () => {
  return (
    <StOnboarding>
      <StHeader>
        <StLoading />
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

const StLoading = styled.div`
  --size: 35px;
  --first-block-clr: ${({ theme }) => theme.color.subBlue};
  --second-block-clr: white;
  position: relative;
  margin-bottom: 50px;
  width: 100px;
  height: 100px;

  ::after,
  ::before {
    position: absolute;
    top: 50%;
    left: 50%;
    width: var(--size);
    height: var(--size);
    background: var(--first-block-clr);
    border-radius: 50%;
    animation: up 2.4s cubic-bezier(0, 0, 0.24, 1.21) infinite;
    content: '';
  }

  ::after {
    top: calc(50% - var(--size));
    left: calc(50% - var(--size));
    background: var(--second-block-clr);
    animation: down 2.4s cubic-bezier(0, 0, 0.24, 1.21) infinite;
  }

  @keyframes down {
    0%,
    100% {
      transform: none;
    }

    25% {
      transform: translateX(100%);
    }

    50% {
      transform: translateX(100%) translateY(100%);
    }

    75% {
      transform: translateY(100%);
    }
  }

  @keyframes up {
    0%,
    100% {
      transform: none;
    }

    25% {
      transform: translateX(-100%);
    }

    50% {
      transform: translateX(-100%) translateY(-100%);
    }

    75% {
      transform: translateY(-100%);
    }
  }
`;

export default Onboarding;
