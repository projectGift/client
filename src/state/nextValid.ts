import { selector } from 'recoil';
import { selectedState } from './selected';
import { currentPageState } from './currentPage';

export const nextValidState = selector({
  key: 'nextValidState',
  get: ({ get }) => {
    const { receiver, gender, age, mbti, personality, relation, time, hobby, season } = get(selectedState);
    const currentPage = get(currentPageState);

    switch (currentPage) {
      case 'receiverInfo':
        return receiver > 0;
      case 'genderInfo':
        return gender > 0;
      case 'ageInfo':
        return age > 0;
      case 'mbtiInfo':
        return mbti > 0;
      case 'personalityInfo':
        return personality > 0;
      case 'relationInfo':
        return relation > 0;
      case 'timeInfo':
        return time > 0;
      case 'hobbyInfo':
        return hobby.length > 0;
      case 'seasonInfo':
        return season.length > 0;
      default:
        return true;
    }
  },
});
