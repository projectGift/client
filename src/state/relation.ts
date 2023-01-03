import { atom } from 'recoil';

export const relationState = atom<number>({
  key: 'relationState',
  default: 0,
});
