import styled from '@emotion/styled';
import React from 'react';

interface Props {
  text: string;
}

const Headline = ({ text }: Props) => {
  const firstText: string = text.split('/')[0];
  const secondText: string = text.split('/')[2];
  const keywordText: string = text.split('/')[1];

  return (
    <StHeadline>
      <StText>{firstText}</StText>
      <StKeyword>{keywordText}</StKeyword>
      <StText>{secondText}</StText>
    </StHeadline>
  );
};

const StHeadline = styled.div`
  width: 100%;
  text-align: center;
`;

const StText = styled.span`
  font-size: 20px;
`;

const StKeyword = styled.span`
  color: #456f87;
  font-size: 20px;
  font-weight: 600;
`;

export default Headline;
