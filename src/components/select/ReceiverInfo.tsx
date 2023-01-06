import styled from '@emotion/styled';
import { receiverState } from '@src/state/receiver';
import { useRecoilState } from 'recoil';
import Headline from '../common/Headline';

const ReceiverInfo = () => {
  const [receiver, setReceiver] = useRecoilState(receiverState);

  return (
    <StRecieverInfo>
      <StHeader>
        <Headline text="/누구/에게 줄 선물인가요?" />
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
