import { selector } from 'recoil';
import { pageIdxState } from './pageIdx';
import { genderState } from './gender';
import { ageState } from './age';
import { mbtiState } from './mbti';
import { personalityState } from './presonality';
import { priceState } from './price';
import { relationState } from './relation';
import { receiverState } from './receiver';

export const nextValidState = selector({
  key: 'nextValidState',
  get: ({ get }) => {
    const pageIdx = get(pageIdxState);
    const receiver = get(receiverState);
    const gender = get(genderState);
    const age = get(ageState);
    const mbti = get(mbtiState);
    const personality = get(personalityState);
    const price = get(priceState);

    switch (pageIdx) {
      case 0:
        return receiver > 0;
      // case 1:
      //   return gender > 0;
      // case 2:
      //   return age > 0;
      // case 3:
      //   return mbti > 0;
      // case 4:
      //   return personality > 0;
      default:
        return true;
    }
  },
});
// Todo : 페이지 확정되면 case 정리 / 유지보수에 더 좋은 방법 생각해보기
