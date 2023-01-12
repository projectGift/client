import { atom } from 'recoil';

export const evaluationToastState = atom<boolean>({
  key: 'evaluationToastState',
  default: false,
});
