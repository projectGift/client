import styled from '@emotion/styled';
import { hobbyState } from '@src/state/hobby';
import { useRecoilState } from 'recoil';
import Headline from '../common/Headline';

const HobbyInfo = () => {
  const [hobby, setHobby] = useRecoilState(hobbyState);

  const selectHobby = (hobby: number) => {
    setHobby((hobbys) => {
      return [...hobbys, hobby];
    });
  };
  const deselectHobby = (hobby: number) => {
    setHobby((hobbys) => {
      return [...hobbys].filter((key) => key !== hobby);
    });
  };
  const handleSelect = (key: number): void => {
    hobby.includes(key) ? deselectHobby(key) : selectHobby(key);
  };
  return (
    <StHobbyInfo>
      <StHeader>
        <Headline text="상대방의 /관심사/를 골라주세요." />
      </StHeader>
      <StBoddy>
        <StBtnWrap>
          {HOBBY_INFO.map(({ key, option }) => (
            <StOption selected={hobby.includes(key)} onClick={() => handleSelect(key)}>
              {option}
            </StOption>
          ))}
        </StBtnWrap>
      </StBoddy>
    </StHobbyInfo>
  );
};

const StHobbyInfo = styled.div`
  width: 100%;
`;

const StHeader = styled.div`
  width: 100%;
`;

const StBoddy = styled.div`
  height: 50vh;
  padding: 30px 0;
  margin: 20px 0;
  overflow-y: scroll;
`;

const StBtnWrap = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const StOption = styled.button<{ selected: boolean }>`
  padding: 5px 25px;
  margin: 5px 5px;
  height: 50px;
  background-color: ${({ theme, selected }) => (selected ? theme.color.mainBlue : theme.color.lightGray)};
  color: ${({ theme, selected }) => (selected ? 'white' : theme.color.blackFont)};
  font-family: '에스코어드림Bold';
  font-size: 16px;
  border-radius: 50px;
  border: none;
  transition: all 0.1s;
`;

const HOBBY_INFO: IOption[] = [
  { key: 1, option: '헬스' },
  { key: 2, option: '홈 트레이닝' },
  { key: 3, option: '등산' },
  { key: 4, option: '골프' },
  { key: 5, option: '캠핑' },
  { key: 6, option: '수영' },
  { key: 7, option: '낚시' },
  { key: 8, option: '드라이브' },
  { key: 9, option: '여행' },
  { key: 10, option: '친환경' },
  { key: 11, option: '맛집' },
  { key: 12, option: '카페' },
  { key: 13, option: '요리' },
  { key: 14, option: '비건' },
  { key: 15, option: '건강' },
  { key: 16, option: '독서' },
  { key: 17, option: '종교' },
  { key: 18, option: '동물' },
  { key: 19, option: '장난감/수집' },
  { key: 20, option: '식물' },
  { key: 21, option: '공연' },
  { key: 22, option: '음악' },
  { key: 23, option: '전시회' },
  { key: 24, option: '공부' },
  { key: 25, option: '전자기기' },
  { key: 26, option: '인테리어' },
  { key: 27, option: '메이크업' },
  { key: 28, option: '패션' },
  { key: 29, option: '게임' },
  { key: 30, option: '영화' },
];

export default HobbyInfo;
