import { atom } from 'recoil';

export const seasonState = atom<number[]>({
  key: 'seasonState',
  default: [],
});
