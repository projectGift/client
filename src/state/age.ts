import { atom } from 'recoil';

export const ageState = atom<number>({
  key: 'ageState',
  default: 0,
});
