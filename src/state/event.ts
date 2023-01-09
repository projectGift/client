import { atom } from 'recoil';

export const eventState = atom<number>({
  key: 'eventState',
  default: 0,
});
