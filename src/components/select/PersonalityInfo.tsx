import styled from '@emotion/styled';
import { selectedState } from '@src/state/selected';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import Headline from '../common/Headline';
import Option from '../common/Option';

const PersonalityInfo = () => {
  const { personality } = useRecoilValue(selectedState);
  const setSelectedState = useSetRecoilState(selectedState);
  const setPersonality = (personality: number) => {
    setSelectedState((selected) => {
      return { ...selected, personality };
    });
  };

  return (
    <StPersinalityInfo>
      <StHeader>
        <Headline text="그럼 /평소의 성격/은 어떤가요?" />
      </StHeader>
      <StContents>
        {OPTION.map(({ key, option }) => (
          <Option
            key={key}
            text={option}
            selected={personality === key}
            onClick={() => {
              setPersonality(key);
            }}
          />
        ))}
      </StContents>
    </StPersinalityInfo>
  );
};

const OPTION: IOption[] = [
  { key: 1, option: '외향적' },
  { key: 2, option: '내향적' },
  { key: 3, option: '몰라요' },
];

const StPersinalityInfo = styled.div`
  width: 100%;
`;

const StHeader = styled.div`
  width: 100%;
`;

const StContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px 0;
`;

export default PersonalityInfo;
