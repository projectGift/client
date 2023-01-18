import styled from '@emotion/styled';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import Headline from '../common/Headline';
import 나에게 from 'public/assets/icons/나에게.png';
import 다른사람에게 from 'public/assets/icons/다른사람에게.png';
import Image from 'next/image';
import { selectedState } from '@src/state/selected';

const ReceiverInfo = () => {
  const { receiver } = useRecoilValue(selectedState);
  const setSelectedState = useSetRecoilState(selectedState);
  const setReceiver = (receiver: number) => {
    setSelectedState((selected) => {
      return { ...selected, receiver };
    });
  };
  return (
    <StRecieverInfo>
      <StHeader>
        <Headline text="/누구/에게 줄 선물인가요?" />
      </StHeader>
      <StBody>
        {RECEIVER_INFO.map(({ key, option, image }) => (
          <StBtnWrap key={key}>
            <StBtn selected={receiver === key} onClick={() => setReceiver(key)}>
              <Image src={image} alt={option} height={50} />
            </StBtn>
            <StLabel>{option}</StLabel>
          </StBtnWrap>
        ))}
      </StBody>
    </StRecieverInfo>
  );
};

interface Receiver extends IOption {
  image: StaticImageData;
}

const RECEIVER_INFO: Receiver[] = [
  { key: 1, option: '나에게', image: 나에게 },
  { key: 2, option: '다른사람에게', image: 다른사람에게 },
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
  display: flex;
  justify-content: center;
  align-items: center;
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
