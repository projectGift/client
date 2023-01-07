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
      <StBody>
        {RECEIVER_INFO.map((who) => (
          <StBtnWrap key={who.key}>
            <StBtn selected={receiver === who.key} onClick={() => setReceiver(who.key)} />
            <StLabel>{who.option}</StLabel>
          </StBtnWrap>
        ))}
      </StBody>
    </StRecieverInfo>
  );
};

const RECEIVER_INFO: IOption[] = [
  { key: 1, option: '나에게' },
  { key: 2, option: '다른사람에게' },
];
const StRecieverInfo = styled.div`
  width: 100%;
`;

const StHeader = styled.div`
  width: 100%;
`;

const StBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 25px 0;
`;

const StBtnWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StBtn = styled.button<{ selected: boolean }>`
  width: 130px;
  height: 130px;
  border-radius: 100%;
  border: none;
  background-color: ${({ theme, selected }) => (selected ? theme.color.mainBlue : theme.color.lightGray)};
  transition: all 0.1s;
`;

const StLabel = styled.span`
  margin-top: 16px;
  font-family: '에스코어드림Bold';
  font-size: 16px;
`;

export default ReceiverInfo;
