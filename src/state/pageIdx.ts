import { atom } from 'recoil';

export const pageIdxState = atom<number>({
  key: 'pageIdxState',
  default: 0,
});
