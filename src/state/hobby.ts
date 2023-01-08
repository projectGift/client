import { atom } from 'recoil';

export const hobbyState = atom<number[]>({
  key: 'hobbyState',
  default: [],
});
