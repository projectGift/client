import { atom } from 'recoil';

export const timeState = atom<number>({
  key: 'timeState',
  default: 0,
});
