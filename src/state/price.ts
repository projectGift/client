import { atom, selector } from 'recoil';

export const priceState = atom<Iprice>({
  key: 'priceState',
  default: {
    start: 10000,
    end: 300000,
  },
});

export const percentState = selector({
  key: 'percentState',
  get: ({ get }) => {
    const price: Iprice = get(priceState);
    return { start: 100 - price.end / 3000, end: price.start / 3000 };
  },
});
