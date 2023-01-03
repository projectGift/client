import { atom } from 'recoil';

export const priceState = atom<Iprice>({
  key: 'personalityState',
  default: {
    start: 50000,
    end: 100000,
  },
});
