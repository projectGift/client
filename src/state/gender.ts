import { atom } from 'recoil';

export const genderState = atom<number>({
  key: 'genderState',
  default: 0,
});
