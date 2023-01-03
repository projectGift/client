import { atom } from 'recoil';

export const mbtiState = atom<number>({
  key: 'mbtiState',
  default: 0,
});
