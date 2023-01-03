import { atom } from 'recoil';

export const personalityState = atom<number>({
  key: 'personalityState',
  default: 0,
});
