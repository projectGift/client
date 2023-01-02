import styled from '@emotion/styled';
import Headline from '../common/Headline';

const DetailInfo = (props: SetStateProps<boolean>) => {
  const { setNextValid } = props;
  return (
    <StDetailInfo>
      <StHeader>
        <Headline text="상대방을 더 자세하게 알려주세요." />
      </StHeader>
    </StDetailInfo>
  );
};

const StDetailInfo = styled.div`
  width: 100%;
`;

const StHeader = styled.div`
  width: 100%;
`;

export default DetailInfo;
