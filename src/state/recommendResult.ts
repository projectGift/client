import { atom } from 'recoil';

export const recommendResultState = atom<RecommendResult[]>({
  key: 'recommendResultState',
  default: [
    {
      id: 0,
      product_name: '',
      product_price: '',
      product_review_count: 0,
      product_url: '',
      thumbnail: '',
    },
    {
      id: 0,
      product_name: '',
      product_price: '',
      product_review_count: 0,
      product_url: '',
      thumbnail: '',
    },
    {
      id: 0,
      product_name: '',
      product_price: '',
      product_review_count: 0,
      product_url: '',
      thumbnail: '',
    },
  ],
});
