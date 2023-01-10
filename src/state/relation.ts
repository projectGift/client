import { atom, selector } from 'recoil';

export const relationState = atom<number>({
  key: 'relationState',
  default: 0,
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
     const relation = get(relationState);
     return RELATION_STRING[relation - 1];
   },
 });
