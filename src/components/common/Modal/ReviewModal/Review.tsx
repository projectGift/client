import React, { Dispatch, SetStateAction } from 'react';
import styled from '@emotion/styled';

interface IProps {
  options: number[];
  setOptions: Dispatch<SetStateAction<number[]>>;
  comment: string;
  setComment: Dispatch<SetStateAction<string>>;
  pageHandler: () => void;
}

const Review = ({ options, setOptions, comment, setComment, pageHandler }: IProps) => {
  const selectOption = (option: number) => {
    if (options.length > 4) return;

    setOptions((options) => {
      return [...options, option];
    });
  };

  const deselectOption = (option: number) => {
    setOptions((options) => {
      return [...options].filter((key) => key !== option);
    });
  };

  const handleSelect = (option: number): void => {
    options.includes(option) ? deselectOption(option) : selectOption(option);
  };

  const handleComment = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const isSelected = (key: number) => {
    return options.includes(key);
  };

  return (
    <StReview>
      <StHeader>
        개선했으면 하는 점을 <br /> 최대 5개까지 골라주세요
      </StHeader>
      <StBody>
        {OPTION.map(({ key, option }) => (
          <StOption
            key={key}
            onClick={() => {
              handleSelect(key);
            }}>
            <StOptionBtn isSelected={isSelected(key)} />
            <StOptionText>{option}</StOptionText>
          </StOption>
        ))}
        <StDevider />
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

const OPTION: IOption[] = [
  { key: 0, option: '선물이 더욱 다양했으면' },
  { key: 1, option: '추천받은 선물이 더 맘에 들었으면' },
  { key: 2, option: '선물을 추천한 이유나 설명이 있었으면' },
  { key: 3, option: '질문지가 더 구체적이었으면 (분위기 등)' },
  { key: 4, option: '느리거나 답답한 느낌을 줄였으면' },
  { key: 5, option: '앱 디자인이 더 귀여웠으면' },
  { key: 6, option: '앱 디자인이 더 고급스러웠으면' },
  { key: 7, option: '앱에서 선물을 바로 구매할 수 있으면' },
  { key: 8, option: '기타 (아래에 적어주세요)' },
];

const StReview = styled.div`
  width: 100%;
`;

const StHeader = styled.p`
  margin-bottom: 20px;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
`;

const StBody = styled.div`
  width: 100%;
`;

const StOption = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
  width: 100%;
  cursor: pointer;
`;

const StOptionBtn = styled.div<{ isSelected: boolean }>`
  margin-right: 10px;
  width: 20px;
  height: 20px;
  border-radius: 20px;
  border: ${({ theme, isSelected }) =>
    isSelected ? `5px solid ${theme.color.mainBlue}` : `5px solid ${theme.color.lightGray}`};
`;

const StOptionText = styled.p`
  padding-top: 2px;
  font-size: 15px;
`;

const StDevider = styled.hr`
  background: ${({ theme }) => theme.color.lightGray};
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
