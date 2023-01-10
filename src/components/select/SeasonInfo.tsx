import styled from '@emotion/styled';
import { seasonState } from '@src/state/season';
import { useRecoilState } from 'recoil';
import Headline from '../common/Headline';
import Option from '../common/Option';

const SeasonInfo = () => {
  const [season, setSeason] = useRecoilState(seasonState);

  const selectSeason = (season: number) => {
    setSeason((seasons) => {
      return [...seasons, season];
    });
  };

  const deselectSeason = (season: number) => {
    setSeason((seasons) => {
      return [...seasons].filter((key) => key !== season);
    });
  };

  const handleSelect = (key: number): void => {
    if (key === 5 && !season.includes(key)) return setSeason([key]);

    if (season.includes(5) && season.length > 0) deselectSeason(5);

    season.includes(key) ? deselectSeason(key) : selectSeason(key);
  };

  return (
    <StSeasonInfo>
      <StHeader>
        <Headline text="/어떤 계절/에 선물 할껀가요? " />
      </StHeader>
      <StContents>
        <StBtnWrap>
          {OPTION.map(({ key, option }) => (
            <Option key={key} text={option} selected={season.includes(key)} onClick={() => handleSelect(key)} />
          ))}
        </StBtnWrap>
      </StContents>
    </StSeasonInfo>
  );
};

const OPTION: IOption[] = [
  { key: 1, option: '봄' },
  { key: 2, option: '여름' },
  { key: 3, option: '가을' },
  { key: 4, option: '겨울' },
  { key: 5, option: '아무때나' },
];

const StSeasonInfo = styled.div`
  width: 100%;
`;

const StHeader = styled.div`
  width: 100%;
`;

const StContents = styled.div`
  margin-top: 20px;
  width: 100%;
`;

const StBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export default SeasonInfo;
