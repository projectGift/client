import styled from '@emotion/styled';
import Headline from '../common/Headline';

const ReceiverInfo = (props: SetStateProps<boolean>) => {
  const { setNextValid } = props;

  return (
    <StRecieverInfo>
      <StHeader>
        <Headline text="누구에게 줄 선물인가요?" />
      </StHeader>
    </StRecieverInfo>
  );
};

const StRecieverInfo = styled.div`
  width: 100%;
`;

const StHeader = styled.div`
  width: 100%;
`;

export default ReceiverInfo;
