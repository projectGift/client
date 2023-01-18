import { atom } from 'recoil';

export const currentProductState = atom<CurrentProduct>({
  key: 'currentProductState',
  default: {
    productId: 0,
    url: 'https://smartstore.naver.com/patori/products/7111777409',
  },
});
