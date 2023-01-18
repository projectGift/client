import { atom, selector } from 'recoil';
import { pageIdxState } from './pageIdx';

export const selectedState = atom<Selected>({
  key: 'selectedState',
  default: {
    receiver: 0,
    gender: 0,
    age: 0,
    mbti: 0,
    personality: 0,
    price: { start: 10000, end: 300000 },
    relation: 0,
    time: 0,
    hobby: [],
    season: [],
    event: 0,
  },
});

export const percentState = selector({
  key: 'percentState',
  get: ({ get }) => {
    const { price } = get(selectedState);
    return { start: 100 - price.end / 3000, end: price.start / 3000 };
  },
});

export const nextValidState = selector({
  key: 'nextValidState',
  get: ({ get }) => {
    const { receiver, gender, age, mbti, personality, relation, time, hobby, season } = get(selectedState);
    const pageIdx = get(pageIdxState);

    switch (pageIdx) {
      case 0:
        return receiver > 0;
      case 1:
        return gender > 0;
      case 2:
        return age > 0;
      case 3:
        return mbti > 0;
      case 4:
        return personality > 0;
      case 7:
        return relation > 0;
      case 8:
        return time > 0;
      case 9:
        return hobby.length > 0;
      case 10:
        return season.length > 0;
      default:
        return true;
    }
  },
});

const RELATION_STRING = [
  '남자친구',
  '여자친구',
  '커플',
  '부모님',
  '아빠',
  '엄마',
  '친구',
  '지인',
  '이웃',
  '장인어른',
  '장모님',
  '할아버지',
  '할머니',
  '남편',
  '아내',
  '아들',
  '딸',
  '선생님',
  '직장동료',
  '상사',
  '직원',
  '친척',
  '조카',
];

export const relationStringState = selector({
  key: 'relationStringState',
  get: ({ get }) => {
    const { relation } = get(selectedState);
    return RELATION_STRING[relation - 1];
  },
});
