import { atom } from 'recoil';

export const priceState = atom<Iprice>({
  key: 'priceState',
  default: {
    start: 0,
    end: 300000,
  },
});
