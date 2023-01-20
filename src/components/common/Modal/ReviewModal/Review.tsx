import React, { Dispatch, SetStateAction } from 'react';
import styled from '@emotion/styled';

interface IProps {
  survey: Survey;
  setSurvey: Dispatch<SetStateAction<Survey>>;
  pageHandler: () => void;
}

const Review = ({ survey, setSurvey, pageHandler }: IProps) => {
  const { recommend, improvements, comment } = survey;

  const selectRecommend = (option: number) => {
    setSurvey(() => {
      return { ...survey, recommend: option };
    });
  };

  const selectOption = (option: number) => {
    if (improvements.length > 4) return;

    setSurvey((survey) => {
      return { ...survey, improvements: [...improvements, option] };
    });
  };

  const deselectOption = (option: number) => {
    setSurvey((survey) => {
      return { ...survey, improvements: [...improvements].filter((key) => key !== option) };
    });
  };

  const handleSelect = (option: number): void => {
    improvements.includes(option) ? deselectOption(option) : selectOption(option);
  };

  const handleComment = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSurvey(() => {
      return { ...survey, comment: e.target.value };
    });
  };

  const isSelected = (key: number) => {
    return improvements.includes(key);
  };

  return (
    <StReview>
      <StHeader>
        만족도 평가를 남겨주시면 <br /> 저희 팀에게 큰 도움이 됩니다 :)
      </StHeader>
      <StBody>
        <StQuestion>
          이 앱을 친구나 주변인에게 <br />
          얼마나 추천하고 싶은가요?
        </StQuestion>
        <StRecommendBox>
          {RECOMMEND_OPTION.map(({ key, option }) => (
            <StRecommend
              key={key}
              onClick={() => {
                selectRecommend(key);
              }}>
              <StRecommendBtn isSelected={key === recommend} />
              <StRecommendText>{option}</StRecommendText>
            </StRecommend>
          ))}
        </StRecommendBox>
        <StDevider />
        <StQuestion>
          개선했으면 하는 점을 <br />
          최대 5개까지 골라주세요.
        </StQuestion>
        {IMPROVEMENT_OPTION.map(({ key, option }) => (
          <StImprovement
            key={key}
            onClick={() => {
              handleSelect(key);
            }}>
            <StImprovementBtn isSelected={isSelected(key)} />
            <StImprovementText>{option}</StImprovementText>
          </StImprovement>
        ))}
        <StComment
          name="comment"
          onChange={handleComment}
          value={comment}
          maxLength={1000}
          placeholder="저희 팀에게 전하실 피드백이나 개선 사항을 남겨주세요. 평가에 참여해주셔서 감사합니다."
        />
        <StLengthBox>
          <StGrayText onClick={pageHandler}>이 앱은 누가 만들었을까?</StGrayText>
          <StGrayText>{comment.length} / 1000자</StGrayText>
        </StLengthBox>
      </StBody>
    </StReview>
  );
};

const IMPROVEMENT_OPTION: IOption[] = [
  { key: 1, option: '선물이 더욱 다양했으면' },
  { key: 2, option: '추천받은 선물이 더 맘에 들었으면' },
  { key: 3, option: '선물을 추천한 이유나 설명이 있었으면' },
  { key: 4, option: '질문지가 더 구체적이었으면 (분위기 등)' },
  { key: 13, option: '질문지가 더 적었으면 (현재 11개)' },
  { key: 14, option: '글씨가 더 커졌으면' },
  { key: 5, option: '느리거나 답답한 느낌을 줄였으면' },
  { key: 6, option: '앱 디자인이 더 귀여웠으면' },
  { key: 7, option: '앱 디자인이 더 고급스러웠으면' },
  { key: 8, option: '앱에서 선물을 바로 구매할 수 있으면' },
  { key: 9, option: '기타 (아래에 적어주세요)' },
];

const RECOMMEND_OPTION: IOption[] = [
  { key: 10, option: '별로' },
  { key: 11, option: '재미삼아' },
  { key: 12, option: '매우 추천' },
];

const StReview = styled.div`
  width: 100%;
`;

const StHeader = styled.p`
  margin-bottom: 20px;
  color: ${({ theme }) => theme.color.grayFont};
  font-size: 14px;
  line-height: 23px;
  text-align: center;
`;

const StBody = styled.div`
  width: 100%;
`;

const StQuestion = styled.p`
  font-size: 18px;
  line-height: 23px;
  text-align: center;
`;

const StRecommendBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const StImprovement = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
  width: 100%;
  cursor: pointer;
`;

const StRecommend = styled(StImprovement)`
  margin: 0px;
  margin-top: 20px;
  justify-content: center;
  flex-direction: column;
`;

const StRecommendBtn = styled.div<{ isSelected: boolean }>`
  margin-bottom: 5px;
  width: 20px;
  height: 20px;
  border-radius: 20px;
  border: ${({ theme, isSelected }) =>
    isSelected ? `5px solid ${theme.color.mainBlue}` : `5px solid ${theme.color.lightGray}`};
`;

const StRecommendText = styled.p`
  padding-top: 2px;
  font-size: 15px;
`;

const StImprovementBtn = styled(StRecommendBtn)`
  margin-bottom: 0px;
  margin-right: 10px;
`;

const StImprovementText = styled(StRecommendText)``;

const StDevider = styled.hr`
  margin: 20px 0;
  border: ${({ theme }) => `0.7px solid ${theme.color.lightGray}`};
`;

const StComment = styled.textarea`
  margin-top: 20px;
  padding: 15px;
  width: 100%;
  height: 200px;
  background: ${({ theme }) => theme.color.lightGray};
  border: none;
  border-radius: 5px;
  resize: none;
  line-height: 23px;
  word-spacing: -2.3px;
`;

const StLengthBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
  width: 100%;
`;

const StGrayText = styled.p`
  color: ${({ theme }) => theme.color.grayFont};
  font-size: 11px;
`;

export default Review;
